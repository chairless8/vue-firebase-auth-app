import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

export default createVuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})
