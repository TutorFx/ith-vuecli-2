<template>
    <div class="vazado">
        <div>
            <div :style="`background-color:${linecolor}!important;`"></div>
            <h3 class="gilmer"><slot /></h3>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        linecolor: String
    }
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';
    .vazado{
    display: flex;
    
    transform: translateY(50%);
        div{
            div{
                height: 50%;
                width: 100%;
            }
            .gilmer{
                font-size: 40px;
                position: relative;
                top: -100%;
                padding-right: 15px;
                padding-left: 15px;
            }
        }
    }
    @media only screen and (min-width: map-get($grid-breakpoints, 'xs')) {
    .vazado{
        div{
            div{
                //
            }
            .gilmer{
                font-size: 24px;
            }
        }
    }    
    }
</style>