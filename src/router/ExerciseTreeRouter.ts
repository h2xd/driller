import { RouteRecordRaw } from "vue-router";

import { ExerciseTree, Exercise } from "@/@types/exercise";
import { getExercisePath, getExerciseTreePath } from "@/utils/extractPath";

type ExerciseTreeRouterOptions = {
  exerciseTree: ExerciseTree;
  exercises: Exercise[];
};

export class ExerciseTreeRouter {
  private readonly exerciseRouteCollection: RouteRecordRaw[];

  constructor(private options: ExerciseTreeRouterOptions) {
    this.exerciseRouteCollection = options.exercises.map(
      this.createExerciseRoute.bind(this)
    );
  }

  public exportRoutes(): RouteRecordRaw[] {
    return [this.createTreeRoute(), ...this.exerciseRouteCollection];
  }

  public exportPaths(): Record<Exercise["id"], Exercise["path"]> {
    const paths: Record<Exercise["id"], Exercise["path"]> = {};

    paths["home"] = getExerciseTreePath(this.options.exerciseTree);

    this.options.exercises.forEach(exercise => {
      paths[exercise.id] = getExercisePath(exercise);
    });

    return paths;
  }

  private createTreeRoute(): RouteRecordRaw {
    return {
      path: getExerciseTreePath(this.options.exerciseTree),
      name: `app/${this.options.exerciseTree.id}`,
      props: {
        tree: this.options.exerciseTree,
        exercises: [...this.options.exercises]
      },
      component: () =>
        import(
          /* webpackChunkName: "app-tree" */ "@/views/app/ExerciseTree.vue"
        )
    };
  }

  private createExerciseRoute(exercise: Exercise): RouteRecordRaw {
    return {
      path: getExercisePath(exercise),
      name: `app/${this.options.exerciseTree.id}/${exercise.id}`,
      props: {
        tree: this.options.exerciseTree,
        exercise
      },
      component: () =>
        import(
          /* webpackChunkName: "app-tree-exercise" */ "@/views/app/Exercise.vue"
        )
    };
  }
}
