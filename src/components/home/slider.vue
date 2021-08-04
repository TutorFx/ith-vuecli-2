<template>
    <div class="slider-container" >
        <div class="reset-slider">
            <div :style="`height:${!$vuetify.breakpoint.mobile ? '150px':'48px'};`"></div>
            <v-carousel :cycle="true" hide-delimiters height="auto" :style="`height: calc(90vh - ${!$vuetify.breakpoint.mobile ? '150px':'48px'});`">
                <v-carousel-item
                v-for="(item,i) in items" :key="i">
                    <v-container class="pa-0 d-flex align-center justify-center">
                        <img 
                        :src="$vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm' ? item.acf.mobile : $vuetify.breakpoint.name == 'md' ? item.acf.medium : $vuetify.breakpoint.name == 'lg' ? item.acf.large : item.thumbnail" 
                        :aspect-ratio="bp[$vuetify.breakpoint.name].x/bp[$vuetify.breakpoint.name].y"
                        align="center center"
                        eager
                        contain
                        :style="`max-width:100%; width: auto; height: calc(90vh - ${!$vuetify.breakpoint.mobile ? '150px':'48px'});`"
                        >
                    </v-container>
                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        items: [
            // {
            // src: `${require('@/assets/Slider/slide1.png')}`,
            // },
        ],
        bp: {
            sm: {
                x: 751,
                y: 832
            },
            xs: {
                x: 751,
                y: 832
            },
            md: {
                x: 1875,
                y: 1816
            },
            lg: {
                x: 2048,
                y: 1600
            },
            xl: {
                x: 751,
                y: 432
            }
        }
        }
    },
    created(){
        this.$store.commit("getSlides")
    },
    watch: {
        '$store.state.api.slides': function() {
            if (this.$store.state.api.slidesError == false){
                for(this.a in this.$store.state.api.slides){
                    this.items.push(this.$store.state.api.slides[this.a])
                }
                //console.log(this.items)
            }
        },
        '$store.state.api.slidesError': function() {
            //console.log('triggered')
        },
    }
}
</script>

<style lang="scss">
  .reset-slider{
    padding: 0;
  }
  .slider-container{
      background-color: #222C35!important;
  }
</style>