import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//BS
import './assets/all.scss'
import './assets/main.css'

// Vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//

//vue-easy-lightbox
import VueEasyLightbox from 'vue-easy-lightbox'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi' // This is already the default value - only for display purposes
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#325b76',
          secondary: '#4e7e9f',
          complementary: '#764d32',
          analogous: '#32766f',
          grey: '#78909C',
          lighterGrey: '#B0BEC5'
        }
      }
    }
  }
})

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueEasyLightbox)
app.use(VueAxios, axios)

app.mount('#app')
