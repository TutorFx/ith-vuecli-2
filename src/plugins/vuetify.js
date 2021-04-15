import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#222C35", // #222C35
          secondary: colors.amber1, // #FFCA28
        },
      },
    },
    icons: {
      iconfont: 'fa',
    },
  })
