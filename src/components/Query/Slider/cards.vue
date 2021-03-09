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
            elevation="0"
            color="#222C35"
            class="mr-4"
            >
                <v-scale-transition>
                    <div :class="active ? undefined : undefined" class="slider-item">
                        
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
    .slider-item{
        width: 100%;
        height: 100%;
        background-color: #222C35;
    }
</style>