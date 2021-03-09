<template>
  <div class="home">
    <layout>
      <slider />
      <section-one />
      <section-two />
      <section-three />
      <section-four />
      <section-five />
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
import sectionOne from "@/components/home/section1.vue"
import sectionTwo from "@/components/home/section2.vue"
import sectionThree from "@/components/home/section3.vue"
import sectionFour from "@/components/home/section4.vue"
import sectionFive from "@/components/home/section5.vue"

export default {
  name: 'Home',
  components: {
    layout, slider, sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive
    
  },
}
</script>
