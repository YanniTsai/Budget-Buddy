<template>
    <div class="h-100vh d-flex justify-content-center align-items-center">
        <div class="login-section p-5 d-flex flex-column justify-content-around align-items-center">
            <!-- logo -->
            <div class="d-flex flex-column align-items-center mb-3">
                <font-awesome-icon icon="fa-solid fa-user-group" class="login-logo-sm"/>
                <div class="title-sm">Budget Buddy</div>
            </div>
            <!-- input -->
            <div class="w-100 d-flex flex-column justify-content-around align-items-center">
                <div class="fs-4">建立帳戶</div>
                <div class="w-100">
                    <div class="mb-3">
                        <label for="name" class="form-label">姓名</label>
                        <input type="text" id="name" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">帳號</label>
                        <input type="email" id="email" class="form-control" placeholder="請輸入有效 email">
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
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword" class="form-label">再次輸入密碼</label>
                        <div class="input-group">
                        <input :type="showConfirmPsw ? 'text' : 'password'" id="confirmPassword" class="form-control border-end-0">
                        <button class="show-password-btn px-2" @click="showConfirmPsw = !showConfirmPsw">
                            <i class="bi bi-eye" v-if="showConfirmPsw === false"></i>
                            <i class="bi bi-eye-slash" v-else></i>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <!-- button -->
            <div class="w-100 text-end">
                <button class="btn blue-btn">建立帳戶</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      showPassword: false,
      showConfirmPsw: false
    }
  }
}
</script>
