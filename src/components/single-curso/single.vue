<template>
    <div>
        <section-one />
        <section-two :curso="curso" />
        <section-four :curso="curso" />
        <section-three />
        <section-five :curso="curso" />
        <section-six />
    </div>
</template>

<script>
import sectionOne from "@/components/single/section-one.vue"
import sectionTwo from "@/components/single/section-two.vue"
import sectionThree from "@/components/single/section-three.vue"
import sectionFour from "@/components/single/section-four.vue"
import sectionFive from "@/components/single/section-five.vue"
import sectionSix from "@/components/single/section-six.vue"

export default {
    props: { curso: Object },
    components: { sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive, sectionSix
    },
    
    mounted() {
        console.log(this.$store.state.api.curso[this.$route.params.slug])
    },
    
    watch: {
        '$store.state.api.curso': function() {
            console.log(this.$store.state.api.curso[this.$route.params.slug])
        }
    }
}
</script>

<style>

</style>
