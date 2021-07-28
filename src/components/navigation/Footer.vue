<!-- CONFIG. HTML -->
<template>
  <div class="footer">
    <div class="yellow">
      <v-container class="d-flex align-center">
        <h3 class="white--text">Cadastre-se para receber nossas ofertas!</h3>
        <v-spacer></v-spacer>
        <v-form class="d-flex align-center">
          <v-text-field dark color="white" outlined dense style="max-width: 300px; transform: translateY(13px)" class="mr-3" label="E-mail"></v-text-field>
          <v-text-field dark color="white" outlined dense style="max-width: 300px; transform: translateY(13px)" class="mr-10" label="Nome"></v-text-field>
          <v-btn dark color="black" type="submit">Cadastrar</v-btn>
        </v-form>
      </v-container>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15287.132554329952!2d-49.2421684!3d-16.687732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0bba475482eadb5!2sITH%20Educacional!5e0!3m2!1spt-BR!2sbr!4v1627438471906!5m2!1spt-BR!2sbr"
      style="border:0; width: 100%; height: 500px"
      class="mb-10"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    <v-container class="container-footer">
      <!-- CONTAINER PRINCIPAL -->
      <v-row>
        <!-- container da  Logo -->
        <v-col cols="12" xs="12" sm="12" md="5">
          <v-img
            max-width="200px"
            class="mb-5"
            src="@/assets/Branding/logo-footer.svg"
          ></v-img>

          <v-col>
            <v-btn
              class="mr-2"
              onclick="window.open('https://api.whatsapp.com/send?phone=556230917079', '_blank')"
              x-small
              color="#fca311"
              v-ripple="{ class: `warning--text` }"
              depressed
              dark
              fab
              tile
            >
              <v-icon color="black">fab fa-whatsapp</v-icon></v-btn
            >
            <v-btn
              class="mr-2"
              onclick="window.open('https://instagram.com/itheducacional?igshid=7xbxrxu1t16a', '_blank')"
              x-small
              color="#fca311"
              v-ripple="{ class: `warning--text` }"
              depressed
              dark
              fab
              tile
            >
              <v-icon color="black">fab fa-instagram</v-icon></v-btn
            >
            <v-btn
              class="mr-2"
              onclick="window.open('https://www.facebook.com/ithposgraduacao/', '_blank')"
              x-small
              color="#fca311"
              v-ripple="{ class: `warning--text` }"
              depressed
              dark
              fab
              tile
            >
              <v-icon color="black">fab fa-facebook</v-icon></v-btn
            >
            <v-btn
              class="mr-2"
              onclick="window.open('https://www.linkedin.com/company/ithpos', '_blank')"
              x-small
              color="#fca311"
              v-ripple="{ class: `warning--text` }"
              depressed
              dark
              fab
              tile
            >
              <v-icon color="black">fab fa-linkedin</v-icon></v-btn
            >
            <v-btn
              class="mr-2"
              onclick="window.open('https://www.youtube.com/channel/UCrVECUVMXbh9FYdkVK_PbwA', '_blank')"
              x-small
              color="#fca311"
              v-ripple="{ class: `warning--text` }"
              depressed
              dark
              fab
              tile
            >
              <v-icon color="black">fab fa-youtube</v-icon></v-btn
            >
            <v-btn
              class="mr-2"
              onclick="window.open('mailto:ithpos@ithpos.com.br', '_blank')"
              x-small
              color="#fca311"
              v-ripple="{ class: `warning--text` }"
              depressed
              dark
              fab
              tile
            >
              <v-icon color="black">mdi-email</v-icon></v-btn
            >
          </v-col>

          <a
            class="logo-endereco"
            onclick="window.open('https://www.google.com/maps/dir/-16.7070333,-49.2740054/google+maps+ith+pos/@-16.694314,-49.2767863,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x935ef1253591ecd9:0xc0bba475482eadb5!2m2!1d-49.2421684!2d-16.687732', '_blank')"
          >
            Rua 203, Nº344 - St. Leste Universitário <br />
            CEP: 74.603-060 Goiânia - GO<br />
            INSTITUTO HEALTH ITH EIRELI ME<br />
            CNPJ: 15.272.624/0001-35
          </a>
        </v-col>

        <!-- Coluna da  Area -->
        <v-col cols="12" xs="12" sm="12" md="7">
          <!-- Container da  Area -->
          <v-row>
            <!-- coluna dos links 'Responsividade automatica das colunas dentro do Row de cima -->
            <v-col>
              <div class="footerlinks">
                <H3>ITH</H3> <br />
                <router-link class="" to="/institucional">
                  Institucional
                </router-link>
                <router-link class="" to="/cursos"> Cursos </router-link>
                <router-link class="" to="/blog"> Blog </router-link>
                <router-link
                  :to="`/page/${btn.slug}`"
                  v-for="(btn, i) in $store.state.api.pages"
                  :key="i"
                  >{{ btn.titulo }}</router-link
                >
                <a
                  onclick="window.open('https://aluno.ithpos.com.br/#/login', '_blank')"
                  >Acesso Aluno</a
                >
                <a
                  onclick="window.open('https://sistema.eduqtecnologia.com.br/#/nav/n5/home', '_blank')"
                  >Acesso Professor</a
                >
                <router-link v-if="false" class="" to="/academico">
                  Quem Somos
                </router-link>
                <router-link v-if="false" class="" to="/academico">
                  Transformith
                </router-link>
              </div>
            </v-col>

            <v-col>
              <div v-if="false" class="footerlinks">
                <H3>Informações</H3>
                <router-link v-if="false" class="" to="/academico">
                  Termos de Serviço
                </router-link>
                <router-link v-if="false" class="" to="/academico">
                  Politica e Privacidade
                </router-link>
                <router-link v-if="false" class="" to="/academico">
                  LGPD
                </router-link>
              </div>
            </v-col>

            <v-col>
              <div v-if="false" class="footerlinks">
                <H4>Acesso</H4>
                <router-link v-if="false" class="" to="/academico">
                  Termos de Serviço
                </router-link>
                <router-link v-if="false" class="" to="/academico">
                  Politica e Privacidade
                </router-link>
              </div>
            </v-col>

            <v-col>
              <div>
                <H4>Newsletter</H4> <br />

                <p>
                  Inscreva-se agora e receba atualizações sobre nossos cursos!
                </p>

                <form action="">
                  <!-- formulario -->

                  <!-- input 'text-field' -->
                  <v-text-field
                    outlined
                    class="mb-5"
                    label="* Seu e-mail"
                    hide-details="auto"
                    color="#fca311"
                    small
                  ></v-text-field>

                  <!-- button 'v-btn' -->
                  <v-btn depressed block type="send" color="#fca311">
                    Me inscrever
                  </v-btn>
                </form>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<!-- CONFIG. SCSS -->
<style lang="scss">
.footer {
  /* config. footer 'alinha container'/ */

  .container-footer {
    /* config. footer 'BETWEEN em LOGO e AREA' */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    .logo-endereco {
      font-family: "Gilmer";
      font-weight: 500;
      font-style: normal;
      font-display: swap;
      color: black;
    }

    .teste {
      background-color: #ddd;
    }

    .footerlinks {
      a {
        text-decoration: none;
        color: #777;
        display: block;
      }
    }
  }
}
</style>

<!-- CONFIG. JAVA SCRIPT -->
<script>
export default {
  data: () => ({
    emailRules: [
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
  }),
};
</script>
