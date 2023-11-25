<template>
    <div class="modal ledger-modal" tabindex="-1" ref="modal">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">新增帳簿</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="name" class="form-label">帳簿名稱</label>
                            <input type="text" class="form-control" id="name">
                        </div>
                        <div class="mb-3">
                            <label for="currency" class="form-label">幣別</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>幣別</option>
                                <option value="NTD">台幣</option>
                                <option value="USD">美金</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="describe" class="form-label">帳簿描述</label>
                            <textarea class="form-control" id="describe" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="uploadImg" class="form-label">帳簿封面</label>
                            <input class="form-control" type="file" id="uploadImg">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" @click="hideModal">新增</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      modal: {}
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
