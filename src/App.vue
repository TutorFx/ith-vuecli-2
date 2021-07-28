<template>
  <v-app :style="overlay ? 'overflow: hidden;height: 100vh;' : undefined">
    <div>
      <router-view />
    </div>
    <div v-show="overlay" class="loading">
      <div class="breeding-rhombus-spinner">
        <div class="rhombus child-1"></div>
        <div class="rhombus child-2"></div>
        <div class="rhombus child-3"></div>
        <div class="rhombus child-4"></div>
        <div class="rhombus child-5"></div>
        <div class="rhombus child-6"></div>
        <div class="rhombus child-7"></div>
        <div class="rhombus child-8"></div>
        <div class="rhombus big"></div>
      </div>
    </div>
  </v-app>
</template>

<style lang="scss">
div[vw] {
  top: 50% !important;
}
@font-face {
  font-family: "Gilmer";
  src: url("./assets/Fonts/GilmerMedium.woff2") format("woff2"),
    url("./assets/Fonts/GilmerMedium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gilmer";
  src: url("./assets/Fonts/GilmerLight.woff2") format("woff2"),
    url("./assets/Fonts/GilmerLight.woff") format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gilmer";
  src: url("./assets/Fonts/GilmerHeavy.woff2") format("woff2"),
    url("./assets/Fonts/GilmerHeavy.woff") format("woff");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gilmer";
  src: url("./assets/Fonts/GilmerBold.woff2") format("woff2"),
    url("./assets/Fonts/GilmerBold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}


$body-font-family: "Gilmer";
$title-font: "Gilmer";

.v-application {
  font-family: $body-font-family, sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: $title-font, sans-serif !important;
  }
}
li a {
  text-decoration: none !important;
}

.loading {
  background-color: #232D36;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10000;

  display: flex;
  justify-content: center;
  align-items: center;
}
.breeding-rhombus-spinner {
  height: 65px;
  width: 65px;
  position: relative;
  transform: rotate(45deg);
}

.breeding-rhombus-spinner,
.breeding-rhombus-spinner * {
  box-sizing: border-box;
}

.breeding-rhombus-spinner .rhombus {
  height: calc(65px / 7.5);
  width: calc(65px / 7.5);
  animation-duration: 2000ms;
  top: calc(65px / 2.3077);
  left: calc(65px / 2.3077);
  background-color: white;
  position: absolute;
  animation-iteration-count: infinite;
}

.breeding-rhombus-spinner .rhombus:nth-child(2n + 0) {
  margin-right: 0;
}

.breeding-rhombus-spinner .rhombus.child-1 {
  animation-name: breeding-rhombus-spinner-animation-child-1;
  animation-delay: calc(100ms * 1);
}

.breeding-rhombus-spinner .rhombus.child-2 {
  animation-name: breeding-rhombus-spinner-animation-child-2;
  animation-delay: calc(100ms * 2);
}

.breeding-rhombus-spinner .rhombus.child-3 {
  animation-name: breeding-rhombus-spinner-animation-child-3;
  animation-delay: calc(100ms * 3);
}

.breeding-rhombus-spinner .rhombus.child-4 {
  animation-name: breeding-rhombus-spinner-animation-child-4;
  animation-delay: calc(100ms * 4);
}

.breeding-rhombus-spinner .rhombus.child-5 {
  animation-name: breeding-rhombus-spinner-animation-child-5;
  animation-delay: calc(100ms * 5);
}

.breeding-rhombus-spinner .rhombus.child-6 {
  animation-name: breeding-rhombus-spinner-animation-child-6;
  animation-delay: calc(100ms * 6);
}

.breeding-rhombus-spinner .rhombus.child-7 {
  animation-name: breeding-rhombus-spinner-animation-child-7;
  animation-delay: calc(100ms * 7);
}

.breeding-rhombus-spinner .rhombus.child-8 {
  animation-name: breeding-rhombus-spinner-animation-child-8;
  animation-delay: calc(100ms * 8);
}

.breeding-rhombus-spinner .rhombus.big {
  height: calc(65px / 3);
  width: calc(65px / 3);
  animation-duration: 2000ms;
  top: calc(65px / 3);
  left: calc(65px / 3);
  background-color: white;
  animation: breeding-rhombus-spinner-animation-child-big 2s infinite;
  animation-delay: 0.5s;
}

@keyframes breeding-rhombus-spinner-animation-child-1 {
  50% {
    transform: translate(-325%, -325%);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-2 {
  50% {
    transform: translate(0, -325%);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-3 {
  50% {
    transform: translate(325%, -325%);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-4 {
  50% {
    transform: translate(325%, 0);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-5 {
  50% {
    transform: translate(325%, 325%);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-6 {
  50% {
    transform: translate(0, 325%);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-7 {
  50% {
    transform: translate(-325%, 325%);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-8 {
  50% {
    transform: translate(-325%, 0);
  }
}

@keyframes breeding-rhombus-spinner-animation-child-big {
  50% {
    transform: scale(0.5);
  }
}
</style>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    overlay: true
  }),
  created() {
    this.getApi();
  },
  methods: {
    getApi() {
      this.$store.commit("getPosts");
      this.$store.commit("getPages");
    },
    buscarUrl() {
      return window.location.href;
    },
    zoom(z) {
      document.body.style.zoom = z;
    },
  },
  mounted() {
    this.z = this.storage.texto;
    this.zoom(
      `${
        this.z == 0 ? "100" : this.z == 1 ? "125" : this.z == 2 ? "150" : "100"
      }%`
    );
    setTimeout(() => {
        //be executed after 1 second
        this.overlay = false
    }, 1500);
  },
  beforeUnmount() {
      this.overlay = true
  },
  watch: {
    "storage.texto": function() {
      this.z = this.storage.texto;
      this.zoom(
        `${
          this.z == 0
            ? "100"
            : this.z == 1
            ? "125"
            : this.z == 2
            ? "150"
            : "100"
        }%`
      );
    },
    $route (to, from){
        this.overlay = true;
        setTimeout(() => {
            //be executed after 1 second
            this.overlay = false
        }, 1000);
    }
  },
};
</script>
