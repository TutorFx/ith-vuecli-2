<template>
  <div id="trabalheconosco">
    <layout>
      <section-two />
      <section-three />
      <section-four />
      <section-five />
      <section-six />
      <section-seven />
    </layout>
  </div>
</template>

<style scoped lang="scss">
@import '~vuetify/src/styles/styles.sass';
@media only screen and (min-width: map-get($grid-breakpoints, 'xs')) {

}
@media only screen and (min-width: map-get($grid-breakpoints, 'md')) {

}
</style>

<script>
import layout from "@/components/Layout.vue"
import sectionTwo from "@/components/trabalhe-conosco/sectiontwo.vue"
import sectionThree from "@/components/trabalhe-conosco/sectionthree.vue"
import sectionFour from "@/components/trabalhe-conosco/sectionfour.vue"
import sectionFive from "@/components/trabalhe-conosco/sectionfive.vue"
import sectionSix from "@/components/trabalhe-conosco/sectionsix.vue"
import sectionSeven from "@/components/trabalhe-conosco/sectionseven.vue"

export default {
  name: 'Home',
  components: {
    layout, sectionTwo, sectionThree, sectionFour, sectionFive, sectionSix, sectionSeven
    
  },
}
</script>
