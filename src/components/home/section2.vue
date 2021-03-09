<template>
  <div class="qualities-background" :style="`background-image: url(${require('@/assets/Sections/HomeTwo/sectwo.svg')});`">
    <v-container>
      <v-row class="wraper-qualities py-15">
        <v-col cols="12" sm="6" md="3">
          <div v-ripple class="quality-item py-5">
            <div>
              Mais de <b>5 mil</b> <br>
              alunos formados!
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div v-ripple :class="$vuetify.breakpoint.sm ? 'dark':'dark'" class="quality-item py-5">
            <div>
              98,5% de <b>satisfação</b> <br>
              do aluno
              <div>
                <img src="@/assets/Sections/icon/star.svg" alt="">
                <img src="@/assets/Sections/icon/star.svg" alt="">
                <img src="@/assets/Sections/icon/star.svg" alt="">
                <img src="@/assets/Sections/icon/star.svg" alt="">
                <img src="@/assets/Sections/icon/star.svg" alt="">
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div v-ripple :class="$vuetify.breakpoint.sm ? 'dark':''" class="quality-item py-5">
            <div>
              <b>Modelo ITH 4.0</b> <br>
              Exclusivo
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div v-ripple :class="$vuetify.breakpoint.sm ? '':'dark'" class="quality-item py-5">
            <div>
              77% dos alunos <br><b>atuando na área</b>
              após <br> sua formação
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="spacer"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

.qualities-background{
  background-position: center center;
  background-size: cover;
  .wraper-qualities{

    .quality-item{
      background-color: white;
      color: #222C35;
      min-height: 139px;
      display: flex;
      justify-content: center;
      align-items: center;
      
      user-select:none;

      padding: 20px;
      div{
        text-align: center;
        font-family: 'Gilmer';
        font-weight: 500;
        font-size: 22px;
        div{
          img{
            height: 15px;
            margin-right: 2px;
          }
        }
      }
    }
    [class*="dark"]{
      background-color: #222C35;
      color: white;
    }
  }
}
@media only screen and (min-width: map-get($grid-breakpoints, 'lg')) {
  .qualities-background{
    .wraper-qualities{
      .quality-item{
        min-height: 140px;
      }
    }
  }
}
@media only screen and (min-width: map-get($grid-breakpoints, 'md')) {
  .qualities-background{
    .wraper-qualities{
      .quality-item{
        min-height: 210px;
      }
    }
  }
}
</style>

<style scoped>
.spacer{
  height: 40px;
}
</style>