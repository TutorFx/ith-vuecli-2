<template>
<div>
    <div id="yellowline">
        <v-container>
            <v-row align-content="center" justify="center">
                <v-col class="yellowlinks" align="center" cols="6">
                    <v-btn to="/" small text>HOME</v-btn>
                    <v-btn to="/institucional" small text>INSTITUCIONAL</v-btn>
                    <v-btn to="/blog" small text>BLOG</v-btn>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn small text v-bind="attrs" style="font-weight: 500;" v-on="on" >
                            ACESSO
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item href="https://aluno.ithpos.com.br/#/login">
                                <v-list-item-title>Aluno</v-list-item-title>
                            </v-list-item>
                            <v-list-item href="https://sistema.eduqtecnologia.com.br/#/nav/n5/home">
                                <v-list-item-title>Professor</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-btn to="/ouvidoria/faq" small text>OUVIDORIA</v-btn>
                </v-col>
                <v-col align="center">
                    <v-btn class="mr-2" onclick="window.open('https://api.whatsapp.com/send?phone=556230917079', '_blank')" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab > <v-icon color="#fca311">fab fa-whatsapp</v-icon></v-btn>
                    <v-btn class="mr-2" onclick="window.open('https://instagram.com/itheducacional?igshid=7xbxrxu1t16a', '_blank')" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab > <v-icon color="#fca311">fab fa-instagram</v-icon></v-btn>
                    <v-btn class="mr-2" onclick="window.open('https://www.facebook.com/ithposgraduacao/', '_blank')" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab > <v-icon color="#fca311">fab fa-facebook</v-icon></v-btn>
                    <v-btn class="mr-2" onclick="window.open('https://www.linkedin.com/company/ithpos', '_blank')" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab > <v-icon color="#fca311">fab fa-linkedin</v-icon></v-btn>
                    <v-btn class="mr-2" onclick="window.open('https://www.youtube.com/channel/UCrVECUVMXbh9FYdkVK_PbwA', '_blank')" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab > <v-icon color="#fca311">fab fa-youtube</v-icon></v-btn>
                    <v-btn class="mr-4" onclick="window.open('mailto:ithpos@ithpos.com.br', '_blank')" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab > <v-icon color="#fca311">mdi-email</v-icon></v-btn>
                    <v-btn @click="configOpen()" small color="black" v-ripple="{ class: `warning--text` }" depressed dark><v-icon class="mr-3" small color="#fca311">fab fa-accessible-icon</v-icon> <span style="font-weight: 300; transform: translateY(-1px)">acessibilidade</span></v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div class="settings-desktop">
        <v-container class="pa-0">
            <config />
        </v-container>
    </div>
</div>
</template>

<script>
import config from "@/components/settings/config.vue"
export default {
    components: {
        config
    },
    methods: {
        configOpen(){
            this.$store.commit("toggleConfig")
        }
    }
}
</script>

<style lang="scss">
    #yellowline{
        background-color: #fca311;
        .yellowlinks{
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                font-family: Gilmer;
                font-weight: bold;
            }
        }
    }
    .settings-desktop{
        background-color: black;
    }
</style>