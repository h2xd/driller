import { RouteRecordRaw } from "vue-router";
import { APP_PATH } from "@/router/paths";
import { createExperienceStore } from "@/stores/createExperienceStore";
import { Exercise } from "@/@types/exercise";

type ExerciseTreeRouterOptions = {
  key: string;
  path: string;
  name: string;
  store: ReturnType<typeof createExperienceStore>;
};

type ExerciseTreeRouterGeneratedPaths = {
  [index: string]: Exercise["key"];
  home: string;
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
  exerciseKey: Exercise["key"];
};

export type ExerciseTreeRoute = RawRouteOptions & {
  props: ExerciseTreeRouteProps;
};

export type ExerciseTreeCollection = {
  key: Exercise["key"];
  route: ExerciseTreeRoute;
};

export class ExerciseTreeRouter {
  private readonly treePath: string;

  private exerciseRouteCollection: ExerciseTreeCollection[] = [];

  constructor(private options: ExerciseTreeRouterOptions) {
    this.treePath = ExerciseTreeRouter.createAppPrependedPath(options.path);
  }

  static createAppPrependedPath(path: string): string {
    return APP_PATH + path;
  }

  public register(exercise: Exercise): void {
    this.exerciseRouteCollection.push({
      key: exercise.key,
      route: this.createExerciseRoute(exercise)
    });
  }

  public exportPaths(): ExerciseTreeRouterGeneratedPaths {
    const generatedPathRecords: ExerciseTreeRouterGeneratedPaths = {
      home: this.treePath
    };

    this.exerciseRouteCollection.forEach(collection => {
      generatedPathRecords[collection.key] = collection.route.path;
    });

    return generatedPathRecords;
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

  private createExerciseRoute(route: Exercise): ExerciseTreeRoute {
    return {
      path: this.treePath + route.path,
      name: `App/${this.options.name}/${route.name}`,
      props: {
        treeKey: this.options.key,
        treePath: this.treePath,
        treeStore: this.options.store,
        exerciseKey: route.key
      },
      component: () =>
        import(
          /* webpackChunkName: "app-tree-exercise" */ "@/views/app/Exercise.vue"
        )
    };
  }
}
