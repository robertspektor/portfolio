<script setup lang="ts">
import Project from "@/components/Project.vue";
import { projectsStore } from "@/stores/projects";
import { useRoute } from "vue-router";
import { getTagByRoute } from "@/composable/useRouteParamHelper";

const tag = getTagByRoute(useRoute());

const store = projectsStore();
store.setTag(tag);

const projects = store.getByRoute;
</script>

<template>
  <div>
    <div>
      <Project
        v-bind:key="project.id"
        v-for="project of projects"
        :title="project.title"
        :icon="project.icon"
        :link="project.link"
        :description="project.description"
      ></Project>
    </div>
  </div>
</template>
