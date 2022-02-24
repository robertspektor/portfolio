<template>
  <div @mouseleave="mouseleave" class="relative flex flex-wrap">
    <div
      @mouseenter="mouseenter"
      class="w-full z-40 m-8 duration-300"
      :class="{ 'translate-x-14': isHovering }"
    >
      <div class="text-white p-6 duration-300 rounded-xl bg-gray">
        <div class="flex items-center">
          <img :src="file" class="h-6 w-6 mr-4" />
          <div>
            <h2 class="text-lg font-medium title-font mb-2 mt-2">{{ title }}</h2>
          </div>
        </div>
        <div class="w-full">
          <p class="font-thin text-slate-300">{{ description }}</p>
        </div>
      </div>
    </div>

    <a :href=link target="_blank" class="absolute z-0 left-10 top-10 w-10 h-10 inline-flex items-center justify-center rounded-full  mb-4">
      <img src="/github.svg" class="h-6 w-6"  alt=""/>
    </a>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isHovering = ref(false);

const props = defineProps({
  title: String,
  description: String,
  icon: String,
  link: String,
});

function mouseenter() {
  isHovering.value = true;
}

function mouseleave() {
  isHovering.value = false;
}

const file = computed(() => {
  return "/" + props.icon + ".svg";
});
</script>
