<template>
<div>
        <router-link to="/cursos">
            <v-img class="mb-15" v-if="$store.state.api.cursoLoaded" :src="curso.acf.como_funciona"></v-img>
        </router-link>
        <div v-if="false" class="como-funciona" :style="`background-image: url(${require('@/assets/bg/background-esteto.jpg')});`">
            <v-container class="py-15">
                <v-img class="mb-15" v-if="$store.state.api.cursoLoaded" :src="curso.acf.como_funciona"></v-img>
                <v-row class="white--text mb-15">
                    <v-col cols="12" md="6">
                        <v-row>
                            <v-col cols="3"><v-icon size="50" color="#fcaa24">fas fa-code-branch</v-icon></v-col>
                            <v-col cols="9">
                                <h3>Você Expert</h3>
                                <h6>70% da Especialização em Negócios Gastronômicos possui inúmeros casos reais do dia a dia na gestão e operação de negócios alimentícios, você terá uma vasta bagagem e experiência técnica.</h6>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-row>
                            <v-col cols="3"><v-icon size="50" color="#fcaa24">fas fa-hand-holding-usd</v-icon></v-col>
                            <v-col cols="9">
                                <h3>Ganhar Mais</h3>
                                <h6>85% dos ex-alunos estão trabalhando na área com salários 2 a 4 vezes maiores que antes da pós-graduação, além disso suas contratações foram antes de terminar o curso.</h6>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-row>
                            <v-col cols="3"><v-icon size="50" color="#fcaa24">fas fa-brain</v-icon></v-col>
                            <v-col cols="9">
                                <h3>Desenvolver Competências</h3>
                                <h6>89% dos alunos disseram ter adquirido habilidades e competências que não o tinham, como: liderança, proatividade, criatividade, agilidade e visão sistêmica.</h6>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-row>
                            <v-col cols="3"><v-icon size="50" color="#fcaa24">fas fa-project-diagram</v-icon></v-col>
                            <v-col cols="9">
                                <h3>Realizar Networking</h3>
                                <h6>A comunidade Alunith é um grupo de especialistas em suas áreas quem trocam experiências, fazem parcerias, pedem indicações e compartilham aprendizados, diariamente.</h6>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-divider
                inset
                dark
                class="mb-10"
                ></v-divider>
                <div class="text-center" v-if="$store.state.api.cursoLoaded">
                    <v-btn disabled class="mx-3 rounded-0" color="#fff">Baixar PDF do curso</v-btn>
                    <v-btn class="mx-3 rounded-0" :disabled="!curso.acf.id" @click="curso.acf.id != undefined ? storage.carrinho.push(JSON.stringify({img: curso.thumbnail.large, id: curso.acf.id, url: rota})) :''" color="#fcaa24">Quero me matricular!</v-btn>
                </div>
            </v-container>
        </div>
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