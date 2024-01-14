<template>
  <Loading :active="isLoading" style="z-index: 9999"></Loading>
  <div class="p-5 row justify-content-center justify-content-md-start">
    <div class="card col-12 col-md-3 me-3 mb-3 p-0" v-for="(item, index) in ledgers" :key="'ledger'+index">
      <div class="card-img">
        <router-link :to="'/dashboard/ledger/' + item._id">
          <img :src="item.image" alt="帳簿封面" />
          <div class="title d-flex justify-content-center align-items-center">
              <h5 class="card-title m-0">{{ item.name }}</h5>
          </div>
          <div class="card-body overflow-scroll">
            <p class="card-text">
              {{ item.description }}
            </p>
          </div>
        </router-link>
        <!-- 編輯/刪除 -->
        <div class="edit-delete d-flex justify-content-end align-items-start">
            <button class="btn text-white" @click="openModal(false, item)">
                <i class="bi bi-pencil"></i>
            </button>
            <button class="btn text-danger" @click="openDeleteModal(item)">
                <i class="bi bi-trash"></i>
            </button>
        </div>
      </div>
    </div>
    <button class="add-ledger-btn" @click="openModal(true)"><i class="bi bi-plus"></i></button>
  </div>
  <LedgerModal ref="ledgerModal" :ledger="tempLedger" @update-Ledger="updateLedger"></LedgerModal>
  <DeleteModal ref="deleteModal" :name="tempLedger.name" @delete-item="deleteLedger"></DeleteModal>
</template>

<script>
import LedgerModal from '../components/LedgerModal.vue'
import DeleteModal from '../components/DeleteModal.vue'

export default {
  data () {
    return {
      ledgers: [],
      tempLedger: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    LedgerModal,
    DeleteModal
  },
  methods: {
    getLedgers () {
      const api = `${process.env.VUE_APP_API}api/ledger`

      this.$http.get(api).then((res) => {
        console.log('ledger:', res.data)

        this.ledgers = res.data
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempLedger = {}
      } else {
        this.tempLedger = { ...item }
      }

      this.isNew = isNew
      this.$refs.ledgerModal.showModal()
    },
    updateLedger (item) {
      this.isLoading = true

      let api = `${process.env.VUE_APP_API}api/ledger/create`
      let httpMethod = 'post'
      let ledgerInfo = item

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/ledger/update`
        httpMethod = 'patch'
        ledgerInfo = {
          ledgerId: item._id,
          name: item.name,
          image: item.image,
          description: item.description
        }
      }

      this.$http[httpMethod](api, ledgerInfo).then((res) => {
        this.isLoading = false
        console.log(res)

        this.$refs.ledgerModal.hideModal()
        this.getLedgers()
      })
    },
    openDeleteModal (item) {
      this.tempLedger = { ...item }
      this.$refs.deleteModal.showModal()
    },
    deleteLedger () {
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/ledger/delete/${this.tempLedger._id}`

      this.$http.delete(api).then((res) => {
        this.isLoading = false

        console.log(res.data)

        this.$refs.deleteModal.hideModal()

        this.getLedgers()
      })
    }
  },
  created () {
    this.getLedgers()
  }
}
</script>
