<script setup lang="ts">
import Skill from "@/components/Skill.vue";

</script>

<template>
  <div class="relative">
    <div class="bg-dark w-full invisible lg:visible lg:w-1/2 lg:min-h-screen text-white fixed pt-8">
      <a href="/" class="underline ml-8">Back</a>
      <h2 class="text-2xl mt-4 mb-4 ml-8">Development</h2>
      <div class="bg-gray p-4 rounded-xl m-8">
        <div class="grid grid-cols-8 gap-4 relative ">
          <Skill icon="vue" title="VueJS" client:load></Skill>
          <Skill icon="php" title="PHP" client:load></Skill>
          <Skill icon="java" title="Java" client:load></Skill>
          <Skill icon="javascript" title="JavaScript" client:load></Skill>
        </div>
      </div>
      <h2 class="text-2xl mt-8">Tools</h2>
      <div class="grid grid-cols-8 gap-4 relative">
        <Skill icon="phpstorm" title="VueJS" client:load></Skill>
        <Skill icon="datagrid" title="PHP" client:load></Skill>
        <Skill icon="intellij-idea" title="Java" client:load></Skill>
      </div>
    </div>
    <div class="w-full lg:w-1/2 bg-black h-100 overflow-auto ml-auto lg:min-h-screen">
    </div>
  </div>
</template>
