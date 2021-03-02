<template>
    <div class="slider-container">
        <div class="reset-slider">
            <v-container fixed class="py-0 px-0">
            <v-carousel height="90vh" hide-delimiters>
                <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                >
                
                    <div>
                        <div class="img-item-wraper">
                            <div class="img-item">
                                <v-img height="90vh" width="100%" contain :src="item.src"></v-img>
                            </div>
                            <div class="botoes">

                                <v-btn depressed class="mr-2 mb-2 black--text" color="#F4F4F4">Saiba Mais</v-btn>
                                <v-btn depressed class="mb-2" color="#FCA311">Me Matricular</v-btn>

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
            {
            src: `${require('@/assets/Slider/slide1.png')}`,
            },
            {
            src: `${require('@/assets/Slider/slide1.png')}`,
            },

        ],
        }
    },
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
              max-height: 90vh;
          }
      }
    .botoes{
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 50px;
    }
  }
</style>