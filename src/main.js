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
import firebase from 'firebase'

Vue.use(VueParticles)
Vue.use(VueTyperPlugin)

library.add(faUserCircle,faFolder,faLaptopCode,faEnvelope,faHome,faGlobe,faBlog,faBirthdayCake,faImage,faTwitter,faFacebook,faGithub,faHtml5,faCss3Alt,faJsSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBkDmASmU-I8hvL85lP6bl_WF9BuYlm1yo",
  authDomain: "tt2tt-profile-page.firebaseapp.com",
  databaseURL: "https://tt2tt-profile-page.firebaseio.com",
  projectId: "tt2tt-profile-page",
  storageBucket: "tt2tt-profile-page.appspot.com",
  messagingSenderId: "1086215052435",
  appId: "1:1086215052435:web:ff9a469c60367e35570166",
  measurementId: "G-GN2EQXJL9H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
