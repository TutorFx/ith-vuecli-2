<template>
    <layout>
        <div>
            <v-main class="carrinho primary">
                <v-container class="pb-0 px-0">
                    <div :class="!$vuetify.breakpoint.mobile ? 'pt-16 mt-16':'pt-10'" class="white--text">
                        <div id="carrinho-container" :class="!$vuetify.breakpoint.mobile ? 'pa-15':''">
                            <div class="primary px-5 py-3 mb-5 d-flex"><v-icon color="white" class="mr-5">mdi-cart-outline</v-icon><h3>Produtos adicionados ao carrinho</h3></div>
                            <div v-if="produtos.length == 0" class="text-center">Não exite nenhum curso em seu carrinho</div>
                            <div v-for="(produto, id) in produtos" v-ripple :key="id" class="mb-auto">
                                <div class="d-flex justify-content-center align-items-center align-center pa-5 white--text">
                                    <v-img height="80px" max-width="80px" class="mr-5" :src="produto.img"></v-img>
                                        <router-link :to="produto.url">
                                            <div class="item-titulo-carrinho">
                                                {{produto.titulo}}
                                            </div>
                                        </router-link>
                                    <v-icon color="white" class="ml-auto" @click="removerCarrinho(produto.index)">mdi-close</v-icon>
                                </div>
                            </div>
                        </div>
                        <div class="white--text pa-15 pt-5 carrinho-botoes text-right">
                            <v-btn depressed text color="#fca311" class="mr-5" @click="storage.carrinho = []">Limpar Carrinho</v-btn>
                            <v-btn depressed color="#fca311" @click="comprar()">Finalizar compra</v-btn>
                        </div>
                    </div>
                </v-container>
            </v-main>
        </div>
    </layout>

</template>

<script>
import layout from "@/components/Layout.vue"
export default {
    components: { layout },
    data: () => ({
        produtos: [],
        selecao: []
    }),
    watch:  {
        'storage.carrinho' : function() {
            this.carregarCarrinho()
        },
        '$store.state.api.eduq' : function() {
            this.carregarCarrinho()
        }
    },
    methods: {
        carregarCarrinho(){
            let eduq
            let produtos = []
            let selecao = []
            let index = 0
            for(eduq in this.$store.state.api.eduq){
                //console.log(this.$store.state.api.eduq[eduq])
                for(this.produto in this.storage.carrinho){
                    
                    this.produto = JSON.parse(this.storage.carrinho[this.produto])
                    //console.log(this.produto.id == this.$store.state.api.eduq[eduq].id)
                    //console.log(this.$store.state.api.eduq[eduq])

                    if(this.produto.id == this.$store.state.api.eduq[eduq].id){
                        //console.log(this.produto.id)
                        produtos.push({
                            id: this.produto.id,
                            titulo: this.$store.state.api.eduq[eduq].titulo,
                            img: this.produto.img,
                            index: index,
                            url: this.produto.url
                        }); 
                        index += 1; 
                        selecao.push(this.produto.id)
                    }
                        
                        
                }
            }
            this.produtos = produtos
            this.selecao = selecao
            console.log(this.selecao)
            //console.log(this.produtos.length)
        },
        removerCarrinho(id){
            this.storage.carrinho.splice(id, 1)
        },
        comprar(){
            window.open(`http://inscricao.eduqtecnologia.com.br/login-aluno?dominio=ith&cursos=[${this.selecao}]&carrinhoDeCompra=1`);
        }
    },
    created(){
    },
    mounted() {
        this.carregarCarrinho()
    }
}
</script>

<style lang="scss">
    .carrinho{
        min-height: 65vh;
    }
    #carrinho-container{
        background: #1c242b;
        min-height: 600px;
        border-start-start-radius: 15px;
        border-start-end-radius: 15px;
    }
    .carrinho-botoes{
        background: #192127;
    }
    .item-titulo-carrinho{
        color: white;
    }
</style>