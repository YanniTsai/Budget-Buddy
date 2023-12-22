<template>
    <Loading :active="isLoading"></Loading>
    <div class="h-100vh d-flex justify-content-center align-items-center">
        <div class="login-section p-5 d-flex flex-column justify-content-around align-items-center">
            <!-- logo -->
            <div class="d-flex flex-column align-items-center mb-3">
                <font-awesome-icon icon="fa-solid fa-user-group" class="login-logo-sm"/>
                <div class="title-sm">Budget Buddy</div>
            </div>
            <!-- input -->
            <form action="submit" class="w-100" @submit.prevent="createAccount">
                <div class="d-flex flex-column justify-content-around align-items-center">
                    <div class="fs-4">建立帳戶</div>
                    <div class="w-100">
                        <div class="mb-3">
                            <label for="name" class="form-label">姓名</label>
                            <input type="text" id="name" class="form-control" v-model="user.name" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">帳號</label>
                            <input type="email" id="email" class="form-control" placeholder="請輸入有效 email" v-model="user.email" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">密碼</label>
                            <div class="input-group">
                            <input :type="showPassword ? 'text' : 'password'" id="password" class="form-control border-end-0" v-model="user.password" required>
                            <button class="show-password-btn px-2" @click.prevent="showPassword = !showPassword">
                                <i class="bi bi-eye" v-if="showPassword === false"></i>
                                <i class="bi bi-eye-slash" v-else></i>
                            </button>
                        </div>
                        </div>
                        <div class="mb-3">
                            <label for="confirmPassword" class="form-label">再次輸入密碼</label>
                            <div class="input-group">
                            <input :type="showConfirmPsw ? 'text' : 'password'" id="confirmPassword" class="form-control border-end-0" v-model="confirmPsw" required>
                            <button class="show-password-btn px-2" @click.prevent="showConfirmPsw = !showConfirmPsw">
                                <i class="bi bi-eye" v-if="showConfirmPsw === false"></i>
                                <i class="bi bi-eye-slash" v-else></i>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <!-- button -->
                <div class="text-end">
                    <button type="submit" class="btn blue-btn" :disabled="!isConfirmed">建立帳戶</button>
                </div>
            </form>
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
        name: '',
        email: '',
        password: ''
      },
      confirmPsw: '',
      isConfirmed: false,
      showPassword: false,
      showConfirmPsw: false,
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
  watch: {
    confirmPsw () {
      if (this.confirmPsw !== this.user.password) {
        this.isConfirmed = false
      } else {
        this.isConfirmed = true
      }
    }
  },
  methods: {
    createAccount () {
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/user/create`

      this.$http.post(api, this.user).then((res) => {
        this.isLoading = false
        console.log(res)

        if (res.data.message === 'Email is aready exists') {
          emitter.emit('notification', { success: false, title: '註冊失敗：', content: 'Email 已存在' })
        } else {
          emitter.emit('notification', { success: true, title: '註冊成功！', content: '' })
          this.$router.push('/login')
        }
      }).catch((error) => {
        this.isLoading = false

        console.log(error)
      })
    }
  }
}
</script>
