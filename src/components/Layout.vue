<template>
  <div>
    <navbar-one :class="storage.contraste ? 'contraste':''" />
      <slot id="content" ></slot>
    <footer-one :class="storage.contraste ? 'contraste':''" />
  </div>
</template>
<style>
.contraste{
    filter: grayscale(1)!important;
}
</style>
<script>
import navbarOne from "@/components/navigation/Navbar.vue";
import footerOne from "@/components/navigation/Footer.vue";
export default {
      components: { navbarOne, footerOne },
}
</script>
