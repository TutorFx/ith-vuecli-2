<template>
    <layout>
        <div id="curso-single">
            <single :curso="curso" />
        </div>
    </layout>
</template>

<script>
import layout from "@/components/Layout.vue"
import single from "@/components/single-curso/single.vue"
export default {
    created(){
        this.getCurso(this.$route.params.slug)
    },
    methods: {
        getCurso(slug){
            this.$store.commit("getApiSingle", slug);
        }
    },
    data(){
        return{
            curso: {},
        }
    },
    watch: {
        '$store.state.api.cursoLoaded': function(){
            console.log("atualizacoes")
            if(this.$store.state.api.cursoLoaded == true){
                this.curso = this.$store.state.api.curso[this.$route.params.slug]
                console.log(this.$store.state.api.curso[this.$route.params.slug])
            }
        },
        '$route.params.slug': function() {
            this.getCurso(this.$route.params.slug)
        }
    },
    components: { layout, single }
}
</script>

<style>

</style>