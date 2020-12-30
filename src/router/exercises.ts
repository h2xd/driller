import { RouteRecordRaw } from "vue-router";
import { APP_PATH } from "@/router/paths";

type ExerciseGroupRouteFactory = {
  groupPath: { home: string };
  createGroupRoute: (paths: Record<string, string>) => RouteRecordRaw;
  createPath: (exersicePath: string) => string;
  createRoute: (exersicePath: string, exersiceName: string) => RouteRecordRaw;
};

export function createExersiceGroupRouteFactory(
  groupPath: string,
  groupName: string
): ExerciseGroupRouteFactory {
  const generatedGroupPath = createPath(groupPath);
  const generateGroupPath = (path: string) => createPath(groupPath + path);

  const generateExersicePath = (exersicePath: string) =>
    generateGroupPath(exersicePath);

  return {
    groupPath: { home: generatedGroupPath },
    createGroupRoute: groupPaths =>
      createGroupRoute(generatedGroupPath, groupName, groupPaths),
    createPath: generateExersicePath,
    createRoute: (exersicePath, exersiceName) =>
      createExersiceRoute({
        path: exersicePath,
        name: `${groupName}/${exersiceName}`,
        groupPath: generatedGroupPath
      })
  };
}

function createGroupRoute(
  path: string,
  name: string,
  groupPaths: Record<string, string>
): RouteRecordRaw {
  return {
    path,
    name: `App/${name}`,
    meta: {
      exercises: groupPaths
    },
    component: () =>
      import(/* webpackChunkName: "app-group" */ "@/views/app/Group.vue")
  };
}

type CreateExersiceRouteOptions = {
  path: string;
  name: string;
  groupPath: string;
};

function createExersiceRoute({
  path,
  name,
  groupPath
}: CreateExersiceRouteOptions): RouteRecordRaw {
  return {
    path,
    name: `App/${name}`,
    meta: {
      groupPath
    },
    component: () =>
      import(
        /* webpackChunkName: "app-group-exercise" */ "@/views/app/Exercise.vue"
      )
  };
}

function createPath(path: string) {
  return APP_PATH + path;
}
