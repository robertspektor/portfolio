<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Skill from "@/components/Skill.vue";
</script>

<template>
  <div class="relative">
    <div class="bg-gray w-full invisible lg:visible lg:w-1/2 lg:min-h-screen text-white p-32 fixed">
      <div class="container">
        <h1 class="text-7xl mb-6">Robert<br/>Spektor</h1>
        <p class="pt-1 text-2xl">Full-Stack Software-Developer</p>
        <p class="mt-6 font-light text-lg">Hello 👋, I'm Robert, a software developer based in Berlin Germany.</p>
        <h2 class="text-4xl mt-12 mb-6">Core Stack</h2>

        <div class="grid grid-cols-8 gap-4 relative">
          <Skill icon="vue" title="VueJS"></Skill>
          <Skill icon="laravel" title="Laravel"></Skill>
          <Skill icon="mysql" title="MySQL"></Skill>
          <Skill icon="traefik" title="Traefik"></Skill>
        </div>

        <a href="/skills" class="underline">More Skills</a>
      </div>
    </div>
    <div class="w-full lg:w-1/2 bg-black h-100 overflow-auto ml-auto lg:min-h-screen">
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>
