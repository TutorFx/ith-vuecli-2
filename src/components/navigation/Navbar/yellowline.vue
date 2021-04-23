<template>
<div id="yellowline">
   <v-container>
       <v-row align-content="center" justify="center">
           <v-col class="yellowlinks" align="center" cols="7">
               <v-btn to="/" small text>HOME</v-btn>
               <v-btn to="/institucional" small text>INSTITUCIONAL</v-btn>
               <v-btn to="/blog" small text>BLOG</v-btn>
               <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        small
                        text
                        v-bind="attrs"
                        v-on="on"
                        >
                        ACESSO
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item href="https://aluno.eduqtecnologia.com.br/#/login">
                            <v-list-item-title>Aluno</v-list-item-title>
                        </v-list-item>
                        <v-list-item href="https://sistema.eduqtecnologia.com.br/#/nav/n5/home">
                            <v-list-item-title>Professor</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
               <v-btn to="/ouvidoria" small text>OUVIDORIA</v-btn>
           </v-col>
           <v-col align="center">
               <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fca311">fab fa-whatsapp</v-icon></v-btn>
               <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fca311">fab fa-instagram</v-icon></v-btn>
               <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fca311">fab fa-facebook</v-icon></v-btn>
               <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fca311">fab fa-linkedin</v-icon></v-btn>
               <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fca311">fab fa-youtube</v-icon></v-btn>
               <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fca311">mdi-email</v-icon></v-btn>

           </v-col>
       </v-row>
   </v-container>
</div>
</template>

<script>
export default {

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
</style>