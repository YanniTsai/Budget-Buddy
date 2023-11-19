<template>
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
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">密碼</label>
                    <div class="input-group">
                        <input :type="showPassword ? 'text' : 'password'" id="password" class="form-control border-end-0">
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
                <button class="btn blue-btn">登入</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      showPassword: false
    }
  }
}
</script>
