import { RouteRecordRaw } from "vue-router";
import { APP_PATH } from "@/router/paths";
import { createExperienceStore } from "@/stores/createExperienceStore";
import { ExerciseRoute } from "@/@types/exerciseRoute";

type ExerciseTreeRouterOptions = {
  path: string;
  name: string;
  store: ReturnType<typeof createExperienceStore>;
};

type ExerciseTreeRoute = {
  key: ExerciseRoute["key"];
  route: RouteRecordRaw;
};

type ExerciseTreeRouterGeneratedPaths = {
  [index: string]: ExerciseRoute["key"];
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

  public register(route: ExerciseRoute): void {
    this.exerciseRouteCollection.push({
      key: route.key,
      route: this.createExerciseRoute(route)
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
        store: this.options.store,
        exercisePaths: this.exerciseRouteCollection
      },
      component: () =>
        import(
          /* webpackChunkName: "app-tree" */ "@/views/app/ExerciseTree.vue"
        )
    };
  }

  private createExerciseRoute(route: ExerciseRoute): RouteRecordRaw {
    return {
      path: this.treePath + route.path,
      name: `App/${this.options.name}/${route.name}`,
      meta: {
        treePath: this.treePath,
        treeStore: this.options.store
      },
      component: () =>
        import(
          /* webpackChunkName: "app-tree-exercise" */ "@/views/app/Exercise.vue"
        )
    };
  }
}
