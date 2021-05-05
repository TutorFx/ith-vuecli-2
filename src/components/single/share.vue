<template>
    <div class="icones">
        <v-btn class="mr-2" onclick="window.open('whatsapp://send?text='+encodeURI('Ei, eu tenho um curso para você!')+ '%0D' + window.location.href, '_blank')" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fff">fab fa-whatsapp</v-icon></v-btn>
        <v-btn class="mr-2" onclick="window.open('https://www.facebook.com/ithposgraduacao/', '_blank')" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fff">fab fa-facebook</v-icon></v-btn>
        <v-btn class="mr-2" onclick="window.open('mailto:ithpos@ithpos.com.br', '_blank')" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fff">mdi-email</v-icon></v-btn>
        <v-btn class="mr-2" onclick="window.open('https://www.linkedin.com/shareArticle?mini=true&url='+window.location.href+'&title=&summary=&source=', '_blank')" x-small color="black" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="#fff">fab fa-linkedin</v-icon></v-btn>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>