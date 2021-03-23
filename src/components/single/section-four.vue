<!-- CONFIG. HTML -->
<template>
  <div class="sectionCombos" :style="`background-image: url(${require('@/assets/bg/logowhite-bg.svg')})`">
    <v-container class="container-Combos my-10">
      <v-row>
        <v-col cols="" xs="12" md="4" lg="4">
          <div class="Digital">
            <h1 class="mt-1">Digital</h1>
            <div class="topic">
                <ul>
                    <li class="mb-0">16x de <strong> R$ 270,09*</strong></li>
                </ul>
            </div>
            <span> (*cartão de crédito recorrente) </span>

            <div class="topic">
                <ul>
                    <li class="my-0">01x de <strong> R$ 3.024,99*</strong></li>
                </ul>
            </div>

            <span> (*á vista) </span> <br>

            <span class="mb-10"> ** 10% desconto na pontualidade no boleto ou cartão </span>
            <br>
          </div>
        </v-col>

        <v-col cols="" xs="12" md="4" lg="4">
          <div class="Combos px-3">
            <h1 class=" mt-1">COMBOS</h1>

            <div class="Desc mb-3">
              Adicione mais um curso com um super desconto. <br />
              <strong> Não perca tempo! </strong>
            </div>

            <v-btn depressed small dark color="#FCA311"> Quero! </v-btn>
          </div>
        </v-col>

        <v-col cols="" xs="12" md="4" lg="4">
          <div class="Compartilhe">
            <h1>Compartilhe</h1>
            
            <div class="icones">
                <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fff">fab fa-whatsapp</v-icon></v-btn>
                <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fff">fab fa-facebook</v-icon></v-btn>
                <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fff">fab fa-instagram</v-icon></v-btn>
                <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fff">mdi-email</v-icon></v-btn>
                <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fff">fab fa-linkedin</v-icon></v-btn>
            </div>

            <div class="Desc">
              <strong> {{this.espectadores}} estão vendo essa página </strong>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>




<!-- CONFIG. SCSS -->
<style lang="scss">
.sectionCombos {
  display: flex;
  justify-content: center;
  align-items: center;

  background-position: 150% 50%;
  background-size: 100vh;

  .container-Combos {
    color: #222c35;
    text-align: center;

    .Digital {
      font-family: "Gilmer";
      font-weight: normal;
      text-align: center;
      border: 2px solid #fca311;
        .topic{
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 100%;
        }
      h1 {
        font-family: "Gilmer";
        font-size: 22px;
        font-weight: 1000px;
        text-transform: uppercase;
      }

      ul,
      li {
        font-size: 12px;
        padding-bottom: 1px;
      }

      strong {
        font-size: 18px;
      }

      span {
        font-size: 10px;
        line-height: 6px;
      }

      .Desc {
        font-size: 12px;
        border: 1px solid #222c35;
      }
    }

    .Combos {
      min-height: 100%;
      border: 2px solid #fca311;
      font-family: "Gilmer";
      font-size: 22px;

      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;

      h1 {
        font-family: "Gilmer";
        font-size: 22px;
        font-weight: 1000px;
        text-transform: uppercase;
        margin-bottom: 4px;
      }
      .Desc {
        font-size: 16px;
        font-weight: 500px;
      }

      .strong {
        font-size: 18px;
      }
    }

    .Compartilhe {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;

      min-height: 100%;
      border: 2px solid #fca311;
      font-family: "Gilmer";

      .icones{
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;

          svg{
              height: 25px;
              margin-right: 10px;
          }
      }
      h1 {
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 10px;
      }

      .Desc strong {
        font-size: 16px;
        font-weight: 500px;
      }
    }
  }
}
</style>









<!-- CONFIG. JAVA SCRIPT -->
<script>
export default {
    data(){
        return{
            espectadores: Math.floor(Math.random() * (90 - 40) + 40),
        }
    },
    mounted() {
        this.$nextTick(function () {
            window.setInterval(() => {
                this.segundo();
            }, 1000)
        })
    },
    methods: {
        segundo() {
            this.espectadores = Math.floor(Math.random() * (90 - 40) + 40);
            return this.espectadores;
        },
    }
};
</script>
