<template>
    <Loading :active="isLoading"></Loading>
    <div class="h-100vh d-flex justify-content-center align-items-center">
        <div class="login-section p-5 d-flex flex-column justify-content-around align-items-center">
            <!-- logo -->
            <div class="d-flex flex-column align-items-center">
                <font-awesome-icon icon="fa-solid fa-user-group" class="login-logo"/>
                <h1>Budget Buddy</h1>
            </div>
            <!-- input -->
            <div class="w-100 input-section">
                <div class="mb-3">
                    <label for="email" class="form-label">帳號</label>
                    <input type="email" class="form-control" id="email" v-model="user.email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">密碼</label>
                    <div class="input-group">
                        <input :type="showPassword ? 'text' : 'password'" id="password" class="form-control border-end-0" v-model="user.password">
                        <button class="show-password-btn px-2" @click="showPassword = !showPassword">
                            <i class="bi bi-eye" v-if="showPassword === false"></i>
                            <i class="bi bi-eye-slash" v-else></i>
                        </button>
                    </div>
                    <router-link to="/forget_password" class="router-link-style forget-password">忘記密碼</router-link>
                </div>
            </div>
            <!-- button -->
            <div class="w-100 d-flex justify-content-between align-items-center">
                <router-link to="/create_account" class="router-link-style">建立帳戶</router-link>
                <button class="btn blue-btn" @click="login">登入</button>
            </div>
        </div>
    </div>
    <Toast></Toast>
</template>

<script>
import emitter from '@/methods/emitter'
import Toast from '../components/Toast.vue'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      showPassword: false,
      isLoading: false
    }
  },
  components: {
    Toast
  },
  provide () {
    return {
      emitter
    }
  },
  methods: {
    login () {
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/auth/login`

      this.$http.post(api, this.user).then((res) => {
        this.isLoading = false

        if (res.data.access_token) {
          console.log(res)

          // 登入成功回傳的 token
          const token = res.data.access_token

          // 將 token 存進 cookie
          document.cookie = `token=${token}`

          this.$router.push('/dashboard/ledger')
        }
      }).catch((error) => {
        this.isLoading = false

        console.log(error)

        emitter.emit('notification', { success: false, title: '登入失敗：', content: '帳號或密碼錯誤' })
      })
    }
  }
}
</script>
