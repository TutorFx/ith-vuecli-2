<template>
    <div :class="storage.contraste ? 'contraste':''">
        <section-one />
        <section-two :curso="curso" />
        <caixas-video :curso="curso" />
        <section-three />
        <lista :curso="curso" />
        <como-funciona :curso="curso" />
        <perguntas-e-faq :curso="curso" />
        <caixas :curso="curso" />
        <query type="slide" class="py-16" />
    </div>
</template>

<script>
import sectionOne from "@/components/single/section-one.vue"
import sectionTwo from "@/components/single/section-two.vue"
import sectionThree from "@/components/single/transforme-sua-vida"
import caixas from "@/components/single/caixas.vue"
import caixasVideo from "@/components/single/caixasevideo.vue"
import lista from "@/components/single/lista.vue"
import perguntasEFaq from "@/components/single/perguntas-e-faq.vue"
import comoFunciona from "@/components/single/como-funciona.vue"
import query from "@/components/Query/Slider/query.vue"

export default {
    props: { curso: Object },
    components: { sectionOne, sectionTwo, sectionThree, caixas, lista, caixasVideo, perguntasEFaq, comoFunciona, query
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
