<template>
    <Loading :active="isLoading" style="z-index: 9999"></Loading>
    <div class="container-fluid d-flex justify-content-center">
        <div class="mt-5 col-6">
            <div class="d-flex justify-content-center">
                <img src="https://picsum.photos/200" alt="大頭照" class="mb-3 account-img">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">姓名</label>
                <input type="text" class="form-control" v-model="account.name">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="text" class="form-control" v-model="account.email" disabled>
            </div>
            <div class="mb-5">
                <label for="" class="form-label">密碼</label>
                <div class="input-group">
                    <input :type="cantEditPsw ? 'password' : 'text'" class="form-control" v-model="account.password" :disabled="cantEditPsw">
                    <button class="btn gray-btn" @click.prevent="cantEditPsw = !cantEditPsw">
                        <span v-if="cantEditPsw">編輯密碼</span>
                        <span v-else>暫存編輯</span>
                    </button>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <button class="me-2 btn gray-btn" @click.prevent="getAccount">取消變更</button>
                <button class="ms-2 btn textblue-btn" @click.prevent="updateAccount">儲存變更</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      account: {},
      cantEditPsw: true,
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getAccount () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/user`

      this.$http.get(api).then((res) => {
        this.isLoading = false
        // console.log('account:', res.data)

        this.account = res.data
        this.tempPsw = res.data.password
        // 預設取得帳戶資料時，密碼欄位一律無法編輯（欄位文字顯示隱碼）
        this.cantEditPsw = true
      })
    },
    updateAccount () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/user/update`

      this.$http.post(api, { name: this.account.name, password: this.account.password }).then((res) => {
        this.isLoading = false
        this.cantEditPsw = true

        // console.log(res.data)

        if (res.status > 200 && res.status < 300) {
          this.emitter.emit('notification', { success: true, title: '帳戶資料更新成功', content: '' })
        }

        this.getAccount()
      })
    }
  },
  created () {
    this.getAccount()
  }
}
</script>
