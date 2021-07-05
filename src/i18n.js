import en from './lang/en.json'
import vi from './lang/vi.json'
import ja from './lang/ja.json'
import es from './lang/es.json'

import VueI18n from 'vue-i18n'
import Vue from 'vue'

 Vue.use(VueI18n);

 export default new VueI18n({
     locale: localStorage.getItem('lang')||'en',
     messages:{
         en:en,
         vi:vi,
         ja:ja,
         es:es
     }
 })