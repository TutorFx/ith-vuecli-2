<template>
  <v-app>
    <div>
        <router-view />
    </div>
  </v-app>
</template>

<style lang="scss">
div[vw]{
    top: 50%!important;
}
  @font-face {
    font-family: 'Gilmer';
    src: url('./assets/Fonts/GilmerMedium.woff2') format('woff2'),
        url('./assets/Fonts/GilmerMedium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Gilmer';
    src: url('./assets/Fonts/GilmerLight.woff2') format('woff2'),
        url('./assets/Fonts/GilmerLight.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Gilmer';
    src: url('./assets/Fonts/GilmerHeavy.woff2') format('woff2'),
        url('./assets/Fonts/GilmerHeavy.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Gilmer';
    src: url('./assets/Fonts/GilmerBold.woff2') format('woff2'),
        url('./assets/Fonts/GilmerBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@import '~vuetify/src/styles/styles.sass';

@media only screen and (min-width: map-get($grid-breakpoints, 'lg')) {
  .container {
  max-width: 980px !important;
  }
}

@media only screen and (min-width: map-get($grid-breakpoints, 'xl')) {
  .container {
  max-width: 1200px !important;
  }
}

$body-font-family: 'Gilmer';
$title-font: 'Gilmer';

.v-application {
   font-family: $body-font-family, sans-serif !important;
    .title { // To pin point specific classes of some components
       font-family: $title-font, sans-serif !important;
    }
 }
li a {
    text-decoration: none!important;
}
</style>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
  created(){
    this.getApi()
  },
  methods: {
    getApi(){
      this.$store.commit("getPosts");
    },
    buscarUrl(){
        return window.location.href
    },
    zoom(z){
      document.body.style.zoom = z;
    }
  },
  mounted() {
    this.z = this.storage.texto
    this.zoom(`${this.z == 0 ? '100': this.z == 1 ? '125' : this.z == 2 ? '150' : '100'}%`)
  },
  watch:{
    'storage.texto': function() {
      this.z = this.storage.texto
      this.zoom(`${this.z == 0 ? '100': this.z == 1 ? '125' : this.z == 2 ? '150' : '100'}%`)
    }
  }
};
</script>
