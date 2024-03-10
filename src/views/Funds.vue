<template>
    <Loading :active="isLoading" style="z-index: 9999"></Loading>
    <div class="w-100 d-flex justify-content-center align-items-center">
        <div class="col-6">
            <button class="btn textblue-btn mb-3" @click.prevent="openModal(true)">新增帳戶</button>
            <div>帳戶</div>
            <div class="m-3 p-3 fund-info" v-for="fund in funds" :key="'fund' + fund._id ">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="">
                        <div>{{ fund.name }}</div>
                        <div>餘額： $ {{ fund.deposit }}</div>
                    </div>
                    <button class="btn" type="button" data-bs-toggle="collapse" :data-bs-target="'#fund' + fund._id" aria-expanded="false">
                        <i class="bi bi-chevron-down"></i>
                    </button>
                </div>
                <!-- 展開內容 -->
                <div class="collapse" :id="'fund'+ fund._id">
                    <hr>
                    <div class="d-flex justify-content-between">
                        <div>帳戶內容：</div>
                        <div class="d-flex flex-column justify-content-around">
                            <button class="btn transparent-btn" @click.prevent="openModal(false, 'fund', fund)"><i class="bi bi-pencil"></i></button>
                            <button class="btn transparent-btn" @click.prevent="openDeleteModal(fund)"><i class="bi bi-ban"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>信用卡</div>
            <div class="m-3 p-3 fund-info" v-for="card in credit_cards" :key="'credit_card' + card._id ">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="">
                        <div>{{ card.name }}</div>
                        <div>累積消費： $ {{ card.limit }}</div>
                    </div>
                    <button class="btn" type="button" data-bs-toggle="collapse" :data-bs-target="'#credit_card' + card._id" aria-expanded="false">
                        <i class="bi bi-chevron-down"></i>
                    </button>
                </div>
                <!-- 展開內容 -->
                <div class="collapse" :id="'credit_card'+ card._id">
                    <hr>
                    <div class="d-flex justify-content-between">
                        <div>信用卡內容：</div>
                        <div class="d-flex flex-column justify-content-around">
                            <button class="btn transparent-btn" @click.prevent="openModal(false, 'credit-card', card)"><i class="bi bi-pencil"></i></button>
                            <button class="btn transparent-btn" @click.prevent="openDeleteModal(card)"><i class="bi bi-ban"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FundModal ref="fundModal" :fund="tempFund" @update-fund="updateFund"></FundModal>
    <!-- 停用帳戶 -->
    <!-- <DeleteModal ref="deleteModal" :name="tempFund.name" @delete-item="deleteFund"></DeleteModal> -->
    <DeleteModal ref="deleteModal" :name="tempFund.name"></DeleteModal>
</template>

<script>
import FundModal from '@/components/FundModal.vue'
import DeleteModal from '@/components/DeleteModal.vue'

export default {
  data () {
    return {
      funds: {},
      credit_cards: {},
      isNew: false,
      tempFund: {},
      isLoading: false
    }
  },
  components: {
    FundModal,
    DeleteModal
  },
  methods: {
    getFunds () {
      const api = `${process.env.VUE_APP_API}api/fund/${this.$route.params.ledgerId}`

      this.$http.get(api).then((res) => {
        console.log('funds:', res.data)

        this.funds = res.data
      })
    },
    getCreditCard () {
      const api = `${process.env.VUE_APP_API}api/credit-card/${this.$route.params.ledgerId}`

      this.$http.get(api).then((res) => {
        console.log('credit-cards:', res.data)

        this.credit_cards = res.data
      })
    },
    openModal (isNew, type, item) {
      if (isNew) {
        this.tempFund = {}
      } else {
        console.log('detail:', item)
        this.tempFund = { ...item }
        this.tempFund.type = type

        // 因為fund的金額欄位名稱是deposit/信用卡是limit，modal統一把該欄位設為deposit，props給modal時需要傳deposit欄位，因此有以下賦值。
        if (type === 'credit-card') {
          this.tempFund.deposit = item.limit
        }
      }

      this.isNew = isNew
      this.$refs.fundModal.showModal()
    },
    updateFund (item) {
      this.isLoading = true

      this.tempFund = {
        ledgerId: this.$route.params.ledgerId,
        name: item.name,
        deposit: item.deposit
      }

      // 新增帳戶
      let api = `${process.env.VUE_APP_API}api/fund/create`
      let httpMethod = 'post'

      // 更新帳戶
      if (!this.isNew && item.type === 'fund') {
        api = `${process.env.VUE_APP_API}api/fund/update`
        httpMethod = 'patch'

        // 更新時需帶入fundId
        this.tempFund.fundId = item._id
      }

      // 新增信用卡
      if (this.isNew && item.type === 'credit-card') {
        api = `${process.env.VUE_APP_API}api/credit-card/create`

        this.tempFund = {
          ledgerId: this.$route.params.ledgerId,
          name: item.name,
          limit: item.deposit,
          statementClosingDate: new Date(Date.now()), // 結帳日，不需要這個欄位，先抓當下日期存
          dueDate: new Date(Date.now()) // 信用卡有效期限，不需要這個欄位，先抓當下日期存
        }
      }

      // 更新信用卡
      if (!this.isNew && item.type === 'credit-card') {
        api = `${process.env.VUE_APP_API}api/credit-card/update`
        httpMethod = 'patch'

        this.tempFund = {
          ledgerId: this.$route.params.ledgerId,
          creditCardId: item._id, // 更新時需帶入creditCardId
          name: item.name,
          limit: item.deposit,
          statementClosingDate: new Date(Date.now()), // 結帳日，不需要這個欄位，先抓當下日期存
          dueDate: new Date(Date.now()) // 信用卡有效期限，不需要這個欄位，先抓當下日期存
        }
      }

      this.$http[httpMethod](api, this.tempFund).then((res) => {
        this.isLoading = false

        console.log(res.data)
        this.$refs.fundModal.hideModal()
        this.getFunds()
        this.getCreditCard()
      })
    },
    openDeleteModal (item) {
      this.tempFund = { ...item }
      this.$refs.deleteModal.showModal()
    }
    // deleteFund () {
    //   this.isLoading = true

    //   const api = `${process.env.VUE_APP_API}api/ledger/delete/${this.tempLedger._id}`

    //   this.$http.delete(api).then((res) => {
    //     this.isLoading = false

    //     console.log(res.data)

    //     this.$refs.deleteModal.hideModal()

    //     this.getLedgers()
    //   })
    // }
  },
  created () {
    // console.log(this.$route)
    this.getFunds()
    this.getCreditCard()
  }
}
</script>
