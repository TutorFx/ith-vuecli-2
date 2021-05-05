<template>
    <div>
        <strong> {{this.espectadores}} estão vendo essa página </strong>
    </div>
</template>

<script>
export default {
    data(){
        return{
            espectadores: Math.floor(Math.random() * (90 - 40) + 40),
        }
    },
    mounted() {
      this.$nextTick(function () {
          window.setInterval(() => {
              this.segundo();
          }, 1000)
      });
    },
    methods: {
        segundo() {
            this.espectadores = Math.floor(Math.random() * (90 - 40) + 40);
            return this.espectadores;
        },
    },
}
</script>

<style>

</style>