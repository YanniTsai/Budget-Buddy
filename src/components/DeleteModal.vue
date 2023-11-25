<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">是否刪除 {{ title}}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            :disabled="btnDisabled"
          ></button>
        </div>
        <div class="modal-body">
          <p>確定要刪除 {{ title }} 嗎？（刪除後無法恢復）</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            :disabled="btnDisabled"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click.prevent="hideModal">確認刪除</button>
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
      this.btnDisabled = false
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
