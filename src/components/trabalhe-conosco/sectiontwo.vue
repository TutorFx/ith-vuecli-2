<template>
  <div class="sectionInformacoes">
      <div class="spacer"></div>

        <div class="container-informacoes-principal">

            <v-container class="container-informacoes">
                
                <v-row>       <!-- Row container -->

                    <!-- INICIO COLUNAS 'responsividade automativa' -->

                    <v-col cols="" xs="12">
                        <div class="inf-cor1 Inf">
                            <div>
                                Mais de <strong> 5 mil </strong> alunos Formados!
                            </div>
                        </div>
                    </v-col>


                    <v-col cols="" xs="12" >
                        <div class="Inf inf-cor2">
                            <div>98,5% de satisfação do aluno
                            <div class="icon-star">
                                <img src="@/assets/Sections/icon/star.svg" alt="">
                                <img src="@/assets/Sections/icon/star.svg" alt="">
                                <img src="@/assets/Sections/icon/star.svg" alt="">
                                <img src="@/assets/Sections/icon/star.svg" alt="">
                                <img src="@/assets/Sections/icon/star.svg" alt="">
                                </div>
                            </div> 

                        </div>
                    </v-col>
                    

                    <v-col cols="" xs="12" class="">
                        <div class="Inf inf-cor1">
                            <div><strong> Modelo ITH 4.0 </strong> Exclusivo</div>
                        </div>
                    </v-col>

                    <v-col cols="" xs="12">
                        <div class="Inf inf-cor2">
                            <div>
                                Presentes em mais de 05 países
                            </div>
                        </div>
                    </v-col>
                    
                    <v-col cols="" xs="12" class="">
                        <div class="Inf inf-cor1 ">
                            <div>                         
                                77% dos alunos <strong> atuando na área </strong> após sua formação
                            </div>
                        </div>
                    </v-col>
                    <!-- FIM COLUNAS  -->


                </v-row>
            </v-container>
        </div>

  </div>
</template>










<style lang="scss">

    .container-informacoes-principal{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 150px;
        background-color: #FCA311;
    
        .container-informacoes{
            display: flex;
            justify-content: space-around;
            align-items: center;
            
            //confg.cores das infos
            .inf-cor1{
                background-color: #fff;
            }
            .inf-cor2{
                color:white;
                background-color: #222c35;
            }

            // CONFIG. quadrado da informacao
            .Inf{
                text-align: center;
                padding: 3px;
                min-height: 100%;

                display: flex;
                justify-content: center;
                align-items: center;

                .icon-star{                                         //Confg.Icone star 'alinhar'
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                }
                img{                                                // Tamanho da imagem 'icone'
                    width: 10px;
                    height: 10px;
                }

                div{                                                //padding do texto das Informacoes
                    padding-top: 1px;
                    padding-bottom: 1px;
                    padding-right: 4px;
                    padding-left: 4px;
                }
            }

        }
    }
</style>















<style lang="scss" scoped> //Scoped serve para = Editar apenas o css deste Componente
    .spacer{
        margin-top: 500px;
    }

</style>

<script>
export default {

}
</script>
