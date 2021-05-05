<!-- CONFIG. HTML -->
<template>
  <div class="sectionSix">
      <v-container class="container-Opiniao my-6">
          <underscore linecolor="#FCA311"> <h5> OPINIÃO DE QUEM JÁ FEZ </h5> </underscore>
          
          <br>
          <div class="px-10 mt-5">
          <v-row>

              <v-col cols="" xs="12" sm="12" md="4" lg="4">
                <div class="Column py-3 px-4">

                    <img src="https://png.pngtree.com/png-clipart/20200801/ourmid/pngtree-black-ring-png-image_2319174.jpg"
                         alt="Img" title="imagem">
                    
                    <div class="Titulo"> Charles  Douglas </div>

                    <div class="SubTitulo"> Pós-Graduação em Enfermagem em Urgência, Emergência e UTI </div>

                    <div class="Desc">Os conhecimentos que adquiri no  Instituto foram muito além de uma pós-graduação, possibilitaram 
                    estabelecer um rumo para minha formação. Graças a orientação e ajuda dos excelentes professores, 
                    consegui ingressar no Mestrado, evoluir na minha Carreira como Enfermeiro Intervencionista do SAMU e ver os bons resultados 
                    dos meus estudos na minha vida profissional.
                    </div>
                    
                </div>
              </v-col>


              <v-col cols="" xs="12" sm="12" md="4" lg="4">
                <div class="Column py-3 px-4">

                    <img src="https://png.pngtree.com/png-clipart/20200801/ourmid/pngtree-black-ring-png-image_2319174.jpg"
                         alt="Img" title="imagem">
                    
                    <div class="Titulo"> Charles  Douglas </div>

                    <div class="SubTitulo"> Pós-Graduação em Enfermagem em Urgência, Emergência e UTI </div>

                    <div class="Desc">Os conhecimentos que adquiri no  Instituto foram muito além de uma pós-graduação, possibilitaram 
                    estabelecer um rumo para minha formação. Graças a orientação e ajuda dos excelentes professores, 
                    consegui ingressar no Mestrado, evoluir na minha Carreira como Enfermeiro Intervencionista do SAMU e ver os bons resultados 
                    dos meus estudos na minha vida profissional.
                    </div>
                    
                </div>
              </v-col>


              <v-col cols="" xs="12" sm="12" md="4" lg="4">
                <div class="Column py-3 px-4">

                    <img src="https://png.pngtree.com/png-clipart/20200801/ourmid/pngtree-black-ring-png-image_2319174.jpg"
                         alt="Img" title="imagem">
                    
                    <div class="Titulo"> Charles  Douglas </div>

                    <div class="SubTitulo"> Pós-Graduação em Enfermagem em Urgência, Emergência e UTI </div>

                    <div class="Desc">Os conhecimentos que adquiri no  Instituto foram muito além de uma pós-graduação, possibilitaram 
                    estabelecer um rumo para minha formação. Graças a orientação e ajuda dos excelentes professores, 
                    consegui ingressar no Mestrado, evoluir na minha Carreira como Enfermeiro Intervencionista do SAMU e ver os bons resultados 
                    dos meus estudos na minha vida profissional.
                    </div>
                    
                </div>
              </v-col>

          </v-row>
          </div>
      </v-container>

  </div>
</template>




<!-- CONFIG. SCSS -->
<style lang="scss">
.sectionSix{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    .container-Opiniao{
        .Column{
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;

            color: white;
            background-color: #222c35;

            font-family: 'Gilmer';
            font-style: normal;
            font-display: swap;
            text-align: center;

            img{
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
            
            .Titulo{
                font-size: 19px;
                font-weight: bold;
                
                margin-top: 7px;
                margin-bottom: 3px;
            }
            .SubTitulo{
                font-size: 14px;
                font-weight: 200;
                margin-bottom: 7px;
            }
            
            .Desc{
                margin-top: 17px;
                margin-bottom: 7px;
                font-size: 12px;

                font-weight: 100;

            }

        }
    }


}


</style>









<!-- CONFIG. JAVA SCRIPT -->
<script>
import underscore from "@/components/text/underscore.vue"
import Underscore from '../text/underscore.vue'

export default {
    components:{ underscore }

}
</script>
       
