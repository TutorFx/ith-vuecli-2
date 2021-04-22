<template>
  <div class="calendario-academico">
        <div class="sectionEstatutoRegimento"> 
          <v-container class="container-EstatutoRegimento">
            <underscore linecolor="#FCA311"> CALENDÁRIO ACADÊMICO </underscore>

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
                      O Calendário Acadêmico orienta a todos, no planejamento da jornada durante o curso. Segue
                      abaixo, o calendário do ano vigente.
                    </div>
                </v-col>
            </v-row>

          </v-container>
      </div>  
  </div>
</template>

<style scoped lang="scss">
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
  name: 'calendario-academico',
  components: {
    underscore
  },
}
</script>
