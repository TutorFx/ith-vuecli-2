<!-- CONFIG. HTML -->
<template>
  <div class="footer">

      <v-container class="container-footer">

        <!-- caixa -->
        <v-row>                       
          
          <v-col cols="5" sm="12" lg="5">
            aaaaaaa logo aqui
            <!-- <v-img src="@/assets/"></v-img> -->
          </v-col>
          

          <v-col cols="7" sm="12" lg="7">
            
            <!-- caixa Area -->
            <v-row>
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
                  <form action="">
                    <v-text-field
                      outlined
                      class="mb-5"
                      label="* Seu e-mail"
                      hide-details="auto"
                      color="#fca311"
                    ></v-text-field>


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
    // edita aqui
      .footerlinks{
        a{
          background-color: red;
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

