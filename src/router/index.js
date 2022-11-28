import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: { guest: true }
  },
  {
    path: '',
    component: () => import(/* webpackChunkName: "" */ '../LoggedInApp.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { owner: true, user: true, mechanic: true },
      },
      {
        path: '/warsztaty',
        name: 'Warsztaty',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "warsztaty" */ '../views/user/Warsztaty.vue'),
        meta: {
          owner: false,
          user: true,
          mechanic: false
        },
      },
      {
        path: '/status',
        name: 'Status',
        component: () => import(/* webpackChunkName: "status" */ '../views/user/Status.vue'),
        meta: { owner: false, user: true, mechanic: false },
      },
      {
        path: '/profil',
        name: 'Mój profil',
        component: () => import(/* webpackChunkName: "status" */ '../views/Profil.vue'),
        meta: { owner: true, user: true, mechanic: true },
      },
      {
        path: '/pojazdy',
        name: 'Moje pojazdy',
        component: () => import(/* webpackChunkName: "status" */ '../views/user/Pojazdy.vue'),
        meta: { owner: false, user: true, mechanic: false },
      },
      {
        path: '/warsztat',
        name: 'Mój warsztat',
        component: () => import(/* webpackChunkName: "status" */ '../views/owner/Warsztat.vue'),
        meta: { owner: true, user: false, mechanic: false },
      },
      {
        path: '/dodajwarsztat',
        name: 'Dodaj warsztat',
        component: () => import(/* webpackChunkName: "status" */ '../views/owner/Dodajwarsztat.vue'),
        meta: { owner: true, user: false, mechanic: false },
      },
      {
        path: '/mechanicy',
        name: 'Mechanicy',
        component: () => import(/* webpackChunkName: "status" */ '../views/owner/Mechanicy.vue'),
        meta: { owner: true, user: false, mechanic: false },
      },
      {
        path: '/dodajmechanika',
        name: 'Dodaj mechaników',
        component: () => import(/* webpackChunkName: "status" */ '../views/owner/Dodajmechanika.vue'),
        meta: { owner: true, user: false, mechanic: false },
      },
      {
        path: '/zlecenia',
        name: 'Zlecenia',
        component: () => import(/* webpackChunkName: "status" */ '../views/mechanic/Zlecenia.vue'),
        meta: { owner: true, user: false, mechanic: true },
      }
    ]
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASEURL,
  routes
})
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    Buffer.from(base64, "base64")
      .toString("ascii")
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}



router.beforeEach((to, from, next) => {

  if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem('token') != null) {
      next("/");
      return;
    }
    next();
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {

    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"))
      const jwtPayload = parseJwt(localStorage.getItem("token"));
      console.log(jwtPayload)
      if (jwtPayload.exp < Date.now() / 1000) {
        // token expired
        console.log("token wygasl");
        localStorage.removeItem("token");
        next("/login");
        return;
      }
    
      if (localStorage.getItem('token') != null && to.path !== "/") {
        console.log(to)
        if (localStorage.getItem('userRole') == "OWNER" && to.meta.owner) {
          next();
        }
        else if (localStorage.getItem('userRole') == "USER" && to.meta.user) {
          next();
        }
        else if (localStorage.getItem('userRole') == "MECHANIC" && to.meta.mechanic) {
          next();
        }
        else {
  
  
          next("/")
          return;
        }
  
  
      }
      next()


    } else {
      next("/login");
    }

    // if (localStorage.getItem('token') == null) {
    //   console.log('lamsdpoasmd')
    //   next("/login");

    // }

  } else {
    next("/login");

  }
});




export default router
