<template>
<div id="yellowline">
   <v-container>
       <v-row align-content="center" justify="center">
           <v-col class="yellowlinks" align="center" cols="7">
               <v-btn small text>HOME</v-btn>
               <v-btn small text>INSTITUCIONAL</v-btn>
               <v-btn small text>BLOG</v-btn>
               <v-btn small text>ACESSO</v-btn>
               <v-btn small text>OUVIDORIA</v-btn>
           </v-col>
           <v-col align="center">
               <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fca311">mdi-email</v-icon></v-btn>
               <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fca311">mdi-email</v-icon></v-btn>
               <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fca311">mdi-email</v-icon></v-btn>
               <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fca311">mdi-email</v-icon></v-btn>
               <v-btn class="mr-2" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fca311">mdi-email</v-icon></v-btn>
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