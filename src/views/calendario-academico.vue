<template>
  <div class="calendario-academico">
    <layout>
      <slider />
      <section-four />
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
import sectionFour from "@/components/trabalhe-conosco/sectionfour.vue"


export default {
  name: 'calendario-academico',
  components: {
    layout, slider, sectionFour
    
  },
}
</script>
