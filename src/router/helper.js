import router from './'
import store from '@/store'
import { Token } from '@/tools'
import { Message } from 'element-ui'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

// Route redirect whitelist.
const whitelist = ['/login', '/join', '/password']

function hasPermission(roles, permissionRoles) {
  if (~roles.indexOf('admin') || !permissionRoles) return true // admin permission passed directly
  return roles.some(role => ~permissionRoles.indexOf(role))
}

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (Token.get()) {
    // When the user has already logged in.
    if (whitelist.indexOf(to.path) !== -1) {
      next('/')
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('user_info').then(res => {
          const roles = res.data.roles
          store.dispatch('perm_generate_routes', { roles }).then(() => {
            // Remove this line when you need to change permissions dynamically,
            // and import all routes when the vue route is initialized
            // router.addRoutes(store.getters.routes_addons)

            // replace: true so the navigation will not leave a history record
            // hack方法 确保addRoutes已完成,
            next({ ...to, replace: true })
          })
        }).catch(err => {
          store.dispatch('user_exit').then(() => {
            Message.error(err.message || 'Verification failed, please login again.')
            next('/')
          })
        })
      } else {
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({ path: '/error', replace: true, query: { code: 403, noGoBack: true }})
        }
      }
    }
  } else {
    // The user is not logged in or login has expired
    // redirected to the login page.
    if (whitelist.indexOf(to.path) === -1) {
      next({
        path: '/login',
        query: { redirect: to.path }
      })
      NProgress.done()
    } else {
      next()
    }
    if (store.getters.user.token) {
      Message({
        type: 'error',
        message: 'Your login has expired. Please login again.',
        duration: 0
      })
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})