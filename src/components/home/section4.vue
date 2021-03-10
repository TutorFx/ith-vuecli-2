<template>
  <div class="section4 pb-10" :style="`background-image: url(${require('@/assets/Sections/icon/s4logoblue.svg')});`">
    <v-container>
        <v-row>
            <v-col cols="12" md="4" class="pt-0"></v-col>
            <v-col cols="12" md="8" class="pt-0">
                <div class="homemockupdiv">
                    <div class="homemockup">
                        <div class="mb-3">
                            <span class="estudeondequiser py-4 px-10">ESTUDE ONDE QUISER</span>
                        </div>
                        <v-img src="@/assets/Mockup/homemockup.png"></v-img>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
    <v-container>
        <underscore class="mb-5" :linecolor="'#FCA311'">MAIS DESEJADOS</underscore>
    </v-container>
    <query class="mb-5" />
  </div>
</template>

<script>
import query from "@/components/Query/Slider/query.vue"
import underscore from "@/components/text/underscore.vue"
 export default{
     components: {
         query, underscore
     }
 }
</script>

<style lang="scss">

    .section4{
        background-color: #F4F4F4;
        min-height: 300px;
        background-position: -5% -10%;
        background-size: 50vw;
        font-family: 'Gilmer';
    }
    .homemockup{
        transform: translateY(calc(-50% + 50px));
        margin-bottom: calc(-50% + 50px);
    }
    .homemockupdiv{
        text-align: center;
    }

</style>

<style scoped lang="scss">
    @import '~vuetify/src/styles/styles.sass';



    @media only screen and (min-width: map-get($grid-breakpoints, 'xs')) {
        .estudeondequiser{
            font-size: 1.3rem;
            border: 1px solid white;
            font-family: 'Gilmer';
            font-weight: 800;
            color: white;
        }  
        .section4{
            background-size: 100vw;
        }
    }    
    @media only screen and (min-width: map-get($grid-breakpoints, 'md')) {
        .estudeondequiser{
            font-size: 2rem;
            border: 3px solid white;
            font-family: 'Gilmer';
            font-weight: 800;
            color: white;
        }
        .section4{
            background-size: 50vw;
        }
    }
</style>