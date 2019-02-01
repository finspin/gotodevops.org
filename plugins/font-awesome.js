import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faUmbrellaBeach, faCloud, faSnowflake, faFilter, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

library.add(faUmbrellaBeach, faCloud, faSnowflake, faCalendarAlt, faQuestionCircle, faFilter, faEnvelope);

Vue.component('font-awesome-icon', FontAwesomeIcon);
