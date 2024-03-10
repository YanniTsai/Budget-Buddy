<template>
    <div class="modal ledger-modal" tabindex="-1" ref="modal">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">新增帳戶</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="">
                            <div class="mb-3">
                                <label for="type" class="form-label">帳戶類型</label>
                                <select id="type" class="form-select" aria-label="type" v-model="tempFund.type">
                                    <option value="fund" selected>帳戶</option>
                                    <option value="credit-card">信用卡</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label" v-if="type === 'fund'">帳戶名稱</label>
                                <label for="name" class="form-label" v-else>信用卡名稱</label>
                                <input id="name" type="text" class="form-control" v-model="tempFund.name">
                            </div>
                            <div class="mb-3">
                                <label for="amount" class="form-label">帳戶金額</label>
                                <input for="amount" type="number" class="form-control" v-model="tempFund.deposit">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn gray-btn" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn blue-btn" @click="$emit('update-fund', tempFund)">新增</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: {
    fund: {}
  },
  data () {
    return {
      modal: {},
      tempFund: {},
      type: 'fund'
    }
  },
  watch: {
    fund () {
      this.tempFund = this.fund
    },
    // 帳戶類型改為信用卡時，調整目前狀態為信用卡
    tempFund () {
      console.log('now type:', this.type)
      if (this.tempFund.type === 'credit-card') {
        this.type = 'credit-card'
      }
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
