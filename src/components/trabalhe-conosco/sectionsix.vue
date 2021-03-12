<!-- CONFIG. HTML -->
<template>
    <div class="sectionNossaHistoria">
        <v-container class="container-NossaHistoria">
            <div class="Titulo mb-5">
                <underscore linecolor="#FCA311"> Nossa Historia </underscore>
            </div>
            <v-row>
                <v-col col="" xs="12" sm="12" lg="12">
                    <v-img src="https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" 
                           alt="Nossa Historia" Title="Nossa Historia"
                           class="mb-10">
                        
                    </v-img>
                </v-col>
            </v-row>
        </v-container>


    </div>
</template>















<!-- CONFIG. SCSS -->
<style lang="scss">
    .sectionNossaHistoria{
        display: flex;
        flex-flow: row wrap;
        justify-content:center;
        align-items: center;
        
        .container-NossaHistoria{
            .Titulo{
                display: flex;
                flex-flow: row  wrap;
                justify-content: flex-end;

            }
        }


    }
</style>
















<!-- CONFIG. JAVA SCRIPT -->
<script>
import underscore from "@/components/text/underscore.vue"
export default {
    components:{ underscore }
}
</script>

