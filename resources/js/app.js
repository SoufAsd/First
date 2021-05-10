
 import router from './routes';
 import i18n from './i18n'
require('./bootstrap');

window.Vue = require('vue');



Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('application', require('./App.vue').default);
Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Sidebar', require('./components/Sidebar.vue').default);
Vue.component('Main', require('./views/Main.vue').default);
Vue.component('Profile', require('./views/Profile.vue').default);
Vue.component('Sidebarv2', require('./components/Sidebarv2.vue').default);
Vue.component('Navebarv2', require('./components/Navbarv2.vue').default);

const app = new Vue({
    i18n,
    el: '#app',
    router
});
