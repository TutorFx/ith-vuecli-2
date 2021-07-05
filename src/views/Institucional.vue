<template>
  <layout>
    <div
      :style="
        `height:${
          !$vuetify.breakpoint.mobile ? '150px' : '48px'
        };background-color: #2E3740`
      "
    ></div>
    <blocks />
    <div class="primary" :class="storage.contraste ? 'contraste' : ''">
      <v-container>
        <v-tabs
          :show-arrows="true"
          background-color="primary"
          class="pl-0"
          dark
        >
          <v-tab to="quem-somos">Quem Somos</v-tab>
          <v-tab to="estatuto-regimento">Estatuto/Regimento</v-tab>
          <v-tab to="planejamento-estrategico">Planejamento Estrategico</v-tab>
          <v-tab to="trabalhe-conosco">Trabalhe Conosco</v-tab>
        </v-tabs>
      </v-container>
    </div>
    <div
      v-if="
        ['estatuto-regimento', 'planejamento-estrategico'].includes(
          $route.params.layout
        )
      "
    >
      <div class="construction">
        <h3>Essa página está em construção</h3>
      </div>
    </div>
    <quem-somos
      v-if="$route.params.layout == 'quem-somos'"
      :class="storage.contraste ? 'contraste' : ''"
    ></quem-somos>
    <div v-if="$route.params.layout == 'trabalhe-conosco'">
      <v-container>
        <h3 class="dark--text mb-4 mt-10">
            Preencha o formulário abaixo para nos enviar sua
            <span class="text--primary">mensagem!</span>
        </h3>
        <v-form v-on:submit.prevent="onSubmit">
          <v-text-field label="Nome" required color="#FCA311" filled></v-text-field>
          <v-row class="pa-0">
            <v-col cols="12" lg="8">
              <v-text-field label="Email" color="#FCA311" filled></v-text-field>
            </v-col>
            <v-col cols="12" lg="4">
              <v-text-field
                label="Celular"
                color="#FCA311"
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="4">
              <v-text-field label="Cpf" color="#FCA311" filled></v-text-field>
            </v-col>
            <v-col cols="12" lg="8">
              <v-text-field
                label="Qual a sua área de formação?"
                color="#FCA311"
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="12">
              <v-textarea label="Mensagem" color="#FCA311" filled></v-textarea>
            </v-col>
          </v-row>
          <v-btn
            color="primary"
            @click="enviar = true"
            type="submit"
            class="mb-10"
          >
            enviar formulário
          </v-btn>
        </v-form>
        <v-snackbar
        v-model="enviar"
        >
        Formulário enviado com sucesso!

            <template v-slot:action="{ attrs }">
                <v-btn
                color="yellow"
                text
                v-bind="attrs"
                @click="enviar = false"
                >
                Fechar
                </v-btn>
            </template>
        </v-snackbar>
      </v-container>
    </div>
  </layout>
</template>

<script>
import layout from "@/components/Layout.vue";
import blocks from "@/components/home/section2.vue";

import quemSomos from "@/components/institucional/quem-somos.vue";
export default {
  components: { layout, blocks, quemSomos },
  data: () => ({
      enviar: false,
  })
};
</script>

<style scoped lang="scss">
.construction {
  background-color: #f4f4f4;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
