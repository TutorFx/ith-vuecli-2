<!-- CONFIG. HTML -->
<template>
  <div class="sectionCombos" :style="`background-image: url(${require('@/assets/bg/logowhite-bg.svg')})`">
    <v-container class="container-Combos my-10">
      <v-row>
        <v-col v-if="$store.state.api.cursoLoaded && curso.acf.preco" cols="" xs="12" md="4" lg="4">
          <div class="modalidade">
            <h1 v-if="$store.state.api.cursoLoaded" class="mt-1">{{ curso.acf.modalidade == 1 ? 'Híbrido' : curso.acf.modalidade == 2 ? 'Presencial' : curso.acf.modalidade == 3 ? 'Digital' : 'Error 404 - Modalidade não encontrada' }}</h1>
            <div v-if="$store.state.api.cursoLoaded" class="topic">
                <ul>
                    <li class="mb-0">{{curso.acf.carga_horaria_m.split(" ")[0]}}x de <strong> R$ {{ curso.acf.preco_promo == false ? curso.acf.preco : curso.acf.preco_promo }}*</strong></li>
                </ul>
            </div>
            <span> (*cartão de crédito recorrente) </span>

            <div class="topic">
                <ul>
                    <li class="my-0">{{ curso.acf.carga_horaria_m.split(" ")[1] == 'meses' ? '1':'' }}x de <strong> R$ {{ parseInt(curso.acf.carga_horaria_m) * (curso.acf.preco_promo == false ? curso.acf.preco : curso.acf.preco_promo) }}*</strong></li>
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

    .modalidade {
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
    },
    props: {
      curso: Object
    }
};
</script>
