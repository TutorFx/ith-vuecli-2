<template>
    <v-slide-group
    center-active
    >
        <v-slide-item
            v-for="(curso, n) in filtro"
            :key="n"
            v-slot="{ active, toggle }"
        >
            <v-card
            height="330"
            width="270"
            @click="toggle"
            :ripple="false"
            elevation="0"
            class="mx-2 card-slide-item"
            color="transparent"
            >
                <v-scale-transition>
                    <div class="card-slide">
                        <div :class="active ? undefined : undefined" class="slider-item" color="warning" light v-ripple="{ class: `warning--text` }">
                            <v-overlay
                                :absolute="true"
                                :value="active"
                                color="#191a35"
                                >
                                <v-btn
                                    color="#fca311"
                                    depressed
                                    class="mb-15"
                                    :to="`/curso/${curso.slug}/`"
                                >
                                    Ver curso
                                </v-btn>
                            </v-overlay>
                            <div class="card-bg">
                                <v-img cover height="250px" :src="curso.thumbnail.large"></v-img>
                                <div class="card-gradient"  />
                            </div>
                            <div class="spacer" />
                            <div class="modality-bar">
                                <h2>{{curso.tipo == 2 ? 'PÓS GRADUAÇÃO' : (curso.tipo == 1 ? 'EXTENSÃO' : '')}}</h2>
                            </div>
                            <div class="card-titulo">
                                <h4 v-html="curso.titulo"></h4>
                            </div>
                        </div>
                    </div>
                </v-scale-transition>
            </v-card>
        </v-slide-item>
    </v-slide-group>
</template>

<script>
export default {
    watch: {
        '$store.state.api.cursos': function() {
            console.log( this.$store.state.api.cursos )
        }
    },
    computed:{
        filtro(){
            let filtro

            filtro = this.$store.state.api.cursos

            return filtro
        }
    }
}
</script>

<style lang="scss">
$paddingslider: 5px;
.card-slide-item{
    min-height: 100%;
    margin-bottom: 5px;
    margin-right: -10px;
    background-color: #222c35;
    .card-slide{
        padding: 5px;
        min-height: 100%;
        .card-bg{
            position: absolute;
            max-width: 260px;
            max-height: 100%;
            //padding-right: 10px;
            overflow: hidden;
            .card-gradient{
                height: 150px;
                width: 150%;
                left: -25%;
                right: -25%;
                bottom: 0;
                background-image: linear-gradient(0deg, #222C35, #222c3500);
                position: absolute;
            }
        }
        .slider-item{
            width: 100%;
            height: calc(330px - 5px);
            background: #222C35;
            margin-right: -10px;
            .spacer{
                min-height: 170px;    
            }
            .modality-bar{
                display: flex;
                h2{
                    background-color: #fca311;
                    font-family: 'Gilmer';
                    padding: 5px 18px 5px 18px;
                    transform: translateX(-5px);
                    user-select: none;
                }
            }
            .card-titulo{
                h4{
                    padding: 10px 15px 10px 15px;
                    color: #fff;
                    text-transform: uppercase;
                    user-select: none;
                    max-height: 110px;
                    overflow: hidden;
                }
                transform: translate(0);
                font-size: 16px;
                max-width: 90%;
            }
        }
    }
}
</style>