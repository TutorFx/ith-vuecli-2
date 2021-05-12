<template>
    <div class="navigation-block">
        <div v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl" class="nav-container" :class="scrollPosition == 0 ||scrollPosition == null ? 'is-on-top':'not-on-top'">
            <yellowline />
            <v-container class="nav-menu">
                
                <v-img dark max-width="120px" class="mr-5" src="@/assets/Branding/Logo.svg"></v-img>
                
                <div class="menu">
                    <v-btn text :small="$vuetify.breakpoint.lg ? true : false" dark>Vestibular</v-btn>
                    <v-btn to="/cursos" text :small="$vuetify.breakpoint.lg ? true : false" dark>Cursos</v-btn>
                    <v-btn text :small="$vuetify.breakpoint.lg ? true : false" dark>Acadêmico</v-btn>
                    <v-btn text :small="$vuetify.breakpoint.lg ? true : false" dark>Inovação e pesquisa</v-btn>
                    <v-btn text :small="$vuetify.breakpoint.lg ? true : false" dark class="transformith amber--text mr-5">Transformith</v-btn>
                </div>

                <v-text-field class="busca" color="amber" dark v-model="search" @keyup.enter="buscar">
                    <v-icon slot="append" color="amber" @click="buscar" dark>mdi-magnify</v-icon>
                </v-text-field>
                
                <v-badge v-if="storage.carrinho.length > 0" :content="storage.carrinho.length" color="#FCA311" overlap dark>
                    <v-btn
                    class="ml-2"
                    fab
                    dark
                    small
                    text
                    color="amber"
                    to="/carrinho"
                    >
                        <v-icon dark>
                            mdi-cart
                        </v-icon>
                    </v-btn>
                </v-badge>
                <v-btn
                    v-else
                    class="ml-2"
                    fab
                    dark
                    small
                    text
                    color="amber"
                    to="/carrinho"
                    >
                    <v-icon dark>
                        mdi-cart
                    </v-icon>
                </v-btn>

            </v-container>
        </div>
        <div v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
            <div>
                <v-app-bar
                color="#222C35"
                dense
                dark
                >
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title><v-img dark max-width="80px" class="mr-5" src="@/assets/Branding/Logo.svg"></v-img></v-toolbar-title>

                <v-spacer></v-spacer>

                <v-badge v-if="storage.carrinho.length > 0" :content="storage.carrinho.length" color="#FCA311" left bottom overlap>
                    <v-btn icon to="/carrinho">
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                </v-badge>
                <v-btn v-else icon to="/carrinho">
                    <v-icon>mdi-cart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                </v-app-bar>
                <v-sheet
                >
                    <v-navigation-drawer
                    v-model="drawer"
                    absolute
                    right
                    dark
                    temporary
                    class="drawer-mobile-menu"
                    color="#222C35"
                    >
                        <v-list
                            nav
                            dense
                        >
                            <v-list-item-group
                            >
                            <v-list-group
                            :value="false"
                            no-action
                            sub-group
                            color="white"
                            >
                                <template v-slot:activator>
                                    <v-list-item-content>
                                        <v-list-item-title dense dark>Acessibilidade</v-list-item-title>
                                    </v-list-item-content>
                                </template>

                                    <v-slider
                                    label="Texto"
                                    v-model="storage.texto"
                                    tick-size="4"
                                    step="1"
                                    dark
                                    :max="2"
                                    max-width="200px"
                                    ></v-slider>


                            </v-list-group>
                            <v-list-item to="/">
                                <v-list-item-icon>
                                    <v-icon> mdi-home </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Home</v-list-item-title>
                            </v-list-item>

                            <v-list-item to="/institucional">
                                <v-list-item-icon>
                                    <v-icon> mdi-creation </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Institucional</v-list-item-title>
                            </v-list-item>

                            <v-list-item to="/blog">
                                <v-list-item-icon>
                                    <v-icon> mdi-post </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Blog</v-list-item-title>
                            </v-list-item>

                            <v-divider></v-divider>

                            <v-list-group
                            :value="false"
                            no-action
                            sub-group
                            color="white"
                            >
                                <template v-slot:activator>
                                    <v-list-item-content>
                                        <v-list-item-title dense dark>Acesso</v-list-item-title>
                                    </v-list-item-content>
                                </template>

                                <v-list-item
                                    dense
                                    href="https://aluno.ithpos.com.br/#/login"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="'mdi-login'"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title v-text="'Aluno'"></v-list-item-title>
                                </v-list-item>

                                <v-list-item
                                    dense
                                    href="https://sistema.eduqtecnologia.com.br/#/nav/n5/home"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="'mdi-login'"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title v-text="'Professor'"></v-list-item-title>
                                </v-list-item>

                            </v-list-group>

                            <v-divider></v-divider>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon> mdi-phone </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Ouvidoria</v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon> mdi-draw </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Vestibular</v-list-item-title>
                            </v-list-item>

                            <v-list-item to="/cursos">
                                <v-list-item-icon>
                                    <v-icon> mdi-diamond-stone </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Cursos</v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon> mdi-teach </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Acadêmico</v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon> mdi-feature-search-outline </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Inovação e pesquisa</v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon> mdi-movie-open </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Transformith</v-list-item-title>
                            </v-list-item>

                            </v-list-item-group>
                        </v-list>

                    </v-navigation-drawer>
                </v-sheet>
            </div>
        </div>
    </div>
</template>

<script>
import yellowline from './Navbar/yellowline.vue';
export default {
    data: () => ({
        scrollPosition: null,
        drawer: false,
        search: '',
    }),
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        buscar(){
            this.$store.commit("changeSearch", this.search);
            if(this.$route.name != 'Cursos')
            this.$router.push('Cursos')  
        }
    },
    mounted(){
        window.addEventListener('scroll', this.updateScroll);
    },
    components: {
        yellowline
    },
    watch:{
        '$store.state.search.input': function() {
            //console.log(this.$store.state.search.input);
        }
    }
}
</script>

<style lang="scss" scoped v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl">
    .navigation-block {
        position: fixed;
        z-index: 50;
        width: 100%;
        .not-on-top{
            background-color: #222C35;
        }
        .is-on-top{
            background-color: #191a3500;
        }
        .nav-container{
            color: white;
            transition: all 0.5s;
            
            .nav-menu{
                display: flex;
                align-items: center;
                .nav-menu-btn{
                    background-color: none;
                }
                .menu{
                    display: flex;
                    align-items: center;
                }
                .busca{
                    max-width: 200px;
                    margin-left: auto;
                }
            }
            v-img{
                max-width: 120px;
            }
        }
    }
    .drawer-mobile-menu{
        min-height: 100vh;
    }
</style>