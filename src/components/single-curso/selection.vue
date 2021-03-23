<template>
  <div class="selection"></div>
</template>

<script>
export default {
    props: { curso: Object },
    
    mounted() {
        console.log(this.$store.state.api.curso[this.$route.params.slug])
    },
    
    watch: {
        '$store.state.api.curso': function() {
            console.log(this.$store.state.api.curso[this.$route.params.slug])
        }
    }
}
</script>

<style>

</style>