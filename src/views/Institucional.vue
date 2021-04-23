<template>
  <layout>
      <slider />
      <blocks />
      <div class="primary">
            <v-container>
                <v-tabs :show-arrows="true" background-color="primary" class="pl-0" dark>
                    <v-tab to="quem-somos" >Quem Somos</v-tab>
                    <v-tab to="estatuto-regimento">Estatuto/Regimento</v-tab>
                    <v-tab to="planejamento-estrategico" >Planejamento Estrategico</v-tab>
                    <v-tab to="trabalhe-conosco" >Trabalhe Conosco</v-tab>
                </v-tabs>
            </v-container>
      </div>
      <div v-if="['estatuto-regimento', 'planejamento-estrategico', 'trabalhe-conosco'].includes($route.params.layout)">
          <div class="construction">
            <h3>Essa página está em construção</h3>
          </div>
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

<style scoped lang="scss">

  .construction{
    background-color: #f4f4f4;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

  }

</style>