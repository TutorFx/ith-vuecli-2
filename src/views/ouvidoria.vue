<template>
  <layout>
      <slider />
      <blocks />
      <div class="primary">
            <v-container>
                <v-tabs :show-arrows="true" background-color="primary" align="center" class="pl-0" dark>
                    <v-tab to="faq">FAQ</v-tab>
                    <v-tab to="contato">CONTATO</v-tab>
                    <v-tab to="ouvindo-voce">OUVINDO VOCÊ</v-tab>
                </v-tabs>
            </v-container>
      </div>
      <div v-if="$route.params.layout == 'faq'">
          <v-container>

          </v-container>
      </div>
      <div v-if="$route.params.layout == 'contato'">
          <v-container class="pb-15">
              <underscore linecolor="#FCA311" class="my-15">CONTATO</underscore>
                <v-row>
                    <v-col>
                        <v-row>
                            <v-col class="d-flex" cols="12">
                                <svg style="height: 100px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FCA311" d="M256 0C161.896 0 85.333 76.563 85.333 170.667c0 28.25 7.063 56.26 20.49 81.104L246.667 506.5c1.875 3.396 5.448 5.5 9.333 5.5s7.458-2.104 9.333-5.5l140.896-254.813c13.375-24.76 20.438-52.771 20.438-81.021C426.667 76.563 350.104 0 256 0zm0 256c-47.052 0-85.333-38.281-85.333-85.333S208.948 85.334 256 85.334s85.333 38.281 85.333 85.333S303.052 256 256 256z"/></svg>
                                <div>
                                    <div><h3>Endereço</h3></div>
                                    <div>Rua 203, N. 344<br>Setor Leste Universitário<br>Goiânia/GO<br>(Ao lado da Receita Federal)</div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col>
                        <v-row>
                            <v-col cols="12" class="d-flex justify-end">
                                <div>
                                    <div><h3>Atendimento</h3></div>
                                    <div><b>Telefone</b><br>
                                    (62)3091-7079<br>
                                    <b>Horário</b><br>
                                    07h ás 22h</div>
                                </div>
                                <svg style="height: 100px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FCA311" d="M298.667 25.6h-85.333a8.536 8.536 0 00-8.533 8.533 8.536 8.536 0 008.533 8.533h85.333a8.536 8.536 0 008.533-8.533 8.536 8.536 0 00-8.533-8.533zM358.4 25.6h-8.533a8.536 8.536 0 00-8.533 8.533 8.536 8.536 0 008.533 8.533h8.533a8.536 8.536 0 008.533-8.533A8.536 8.536 0 00358.4 25.6zM266.598 435.2H245.41c-12.979 0-23.543 10.564-23.543 23.543v4.122c0 12.979 10.564 23.535 23.535 23.535h21.188c12.979 0 23.543-10.556 23.543-23.535v-4.122c0-12.979-10.564-23.543-23.535-23.543zm6.469 27.665a6.475 6.475 0 01-6.468 6.468H245.41c-3.575 0-6.477-2.901-6.477-6.468v-4.122a6.48 6.48 0 016.477-6.477h21.18a6.478 6.478 0 016.477 6.477v4.122z"/><path fill="#FCA311" d="M370.227 0H141.781c-17.007 0-30.848 13.841-30.848 30.848v450.304c0 17.007 13.841 30.848 30.848 30.848h228.437c17.007 0 30.848-13.841 30.848-30.839V30.848C401.067 13.841 387.226 0 370.227 0zM384 481.152c0 7.595-6.178 13.781-13.773 13.781H141.781c-7.603 0-13.781-6.187-13.781-13.773V30.848c0-7.595 6.178-13.781 13.781-13.781h228.437c7.603 0 13.781 6.187 13.781 13.781v450.304z"/><path fill="#FCA311" d="M392.533 51.2H119.467a8.536 8.536 0 00-8.533 8.533v358.4a8.536 8.536 0 008.533 8.533h273.067a8.536 8.536 0 008.533-8.533v-358.4c0-4.71-3.823-8.533-8.534-8.533zM384 409.6H128V68.267h256V409.6z"/></svg>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
          </v-container>
      </div>
      <div v-if="$route.params.layout == 'ouvindo-voce'">
          <v-container>
              <v-form>
                    <v-text-field
                    label=""
                    :rules="rules"
                    hide-details="auto"
                    ></v-text-field>
              </v-form>
          </v-container>
      </div>

  </layout>
</template>

<script>
import slider from "@/components/home/slider"
import layout from "@/components/Layout.vue"
import blocks from "@/components/home/section2.vue"

import underscore from "@/components/text/underscore.vue"

export default {
    components:{ layout, slider, blocks, underscore }
}
</script>

<style>

</style>