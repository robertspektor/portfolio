import type { RouteLocationNormalizedLoaded } from "vue-router";

export function getTagByRoute(route: RouteLocationNormalizedLoaded): string {
  return String(route.params.tag);
}
