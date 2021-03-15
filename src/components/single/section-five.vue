<!-- CONFIG. HTML -->
<template>
  <div class="sectionFive">
      <v-container class="container-SectionFive my-5">
          <v-row>
              <v-col cols="" xs="12" sm="12" md="6" lg="6" class="px-3 pr-8">
                <underscore linecolor="#FCA311"> <h6> COMO ESTÁ O MERCADO NA ÁREA </h6> </underscore>

                <ul>
                    <li> A <strong> falta de rofissionais </strong> om especialização em UTI 
                        Neonatal é frequente em todo o país. Os leitos em vários 
                        hospitais estão desassistidos pela alta demanda, 
                        complexidade da área e falta de especialistas 
                    </li>
                    <li>
                        Novas vagas para enfermeiros são abertas 
                        semanalmente. A remuneração para o intensivista é em 
                        média <strong> duas vezes maior </strong> que as demais áreas.
                    </li>
                </ul>

                <br>
                    
                <underscore linecolor="#FCA311"> <h6> VOCE TAMBÉM IRÁ RECEBER </h6> </underscore>


                <div class="Titulo mt-3"> Curso de formação com certificado </div>
                <div class="Desc"> Gestão, Liderança, Empreendedorismo e Inovação </div>

                <div class="Titulo">E-book exclusivo </div>
                <div class="Desc"> As 10 habilidades indispensáveis para os profissionais de saúde. </div>

                <div class="Titulo"> Podcast ITH Pós-Gradução  </div>
                <div class="Desc"> Aulas, bate papos, com experts de várias áreas do pais </div>

                <div class="Titulo"> Comunidade de Networking </div>
                <div class="Desc"> Grupo Alunith com todos alunos e ex-alunos ITH. </div>

                <br>
                <v-btn depressed dark color="#222c35" class="mr-5"> Baixar PDF do Curso </v-btn>
                <v-btn depressed dark color="#222c35"> Portaria MEC </v-btn>


              </v-col>



              <v-col cols="" xs="12" sm="12" md="6" lg="6" class="px-3">
                <underscore linecolor="#FCA311"> <h6> CONTEÚDO PROGRAMÁTICO </h6> </underscore>

                <ul>
                    <li> Introdução à Enfermagem Obstétrica e Neonatal, 
                         Epidemiologia, Humanização e Políticas Públicas de 
                         Atenção à Saúde da Mulher e do Recém-Nascido.
                    </li>
                </UL>

              </v-col>    

          </v-row>
      </v-container>

  </div>
</template>




<!-- CONFIG. SCSS -->
<style lang="scss">
.sectionFive{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    .container-SectionFive{
        font-family: 'Gilmer';
        font-weight: normal;
        font-style: normal;
        font-display: swap;

        color: #222C35;

        h6{
            font-family: 'Gilmer';
            font-weight: 900px;
            color: black;
        }

        ul{
            margin-top: 10px;
            list-style: disc;
        }
        li{
            margin-bottom: 10px;
        }

        strong{
            color: #FCA311;
        }


        .Titulo{
            font-family: 'Gilmer';
            font-size: 19px;
            font-weight: bold;
            
            color: #222C35;
            margin-top: 7px;

        }

        .Desc{
            font-size: 17px;
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

