<!-- CONFIG. HTML -->
<template>
    <div class="sectionQuemSomos" >
        <v-container class="container-QuemSomos mt-10">
            <v-row>

                <v-col col="" xs="12" sm="12" md="6">
                    <div class="Titulo mb-5"> <h1 class="px-2"> QUEM SOMOS </h1> </div>

                    <div class="Paragrafo pr-5">
                        Somos pessoas que trabalham 
                        incansavelmente para que seu sonho seja 
                        parte da nossa missão, economizando 
                        tempo e encurtando o caminho para o 
                        sucesso profissional. Transformação de 
                        vidas é o nosso maior valor e isto, é 
                        imensurável!
                    </div>


                </v-col>

    

                <v-col col="" xs="12" sm="12" md="6" class="px-10">
                    <div class="Missao mb-5">
                        <h1> MISSÃO </h1>
                        
                        Transformar a vida de pessoas através 
                        de uma educação criativa e interativa.
                    </div>
                    
                    <div class="Visao mb-5">
                        <h1> VISÃO </h1>
                        
                        Ser a principal referência em educação 
                        em saúde e estar presente em todas as 
                        regiões do país.
                    </div>


                </v-col>
            


                <v-col col="" xs="12" sm="12" md="6">
                    <img src="https://www.ithpos.com.br/img/comboApp.c80a96e0.png" alt="Imagem" 
                         title="Imagem" width="300px" height="auto">
                    
                </v-col>



                <v-col col="" xs="12" sm="12" md="6">
                    <div class="Valores px-7 pt-10">
                        <div class="V1 my-2"> Ética </div>
                        <div class="V2 my-2"> Humanização </div>
                        <div class="V3 my-2"> Experiência </div>
                        <div class="V4 my-2"> Inovação </div>
                        <div class="V5 my-2"> Transformação </div>
 
                    </div>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>















<!-- CONFIG. SCSS -->
<style lang="scss">
    .sectionQuemSomos{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;

        margin-top: 20px;

        background:#eee;
        background:linear-gradient(90deg, #222C35, #484d52, #222C35, #4e5255, #222C35);



        .container-QuemSomos{
            .Titulo h1{
                font-family: 'Gilmer';
                font-weight: 500px;
                font-style: normal;

                text-transform: uppercase;
                text-align: left;
                color:#fff;;

                width: fit-content;
                border: 2px solid #FCA311;

            }
            .Paragrafo{
                font-family: 'Gilmer';
                font-weight: 500px;
                font-style: normal;

                color:#fff;
                text-align: justify;
            }



            .Missao{
                text-align: left;
                
                font-family: 'Gilmer';
                font-weight: 300px;
                font-style: normal;
                font-display: swap;

                color:#fff;
                
                h1{
                    color: #fff;;

                    font-family: 'Gilmer';
                    font-weight: 500px;
                    font-style: normal;
                    font-display: swap;  
                    margin-bottom: 5px;

                    text-transform: uppercase;
                }
            }


            .Visao{
                text-align: right;
                
                font-family: 'Gilmer';
                font-weight: 300px;
                font-style: normal;
                font-display: swap;

                color: #fff;

                h1{
                    color: #fff;

                    font-family: 'Gilmer';
                    font-weight: 500px;
                    font-style: normal;
                    font-display: swap;  

                    text-align: right;
                    text-transform: uppercase;
                    margin-bottom: 5px;
                }
            }


            .Valores{
                margin-top: 3px;

                min-height: 100%;

                border: 2px solid #FCA311;
                
                color: #fff;
                font-family: 'Gilmer';
                font-weight: bold;
                font-style: normal; 
                text-align: center;
            

                .V1, .V3, .V5{
                    text-align: left;
                }
                .V2, .V4{
                    text-align: right;
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

