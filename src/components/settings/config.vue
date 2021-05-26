<template>
    <v-expand-transition>
        <div v-if="$store.state.config.open">
            <div class="py-5">
                <div class="text-center mb-3">Configurações de acessibilidade:</div>
                <v-slider
                label="Tamanho do texto"
                v-model="storage.texto"
                tick-size="4"
                step="1"
                dark
                :max="2"
                max-width="200px"
                small
                ></v-slider>
                <v-switch
                dark
                v-model="storage.contraste"
                inset
                :label="`Contraste: ${storage.contraste ? 'Ativo':'Desabilitado'}`"
                ></v-switch>
            </div>
        </div>
    </v-expand-transition>
</template>

<script>
export default {
    data: () => ({
        value: 1,
    })
}
</script>

<style>

</style>