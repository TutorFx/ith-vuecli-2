<!-- CONFIG. HTML -->
<template>
  <div class="sectionCurso">
    <div class="spacer" />
    <v-container class="container-Curso">
      <v-row>
        <v-col cols="" xs="12" md="7" class="mb-5">
          <div class="Titulo mb-3">Pós Graducação</div>

          <div v-if="$store.state.api.cursoLoaded" class="SubTitulo mb-1">
            {{ curso.titulo }}
          </div>

          <ul>
            <li>Enfermeiros</li>
          </ul>

          <div class="Desc mt-3 mb-7">
            O <strong> especialista em UTI Neonatal </strong> deve ser
            cuidadoso, gentil e sensível, pois o recém-nascido e crianças são
            mais frágeis. O especialista coordena, planeja o atendimento,
            organiza as rotinas do RN, visitas familiares, orienta na
            amamentação e pode exercer
            <strong> cargos de gestão </strong> dentro da Unidade.
          </div>

          <v-row>
            <v-col cols="" xs="12" sm="12" md="6">
              <div class="Inf">
                <v-icon color="#fca311">fa-book</v-icon>
                Reconhecida pelo MEC
              </div>
            </v-col>

            <v-col cols="" xs="12" sm="12" md="6">
              <div class="Inf">
                <v-icon color="#fca311" class="mr-3">fa-wifi</v-icon>
                100% on-line
              </div>
            </v-col>

            <v-col cols="" xs="12" sm="12" md="6">
              <div class="Inf">
                <v-icon color="#fca311" class="mr-3">fa-clock</v-icon>
                440 horas
              </div>
            </v-col>

            <v-col cols="" xs="12" sm="12" md="6">
              <div class="Inf">
                <v-icon color="#fca311" class="mr-3">fa-hourglass-half</v-icon>
                15 meses
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-expand-transition>
          <v-col v-if="$store.state.api.cursoLoaded" cols="" xs="12" md="5" class="pb-0">
            <div class="container-matricular">

              <v-carousel height="100%" class="pa-2 pb-0" v-model="model" delimiter-icon="mdi-minus" hide-delimiter-background :show-arrows="false" autoplay cycle>
                <v-carousel-item>
                  <v-responsive :aspect-ratio="1/1">
                    <v-img :src="curso.thumbnail.large" min-height="100%" min-width="100%" lazy cover>
                    </v-img>
                  </v-responsive>
                </v-carousel-item>
                <v-carousel-item
                  v-for="(imagem, i) in curso.acf.galeria"
                  :key="i"
                >
                  <v-responsive :aspect-ratio="1/1">
                    <v-img :src="imagem" min-height="100%" min-width="100%" lazy cover>
                    </v-img>
                  </v-responsive>
                </v-carousel-item>
              </v-carousel>
              <div class="intersection">
                <div class="intersection-stroke"></div>
                <div class="intersection-botao">
                  <v-btn depressed dark color="#222C35">
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
    console.log(this.curso);
  },
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
};
</script>
