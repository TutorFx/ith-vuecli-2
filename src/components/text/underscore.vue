<template>
    <div class="vazado">
        <div>
            <div></div>
            <h3 class="gilmer"><slot /></h3>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';
    .vazado{
    display: flex;
        div{
            div{
                background-color: #FCA311;
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
            }
            .gilmer{
                font-size: 30px;
            }
        }
    }    
    }
</style>