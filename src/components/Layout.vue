<template>
  <div>
    <navbar-one />
      <slot id="content"></slot>
      <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
          <div class="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    <footer-one />
  </div>
</template>

<script>
import VueScript2 from 'vue-script2'
import navbarOne from "@/components/navigation/Navbar.vue";
import footerOne from "@/components/navigation/Footer.vue";
export default {
      components: { navbarOne, footerOne },
      mounted(){
        VueScript2.load('https://vlibras.gov.br/app/vlibras-plugin.js').then(function () {
          new window.VLibras.Widget('https://vlibras.gov.br/app');
        })
      }
}
</script>
