import { RouteRecordRaw } from "vue-router";
import { ExerciseTree, ExerciseData } from "@/@types/exerciseTree";
import { createExerciseStore } from "@/stores/createExerciseStore";
import { createTreeStore } from "@/stores/createTreeStore";

type ExerciseTreeRouterOptions = {
  key: string;
  path: string;
  name: string;
  exercise: ExerciseTree;
  store: ReturnType<typeof createTreeStore>;
  storeKey: string;
};

type RawRouteOptions = Partial<RouteRecordRaw> &
  Pick<RouteRecordRaw, "path" | "name" | "component">;

type TreeRouteProps = {
  treeKey: ExerciseTreeRouterOptions["key"];
  treeStore: ExerciseTreeRouterOptions["store"];
};

export type TreeRoute = RawRouteOptions & {
  props: TreeRouteProps & { exercisePaths: ExerciseTreeCollection[] };
};

type ExerciseTreeRouteProps = TreeRouteProps & {
  treePath: ExerciseTreeRouterOptions["path"];
  exerciseKey: string;
  exerciseStore: ReturnType<typeof createExerciseStore>;
};

export type ExerciseTreeRoute = RawRouteOptions & {
  props: ExerciseTreeRouteProps;
};

export type ExerciseTreeCollection = {
  key: string;
  route: ExerciseTreeRoute;
};

export class ExerciseTreeRouter {
  private readonly treePath: string;

  private exerciseRouteCollection: ExerciseTreeCollection[] = [];

  constructor(private options: ExerciseTreeRouterOptions) {
    this.treePath = options.path;
  }

  public register(
    route: { key: string; path: string },
    exercise: ExerciseData
  ): void {
    this.exerciseRouteCollection.push({
      key: route.key,
      route: this.createExerciseRoute(route, exercise)
    });
  }

  public exportRoutes(): RouteRecordRaw[] {
    return [
      this.createTreeRoute(),
      ...this.exerciseRouteCollection.map(collection => collection.route)
    ] as RouteRecordRaw[];
  }

  private createTreeRoute(): TreeRoute {
    return {
      path: this.treePath,
      name: `App/${this.options.name}`,
      props: {
        treeKey: this.options.key,
        treeStore: this.options.store,
        exercisePaths: this.exerciseRouteCollection
      },
      component: () =>
        import(
          /* webpackChunkName: "app-tree" */ "@/views/app/ExerciseTree.vue"
        )
    };
  }

  private createExerciseRoute(
    route: { key: string; path: string },
    exercise: ExerciseData
  ): ExerciseTreeRoute {
    return {
      path: route.path,
      name: `App/${this.options.name}/${exercise.name}`,
      props: {
        treeKey: this.options.key,
        treePath: this.treePath,
        treeStore: this.options.store,
        exerciseKey: route.key,
        exerciseStore: createExerciseStore({
          id: `${this.options.storeKey}:${route.key}`,
          defaultState: { value: 0 },
          exercise: this.options.exercise,
          ...exercise
        })
      },
      component: () =>
        import(
          /* webpackChunkName: "app-tree-exercise" */ "@/views/app/Exercise.vue"
        )
    };
  }
}
