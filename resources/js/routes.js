import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Profile from './views/Profile.vue'
import Details from './views/Profile_Page.vue'
import Manager from './views/Manager.vue'
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'
import VueResource from 'vue-resource'




Vue.use(Router,VueResource);


const originalPush = VueResource.prototype.push;
VueResource.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((error) => {
  });
};

const routes = [
    {
    path: '/home',
    component: Main,
    beforeEnter: (to, from, next) => {
        let role = localStorage.getItem('role');
        if (role === '1') {
            router.push({path: '/details'});
            global.location.reload();
            } else {
            return next();
            }
      }
},
{
    path: '/setting',
    component: Profile,
    name : 'setting'
},
{
    path: '/details',
    component: Details
},
{
    path: '/manager',
    component: Manager
},{
    path: '/login2',
    component: Login
},{
    path: '/register2',
    component: Register
},
];

const router = new Router ({
    mode: 'history',
    routes : routes
});

export default router;