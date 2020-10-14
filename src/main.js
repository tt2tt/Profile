import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles'
import VueTyperPlugin from 'vue-typer'
import 'normalize.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle,faFolder,faLaptopCode,faEnvelope,faHome,faGlobe,faBlog,faBirthdayCake,faImage } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faFacebook,faGithub,faHtml5,faCss3Alt,faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueParticles)
Vue.use(VueTyperPlugin)

library.add(faUserCircle,faFolder,faLaptopCode,faEnvelope,faHome,faGlobe,faBlog,faBirthdayCake,faImage,faTwitter,faFacebook,faGithub,faHtml5,faCss3Alt,faJsSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
