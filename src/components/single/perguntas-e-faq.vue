<template>
  <div>
    <v-container v-if="$store.state.api.cursoLoaded && curso.acf.prova_social">
        <underscore linecolor="#fca311" class="mb-5"><h6>OPINIÃO DE QUEM JÁ FEZ</h6></underscore>
        <splide
        :options="$vuetify.breakpoint.mobile ? { rewind : true, width  : '100%', perPage: 1, gap: '1rem', autoplay: true} : { rewind : true, width  : '100%', perPage: 3, gap: '1rem', autoplay: true}">
            <splide-slide 
            v-for="(item,i) in curso.acf.prova_social"
            :key="i"
            >
                <div class="pa-10">
                    <div class="text-center"><h3 class="white--text mb-5">{{item.nome}}</h3></div>
                    
                    <v-icon max-width="15px" color="#fca311">fas fa-quote-left</v-icon>
                    <h5 class="white--text pa-3" v-html="item.avaliacao"></h5>
                    <div class="text-right">
                        <v-icon color="#fca311">fas fa-quote-right</v-icon>
                    </div>
                </div>
            </splide-slide>
        </splide>
    </v-container>
    <v-container v-if="$store.state.api.cursoLoaded && curso.acf.perguntas_frequentes">
        <underscore class="mb-10" linecolor="#fca311"><h6>PERGUNTAS MAIS FREQUENTES</h6></underscore>
        <v-row class="mb-10" justify="center">
            <v-expansion-panels focusable flat accordion>
            <v-expansion-panel
                v-for="(item,i) in curso.acf.perguntas_frequentes"
                :key="i"
            >
                <v-expansion-panel-header color="#f4f4f4">{{item.pergunta}}</v-expansion-panel-header>
                <v-expansion-panel-content v-html="item.resposta" class="pa-5">
                </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import underscore from "@/components/text/underscore.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
    props:{ curso: Object },
    components:{ underscore, Splide,
    SplideSlide },
    data: () => ({
    }),
}
</script>

<style lang="scss">
.splide__slide{
    background-color: #222C35;

}
.sectionSix{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    .container-Opiniao{
        .Column{
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;

            color: white;
            background-color: #222c35;

            font-family: 'Gilmer';
            font-style: normal;
            font-display: swap;
            text-align: center;

            img{
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
            
            .Titulo{
                font-size: 19px;
                font-weight: bold;
                
                margin-top: 7px;
                margin-bottom: 3px;
            }
            .SubTitulo{
                font-size: 14px;
                font-weight: 200;
                margin-bottom: 7px;
            }
            
            .Desc{
                margin-top: 17px;
                margin-bottom: 7px;
                font-size: 12px;

                font-weight: 100;

            }
        }
    }
}
@keyframes splide-loading {
    0% {
        transform: rotate(0)
    }
    to {
        transform: rotate(1turn)
    }
}

.splide__container {
    position: relative;
    box-sizing: border-box
}

.splide__list {
    margin: 0!important;
    padding: 0!important;
    width: -webkit-max-content;
    width: max-content;
    will-change: transform
}

.splide.is-active .splide__list {
    display: flex
}

.splide__pagination {
    display: inline-flex;
    align-items: center;
    width: 95%;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0
}

.splide__pagination li {
    list-style-type: none;
    display: inline-block;
    line-height: 1;
    margin: 0
}

.splide {
    visibility: hidden
}

.splide, .splide__slide {
    position: relative;
    outline: none
}

.splide__slide {
    box-sizing: border-box;
    list-style-type: none!important;
    margin: 0;
    flex-shrink: 0
}

.splide__slide img {
    vertical-align: bottom
}

.splide__slider {
    position: relative
}

.splide__spinner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #999;
    border-left-color: transparent;
    animation: splide-loading 1s linear infinite
}

.splide__track {
    position: relative;
    z-index: 0;
    overflow: hidden
}

