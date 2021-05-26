<!-- HTML  -->
<template>
  <div id="parceiros" :class="storage.contraste ? 'contraste':''">
    
      <div class="Titulo">
        <div class="container-titulo" :style="`background-image: url(${require('@/assets/Sections/icon/parceiroslogowhite.svg')})`">
            <div>
                <underscore linecolor="white">PARCEIROS E BENEFÍCIOS</underscore>
            </div>
        </div>
      </div>
      <!-- CONFIG. LOGO PARCEIROS -->
      <v-container class="container-parceiros">
          <div class="logo-parceiros">
              <v-row justify="center" align-content="space-between" class="mt-10">
                  <v-col cols="2" xs="2" xl="2"><v-img class="py-5 px-5" contain src="@/assets/parceiros/coren.png"></v-img></v-col>
                  <v-col cols="2" xs="2" xl="2"><v-img class="py-5 px-5" contain src="@/assets/parceiros/eduq.svg"></v-img></v-col>
                  <v-col cols="2" xs="2" xl="2"><v-img class="py-5 px-5" contain src="@/assets/parceiros/facunicamps.png"></v-img></v-col>
                  <v-col cols="2" xs="2" xl="2"><v-img class="py-5 px-5" contain src="@/assets/parceiros/fatec.png"></v-img></v-col>
                  <v-col cols="2" xs="2" xl="2"><v-img class="py-5 px-5" contain src="@/assets/parceiros/corenmt.png"></v-img></v-col>
              </v-row>
              <v-row class="mb-10" justify="center">
                  <v-col cols="2" xs="2" xl="2"><v-img class="py-5 px-5" style="background-color: #222;" contain src="@/assets/parceiros/latene.png"></v-img></v-col>
                  <v-col cols="2" xs="2" xl="2"><v-img class="py-5 px-5" contain src="@/assets/parceiros/maximacentrodeestudos.png"></v-img></v-col>
                  <v-col cols="2" xs="2" xl="2"><v-img class="py-5 px-5" contain src="@/assets/parceiros/sec.png"></v-img></v-col>
                  <v-col cols="2" xs="2" xl="2"><v-img class="py-5 px-5" contain src="@/assets/parceiros/unibf.svg"></v-img></v-col>
                  <v-col cols="2" xs="2" xl="2"><v-img class="py-5 px-5" contain src="@/assets/parceiros/unimedgo.png"></v-img></v-col>
              </v-row>
          </div>
      </v-container>
  </div>
</template>












<!-- SCSS -->

<style lang="scss">
#parceiros{                                 /* Config Parceiros */
  width: 100%;
  height: auto;
  font-family: gilmer;

    
  .Titulo{                                /* Titulo Parcieros */
    font-family: Gilmer;
    font-weight: 900;
    font-style: normal;
    font-display: swap;
    min-height: 150px;

    background-color: #FCA311;
    text-align: center;
    

    .container-titulo{
      display: flex;
      justify-content: space-around;
      align-items: center;
      
      background-size: 50vw;
      background-position: center center;

      height: 150px;
    }
  }
  



  /* CONFIG. LOGOS DOS PARCEIROS */
  .container-parceiros{  
    // display: flex;
    // flex-flow: row wrap;
    // justify-content: center;
    // align-items: center;

    // min-height: 400px;
    // background-color: #888;

  

    .logo-parceiros{

    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
         
    }


  }
}

</style>

















<!-- JAVA SCRIPT -->
<script>
import underscore from "@/components/text/underscore.vue"
export default {
    
    components: { underscore }

}
</script>
