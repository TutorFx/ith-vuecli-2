<!-- CONFIG. HTML -->
<template>
    <div class="sectionCurso mt-10">
        <v-container class="container-Curso mt-15">

            <v-row>

                <v-col cols="" xs="12" md="6">
                    <div class="Titulo mb-3"> Pós Graducação </div>

                    <div class="SubTitulo mb-1"> Enfermagem em Unidade de Terapia Intensiva Neonatal e Pediátrica </div>
                    
                    <ul> <li> Enfermeiros </li> </ul>

                    <div class="Desc mt-3 mb-7"> 
                        O <strong> especialista em UTI Neonatal </strong> deve ser cuidadoso, gentil e 
                        sensível, pois o recém-nascido e crianças são mais frágeis. 
                        O especialista coordena, planeja o atendimento, organiza as 
                        rotinas do RN, visitas familiares, orienta na amamentação e pode 
                        exercer <strong> cargos de gestão </strong> dentro da Unidade.
                    </div>
                    
                    <v-row>
                        <v-col cols="" xs="12" sm="12" md="6">
                        <div class="Inf"> Reconhecida pelo MEC </div>
                        </v-col>

                        <v-col cols="" xs="12" sm="12" md="6">
                        <div class="Inf"> 100% on-line </div>
                        </v-col>

                        <v-col cols="" xs="12" sm="12" md="6">
                        <div class="Inf"> 440 horas </div>
                        </v-col>

                        <v-col cols="" xs="12" sm="12"  md="6">
                        <div class="Inf"> 15 meses </div>
                        </v-col>
                    </v-row>

                </v-col>



                <v-col cols="" xs="12" md="6" class="px-10">
                    <div class="container-matricular">
                        <img src="https://cdn.pixabay.com/photo/2016/01/17/18/57/capturing-1145382_960_720.jpg"
                             alt="Imagem"
                             title="Enfermagem"
                             class="mt-5"
                             width="100%"
                             height="100%">
                        
                        <v-btn depressed small dark color="#222C35" class="mt-5 mb-1"> 
                            Me Matricular </v-btn>

                        <small class="mb-10"> Ultimas Vagas </small>

                    </div>

                </v-col>


            </v-row>

        </v-container>
    </div>
</template>















<!-- CONFIG. SCSS -->
<style lang="scss">
    .sectionCurso{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;

        background-color: #222C35;


        .container-Curso{
            .Titulo{
                font-family: 'Gilmer';
                font-size: 25px;
                font-weight: 900px;
                font-style: normal;

                text-transform: uppercase;
                color: #FCA311;

            }
            .SubTitulo, .Inf{
                font-family: 'Gilmer';
                font-size: 20px;
                font-weight: 500px;
                font-style: normal;

                color: white;
            }
            .Inf{
                font-weight: normal;
                font-size: 18px;
            }

            ul{
                color:#FCA311;
                list-style: disc;
            }

            .Desc{
                font-family: 'Gilmer';
                font-size: 15px;
                font-weight: -300px;
                color: white;


                strong{
                    color: #FCA311;
                }
            }




            .container-matricular{
                display: flex;
                flex-flow: column wrap;
                justify-content: flex-start;
                align-items: center;
                
                background-color: #FCA311;
                min-height: 100%;

                img{
                border-left: 10px solid #FCA311;
                border-right: 10px solid #FCA311;
                }

                small{
                    color: red;
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

