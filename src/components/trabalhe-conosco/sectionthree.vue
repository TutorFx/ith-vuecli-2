<template>
  <div class="sectionAtualizacoes"> 
    <v-container class="container-atualizacoes">

      <v-row>             <!-- Row do Container -->

        <v-col col="" xs="12" sm="2">
          <div class="ImgAtualizacoes">
            <!-- <img src="@/assets" alt=""> -->
          </div>
        </v-col>


        <v-col col="" xs="12" sm="6">
          <div class="TituloAtulizacoes">
            <div> Receba <strong> atualizações </strong> sobre nossos cursos! </div>
          </div>
        </v-col>


        <v-col col="" xs="12" sm="4">

          <form  class="px-5 py-5">
             <!-- input type email -->
            <v-text-field               
              outlined
              class="mb-2"
              label="Seu e-mail*"
              hide-details="auto"
              color="#fca311"
              dark
              dense
              filled
            ></v-text-field>

            <v-btn depressed small type="send" color="#fca311">
              Me Inscrever
            </v-btn>
          </form>

        </v-col>
      </v-row>



    </v-container>
  </div>
</template>



<style lang="scss">

  .sectionAtualizacoes{
    margin-top: 200px;
    min-height: 230px;

    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items: center;

    background-color: #222C35;


    .container-atualizacoes{
      display: flex;
      flex-flow: row wrap;
      justify-content:center;
      align-items: center;



      .TituloAtulizacoes{     //Configura o Titulo das Atualizacoes 
        color: white;
        font-family: 'Gilmer';
        font-size: 30px;
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        text-align: left;

        display: flex;        // Configura o Flex para Centralizar oque esta dentro do Titulo 'div'
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;

        min-height: 100%;     // ALINHA O TEXTO COM O COL

        strong{
          color: #FCA311;
        }
      }


      form{
        border: 1px solid white;
        min-height: 100%;
      }





    }
  }

</style>












<script>
export default {

}
</script>