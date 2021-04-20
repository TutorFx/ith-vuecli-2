<template>
    <div class="exibicao">
        <v-container>
            <underscore class="mb-10" linecolor="#FCA311">FILTRE DO SEU JEITO</underscore>
            <filtro />
            <div>
                <query type="list" />
            </div>
        </v-container>
    </div>
</template>

<script>
import underscore from "@/components/text/underscore.vue"
import query from "@/components/Query/Slider/query.vue"
import filtro from "@/components/Query/filtro.vue"
export default {
    components: { underscore, query, filtro }
}
</script>

<style>

</style>