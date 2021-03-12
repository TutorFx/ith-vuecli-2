<!-- CONFIG. HTML -->
<template>
    <div class="sectionNossoTime">
        <v-container class="container-NossoTime">
            <underscore linecolor="#FCA311"> Nosso Time </underscore>

            <v-row>
                <v-col col="" xs="12" sm="12" md="12" lg="12" class="mt-5">
                    <v-img  src="https://www.hypeness.com.br/1/2018/12/imagens-surreais.jpg"
                            alt="Nosso Time"
                            title="Nosso Time"
                            class="mb-10">

                    </v-img>
                </v-col>
            </v-row>


        </v-container>
    </div>
</template>















<!-- CONFIG. SCSS -->
<style lang="scss">
    .sectionNossoTime{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;

    }

</style>
















<!-- CONFIG. JAVA SCRIPT -->
<script>
import underscore from "@/components/text/underscore.vue"
export default {
    components:{ underscore }
}
</script>

