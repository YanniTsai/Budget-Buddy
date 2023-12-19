<template>
  <Navbar></Navbar>
  <div class="d-flex">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
  <Toast></Toast>
</template>

<script>
import emitter from '@/methods/emitter'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Toast from '../components/Toast.vue'

export default {
  components: {
    Navbar,
    Sidebar,
    Toast
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    // 將存在 cookie 中的 token 取出
    /* eslint-disable */
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    /* eslint-enable */

    // 將 token 存於 header
    this.$http.defaults.headers.common.Authorization = token
  }
}
</script>
