<template>
  <div class="sec2" :class="storage.contraste ? 'contraste' : ''">
    <v-container>
      <div>
        <div class="data-container">
          <h2 class="mb-5 gilmer headline-section text-center">
            ESTUDE COM QUEM <span>ENTENDE!</span>
          </h2>
          <v-row>
            <v-col class="col-12 col-sm-6 col-md-6"
              ><div class="front-img">
                <v-img
                  class="img-root"
                  lazy
                  src="@/assets/Photo/Front-area.png"
                ></v-img></div
            ></v-col>
            <v-col class="col-12 col-sm-6 col-md-6 d-flex align-center">
              <div>
                <h4 class="gilmer title-section mb-3">
                  Mais reconhecimento, mais oportunidades e maior crescimento
                  pessoal e profissional!
                </h4>
                <h5 class="gilmer description-section mb-3">
                  Somos um <span>Instituto de Educação</span> que transforma sua
                  vida profissional através de um método único, o
                  <span>ITH 4.0</span>. O ITH oferece cursos de pós-graduação e
                  cursos extensão em diversas <span>áreas da saúde</span>, tendo
                  a opção de cursar presencialmente em Goiânia, totalmente
                  digital pela plataforma on-line ou de forma híbrida.
                </h5>
                <h5 class="gilmer description-section mb-3">
                  As aulas são divididas em módulos que incluem: o conteúdo
                  técnico, práticas, empreendedorismo, autoconhecimento,
                  metodologias ativas e games.
                </h5>
                <h5 class="gilmer description-section">
                  O foco aqui é aumentar as <span>suas potencialidades</span> e
                  promover a sua inserção no <span>mercado de trabalho</span>.
                </h5>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sec2 {
  background-color: #f4f4f4;
}
@media only screen and (min-width: 600px) {
  // Desktop

  .data-container {
    padding-top: 50px;
    padding-bottom: 50px;
    max-width: 100%;
  }
  .front-img {
    padding: 5px;
    background-color: #222c35;
  }
  .img-root {
    max-width: 1;
  }
  .gilmer {
    font-family: "Gilmer";
  }
  .headline-section {
    font-size: 2.2rem;
    font-weight: bold;
    color: #222c35;
    span {
      color: #fca311;
    }
  }
  .title-section {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1em;
    color: #222c35;
    span {
      color: #fca311;
    }
  }
  .description-section {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1em;
    color: #222c35;
    span {
      color: #fca311;
    }
  }
}
@import "~vuetify/src/styles/styles.sass";
@media only screen and (min-width: map-get($grid-breakpoints, "xl")) {
  .headline-section {
    font-size: 2.5rem;
    font-weight: bold;
    color: #222c35;
    span {
      color: #fca311;
    }
  }
  .title-section {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1em;
    color: #222c35;
    span {
      color: #fca311;
    }
  }
  .description-section {
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1em;
    color: #222c35;
    span {
      color: #fca311;
    }
  }
}
@media only screen and (max-width: 600px) {
  //Mobile

  .data-container {
    padding-top: 50px;
    padding-bottom: 50px;
    max-width: 100% !important;
    overflow: hidden;
  }
  .front-img {
    padding: 10px;
    background-color: #222c35;
  }
  .img-root {
    max-width: 1;
  }
  .gilmer {
    font-family: "Gilmer";
  }
  .headline-section {
    font-size: 1.5rem;
    font-weight: bold;
    color: #222c35;
    span {
      color: #fca311;
    }
  }
  .title-section {
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.1em;
    color: #222c35;
    span {
      color: #fca311;
    }
  }
  .description-section {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5em;
    color: #222c35;
    span {
      color: #fca311;
    }
  }
}
</style>
