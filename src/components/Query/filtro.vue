<template>
    <v-row>
        <v-col cols="12" xs="12" sm="12" md="6" lg="3" xl="3" >
            <v-combobox
                :items="selectCursos"
                v-model="cursos"
                item-value="id"
                item-text="text"
                :return-object="true"
                label="Cursos"
                color="#FCA311"
                item-color="#FCA311"
                multiple
                outlined
            ></v-combobox>
            <!-- {{cursos}} -->
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="3" xl="3" >
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
            <!-- {{modalidade}} -->
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="3" xl="3" >
            <v-combobox
                :items="selectArea"
                v-model="area"
                label="Área de Atuação"
                color="#FCA311"
                item-color="#FCA311"
                outlined
                multiple
            ></v-combobox>
                <!-- {{area}} -->
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="3" xl="3" >
            <v-combobox
                label="Busca"
                outlined
                v-model="search"
                color="#FCA311"
                item-color="#FCA311"
                :items="autocomplete"
                @keyup.enter="buscar()"
                hide-no-data
            >
                <v-icon
                slot="append"
                color="black"
                @click="buscar()"
                >
                mdi-magnify
                </v-icon>
            </v-combobox>
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
        selectCursos: [{text:'Graduação', id:'6'}, {text:'Pós-Graduação', id:'1'}, {text:'Extensão', id:'3'}, {text:'Internacional', id: '4'}, {text:'Técnico', id: '5'}],
        selectModalidade: [{text:'Digital', id:'3'},{text:'Presencial', id: '2'}, {text:'Híbrido', id: '1'}],
        selectArea: [],
        autocomplete: [],
    }),
    methods:{
        buscar(){
            this.$store.commit("changeSearch", this.search);
        },
        captura(){
            let cursos = this.$store.state.api.cursos
            Object.entries(cursos).map(curso => {
                Object.entries(curso[1].publicoAlvo).map(pa => {
                    if(!this.selectArea.includes(pa[1].name)){
                        this.selectArea.push(pa[1].name)
                        //console.log(pa[1].name)
                    }
                })
            })
        },
        atualizarAutofill(){
            
        }

    },
    watch: {
        'modalidade': function() {
            this.$store.commit("modalidade", this.modalidade);
        },
        'cursos': function() {
            var categorias = []
            Object.entries(this.cursos).map(cat => {
                categorias.push(cat[1]['id'])
            })
            this.$store.commit("tipocurso", categorias)
        },
        'area': function() {
             this.$store.commit("area", this.area)
        },
        '$store.state.api.cursos': function() {
            this.captura()
            //let arr = 
        },
        '$store.state.api.cursoFiltrado': function() {
            var autocomplete = []
            Object.entries(this.$store.state.api.cursoFiltrado).map(auto => {
                console.log(auto[1].titulo)
                autocomplete.push(auto[1].titulo)
            })
            this.autocomplete = autocomplete
            console.log(this.$store.state.api.cursoFiltrado)
        },
        search(){
            this.buscar()
        }
    },
    computed:{
        retornarCursos(){
            return 0
        }
    },
    created(){
    },
}
</script>

<style>

</style>