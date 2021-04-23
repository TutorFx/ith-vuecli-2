<template>
    <layout>
        <slider />
        <div class="featured">
            <v-container v-for="(post, i) in filtro().slice(0, 1)" :key="i">
                <v-row class="py-10">
                    <v-col cols="12" md="6">
                        <v-parallax height="300" :src="post.thumbnail.large"></v-parallax>
                    </v-col>
                    <v-col cols="12" md="6" class="py-8">
                        <div v-if="true">
                            <div class="mb-15">
                                <h2 class="white--text">{{ post.titulo }}</h2>
                                <h3 class="white--text">{{post.desc.length > 80 ? post.desc.slice(0, 80) + '...' : post.desc}}</h3>
                            </div>
                            <v-row class="mb-5 px-3 white--text">
                                <h4 class="mr-3">{{ post.date }}</h4>
                                <v-btn x-small depressed color="#FCA311" class="black--text mr-3">#saúde</v-btn>
                                <v-btn x-small depressed color="#FCA311" class="black--text mr-3">#pós-graduação</v-btn>
                            </v-row>
                            <v-row class="px-3" align="center">
                                <v-avatar
                                color="black"
                                size="56"
                                class="white--text mr-3"
                                >
                                    <h3>{{getInitials(post.autor)}}</h3>
                                </v-avatar>
                                <div>
                                    <h4>{{ post.autor }}</h4>
                                    <h6>Social Media</h6>
                                </div>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div>
            <v-container class="py-15">
                <v-row>
                    <v-col cols="12" md="2">
                        <div class="sidebar">
                            <v-btn color="#fca311" depressed small class="black--text">
                                Me matricular
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col cols="12" md="10">
                        <underscore linecolor="#FCA311" class="mb-10">Últimas Publicações</underscore>
                        <v-row v-if="$store.state.api.postsError == false">
                            <v-col cols="12" md="4" v-for="(post, i) in filtro().slice(1)" :key="i">
                                <v-parallax height="220" class="mb-5" :src="post.thumbnail.large"></v-parallax>
                                <h3 class="mb-3">{{post.titulo}}</h3>
                                <h4 class="mb-5">{{post.desc.length > 80 ? post.desc.slice(0, 80) + '...' : post.desc}}</h4>
                                <v-row class="px-3">
                                    <h5 class="mr-3 mb-3">{{ post.date }}</h5>
                                    <v-btn x-small depressed color="#FCA311" class="black--text mr-3 mb-3">#saúde</v-btn>
                                    <v-btn x-small depressed color="#FCA311" class="black--text mr-3 mb-3">#pós-graduação</v-btn>
                                </v-row>
                                <v-row class="px-3" align="end">
                                    <v-avatar
                                    color="black"
                                    size="56"
                                    class="white--text mr-3"
                                    >
                                        <h3>{{getInitials(post.autor)}}</h3>
                                    </v-avatar>
                                    <div>
                                        <h4>{{ post.autor }}</h4>
                                        <h6>Social Media</h6>
                                    </div>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </layout>
</template>

<script>
import layout from "@/components/Layout.vue"
import slider from "@/components/home/slider"

import underscore from "@/components/text/underscore.vue"

import axios from 'axios'

export default {
    components:{ layout, slider, underscore },
    computed:{
        
    },
    methods:{
        getImg(id){
            try {
                const response = axios.get(`https://v2.ithpos.com.br/api/index.php?rest_route=/wp/v2/media/${id}`,);
                return response.data.text[0];
            } catch(error) {
                return 'https://images.pexels.com/photos/6150674/pexels-photo-6150674.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
        },
        getInitials (name){
            var parts = name.split(' ')
            var initials = ''
            for (var i = 0; i < parts.length; i++) {
                if (parts[i].length > 0 && parts[i] !== '') {
                initials += parts[i][0]
                }
            }
            return initials
        },
        filtro(){
            let filtro = []
            filtro = this.$store.state.api.posts
            filtro = Object.values(filtro)
            return filtro;
        },
    }
}
</script>

<style scoped lang="scss">

  .featured{
    background-color: #3B7CAD;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sidebar{
    background-color:#3B7CAD;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;
  }

</style>