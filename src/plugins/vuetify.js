import { createVuetify } from 'vuetify'
import { VBtn, VSpacer, VToolbarTitle } from '@/../vuetify/lib' // import the components you need
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

export default createVuetify({
  components: { VBtn, VSpacer, VToolbarTitle }, // register the components
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})