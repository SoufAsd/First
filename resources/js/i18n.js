import en from './languages/en.json'
import fr from './languages/fr.json'
import ar from './languages/ar.json'
import Vuei18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(Vuei18n);

export default new Vuei18n({
    locale : localStorage.language || 'en',
    messages : {
        en : en,
        fr : fr,
        ar : ar
    }
});