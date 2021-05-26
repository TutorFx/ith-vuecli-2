<template>
    <div class="section5 pb-10" :style="`background-image: url(${require('@/assets/Sections/icon/s4logoblue.svg')});`" :class="storage.contraste ? 'contraste':''">
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .section5{
        background-color: #F4F4F4;
        min-height: 300px;
        background-position: 105% -10%;
        background-size: 50vw;
        font-family: 'Gilmer';
    }


    @import '~vuetify/src/styles/styles.sass';

    @media only screen and (min-width: map-get($grid-breakpoints, 'xs')) {

        .section5{
            background-size: 100vw;
        }
    }    
    @media only screen and (min-width: map-get($grid-breakpoints, 'md')) {

        .section5{
            background-size: 50vw;
        }
    }
</style>