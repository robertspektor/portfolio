import { createRouter, createWebHistory } from "vue-router";
import ProjectView from "../views/ProjectView.vue";
import SkillView from "../views/SkillView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ProjectView,
    },
    {
      path: "/projects/:tag",
      name: "project",
      component: ProjectView,
    },
    {
      path: "/skills",
      name: "skills",
      component: SkillView,
    },
  ],
});

export default router;
