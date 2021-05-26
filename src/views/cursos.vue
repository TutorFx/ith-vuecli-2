<template>
  <div class="cursos">
    <layout>
      <slider />
      
      <index />
      
      <parceiros />
      <section-two />
    </layout>
  </div>
</template>

<style scoped lang="scss">
  .slider-container{
    background-color: #000;
  }
</style>

<script>
import layout from "@/components/Layout.vue"
import slider from "@/components/home/slider"

import sectionTwo from "@/components/home/section2.vue"

import index from "@/components/cursos/index.vue"

import parceiros from "@/components/parceiros.vue"

export default {
  name: 'Home',
  components: {
    layout, slider, sectionTwo, parceiros, index
  },
}
</script>
