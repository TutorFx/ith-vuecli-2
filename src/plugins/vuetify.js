import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: colors.indigo.darken4, // #1A237E
          secondary: colors.amber1, // #FFCA28
        },
      },
    },
  })