.splide--draggable>.splide__track>.splide__list>.splide__slide {
    -webkit-user-select: none;
    user-select: none
}

.splide--fade>.splide__track>.splide__list {
    display: block
}

.splide--fade>.splide__track>.splide__list>.splide__slide {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0
}

.splide--fade>.splide__track>.splide__list>.splide__slide.is-active {
    position: relative;
    z-index: 1;
    opacity: 1
}

.splide--rtl {
    direction: rtl
}

.splide--ttb>.splide__track>.splide__list {
    display: block
}

.splide--ttb>.splide__pagination {
    width: auto
}

.splide__arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 2em;
    height: 2em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    opacity: .7;
    background: #ccc
}

.splide__arrow svg {
    width: 1.2em;
    height: 1.2em
}

.splide__arrow:hover {
    cursor: pointer;
    opacity: .9
}

.splide__arrow:focus {
    outline: none
}

.splide__arrow--prev {
    left: 1em
}

.splide__arrow--prev svg {
    transform: scaleX(-1)
}

.splide__arrow--next {
    right: 1em
}

.splide__pagination {
    position: absolute;
    z-index: 1;
    bottom: .5em;
    left: 50%;
    transform: translateX(-50%);
    padding: 0
}

.splide__pagination__page {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #ccc;
    border-radius: 50%;
    margin: 3px;
    padding: 0;
    transition: transform .2s linear;
    border: none;
    opacity: .7
}

.splide__pagination__page.is-active {
    transform: scale(1.4);
    background: #FCAA24
}

.splide__pagination__page:hover {
    cursor: pointer;
    opacity: .9
}

.splide__pagination__page:focus {
    outline: none
}

.splide__progress__bar {
    width: 0;
    height: 3px;
    background: #ccc
}

.splide--nav>.splide__track>.splide__list>.splide__slide {
    border: 3px solid transparent
}

.splide--nav>.splide__track>.splide__list>.splide__slide.is-active {
    border-color: #000
}

.splide--nav>.splide__track>.splide__list>.splide__slide:focus {
    outline: none
}

.splide--rtl>.splide__arrows .splide__arrow--prev, .splide--rtl>.splide__track>.splide__arrows .splide__arrow--prev {
    right: 1em;
    left: auto
}

.splide--rtl>.splide__arrows .splide__arrow--prev svg, .splide--rtl>.splide__track>.splide__arrows .splide__arrow--prev svg {
    transform: scaleX(1)
}

.splide--rtl>.splide__arrows .splide__arrow--next, .splide--rtl>.splide__track>.splide__arrows .splide__arrow--next {
    left: 1em;
    right: auto
}

.splide--rtl>.splide__arrows .splide__arrow--next svg, .splide--rtl>.splide__track>.splide__arrows .splide__arrow--next svg {
    transform: scaleX(-1)
}

.splide--ttb>.splide__arrows .splide__arrow, .splide--ttb>.splide__track>.splide__arrows .splide__arrow {
    left: 50%;
    transform: translate(-50%)
}

.splide--ttb>.splide__arrows .splide__arrow--prev, .splide--ttb>.splide__track>.splide__arrows .splide__arrow--prev {
    top: 1em
}

.splide--ttb>.splide__arrows .splide__arrow--prev svg, .splide--ttb>.splide__track>.splide__arrows .splide__arrow--prev svg {
    transform: rotate(-90deg)
}

.splide--ttb>.splide__arrows .splide__arrow--next, .splide--ttb>.splide__track>.splide__arrows .splide__arrow--next {
    top: auto;
    bottom: 1em
}

.splide--ttb>.splide__arrows .splide__arrow--next svg, .splide--ttb>.splide__track>.splide__arrows .splide__arrow--next svg {
    transform: rotate(90deg)
}

.splide--ttb>.splide__pagination {
    display: flex;
    flex-direction: column;
    bottom: 50%;
    left: auto;
    right: .5em;
    transform: translateY(50%)
}
</style>