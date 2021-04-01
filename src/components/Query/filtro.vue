<template>
    <v-row>
        <v-col>
            <v-combobox
                :items="selectCursos"
                v-model="cursos"
                label="Cursos"
                color="#FCA311"
                item-color="#FCA311"
                multiple
                outlined
            ></v-combobox>
            {{cursos}}
        </v-col>
        <v-col>
            <v-combobox
                :items="selectModalidade"
                item-value="id"
                item-text="text"
                :return-object="true"
                v-model="modalidade"
                label="Modalidade"
                color="#FCA311"
                item-color="#FCA311"
                multiple
                outlined
            ></v-combobox>
            {{modalidade}}
        </v-col>
        <v-col>
            <v-combobox
                :items="selectArea"
                v-model="area"
                label="Área de Atuação"
                multiple
                color="#FCA311"
                item-color="#FCA311"
                outlined
            ></v-combobox>
                {{area}}
        </v-col>
        <v-col>
            <v-text-field
                label="Busca"
                outlined
                v-model="search"
                color="#FCA311"
            >
                <v-icon
                slot="append"
                color="black"
                >
                mdi-magnify
                </v-icon>
            </v-text-field>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        search: '',
        cursos: [],
        modalidade: [],
        area: [],
        selectCursos: ['Graduação', 'Pós-Graduação', 'Extensão', 'Internacional', 'Técnico'],
        selectModalidade: [{text:'Presencial', id: '2'}, {text:'Digital', id: '1'}],
        selectArea: ['Biomedicina', 'Biologia', 'Enfermagem', 'Farmácia', 'Gestão', 'Medicina', 'Multiprofissional', 'Psicologia']
    }),
    methos:{
        buscar(){
            this.$store.commit("changeSearch", this.search);
        }
    },
    watch: {
        'modalidade': function() {
            this.$store.commit("modalidade", this.modalidade);
        }
    }
}
</script>

<style>

</style>