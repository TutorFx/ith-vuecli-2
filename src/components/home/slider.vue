<template>
    <div class="slider-container">
        <div class="reset-slider">
            <v-container fixed class="py-0 px-0">
            <v-carousel :height="$route.name == 'Home' ? 90+'vh' : 70+'vh'" hide-delimiters>
                <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                >
                
                    <div>
                        <div class="img-item-wraper">
                            <div class="img-item" >
                                <v-img contain v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm && item.acf.mobile" position="center center" :style="`height: ${$route.name == 'Home' ? 90+'vh' : 70+'vh'};`" :src="item.acf.mobile ? item.acf.mobile : ''"></v-img>
                                <v-img contain v-else-if="$vuetify.breakpoint.md && item.acf.medium" position="center center" :style="`height: ${$route.name == 'Home' ? 90+'vh' : 70+'vh'};`" :src="item.acf.medium ? item.acf.medium : ''"></v-img>
                                <v-img contain v-else-if="$vuetify.breakpoint.lg && item.acf.large" position="center center" :style="`height: ${$route.name == 'Home' ? 90+'vh' : 70+'vh'};`" :src="item.acf.large ? item.acf.large : ''"></v-img>
                                <v-img contain v-else position="center center" :style="`height: ${$route.name == 'Home' ? 90+'vh' : 70+'vh'};`" :src="item.thumbnail ? item.thumbnail : ''"></v-img>
                            </div>
                            <div class="botoes mb-10">

                                <v-btn depressed to="/institucional/quem-somos" class="mr-2 mb-2 black--text" color="#F4F4F4">Saiba Mais</v-btn>
                                <v-btn depressed to="/cursos" class="mb-2" color="#FCA311">Me Matricular</v-btn>

                            </div>
                        </div>
                    </div>

                </v-carousel-item>
            </v-carousel>
            </v-container>
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
        }
    },
    created(){
        this.$store.commit("getSlides")
    },
    watch: {
        '$store.state.api.slides': function() {
            console.log('aaaa')
            if (this.$store.state.api.slidesError == false){
                for(this.a in this.$store.state.api.slides){
                    this.items.push(this.$store.state.api.slides[this.a])
                }
                console.log(this.items)
            }
        },
        '$store.state.api.slidesError': function() {
            console.log('triggered')
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
  .img-item-wraper{
    display: flex;
    justify-content: center;
    align-items: center;
      .img-item{
          .v-image{

          }
      }
    .botoes{
        position: absolute;
        bottom: 0;
        left: 0;
    }
  }
</style>