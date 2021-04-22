<template>
  <v-app>
    <navbar-one />
      <slot id="content"></slot>
    <footer-one />
  </v-app>
</template>

<script>
import navbarOne from "@/components/navigation/Navbar.vue";
import footerOne from "@/components/navigation/Footer.vue";
export default {
      components: { navbarOne, footerOne },

}
</script>
