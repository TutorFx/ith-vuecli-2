<!-- CONFIG. HTML -->
<template>
  <div class="sectionCombos" :style="`background-image: url(${require('@/assets/bg/logowhite-bg.svg')}); background-color: #222c35;`">
    <v-container class="container-Combos my-10 white--text">
      <v-row>
        <v-col v-if="$store.state.api.cursoLoaded && curso.acf.preco" cols="" xs="12" md="4" lg="4">
          <div class="modalidade">
            
            <div class="d-flex justify-center py-3">
              <v-icon class="mr-2" color="#FCA311">far fa-square</v-icon>
              <h1 v-if="$store.state.api.cursoLoaded">{{ curso.acf.modalidade == 1 ? 'Híbrido' : curso.acf.modalidade == 2 ? 'Presencial' : curso.acf.modalidade == 3 ? 'Digital' : 'Error 404 - Modalidade não encontrada' }}</h1>
            </div>
            
            <div v-if="$store.state.api.cursoLoaded" class="topic">
                <ul>
                    <li>{{curso.acf.mensalidades ?  curso.acf.mensalidades : '1'}}x de <strong> R$ {{ (curso.acf.preco_promo == false ? curso.acf.preco : curso.acf.preco_promo).replace('.',',') }}</strong></li>
                </ul>
            </div>

            <span> (cartão de crédito recorrente) </span>

            <div v-if="curso.acf.mensalidades" class="topic">
                <ul>
                    <li>1x de <strong> R$ {{ parseFloat(curso.acf.pav ? (curso.acf.pav) : (curso.acf.mensalidades * (curso.acf.preco_promo == false ? curso.acf.preco : curso.acf.preco_promo))).toFixed(2).replace('.',',') }}</strong></li>
                </ul>
            </div>
            
          </div>
        </v-col>

        <v-col cols="" xs="12" md="4" lg="4">
          <div class="Combos px-3">
            <h1 class=" mt-1">COMBOS</h1>

            <div class="Desc mb-3">
              Adicione mais um curso com um super desconto. <br />
              <strong> Não perca tempo! </strong>
            </div>

            <v-btn @click="curso.acf.id != undefined ? storage.carrinho.push(JSON.stringify({img: curso.thumbnail.large, id: curso.acf.id, url: rota})) :''" to="/carrinho" class="rounded-0" depressed small dark color="#FCA311"> Quero! </v-btn>
          </div>
        </v-col>

        <v-col cols="" xs="12" md="4" lg="4">
          <div class="Compartilhe" style="border: 2px solid white;">
            <div class="mb-3 d-flex"><v-icon small color="white" class="mr-2">fa fa-eye</v-icon><espectadores /></div>
            <share />
            <h1>Compartilhe</h1>
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
    text-align: center;

    .modalidade {
      font-family: "Gilmer";
      font-weight: normal;
      text-align: center;
      min-height: 100%;
      justify-content: center;
      align-items: center;
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
import share from "@/components/single/share.vue"
import espectadores from "@/components/single/espectadores.vue"
export default {
    props: {
      curso: Object
    },
    components:{ share, espectadores },
    data() {
      return {
        rota: ''
      };
    },
    mounted() {
      this.rota = this.$router.currentRoute.fullPath
    },
};
</script>
