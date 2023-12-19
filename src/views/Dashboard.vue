<template>
  <Navbar></Navbar>
  <div class="d-flex">
    <Sidebar></Sidebar>
    <router-view></router-view>
    <Toast></Toast>
  </div>
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
  }
}
</script>
