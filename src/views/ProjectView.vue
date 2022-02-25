<script setup lang="ts">
import Project from "@/components/Project.vue";
import { useGithub } from "@/stores/github";
import { ref, onMounted } from 'vue'

const store = useGithub();
let projects = null;

onMounted(() => {
  store.fetchRepositories();
  projects = store.repositories;
});
</script>

<template>
  <div>
    <div class="">
      <div class="relative flex flex-wrap" v-if="store.fetching">
        <div class="w-full z-40 m-8 duration-300">
          <div class="text-white p-6 duration-300 rounded-xl bg-gray animate-pulse">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Project
        v-bind:key="project.id"
        v-for="project of store.repositories"
        :title="project.name"
        :icon="project.language"
        :link="project.html_url"
        :description="project.description"
      ></Project>
    </div>
  </div>
</template>
