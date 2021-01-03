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

type ExerciseTreeRoute = {
  key: Exercise["key"];
  route: RouteRecordRaw;
};

type ExerciseTreeRouterGeneratedPaths = {
  [index: string]: Exercise["key"];
  home: string;
};

export class ExerciseTreeRouter {
  private readonly treePath: string;

  private exerciseRouteCollection: ExerciseTreeRoute[] = [];

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
    ];
  }

  private createTreeRoute() {
    return {
      path: this.treePath,
      name: `App/${this.options.name}`,
      meta: {
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

  private createExerciseRoute(route: Exercise): RouteRecordRaw {
    return {
      path: this.treePath + route.path,
      name: `App/${this.options.name}/${route.name}`,
      meta: {
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
