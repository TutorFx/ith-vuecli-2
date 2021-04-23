<template>
    <layout>
        <div v-for="(post, i) in post()" :key="i" class="py-17 conteudo">
            <div v-if="post.slug == $route.params.slug">
                <v-parallax :src="post.thumbnail.large"></v-parallax>
                <v-container class="mb-15 pa-10" style="background-color: #f4f4f4; min-height: 300px; margin-top: -150px; position: relative;" >
                    <h1 class="text-center mb-6">{{post.titulo}}</h1>
                    <p v-html="post.conteudo"></p>
                </v-container>
            </div>
        </div>
    </layout>
</template>

<script>
import layout from "@/components/Layout.vue"
import slider from "@/components/home/slider"

import underscore from "@/components/text/underscore.vue"

import axios from 'axios'

export default {
    components:{ layout },
    computed:{
        
    },
    methods:{
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
        post(){
            let filtro = {}
            filtro = this.$store.state.api.posts
            return filtro;
        },
    },
    data: () => ({
        baixou: false
    }),
    watch: {
        '$store.state.api.posts': function() {
            this.baixou = true
        }
    }
}//$route.params.slug
</script>

<style scoped lang="scss">

</style>