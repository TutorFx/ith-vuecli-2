<!-- CONFIG. HTML -->
<template>
  <div class="footer">

      <v-container class="container-footer" >

      <!--XS - Smal/Large mobile  <600px 
          SM - Medium Table       600px > < 960px 
          MD - LAPTOP             960px > < 1264px 
          LG - DESKTOP            1264px > < 1904px 
          XL - 4K ULTRA WIDE      > 1904px
      -->

        <!-- CONTAINER PRINCIPAL -->  
        <v-row>                       
          

          <!-- container da  Logo -->
          <v-col cols="12" xs="12" sm="12" md="5">
            
            <v-img max-width="200px" class="mb-5" src="@/assets/Branding/logo-footer.svg"></v-img>

            <v-col>
                <v-btn class="mr-2" onclick="window.open('https://api.whatsapp.com/send?phone=556230917079', '_blank')" x-small color="#fca311" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="black">fab fa-whatsapp</v-icon></v-btn>
                <v-btn class="mr-2" onclick="window.open('https://instagram.com/itheducacional?igshid=7xbxrxu1t16a', '_blank')" x-small color="#fca311" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="black">fab fa-instagram</v-icon></v-btn>
                <v-btn class="mr-2" onclick="window.open('https://www.facebook.com/ithposgraduacao/', '_blank')" x-small color="#fca311" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="black">fab fa-facebook</v-icon></v-btn>
                <v-btn class="mr-2" onclick="window.open('https://www.linkedin.com/company/ithpos', '_blank')" x-small color="#fca311" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="black">fab fa-linkedin</v-icon></v-btn>
                <v-btn class="mr-2" onclick="window.open('https://www.youtube.com/channel/UCrVECUVMXbh9FYdkVK_PbwA', '_blank')" x-small color="#fca311" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="black">fab fa-youtube</v-icon></v-btn>
                <v-btn class="mr-2" onclick="window.open('mailto:ithpos@ithpos.com.br', '_blank')" x-small color="#fca311" v-ripple="{ class: `warning--text` }" depressed dark fab tile> <v-icon color="black">mdi-email</v-icon></v-btn>
            </v-col>

            <div class="logo-endereco">
              Rua 203, Nº344 - St. Leste Universitário <br>
              CEP: 74.603-060 Goiânia - GO
            </div>


          </v-col>
          

          <!-- Coluna da  Area -->
          <v-col cols="12" xs="12" sm="12" md="7"> 
            
            <!-- Container da  Area -->
            <v-row>


              <!-- coluna dos links 'Responsividade automatica das colunas dentro do Row de cima -->
              <v-col>

                <div class="footerlinks">
                  <H3>ITH</H3> <br>
                  <router-link class="" to="/academico"> Acadêmico </router-link> <br>
                  <router-link class="" to="/cursos"> Cursos </router-link> <br>
                  <router-link class="" to="/blog"> Blog </router-link> <br>
                  <router-link class="" to="/academico"> Quem Somos </router-link> <br>
                  <router-link class="" to="/academico"> Transformith </router-link> <br>
                </div>
              </v-col>


              <v-col>
                <div class="footerlinks">
                  <H3>Informações</H3> <br>
                  <router-link class="" to="/academico"> Termos de Serviço </router-link> <br>
                  <router-link class="" to="/academico"> Politica e Privacidade </router-link> <br>
                  <router-link class="" to="/academico"> LGPD </router-link> <br>
                </div>
              </v-col>

              <v-col>
                <div class="footerlinks">
                  <H4>Acesso</H4> <br>
                  <router-link class="" to="/academico"> Termos de Serviço </router-link> <br>
                  <router-link class="" to="/academico"> Politica e Privacidade </router-link> <br>
                </div>
              </v-col>

              <v-col>
                <div>
                  <H4>Newsletter</H4> <br>
                  
                  <p> Inscreva-se agora e receba atualizações sobre nossos cursos! </p>
                  
                  <form action="">              <!-- formulario -->
                  
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
.footer{                                /* config. footer 'alinha container'/ */
  display: flex;
  justify-content: center;

  height: 300px;

  .container-footer{                    /* config. footer 'BETWEEN em LOGO e AREA' */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    .logo-endereco{
      font-family: 'Gilmer';
      font-weight: 500;
      font-style: normal;
      font-display: swap;
      color: black;

    }

    .teste{
      background-color: #ddd;
    }

      .footerlinks{
        a{
          text-decoration: none;
          color: #777;
        }
      }
  }
}

</style>
















<!-- CONFIG. JAVA SCRIPT -->
<script>
export default {

}
</script>

