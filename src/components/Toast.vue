<template>
    <div class="w-100 h-100">
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
          <div class="toast-body h-100 d-flex align-items-center" :class="{ 'toast-success': message.success }">
            <strong>{{ message.title }}</strong> {{ message.content }}
          </div>
        </div>
    </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'

export default {
  data () {
    return {
      toast: {},
      message: {
        success: true,
        title: '',
        content: ''
      }
    }
  },
  inject: ['emitter'],
  methods: {
    showToast (message) {
      this.message = message
      this.toast.show()
    }
  },
  mounted () {
    this.toast = new Toast(this.$refs.toast, {
      delay: 3000
    })
    this.emitter.on('notification', (message) => {
      this.showToast(message)
    })
  }
}
</script>
