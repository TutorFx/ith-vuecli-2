<template>
    <div v-intersect="onIntersect" :class="storage.contraste ? 'contraste':''">
        <v-slide-group
        center-active
        v-if="type == 'slide'"
        >   
            <v-slide-item v-slot="{ }">
                <div>
                    <div v-if="$vuetify.breakpoint.lg" :style="`width:${( $vuetify.breakpoint.width - 980 )/2 -60}px;`"></div>
                    <div v-if="$vuetify.breakpoint.xl" :style="`width:${( $vuetify.breakpoint.width - 1200 )/2 -60}px;`"></div>
                </div>
            </v-slide-item>
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
                                    <v-parallax cover height="250" style="min-width: 260px" :src="curso.thumbnail.large"></v-parallax>
                                    <div class="card-gradient"  />
                                </div>
                                <div class="spacer" />
                                <div class="modality-bar">
                                    <h2>{{(curso.tipo == 1 ? 'Pós Graduação' :  curso.tipo == 2 || curso.tipo == 3 ? 'Extensão' : curso.tipo == 4 ? 'Internacional' : curso.tipo == 5 ? 'Técnico' : curso.tipo == 6 ? 'Graduação' : 'Error 404').toUpperCase()}}</h2>
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
        <v-row v-if="type == 'list'">
            <v-col
            v-for="(curso, n) in filtro"
            :key="n"
            align="center">
                <v-card
                height="330"
                width="270"
                :ripple="false"
                elevation="0"
                class="card-slide-item text-left"
                color="transparent"
                :to="`/curso/${curso.slug}/`"
                >
                    <v-scale-transition>
                        <div class="card-slide">
                            <div class="slider-item" color="warning" light v-ripple="{ class: `warning--text` }">
                                <div class="card-bg">
                                    <v-parallax cover height="250" style="min-width: 260px" :src="curso.thumbnail.large"></v-parallax>
                                    <div class="card-gradient"  />
                                </div>
                                <div class="spacer" />
                                <div class="modality-bar">
                                    <h2>{{(curso.tipo == 1 ? 'Pós Graduação' :  curso.tipo == 2 || curso.tipo == 3 ? 'Extensão' : curso.tipo == 4 ? 'Internacional' : curso.tipo == 5 ? 'Técnico' : curso.tipo == 6 ? 'Graduação' : 'Error 404').toUpperCase()}}</h2>
                                </div>
                                <div class="card-titulo">
                                    <h4 v-html="curso.titulo"></h4>
                                </div>
                            </div>
                        </div>
                    </v-scale-transition>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import _ from "lodash"
export default {
    watch: {
        '$store.state.api.cursos': function() {
            //console.log( this.$store.state.api.cursos )
        },
        '$store.state.search.modalidade': function() {
            //console.log(this.$store.state.search.modalidade);
        },
        'isIntersecting': function() {
            if (this.isIntersecting == true){
                if (this.$store.state.api.cursosError == false){
                    this.$store.commit("getApi");
                }
                if (this.$store.state.api.eduqError == false){
                    this.$store.commit("getEduq");
                }
            }
        }
    },
    computed:{
        filtro(){
            let filtro = []
            filtro = this.$store.state.api.cursos
            // Tipo
            var tipo = this.$store.state.search.tipocurso
            if(this.$store.state.search.tipocurso.length !== 0){
                filtro = _.filter(filtro, function(o) { return tipo.includes(o.tipo); });
            }
            // Modalidade
            var modalidadeArr = []
            for (this.m in this.$store.state.search.modalidade){
                modalidadeArr.push(this.$store.state.search.modalidade[this.m].id)
            }
            if(this.$store.state.search.modalidade.length !== 0){
                filtro = _.filter(filtro, function(o) { return modalidadeArr.includes(o.modalidade); });
            }
            // Area de Atuação
            let area = this.$store.state.search.area
            if(this.$store.state.search.area.length !== 0){
                //
                
                filtro = _.filter(filtro, function(o) { 
                    var ipa = []
                    Object.entries(o.publicoAlvo).map(x => {
                        ipa.push(x[1].name);
                    })
                    //console.log(ipa)
                    //console.log(area)
                    return area.some( ai => ipa.includes(ai) )
                });
                //Object.entries(filtro).map()
            }
            this.$store.commit("cursofiltrado", filtro)
            // Pesquisa de Texto
            var busca = this.$store.state.search.input
            function removeAcento(text){
                text = text.toLowerCase();                                                         
                text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
                text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
                text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
                text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
                text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
                text = text.replace(new RegExp('[Ç]','gi'), 'c');
                return text;  
            }
            if(this.$store.state.search.input != undefined && this.$store.state.search.input != ''){
                filtro = _.filter(filtro, function(o) {
                    var btitulo = removeAcento(o.titulo.toLowerCase())
                    var bbusca = removeAcento(busca.toLowerCase())
                    console.log()
                    return btitulo.includes(bbusca)
                })
            }
            console.log(filtro.length)
            return filtro
        }
    },
    props:{
        type: {
            type: String,
            required: true
        }
    },
    data: () => ({
        isIntersecting: false,
    }),
    mounted(){
        console.log(this.$vuetify.breakpoint.width)
    },
    methods: {
      onIntersect (entries, observer) {
        // More information about these options
        // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        this.isIntersecting = entries[0].isIntersecting
      },
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
                min-height: 150px;    
            }
            .modality-bar{
                display: flex;
                h2{
                    background-color: #fca311;
                    font-family: 'Gilmer';
                    padding: 5px 18px 5px 18px;
                    transform: translateX(-5px);
                    user-select: none;
                    font-size: 15px;
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