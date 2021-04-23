<template>
<div>
    <div id="quemSomos" :style="'background-image:url('+require('@/assets/quem-somos/background.jpg')+');'">
        <v-container>
            <v-row align="center" class="py-5 mt-10 mb-10">
                <v-col cols="12" md="6">
                    <v-img src="@/assets/quem-somos/qs1.svg" width="100%"></v-img>
                </v-col>
                <v-col cols="12" md="6">
                    <v-img src="@/assets/quem-somos/qs2.svg" width="100%"></v-img>
                </v-col>
            </v-row>
            <v-row ref="anaobox" align="end">
                <v-col cols="12" md="6">
                    <v-img class="ana" :style="!$vuetify.breakpoint.mobile ? 'margin-bottom: -50%;' : ''" src="@/assets/quem-somos/ana.png"></v-img>
                </v-col>
                <v-col class="pb-0">
                    <v-img src="@/assets/quem-somos/valores.svg"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div class="timeline" :style="'background-image:url('+require('@/assets/quem-somos/background.svg')+');'">
        <v-container :style="!$vuetify.breakpoint.mobile ? 'min-height: 300px;' : ''">
            <div class="underline mb-5">
                <underscore linecolor="#FCA311"> Nossa História </underscore>
            </div>
            <div :style="!$vuetify.breakpoint.mobile ? 'height:200px;' : ''"></div>
            <v-img class="mb-15" src="@/assets/quem-somos/timeline.svg"></v-img>
            <v-img class="mb-15" src="@/assets/quem-somos/time.svg"></v-img>
        </v-container>
    </div>
</div>
</template>

<script>
import underscore from "@/components/text/underscore.vue"
export default {
    components: {
        underscore
    },
    mounted() {
    }
}
</script>

<style lang="scss">

#quemSomos{
    background-position: center center;
    min-height: 50vh;
    background-size: cover;
}
.underline{
    display: flex;
    justify-content: flex-end;
}
.timeline{
    background-color: #F4F4F4;
}

</style>