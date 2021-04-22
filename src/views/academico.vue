<template>
  <layout>
      <slider />
      <blocks />
      <div class="primary">
            <v-container>
                <v-tabs :show-arrows="true" background-color="primary" class="pl-0" dark>
                    <v-tab @click="$router.push({ path: 'secretaria'})">Secretaria</v-tab>
                    <v-tab @click="$router.push({ path: 'biblioteca'})">Biblioteca</v-tab>
                    <v-tab @click="$router.push({ path: 'calendario', /*query: { layout: 'calendario' }*/})">Calendário academico</v-tab>
                    <v-tab @click="$router.push({ path: 'documentos-institucionais'})">Documentos Institucionais</v-tab>
                    <v-tab @click="$router.push({ path: 'ex-alunith'})">Ex-alunos/alunith</v-tab>
                </v-tabs>
            </v-container>
      </div>
      <div v-if="$route.params.layout == 'secretaria'">
          teste
      </div>
      <calendario v-if="$route.params.layout == 'calendario'"></calendario>

  </layout>
</template>

<script>
import slider from "@/components/home/slider"
import layout from "@/components/Layout.vue"
import blocks from "@/components/home/section2.vue"

import calendario from "@/components/academico/calendario-academico.vue"
import secretaria from "@/components/academico/secretaria.vue"
export default {
    components:{ layout, slider, blocks, calendario }
}
</script>

<style>

</style>