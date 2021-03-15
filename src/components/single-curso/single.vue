<template>
    <div>
        <section-one />
        <section-two :curso="curso" />
        <section-four />
        <section-three />
    </div>
</template>

<script>
import sectionOne from "@/components/single/section-one.vue"
import sectionTwo from "@/components/single/section-two.vue"
import sectionThree from "@/components/single/section-three.vue"
import sectionFour from "@/components/single/section-four.vue"

export default {
    props: { curso: Object },
    components: { sectionOne, sectionTwo, sectionThree, sectionFour },
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
