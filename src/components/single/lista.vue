<!-- CONFIG. HTML -->
<template>
  <div class="sectionFive">
    <v-container class="container-SectionFive my-5">
      <v-row>
        <v-col cols="" xs="12" sm="12" md="6" lg="6" class="px-3 pr-8 mb-5">
          <div v-if="$store.state.api.cursoLoaded && curso.acf.mercado">
              <div>
                  <underscore linecolor="#FCA311">
                      <h6>COMO ESTÁ O MERCADO NA ÁREA</h6>
                  </underscore>

                  <ul class="reset-ul">
                      <list-item v-for="(texto, y) in curso.acf.mercado" :key="y">
                      {{ texto.texto }}
                      </list-item>
                  </ul>
              </div>
          </div>
          <div class="irareceber">
            <underscore linecolor="#FCA311" class="mb-10">
              <h6>VOCE TAMBÉM IRÁ RECEBER</h6>
            </underscore>

            <div>
              <v-row align="center" justify="center"
                ><v-col cols="2">
                  <v-icon color="#222C35" size="50" aria-hidden="false">
                    fa-certificate
                  </v-icon> </v-col
                ><v-col>
                  <div class="Titulo">Curso de formação com certificado</div>
                  <div class="Desc">
                    Gestão, Liderança, Empreendedorismo e Inovação
                  </div>
                </v-col></v-row
              >
              <v-row align="center" justify="center"
                ><v-col cols="2">
                  <v-icon color="#222C35" size="50" aria-hidden="false">
                    fa-tablet-alt
                  </v-icon> </v-col
                ><v-col>
                  <div class="Titulo">E-book exclusivo</div>
                  <div class="Desc">
                    As 10 habilidades indispensáveis para os profissionais de
                    saúde.
                  </div>
                </v-col></v-row
              >
              <v-row align="center" justify="center"
                ><v-col cols="2">
                  <v-icon color="#222C35" size="50" aria-hidden="false">
                    fa-microphone-alt
                  </v-icon> </v-col
                ><v-col>
                  <div class="Titulo">Podcast ITH Pós-Gradução</div>
                  <div class="Desc">
                    Aulas, bate papos, com experts de várias áreas do pais
                  </div>
                </v-col></v-row
              >
              <v-row align="center" justify="center"
                ><v-col cols="2">
                  <v-icon color="#222C35" size="50" aria-hidden="false">
                    fa-network-wired
                  </v-icon> </v-col
                ><v-col>
                  <div class="Titulo">Comunidade de Networking</div>
                  <div class="Desc">
                    Grupo Alunith com todos alunos e ex-alunos ITH.
                  </div>
                </v-col></v-row
              >
            </div>

          </div>
        </v-col>

        <v-col cols="" xs="12" sm="12" md="6" lg="6" class="px-3 mb-5">
          <underscore linecolor="#FCA311">
            <h6>CONTEÚDO PROGRAMÁTICO</h6>
          </underscore>

          <ul v-if="$store.state.api.cursoLoaded" class="reset-ul">
            <list-item v-for="(texto, y) in curso.acf.programatico" :key="y">
              {{ texto.texto }}
            </list-item>
          </ul>
        </v-col>
      </v-row>
      <div class="text-right">
        <v-btn depressed dark color="#FCA311" @click="curso.acf.id != undefined ? storage.carrinho.push(JSON.stringify({img: curso.thumbnail.large, id: curso.acf.id, url: rota})) :'';" to="/carrinho" class="mr-5 mb-2 rounded-0">
          Quero me matricular!
        </v-btn>
        <v-btn v-if="false" depressed dark color="#222c35" class="mr-5 mb-2">
          Portaria MEC
        </v-btn>
      </div>
      <div class="mb-n16" v-if="false">
        <v-img src="@/assets/Mockup/maocelular.png"></v-img>
      </div>
    </v-container>
  </div>
</template>

<!-- CONFIG. SCSS -->
<style lang="scss">
.sectionFive {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  .container-SectionFive {
    font-family: "Gilmer";
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    color: #222c35;
    .reset-ul {
      list-style-type: none;
      padding: 0;
    }
    h6 {
      font-family: "Gilmer";
      font-weight: 900px;
      color: black;
    }
    ul {
      margin-top: 10px;
      list-style: disc;
    }
    li {
      margin-bottom: 10px;
    }
    strong {
      color: #fca311;
    }
    .Titulo {
      font-family: "Gilmer";
      font-size: 19px;
      font-weight: bold;

      color: #222c35;
      margin-top: 7px;
    }
    .Desc {
      font-size: 17px;
    }
  }
}
</style>

<!-- CONFIG. JAVA SCRIPT -->
<script>
import underscore from "@/components/text/underscore.vue";
import listItem from "@/components/misc/list-item.vue";

export default {
  components: { underscore, listItem },
  props: { curso: Object },
  data() {
    return {
      rota: ''
    };
  },
  mounted() {
    this.rota = this.$router.currentRoute.fullPath
  },
  methods:{
    funcaoTravada(){
      this.$toast.warning("Ops, essa função está em fase de desenvolvimento...", {
        position: "top-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        closeButton: "button",
        rtl: false
      });
    }
  }
};
</script>
