import Vue from 'vue'
import App from './App.vue'
import "@fontsource/roboto-slab"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faMagnifyingGlass,faSignal,faList,faBriefcase,faRocket,faGear,faUserGroup,faPhotoFilm, faImage,faRightLong,faLeftLong, faStar} from '@fortawesome/free-solid-svg-icons'
import {faClock,faThumbsUp} from '@fortawesome/free-regular-svg-icons'
import { faLinkedin,faTwitter,faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret, faMagnifyingGlass,faLinkedin,faFacebook,faInstagram,faTwitter,faSignal,faList,faClock,faBriefcase,faRocket,faThumbsUp,faGear,faUserGroup,faPhotoFilm,faImage,faRightLong,faLeftLong,faStar) 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const bootstrap = require('bootstrap')

Vue.use(bootstrap)


new Vue({
  render: h => h(App),
}).$mount('#app')
