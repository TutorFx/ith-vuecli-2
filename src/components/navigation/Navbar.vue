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

                <v-btn
                class="mx-2"
                fab
                dark
                small
                text
                color="amber"
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
                color="#191A35"
                dense
                dark
                >
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title><v-img dark max-width="80px" class="mr-5" src="@/assets/Branding/Logo.svg"></v-img></v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-cart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                </v-app-bar>

                <v-navigation-drawer
                v-model="drawer"
                absolute
                left
                temporary
                class="drawer-mobile-menu"
                >
                    <v-list
                        nav
                        dense
                    >
                        <v-list-item-group
                        active-class="primary--text"
                        >
                        <v-list-item>
                            <v-list-item-title>Cursos</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-title>Acadêmico</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-title>Quem somos</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-title>Blog</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-title>Acesso</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-title>Transformith</v-list-item-title>
                        </v-list-item>

                        </v-list-item-group>
                    </v-list>
                </v-navigation-drawer>
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