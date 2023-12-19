import { createApp } from 'vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(far, fas)

const app = createApp(App)

app.use(VueAxios, axios)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)
app.component('Loading', Loading)
app.mount('#app')
