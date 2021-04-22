<template>
  <layout>
      <slider />
      <blocks />
      <div class="primary">
            <v-container>
                <v-tabs :show-arrows="true" background-color="primary" class="pl-0" dark>
                    <v-tab @click="$router.push({ path: 'quem-somos'})">Quem Somos</v-tab>
                    <v-tab @click="$router.push({ path: 'estatuto-regimento'})">Estatuto/Regimento</v-tab>
                    <v-tab @click="$router.push({ path: 'planejamento-estrategico', /*query: { layout: 'calendario' }*/})">Planejamento Estrategico</v-tab>
                    <v-tab @click="$router.push({ path: 'trabalhe-conosco'})">Trabalhe Conosco</v-tab>
                </v-tabs>
            </v-container>
      </div>
      <div v-if="$route.params.layout == 'secretaria'">
          teste
      </div>
      <quem-somos v-if="$route.params.layout == 'quem-somos'"></quem-somos>

  </layout>
</template>

<script>
import slider from "@/components/home/slider"
import layout from "@/components/Layout.vue"
import blocks from "@/components/home/section2.vue"

import quemSomos from "@/components/institucional/quem-somos.vue"
export default {
    components:{ layout, slider, blocks, quemSomos }
}
</script>

<style>

</style>