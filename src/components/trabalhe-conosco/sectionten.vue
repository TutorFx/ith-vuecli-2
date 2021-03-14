<!-- CONFIG. HTML -->
<template>
    <div class="sectionCombos">
        <v-container class="container-Combos my-10">
            <v-row>
                
                <v-col cols="" xs="12" md="4" lg="4">
                    <div class="Digital">
                        <h1 class="mt-1"> Digital </h1>

                        <ul> <li> 16x de <strong> R$ 270,09*</strong></li></ul>
                        <small> (*cartão de crédito recorrente) </small>

                        <ul > <li class="my-0"> 01x de <strong> R$ 3.024,99*</strong></li></ul>
                        <small>  (*á vista) </small>
                        
                        <br>
                        <small> ** 10% desconto na pontualidade no boleto ou cartão </small>

                        <div class="Desc px-3 mx-5 mb-2"> Selecione sua Forma de Pagamento </div>

                    </div>
                </v-col>
                
                
                <v-col cols="" xs="12" md="4" lg="4">
                    <div class="Combos px-3">
                        <h1 class=" mt-1"> COMBOS </h1>

                        <div class="Desc mb-3">
                            Adicione mais um curso com um super desconto. <br>
                            <strong> Não perca tempo! </strong>
                        </div>

                        <v-btn depressed small dark color="#FCA311"> Quero! </v-btn>


                    </div>
                    
                </v-col>
                
                
                <v-col cols="" xs="12" md="4" lg="4">
                    <div class="Compartilhe">
                        <h1> Compartilhe </h1>

                        <div class="Desc"> 
                            <strong> 35 estão vendo essa página </strong>
                        </div>
                        
                    </div>
                    
                </v-col>



            </v-row>
        </v-container>
    </div>
</template>















<!-- CONFIG. SCSS -->
<style lang="scss">
    .sectionCombos{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;

        .container-Combos{
            color: #222C35;
            text-align: center;

            .Digital{
                font-family: 'Gilmer';
                font-weight: normal;
                text-align: center;
                border: 2px solid #FCA311;

                h1{
                    font-family: 'Gilmer';
                    font-size: 22px;
                    font-weight: 1000px;
                    text-transform: uppercase;
                }

                ul,li{
                    font-size: 12px;
                    padding-bottom: 1px;
                }

                strong{
                    font-size: 18px;
                }

                small{
                    padding-top: -30px;
                    padding-bottom: 10px;
                    font-size: 10px;
                }

                .Desc{
                    font-size: 12px;
                    border: 1px solid #222C35;
                }   


            }



            .Combos{
                min-height: 100%;
                border: 2px solid #FCA311;
                font-family: 'Gilmer';
                font-size: 22px;

                display: flex;
                flex-flow: column wrap;
                align-items: center;
                justify-content: center;

                h1{
                    font-family: 'Gilmer';
                    font-size: 22px;
                    font-weight: 1000px;
                    text-transform: uppercase;
                    margin-bottom: 4px;
                }
                .Desc{                
                    font-size: 16px;
                    font-weight: 500px;

                }  

                .strong{
                    font-size: 18px;
                }
            }



            .Compartilhe{
                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                align-items: center;

                min-height: 100%;
                border: 2px solid #FCA311;
                font-family: 'Gilmer';

                h1{
                    font-size: 15px;
                    font-weight: normal;
                }

                .Desc strong{
                    font-size: 16px;
                    font-weight: 500px;
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

