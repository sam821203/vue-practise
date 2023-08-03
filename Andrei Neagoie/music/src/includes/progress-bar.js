import NProgress from "nprogress"

export default (router) => {
  router.beforeEach((to, from, next) => {

    // initialize progress bar
    NProgress.start()

    // make router begin to load the component
    next()
  })

  // 當載完後，停止 progress bar
  router.afterEach(NProgress.done)
}