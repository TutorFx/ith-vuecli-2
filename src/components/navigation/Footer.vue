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
            
            <!-- <v-img src="@/assets/"></v-img> -->


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

