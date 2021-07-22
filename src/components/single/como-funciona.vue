<template>
<div v-if="$store.state.api.cursoLoaded">
        <router-link v-if="$store.state.api.cursoLoaded" to="/cursos">
            <v-img class="mb-15" :src="curso.acf.como_funciona ? curso.acf.como_funciona : ''"></v-img>
        </router-link>
        <v-parallax v-if="false" class="como-funciona" src="@/assets/bg/background-esteto.jpg" :style="`background-image: url(${require('@/assets/bg/background-esteto.jpg')});`">
            <v-container class="py-15">
                <!-- <v-img class="mb-15" v-if="$store.state.api.cursoLoaded" :src="curso.acf.como_funciona && false"></v-img> -->
                <v-row class="white--text mb-15">
                    <v-col cols="12" md="6">
                        <v-card class="pa-0" dark color="primary">
                            <v-row class="pa-4">
                                <v-col cols="3">
                                    <v-img contain src="@/assets/temp/code-branch-solid.svg" :aspect-ratio="1/1"></v-img>
                                </v-col>
                                <v-col cols="9">
                                    <h3>Você Expert</h3>
                                    <h4 class="font-weight-light">70% da Especialização em Negócios Gastronômicos possui inúmeros casos reais do dia a dia na gestão e operação de negócios alimentícios, você terá uma vasta bagagem e experiência técnica.</h4>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    
                </v-row>
                <v-divider
                
                dark
                class="mb-10"
                ></v-divider>
                <div class="text-center" v-if="$store.state.api.cursoLoaded">
                    <v-btn v-if="false" disabled class="mx-3 rounded-0" color="#fff">Baixar PDF do curso</v-btn>
                    <v-btn class="mx-3 rounded-0" :disabled="!curso.acf.id" @click="curso.acf.id != undefined ? storage.carrinho.push(JSON.stringify({img: curso.thumbnail.large, id: curso.acf.id, url: rota})) :''" color="#fcaa24">Quero me matricular!</v-btn>
                </div>
            </v-container>
        </v-parallax>
</div>
</template>

<script>
export default {
    props:{ curso: Object },
    mounted() {
        //console.log(this.$router.currentRoute.fullPath);
        this.rota = this.$router.currentRoute.fullPath
    },
    data: () => ({
        model: 0,
        rota: ''
    }),
}
</script>

<style lang="scss">
.como-funciona{
    background-size: cover;
}
</style>