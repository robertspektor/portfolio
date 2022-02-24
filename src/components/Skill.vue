<template>
  <a :href=link class="z-auto duration-700 hover:-translate-y-3" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div v-if="infoBodyDisplay" class="absolute  w-32 p-2  text-sm leading-tight text-center text-white transform  -translate-y-5 -translate-x-10 bg-black rounded-lg shadow-lg">
      {{ infoBoxTitle }}
    </div>
    <img :src="file" class="z-0 object-contain h-14 pr-3 mb-3 mt-4" alt="" />
  </a>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  title: String,
  icon: String,
});

const infoBoxTitle = ref("true");
const infoBodyDisplay = ref(false);

const file = computed(() => {
  return "/" + props.icon + ".svg";
});

const link = computed(() => {
  return "/projects/" + props.icon;
});

function mouseenter() {
  infoBoxTitle.value = props.title;
  infoBodyDisplay.value = true;
}

function mouseleave() {
  infoBodyDisplay.value = false;
}
</script>
