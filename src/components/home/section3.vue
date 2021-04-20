<template>
  <div class="section3" :style="`background-image: url(${require('@/assets/Sections/icon/s3logowhite.svg')});`">
    <v-container class="pt-0">
      <v-row>
        <v-col cols="12" md="7" lg="6" xs="12">
          <router-link to="/matricular">
            <v-img class="s3contenta" :src="$vuetify.breakpoint.mobile ? require('@/assets/Sections/Content/s3contentimg-mobile.svg') : require('@/assets/Sections/Content/s3contentimg.svg')"></v-img>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    <div class="spacer" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

@import '~vuetify/src/styles/styles.sass';

  .s3contenta{
    transform: translateY(-30px)
  }
  .section3{
    background-color: #222C35;
    min-height: 300px;
    background-position: 105% -5%;
    background-size: 50vw;
  }

@media only screen and (min-width: map-get($grid-breakpoints, 'xs')) {
  .section3{
    background-size: 100vw;
  }
}
@media only screen and (min-width: map-get($grid-breakpoints, 'md')) {
  .section3{
    background-size: 50vw;
  }
}
</style>

<style scoped>
 .spacer{
    height: calc(30vh - 50px);
  }
</style>