import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store'
import VueResouse from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(VueResouse);
Vue.use(ElementUI);
window.Vue = Vue;
const routes = [
  {
    path: '/product/hot_product/',
    component: function (resolve) {
      require(['./components/Product/hot_product.vue'], resolve)
    }
  },
  {
    path: '/product/search_prod/',
    component: function (resolve) {
      require(['./components/Product/search_prod.vue'], resolve)
    }
  },
  {
    path: '/proper/detail/',
    component: function (resolve) {
      require(['./components/Proper/detail.vue'], resolve)
    }
  },
   {
    path: '/proper/gongshi',
    component: function (resolve) {
      require(['./components/Auth/gongshi.vue'], resolve)
    }
  },
  {
    path: '/word/key_word/',
    component: function (resolve) {
      require(['./components/Word/key_word.vue'], resolve)
    }
  },
  {
    path: '/word/up_word/',
    component: function (resolve) {
      require(['./components/Word/up_word.vue'], resolve)
    }
  },
  {
    path: '/word/soare_word/',
    component: function (resolve) {
      require(['./components/Word/soare_word.vue'], resolve)
    }
  },
  {
    path: '/word/compare/',
    component: function (resolve) {
      require(['./components/word/compare.vue'], resolve)
    }
  },
  {
    path: '/trade/volume/',
    component: function (resolve) {
      require(['./components/Trade/volume.vue'], resolve)
    }
  },
  {
    path: '/trade/grail/',
    component: function (resolve) {
      require(['./components/Trade/grail.vue'], resolve)
    }
  },
  {
    path: '/trade/freshdata/',
    component: function (resolve) {
      require(['./components/Trade/freshData.vue'], resolve)
    }
  },
  {
    path: '/trade/course/',
    component: function (resolve) {
      require(['./components/Trade/course.vue'], resolve)
    }
  },
  {
    path: '/picture/download/',
    component: function (resolve) {
      require(['./components/Hugedata/download.vue'], resolve)
    }
  },
  {
    path: '/modify/',
    meta: {
      Auth: false
    },
    component: function (resolve) {
      require(['./components/Auth/modify.vue'], resolve)
    }
  },
  {
    path: '/register/',
    meta: {
      Auth: false
    },
    component: function (resolve) {
      require(['./components/Auth/register.vue'], resolve)
    }
  },
  {
    path: '/login/',
    meta: {
      Auth: false
    },
    component: function (resolve) {
      require(['./components/Auth/login.vue'], resolve)
    }
  },
  {
    path: '/datav/',
    meta: {
      Auth: false
    },
    component: function (resolve) {
      require(['./components/Auth/data.vue'], resolve)
    }
  },
  {
    path: '*',
    redirect: '/login/'
  }
];
const router = new VueRouter({
  // mode: 'history',
  base: '/', //默认路径
  routes: routes
  //  （缩写为）routes 相当于 routes: routes
});
window.router = router;
router.beforeEach(({
  meta,
  path
}, from, next) => {
  var {Auth = true} = meta
  var isLogin = Boolean(store.state.user.id)
 if (Auth && !isLogin && path !== '/login/') {
    return next({
      path: '/login'
    })
  }else{
      next()
  } 
  
})

// window.store = store
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
