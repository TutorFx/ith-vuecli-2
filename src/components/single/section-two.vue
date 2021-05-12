<!-- CONFIG. HTML -->
<template>
  <div class="sectionCurso">
    <div class="spacer" />
    <v-container class="container-Curso">
      <v-row align="end">
        <v-col cols="" xs="12" md="7" class="mb-5">
          <div v-if="$store.state.api.cursoLoaded" class="Titulo mb-3">{{(curso.acf.categoria == 1 ? 'Pós Graduação' :  curso.acf.categoria == 2 || curso.acf.categoria == 3 ? 'Extensão' : curso.acf.categoria == 4 ? 'Internacional' : curso.acf.categoria == 5 ? 'Técnico' : curso.acf.categoria == 6 ? 'Graduação' : 'Error 404')}}</div>

          <div v-if="$store.state.api.cursoLoaded" class="SubTitulo mb-1">
            {{ curso.titulo }}
          </div>

          <ul v-if="$store.state.api.cursoLoaded" class="d-flex">
            <li class="mr-10" v-for="(publico, i) in curso.acf.publico_alvo" :key="i">{{publico.name}}</li>
          </ul>

          <div v-if="$store.state.api.cursoLoaded" v-html="curso.acf.descricao" class="Desc mt-3 mb-7">
          </div>

          <v-row v-if="$store.state.api.cursoLoaded">
            <v-col cols="" xs="12" sm="12" md="6">
              <div class="Inf">
                <v-icon color="#fca311" class="mr-3">fa-book</v-icon>
                Reconhecida {{ !($route.params.slug == 'acsl-ashi') ? 'pelo ITH' : 'pela ASHI' }}
              </div>
            </v-col>

            <v-col v-if="curso.acf.modalidade == 3" cols="" xs="12" sm="12" md="6">
              <div class="Inf">
                <v-icon color="#fca311" class="mr-3">fa-wifi</v-icon>
                100% on-line
              </div>
            </v-col>

            <v-col v-if="curso.acf.carga_horaria_h" cols="" xs="12" sm="12" md="6">
              <div class="Inf">
                <v-icon color="#fca311" class="mr-3">fa-clock</v-icon>
                {{curso.acf.carga_horaria_h}} HORAS
              </div>
            </v-col>

            <v-col v-if="curso.acf.carga_horaria_m" cols="" xs="12" sm="12" md="6">
              <div class="Inf">
                <v-icon color="#fca311" class="mr-3">fa-hourglass-half</v-icon>
                {{(curso.acf.carga_horaria_m).toUpperCase()}}
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-expand-transition>
          <v-col v-if="$store.state.api.cursoLoaded" cols="" xs="12" md="5" class="pb-0">
            <div class="container-matricular">

              <v-carousel height="100%" class="pa-2 pb-0" v-model="model" delimiter-icon="mdi-minus" hide-delimiter-background :show-arrows="false" autoplay cycle>
                <v-carousel-item>
                  <v-responsive width="100%" max-height="460px" :aspect-ratio="4/3">
                    <v-img :src="curso.thumbnail.large" :aspect-ratio="4/3" min-height="100%" min-width="100%" height="100%" lazy cover>
                    </v-img>
                  </v-responsive>
                </v-carousel-item>
                <v-carousel-item
                  v-for="(imagem, i) in curso.acf.galeria"
                  :key="i"
                >
                  <v-responsive width="100%" max-height="460px" :aspect-ratio="4/3">
                    <v-img :src="imagem" min-height="100%" min-width="100%" lazy cover>
                    </v-img>
                  </v-responsive>
                </v-carousel-item>
              </v-carousel>
              <div class="intersection">
                <div class="intersection-stroke"></div>
                <div class="intersection-botao">
                  <v-btn depressed :disabled="!curso.acf.id" dark color="#222C35" @click="curso.acf.id != undefined ? storage.carrinho.push(JSON.stringify({img: curso.thumbnail.large, id: curso.acf.id, url: rota})) :''" to="/carrinho">
                    Me Matricular
                  </v-btn>
                  <v-btn depressed v-if="false" :disabled="!curso.acf.id" dark color="#222C35" @click="curso.acf.id != undefined ? abrirWhatsapp(curso.titulo) :''">
                    Me Matricular
                  </v-btn>
                </div>
                <small class="mb-6">Últimas Vagas</small>
              </div>

            </div>
          </v-col>
        </v-expand-transition>
      </v-row>
    </v-container>
  </div>
</template>

<!-- CONFIG. SCSS -->
<style lang="scss">
.sectionCurso {
  background-color: #222c35;
  .spacer{
      min-height: 20vh;
  }
  .container-Curso {
    .intersection{
      min-height: 90px;
      text-align: center;

      .intersection-stroke{
        height: 40px;
        border: 1px solid #fff;
        border-top: none;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: -18px;
      }
      .intersection-botao{

      }
    }
    .Titulo {
      font-family: "Gilmer";
      font-size: 25px;
      font-weight: 900px;
      font-style: normal;

      text-transform: uppercase;
      color: #fca311;
    }
    .SubTitulo,
    .Inf {
      font-family: "Gilmer";
      font-size: 20px;
      font-weight: 500px;
      font-style: normal;

      color: white;
    }
    .Inf {
      font-weight: normal;
      font-size: 18px;
    }
    ul {
      color: #fca311;
      list-style: disc;
    }
    .Desc {
      font-family: "Gilmer";
      font-size: 15px;
      font-weight: -300px;
      color: white;
      strong {
        color: #fca311;
      }
    }
    .container-matricular {

      background-color: #fca311;
      min-height: 100%;
      img {
        border-left: 10px solid #fca311;
        border-right: 10px solid #fca311;
      }
      small {
        color: red;
      }
    }
  }
}
</style>

<!-- CONFIG. JAVA SCRIPT -->
<script>
export default {
  props: { curso: Object },
  mounted() {
    //console.log(this.$router.currentRoute.fullPath);
    this.rota = this.$router.currentRoute.fullPath
    console.log(this.$route.params.slug)
  },
  data: () => ({
    model: 0,
    rota: ''
  }),
  methods:{
    add(object){
      this.$store.commit("cartStore", object)
    },
    abrirWhatsapp(titulo){
      window.open(`https://api.whatsapp.com/send?phone=556230917079&text=Ol%C3%A1,%20eu%20gostaria%20de%20me%20inscrever%20para%20o%20curso%20de%20${decodeURI(titulo)}.`)
    }
  }
};
</script>
