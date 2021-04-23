<!-- CONFIG. HTML -->
<template>
  <div class="sectionFive">
    <v-container class="container-SectionFive my-5">
      <v-row>
        <v-col cols="" xs="12" sm="12" md="6" lg="6" class="px-3 pr-8 py-0">
            <div v-if="$store.state.api.cursoLoaded">
                <div v-if="curso.acf.mercado">
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
          <br />
          <div class="irareceber">
            <underscore linecolor="#FCA311" class="mb-10">
              <h6>VOCE TAMBÉM IRÁ RECEBER</h6>
            </underscore>

            <div class="mb-5">
              <v-row align="center" justify="center"
                ><v-col cols="2">
                  <v-icon color="#222C35" size="50" aria-hidden="false">
                    fa-microphone-alt
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
                    fa-microphone-alt
                  </v-icon> </v-col
                ><v-col>
                  <div class="Titulo">Comunidade de Networking</div>
                  <div class="Desc">
                    Grupo Alunith com todos alunos e ex-alunos ITH.
                  </div>
                </v-col></v-row
              >
            </div>
            <br />
            <v-btn depressed dark color="#222c35" class="mr-5 mb-2">
              Baixar PDF do Curso
            </v-btn>
            <v-btn v-if="false" depressed dark color="#222c35" class="mr-5 mb-2">
              Portaria MEC
            </v-btn>
          </div>
        </v-col>

        <v-col cols="" xs="12" sm="12" md="6" lg="6" class="px-3">
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
    return {};
  },
};
</script>
