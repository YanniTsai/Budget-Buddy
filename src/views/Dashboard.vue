<template>
  <Navbar></Navbar>
  <div class="d-flex">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>
