<template>
  <div class="navigation-block">
    <div
      v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
      class="nav-container"
      :class="
        scrollPosition == 0 || scrollPosition == null
          ? 'is-on-top'
          : 'not-on-top'
      "
    >
      <div class="nav-menu py-3 px-6">
        <router-link to="/">
        <v-img
          dark
          max-width="120px"
          class="mr-5"
          src="@/assets/Branding/Logo.svg"
        ></v-img>
        </router-link>
        <div class="menu">
          <v-btn to="/" small dark text>HOME</v-btn>
          <v-btn to="/institucional" dark small text>INSTITUCIONAL</v-btn>
          <v-btn to="/blog" small dark text>BLOG</v-btn>
          <v-btn dark to="/ouvidoria/ouvindo-voce" small text>OUVIDORIA</v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                small
                text
                v-bind="attrs"
                style="font-weight: 500;"
                v-on="on"
                dark
              >
                AREA DO ALUNO
              </v-btn>
            </template>
            <v-list>
              <v-list-item href="https://aluno.ithpos.com.br/#/login">
                <v-list-item-title>Aluno</v-list-item-title>
              </v-list-item>
              <v-list-item
                href="https://sistema.eduqtecnologia.com.br/#/nav/n5/home"
              >
                <v-list-item-title>Professor</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <v-spacer></v-spacer>

        <v-btn
          @click="configOpen()"
          small
          color="black"
          v-ripple="{ class: `warning--text` }"
          depressed
          dark
          ><v-icon class="mr-3" small color="#fca311"
            >fab fa-accessible-icon</v-icon
          >
          <span style="font-weight: 300; transform: translateY(-1px)"
            >acessibilidade</span
          ></v-btn
        >
      </div>
      <yellowline />
    </div>
    <div
      v-if="
        $vuetify.breakpoint.md ||
          $vuetify.breakpoint.sm ||
          $vuetify.breakpoint.xs
      "
    >
      <div>
        <v-app-bar color="#222C35" dense dark>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-toolbar-title
            ><v-img
              dark
              max-width="80px"
              class="mr-5"
              src="@/assets/Branding/Logo.svg"
            ></v-img
          ></v-toolbar-title>

          <v-spacer></v-spacer>

          <v-badge
            v-if="storage.carrinho.length > 0"
            :content="storage.carrinho.length"
            color="#FCA311"
            left
            bottom
            overlap
          >
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
        <v-sheet>
          <v-navigation-drawer
            v-model="drawer"
            absolute
            right
            dark
            temporary
            class="drawer-mobile-menu"
            color="#222C35"
          >
            <v-list nav dense>
              <v-list-item-group>
                <v-list-group :value="false" no-action sub-group color="white">
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title dense dark
                        >Acessibilidade</v-list-item-title
                      >
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
                  <v-switch
                    v-model="storage.contraste"
                    inset
                    :label="`Contraste: ${storage.contraste.toString()}`"
                  ></v-switch>
                </v-list-group>
                <v-list-item to="/">
                  <v-list-item-icon>
                    <v-icon> mdi-home </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-item v-if="false" to="/institucional">
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

                <v-list-group :value="false" no-action sub-group color="white">
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title dense dark>Acesso</v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item dense href="https://aluno.ithpos.com.br/#/login">
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

                <v-list-item to="/ouvidoria/ouvindo-voce">
                  <v-list-item-icon>
                    <v-icon> mdi-phone </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Ouvidoria</v-list-item-title>
                </v-list-item>

                <v-list-item v-if="false">
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

                <v-list-item v-if="false">
                  <v-list-item-icon>
                    <v-icon> mdi-teach </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Acadêmico</v-list-item-title>
                </v-list-item>

                <v-list-item v-if="false">
                  <v-list-item-icon>
                    <v-icon> mdi-feature-search-outline </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Inovação e pesquisa</v-list-item-title>
                </v-list-item>

                <v-list-item v-if="false">
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
import yellowline from "./Navbar/yellowline.vue";
export default {
  data: () => ({
    scrollPosition: null,
    drawer: false,
  }),
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    configOpen() {
      this.$store.commit("toggleConfig");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  components: {
    yellowline,
  },
  watch: {
    "$store.state.search.input": function() {
      //console.log(this.$store.state.search.input);
    },
  },
};
</script>

<style
  lang="scss"
  scoped
  v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
>
.navigation-block {
  position: fixed;
  z-index: 50;
  width: 100%;
  .not-on-top {
    background-color: #222c35;
  }
  .is-on-top {
    background-color: #191a3500;
  }
  .nav-container {
    color: white;
    transition: all 0.5s;

    .nav-menu {
      display: flex;
      align-items: center;
      .nav-menu-btn {
        background-color: none;
      }
      .menu {
        display: flex;
        align-items: center;
      }
    }
    v-img {
      max-width: 120px;
    }
  }
}
.drawer-mobile-menu {
  min-height: 100vh;
}

@import "~vuetify/src/styles/styles.sass";

@media only screen and (min-width: map-get($grid-breakpoints, "lg")) {
  .container {
    max-width: 1000px !important;
  }
}

@media only screen and (min-width: map-get($grid-breakpoints, "xl")) {
  .container {
    max-width: 1500px !important;
  }
}
</style>
