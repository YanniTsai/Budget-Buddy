<template>
    <div class="sidebar d-flex flex-column justify-content-between align-items-center p-2">
        <div>
            <router-link :to="'/dashboard/ledger/' + ledgerId" class="d-flex flex-column align-items-center mb-2">
                <i class="bi bi-calculator"></i>
                <div>記帳</div>
            </router-link>
            <router-link :to="'/dashboard/ledger/' + ledgerId + '/fund'" class="d-flex flex-column align-items-center mb-2">
                <i class="bi bi-bank"></i>
                <div>帳戶管理</div>
            </router-link>
            <router-link to="ledger/:ledgerId" class="d-flex flex-column align-items-center mb-2">
                <i class="bi bi-bar-chart-line-fill"></i>
                <div>統計數據</div>
            </router-link>
        </div>
        <div>
            <router-link to="/dashboard/account" class="d-flex flex-column align-items-center mb-2">
                <i class="bi bi-person-fill"></i>
                <div>帳戶管理</div>
            </router-link>
            <router-link to="/dashboard/setting" class="d-flex flex-column align-items-center mb-2">
                <i class="bi bi-wrench"></i>
                <div>系統設定</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      ledgerId: null
    }
  },
  watch: {
    // 更新路徑時，重新載入sidebar
    '$route' (to, from) {
      // console.log('route change！', to, from)
      this.ledgerId = to.params.ledgerId
    }
  }
//   mounted () {
//     console.log('params:', this.$route.params.ledgerId)
//   }
}
</script>
