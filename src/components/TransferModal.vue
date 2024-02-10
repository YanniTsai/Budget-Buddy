<template>
    <div class="modal ledger-modal" tabindex="-1" ref="modal">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">新增轉帳</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="col-md-6 mb-3 d-flex justify-content-center">
                        <span>2024 年 02 月 10 日 星期六</span>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="currency" class="form-label">轉出帳戶</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>帳戶</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="currency" class="form-label">轉入帳戶</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>帳戶</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="amount" class="form-label">金額</label>
                                <input type="text" class="form-control" id="amount" v-model="tempLedger.name">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div>
                                <label for="describe" class="form-label">備註</label>
                                <textarea class="form-control" id="describe" rows="8" v-model="tempLedger.description"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn gray-btn" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn blue-btn" @click="$emit('update-ledger', tempLedger)">新增</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: {
    ledger: {}
  },
  data () {
    return {
      modal: {},
      tempLedger: {}
    }
  },
  watch: {
    ledger () {
      this.tempLedger = this.ledger
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
