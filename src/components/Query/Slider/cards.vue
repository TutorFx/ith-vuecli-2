<template>
    <v-slide-group
    center-active
    >
        <v-slide-item
            v-for="n in 15"
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
                            <div >
                                
                            </div>
                            <div class="spacer" />
                            <div class="modality-bar">
                                <h2>PÓS GRADUAÇÃO</h2>
                            </div>
                        </div>
                    </div>
                </v-scale-transition>
            </v-card>
        </v-slide-item>
    </v-slide-group>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$paddingslider: 5px;
.card-slide-item{
    min-height: 100%;
    margin-bottom: 5px;
    .card-slide{
        padding: 5px;
        min-height: 100%;
        .slider-item{
            min-width: 100%;
            height: calc(330px - 5px);
            background: #222C35;
            .spacer{
                min-height: 170px;    
            }
            .modality-bar{
                display: flex;
                h2{
                    background-color: #fca311;
                    font-family: 'Gilmer';
                    padding: 5px 18px 5px 18px;
                    transform: translateX(-5px);
                    user-select: none;
                }
            }
        }
    }
}
</style>