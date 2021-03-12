<!-- CONFIG. HTML -->
<template>
    <div class="sectionPlanejamentoEstrategico">
        <v-container class="container-PlanejamentoEstrategico">
            <underscore linecolor="#FCA311"> Planejamento Estratégico </underscore>

            <v-row> <!-- Container- row -->
                <v-col v-if=" !$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs "  
                       col="" md="1" lg="1" class="mt-15">
                       
                    <div class="PlanejamentoLine"></div>
                </v-col>


                <v-col col="11" xs="11" sm="11" lg="11" class="mt-15 text-justify" 
                       :class="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs ? 'pr-15' : ''">
                  
                    <div class="Paragrafo">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
                        diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                        aliquam erat volutpat. Ut wisi enim ad minim veniam, quis 
                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
                        ex ea commodo consequat. Duis autem vel eum iriure dolor in 
                        hendrerit in vulputate velit esse molestie consequat, vel illum 
                        dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto 
                        odio dignissim qui blandit praesent luptatum zzril delenit augue
                    </div>
                </v-col>
            
            </v-row>

            <v-row>     <!-- Container- row / coluna vazia -->
                <v-col v-if=" !$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs "
                       col="" md="1" lg="1" class="mt-3">
                </v-col>


                <v-col col="" md="11" lg="11" class="mt-3">
                    <v-btn depressed dark small color="#222C35" class="pa-3"> Download </v-btn>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>















<!-- CONFIG. SCSS -->
<style lang="scss">
    .sectionPlanejamentoEstrategico{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        
        margin-top: 30px;
        margin-bottom: 30px;

        .container-PlanejamentoEstrategico{
            .PlanejamentoLine{
                width: 4px;
                height: 100%;
                background-color: #FCA311;

                margin-left: 100%
            }
            .Paragrafo{
                font-family: 'Gilmer';
                font-size: 22px;
                font-weight: 900;
                font-style: normal;
                font-display: swap;

                text-align: left;
            }
        }



    }
</style>
















<!-- CONFIG. JAVA SCRIPT -->
<script>
import underscore from "@/components/text/underscore"
export default {
    components:{
        underscore,
    },
}
</script>

