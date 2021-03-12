<template>
  <div class="sectionEstatutoRegimento"> 
      <v-container class="container-EstatutoRegimento">
        <underscore linecolor="#FCA311"> ESTATUTO/REGIMENTO </underscore>

        <!-- row container p/ Linha e Paragrafo-->
        <v-row>
            <!-- col  p/ Linha e 'Validacao p/ nao aparecer a linha no SM e XS -->
            <v-col v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs" 
                   col="1" xs="1" sm="1" md="1" class="mt-15 pl-30 mx-0">

                <div class="estatutoline" />
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



        <!-- row container para o botao-->
        <v-row>
            <!-- Coluna em branco para alinhar o botao -->
            <v-col v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"  
                   col="" xs="1" sm="1" class="mt-5"></v-col>
            
            <!-- Coluna do Botao 'alinha com o paragrafo de cima' -->
            <v-col col="" xs="11" sm="11" class="mt-5 py-60" >
                <v-btn to="/Estatuto" color="#222C35" small depressed dark class="mr-3 pa-4"> Estatuto </v-btn>
                <v-btn to="/Estatuto" color="#222C35" small depressed dark class="mr-3 pa-4"> Regimento </v-btn>
            </v-col>
        </v-row>

      </v-container>
  </div>
</template>



<style lang="scss">

    .sectionEstatutoRegimento{
        margin-top: 30px;
        margin-bottom: 30px;

        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;

        .container-EstatutoRegimento{
            .estatutoline{
                width: 4px;
                height: 100%;
                background-color: #FCA311;
                margin-left: 100%;
            }


            .Paragrafo{
                font-family: 'Gilmer';
                font-size:22px;
                font-weight: 900;
                font-style: normal;
                font-display: swap;

                text-align: left;
            }

            
            
        }
    }


</style>












<script>
import underscore from "@/components/text/underscore.vue"
export default {
    components:{ underscore 
    }
}
</script>