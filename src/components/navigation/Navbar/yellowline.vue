<template>
  <div>
    <div id="yellowline">
      <div>
        <div align="end" class="d-flex align-center">
<!-- 

        selectCursos: [{text:'Graduação', id:'6'}, {text:'Pós-Graduação', id:'1'}, {text:'Extensão', id:'3'}, {text:'Internacional', id: '4'}, {text:'Técnico', id: '5'}],
        selectModalidade: [{text:'Digital', id:'3'},{text:'Presencial', id: '2'}, {text:'Híbrido', id: '1'}],


             -->
            <v-btn small plain to="/cursos/?tipo=[1]&modalidade=[2]" >pós-graduação presencial</v-btn>
            <v-btn small plain to="/cursos/?tipo=[1]&modalidade=[3]" >pós-graduação ead</v-btn>
            <v-btn small plain to="/cursos/?tipo=[3]">cursos de extensão</v-btn>
            <v-btn small plain to="/cursos/?tipo=[4]">cursos internacionais</v-btn>
            <v-btn small plain to="/cursos/?tipo=[5]">cursos técnicos</v-btn>
            <v-btn small plain to="/cursos/?modalidade=[3]">cursos online</v-btn>
            <v-spacer></v-spacer>
          <v-text-field
            class="busca mt-1"
            small
            v-model="search"
            @keyup.enter="buscar"
            dense
            style="max-width: 200px; transform: translateY(5px)"
          >
            <v-icon slot="append" color="primary" @click="buscar" dark
              >mdi-magnify</v-icon
            >
          </v-text-field>

          <v-badge
            v-if="storage.carrinho.length > 0"
            :content="storage.carrinho.length"
            color="black"
            overlap
          >
            <v-btn
              class="ml-2"
              fab
              small
              depressed
              color="black"
              to="/carrinho"
            >
              <v-icon dark color="#FCA311">
                mdi-cart
              </v-icon>
            </v-btn>
          </v-badge>
          <v-btn
            v-else
            class="ml-2"
            fab
            small
            text
            color="primary"
            to="/carrinho"
          >
            <v-icon dark>
              mdi-cart
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="settings-desktop mt-3">
      <v-container class="pa-0">
        <config />
      </v-container>
    </div>
  </div>
</template>

<script>
import config from "@/components/settings/config.vue";
export default {
  components: {
    config,
  },
  data(){
      return{
          search: '',
      }
  },
  methods: {
    buscar(){
        this.$store.commit("changeSearch", this.search);
        if(this.$route.name != 'Cursos'){
            this.$router.push( {name:'Cursos'}) 
        }
    },
    cursos(v){
        this.$store.commit("tipocurso", v)
    },
    modalidade(v){
        this.$store.commit("modalidade", v);
    }
  }
};
</script>
<style scoped lang="scss">
@import "~vuetify/src/styles/styles.sass";

@media only screen and (min-width: map-get($grid-breakpoints, "lg")) {
  .container {
    max-width: 1000px !important;
  }
}

@media only screen and (min-width: map-get($grid-breakpoints, "xl")) {
  .container {
    max-width: 1500px !important;
  }
}
</style>
<style lang="scss">
#yellowline {
  background-color: #fca311;
  padding-left: 3rem;
  padding-right: 3rem;
  .yellowlinks {
    display: flex;
    align-items: center;
    button {
      font-family: Gilmer;
      font-weight: bold;
    }
  }
}
.settings-desktop {
  background-color: black;
}
</style>
