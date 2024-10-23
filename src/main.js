import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import 'bootstrap/dist/js/bootstrap.min'
import './services/interceptors'

import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(createVuestic())
app.component('VueDatePicker', VueDatePicker)
app.mount('#app')
