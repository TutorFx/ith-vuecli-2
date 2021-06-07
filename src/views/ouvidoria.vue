<template>
    <layout>
        <slider />
        <blocks />
        <div class="primary">
                <v-container>
                    <v-tabs :show-arrows="true" background-color="primary" align="center" class="pl-0" dark>
                        <v-tab to="faq">FAQ</v-tab>
                        <v-tab to="contato">CONTATO</v-tab>
                        <v-tab to="ouvindo-voce">OUVINDO VOCÊ</v-tab>
                    </v-tabs>
                </v-container>
        </div>
        <div v-if="$route.params.layout == 'faq'">
            <v-container>
                <template>
                <v-row justify="center">
                    <v-expansion-panels accordion class="py-10">
                        <v-expansion-panel>
                            <v-expansion-panel-header>Quais os documentos necessários para a matrícula?</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            - RG, CPF, Título de Eleitor, Certidão de Casamento ou Nascimento, Diploma ou Certidão de
                            Conclusão (Graduação), Histórico (Graduação) - autenticados <br>
                            - Comprovante de Endereço e 2 Fotos 3×4
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-if="false">
                            <v-expansion-panel-header>Como é realizado a rematrícula?</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            O ITH Educacional, sempre ao fim de cada semestre letivo, promove a rematrícula
                            antecipada, com o objetivo de facilitar o atendimento aos alunos. Todo o processo é realizado
                            virtualmente no portal do aluno em rematrícula e compreende a aceitação e assinatura de
                            novo contrato de Prestação de Serviços entre a instituição e o interessado. É fácil e simples: o
                            aluno tem mais vantagens no processo, pode obter descontos na matrícula e ainda evita filas.
                            Importante: o processo para alunos beneficiários de programas de bolsas e créditos (como
                            Prouni, Fies e OVG) é diferenciado, graças as particularidades de calendário de cada um dos
                            mesmos. O aluno deve verificar semestralmente essas informações junto à Secretaria
                            Acadêmica.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Como é considerado uma Pré-Matrícula?</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            Alunos que realizam o processo de matrícula ou rematrícula, seja presencialmente na
                            Secretaria Acadêmica ou via requerimento, e que ainda não efetivaram o pagamento do
                            boleto de matrícula são classificados como alunos pré-matriculados. Neste caso, podem ter o
                            acesso à algumas áreas do Portal do Aluno e do Professor restringidas. Para a conclusão da
                            matricula de forma plena é essencial a efetivação do pagamento do boleto de
                            matrícula/rematrícula. Alunos que por ventura venham a optar pela não efetivação devem
                            procurar a instituição para a solicitação do cancelamento das pendências financeiras.
                            Importante: alunos participantes de programas do governo, como Prouni e Fies, podem vir a
                            ser classificados como pré-matriculados até o momento do lançamento do crédito ou
                            benefício.
                            </v-expansion-panel-content>
                        </v-expansion-panel>  
                      
                        <v-expansion-panel>
                            <v-expansion-panel-header>Como faço para realizar a Transferência Interna / Mudança de Curso ou Turno?</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            Alunos regularmente matriculados, interessados em realizar a mudança de curso ou turno,
                            podem realizar a solicitação de Transferência Interna / Mudança de Curso e Turno, sempre no
                            início de cada semestre letivo, respeitando as datas limites propostas pelo Calendário
                            Acadêmico do Semestre, e condicionada à existência de vagas. Para a realização deste
                            processo o aluno deve abrir um requerimento no portal do aluno ou solicitar pessoalmente na
                            Secretaria Acadêmica nos prazos regulamentados.
                            </v-expansion-panel-content>
                        </v-expansion-panel>                      
                        <v-expansion-panel>
                            <v-expansion-panel-header>Como faço para realizar a Transferência e Portador de Diploma de Graduação?</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            Alunos que começaram a estudar em outra instituição de Ensino Superior, ou já são formados
                            e tem interesse em cursar uma 2ª graduação, tem a oportunidade de ingressar no ITH Educacional
                            <br><br>
                            ITH Educacional, sem realizar novo processo seletivo de vestibular. Nestes casos, o ingresso é
                            admitido caso haja disponibilidade de vagas no curso de interesse. Maiores informações e
                            editais podem ser encontrados no Portal de Transferência e Portadores.
                            </v-expansion-panel-content>
                        </v-expansion-panel>                      
                        <v-expansion-panel>
                            <v-expansion-panel-header>Se eu faltar em uma prova com solicitar a 2ª Chamada?</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            Para requerer prova de segunda chamada o aluno deve comparecer à Secretaria Acadêmica,
                            verificando os prazos acadêmicos (Vide Calendário Acadêmico).
                            </v-expansion-panel-content>
                        </v-expansion-panel>                      
                        <v-expansion-panel>
                            <v-expansion-panel-header>Para requerer prova de segunda chamada o aluno deve comparecer à Secretaria Acadêmica,
                            verificando os prazos acadêmicos (Vide Calendário Acadêmico).</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            Alunos regularmente matriculados tem a opção de solicitar a dispensa de disciplinas, caso já às
                            tenham cursado, com aproveitamento satisfatório, em outro curso superior autorizado pelo
                            MEC, e cujas ementas sejam equivalentes em conteúdo e carga-horária. Para tanto os
                            interessados devem solicitar no portal do aluno na aba Secretaria Acadêmica, e anexar a cópia
                            autenticada e digitalizada em pdf do Histórico Escolar e Ementa do referido curso superior,
                            durante o período definido pelo calendário acadêmico do semestre vigente. A análise do
                            aproveitamento é de responsabilidade do coordenador do curso.
                            </v-expansion-panel-content>
                        </v-expansion-panel>                      
                        <v-expansion-panel v-if="false">
                            <v-expansion-panel-header>Como fico sabendo informações sobre vestibular, valor de curso, horários e/ou qualquer
                            outra informação complementar ou não à minha dúvida em relação à Bolsas de Estudo no ITH Educacional?</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            Todas as informações ficam disponíveis no Site no Portal de Vestibular do ITH Educacional.
                            </v-expansion-panel-content>
                        </v-expansion-panel>                      
                        <v-expansion-panel>
                            <v-expansion-panel-header>O ITH Educacional concede algum tipo de desconto nas mensalidades, excetuando Bolsa de
                            Estudo?</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            Sim. Os descontos concedidos são: desconto pontualidade, descontos de convênios firmados
                            entre empresa e o ITH Educacional também oferece, desconto aos participantes do Programa
                            Transformith Social, descontos para a segunda Graduação e desconto transferência externa.
                            </v-expansion-panel-content>
                        </v-expansion-panel>                      
                        <v-expansion-panel>
                            <v-expansion-panel-header>Quem pode solicitar o crédito estudantil?</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            Todos os alunos que atendam aos pré-requisitos dos agentes financeiros.
                            </v-expansion-panel-content>
                        </v-expansion-panel>                      
                        <v-expansion-panel>
                            <v-expansion-panel-header>Qual o percentual do curso pode ser financiado através do Crédito estudantil?</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            Os alunos podem financiar entre 50 e 100% da mensalidade, dependendo do financiamento
                            escolhido e dos pré-requisitos do agente financeiro.
                            </v-expansion-panel-content>
                        </v-expansion-panel>                      
                        <v-expansion-panel>
                            <v-expansion-panel-header>Posso usar o crédito para pagar Dependências?</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            O crédito serve para pagar apenas o semestre corrente, sem contar dependências.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Posso financiar minha matrícula?</v-expansion-panel-header>
                            <v-expansion-panel-content>
                            Sim, mas apenas se ela pertencer ao semestre para o qual o Crédito Universitário será
                            contratado.
                            </v-expansion-panel-content>
                        </v-expansion-panel>   
                    </v-expansion-panels>
                </v-row>
                </template>
            </v-container>
        </div>
        <div v-if="$route.params.layout == 'contato'">
            <v-container class="pb-15">
                <underscore linecolor="#FCA311" class="my-15">CONTATO</underscore>
                    <v-row>
                        <v-col>
                            <v-row>
                                <v-col class="d-flex" cols="12">
                                    <svg style="height: 100px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FCA311" d="M256 0C161.896 0 85.333 76.563 85.333 170.667c0 28.25 7.063 56.26 20.49 81.104L246.667 506.5c1.875 3.396 5.448 5.5 9.333 5.5s7.458-2.104 9.333-5.5l140.896-254.813c13.375-24.76 20.438-52.771 20.438-81.021C426.667 76.563 350.104 0 256 0zm0 256c-47.052 0-85.333-38.281-85.333-85.333S208.948 85.334 256 85.334s85.333 38.281 85.333 85.333S303.052 256 256 256z"/></svg>
                                    <div>
                                        <div><h3>Endereço</h3></div>
                                        <div>Rua 203, N. 344<br>Setor Leste Universitário<br>Goiânia/GO<br>(Ao lado da Receita Federal)</div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col>
                            <v-row>
                                <v-col cols="12" class="d-flex justify-end">
                                    <div>
                                        <div><h3>Atendimento</h3></div>
                                        <div><b>Telefone</b><br>
                                        (62)3091-7079<br>
                                        <b>Horário</b><br>
                                        07h ás 22h</div>
                                    </div>
                                    <svg style="height: 100px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FCA311" d="M298.667 25.6h-85.333a8.536 8.536 0 00-8.533 8.533 8.536 8.536 0 008.533 8.533h85.333a8.536 8.536 0 008.533-8.533 8.536 8.536 0 00-8.533-8.533zM358.4 25.6h-8.533a8.536 8.536 0 00-8.533 8.533 8.536 8.536 0 008.533 8.533h8.533a8.536 8.536 0 008.533-8.533A8.536 8.536 0 00358.4 25.6zM266.598 435.2H245.41c-12.979 0-23.543 10.564-23.543 23.543v4.122c0 12.979 10.564 23.535 23.535 23.535h21.188c12.979 0 23.543-10.556 23.543-23.535v-4.122c0-12.979-10.564-23.543-23.535-23.543zm6.469 27.665a6.475 6.475 0 01-6.468 6.468H245.41c-3.575 0-6.477-2.901-6.477-6.468v-4.122a6.48 6.48 0 016.477-6.477h21.18a6.478 6.478 0 016.477 6.477v4.122z"/><path fill="#FCA311" d="M370.227 0H141.781c-17.007 0-30.848 13.841-30.848 30.848v450.304c0 17.007 13.841 30.848 30.848 30.848h228.437c17.007 0 30.848-13.841 30.848-30.839V30.848C401.067 13.841 387.226 0 370.227 0zM384 481.152c0 7.595-6.178 13.781-13.773 13.781H141.781c-7.603 0-13.781-6.187-13.781-13.773V30.848c0-7.595 6.178-13.781 13.781-13.781h228.437c7.603 0 13.781 6.187 13.781 13.781v450.304z"/><path fill="#FCA311" d="M392.533 51.2H119.467a8.536 8.536 0 00-8.533 8.533v358.4a8.536 8.536 0 008.533 8.533h273.067a8.536 8.536 0 008.533-8.533v-358.4c0-4.71-3.823-8.533-8.534-8.533zM384 409.6H128V68.267h256V409.6z"/></svg>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
            </v-container>
        </div>
        <div v-if="$route.params.layout == 'ouvindo-voce'">
            <v-container>
                <div>
                    <h3 class="dark--text mb-4">Preencha o formulário abaixo para nos enviar sua <span class="text--primary">mensagem!</span></h3>
                    <v-form>
                        <v-text-field label="Nome" color="#FCA311" filled></v-text-field>
                        <v-row class="pa-0">
                                <v-col cols="12" lg="8">
                                    <v-text-field label="Email" color="#FCA311" filled></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="4">
                                    <v-text-field label="Celular" color="#FCA311" filled></v-text-field>
                                </v-col>
                            </v-row>
                            <v-label>Você estuda na instituição?</v-label> <br>
                            <v-radio-group
                            row
                            align="start"
                            v-model="ealuno"
                            >
                                <v-radio
                                    label="Sou Aluno"
                                    value="aluno"
                                    color="#FCA311"
                                ></v-radio>
                                <v-radio
                                    label="Não sou Aluno"
                                    value="nao-aluno"
                                    color="#FCA311"
                                ></v-radio>
                            </v-radio-group>
                            <v-row>
                                <v-col cols="12" lg="8">
                                    <v-text-field label="Cpf" color="#FCA311" filled></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="8" v-if="ealuno == 'aluno'">
                                    <v-text-field label="Curso" color="#FCA311" filled></v-text-field>
                                </v-col>
                                
                                    <v-col cols="12" lg="8" v-if="ealuno == 'aluno'">
                                        <v-menu
                                            ref="menu"
                                            v-model="menu"
                                            :close-on-content-click="false"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"
                                            >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                v-model="date"
                                                label="Período"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                filled
                                                v-bind="attrs"
                                                v-on="on"
                                                color="#FCA311"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="date"
                                                active-picker="YEAR"
                                                :max="new Date().toISOString().substr(0, 10)"
                                                min="1950-01-01"
                                                @change="save"
                                                locale="pt-BR"
                                                color="#FCA311"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>

                                <v-col cols="12" lg="8">
                                    <v-text-field label="Assunto" color="#FCA311" filled></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="12">
                                    <v-textarea label="Mensagem" color="#FCA311" filled></v-textarea>
                                </v-col>
                            </v-row>
                    </v-form>
                </div>
            </v-container>
        </div>
    </layout>
</template>

<script>
import slider from "@/components/home/slider"
import layout from "@/components/Layout.vue"
import blocks from "@/components/home/section2.vue"

import underscore from "@/components/text/underscore.vue"

export default {
    components:{ layout, slider, blocks, underscore },
    data: () => ({
        activePicker: null,
        date: null,
        menu: false,
        ealuno: null
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },
}
</script>

<style>

</style>