<template>
  <div id="trabalheconosco">
    <layout>
      <section-two/>
      <section-three/>
      <section-four />
    </layout>
  </div>
</template>

<style scoped lang="scss">

</style>

<script>
import layout from "@/components/Layout.vue"
import sectionTwo from "@/components/trabalhe-conosco/sectiontwo.vue"
import sectionThree from "@/components/trabalhe-conosco/sectionthree.vue"
import sectionFour from "@/components/trabalhe-conosco/sectionfour.vue"

export default {
  name: 'Home',
  components: {
    layout,sectionTwo, sectionThree, sectionFour
    
  },
}
</script>
