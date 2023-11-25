<template>
  <div class="p-5 row justify-content-center justify-content-md-start">
    <div class="card col-12 col-md-3 me-3 mb-3 p-0" v-for="(item, index) in ledgers" :key="'ledger'+index">
      <div class="card-img">
        <img :src="item.img" alt="..." />
        <div class="title d-flex justify-content-center align-items-center">
            <h5 class="card-title m-0">{{ item.name }}</h5>
        </div>
        <!-- 編輯/刪除 -->
        <div class="edit-delete d-flex justify-content-end align-items-start">
            <button class="btn text-white" @click="openModal">
                <i class="bi bi-pencil"></i>
            </button>
            <button class="btn text-danger" @click="openDeleteModal">
                <i class="bi bi-trash"></i>
            </button>
        </div>
      </div>
      <div class="card-body overflow-scroll">
        <p class="card-text">
          {{ item.content }}
        </p>
      </div>
    </div>
    <button class="add-ledger-btn" @click="openModal"><i class="bi bi-plus"></i></button>
  </div>
  <LedgerModal ref="ledgerModal"></LedgerModal>
  <DeleteModal ref="deleteModal"></DeleteModal>
</template>

<script>
import LedgerModal from '../components/LedgerModal.vue'
import DeleteModal from '../components/DeleteModal.vue'

export default {
  data () {
    return {
      ledgers: [
        {
          name: 'first',
          content: '第一本',
          img: 'https://picsum.photos/215'
        },
        {
          name: 'second',
          content: '第二本',
          img: 'https://picsum.photos/215'
        },
        {
          name: 'third',
          content: '第三本',
          img: 'https://picsum.photos/215'
        },
        {
          name: 'first',
          content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores quidem sequi nisi nam cum accusamus alias repellendus natus tempora vitae ad voluptate, rem tenetur a numquam iusto beatae blanditiis.',
          img: 'https://picsum.photos/215'
        },
        {
          name: 'second',
          content: '第二本',
          img: 'https://picsum.photos/215'
        },
        {
          name: 'third',
          content: '第三本',
          img: 'https://picsum.photos/215'
        }
      ]
    }
  },
  components: {
    LedgerModal,
    DeleteModal
  },
  methods: {
    openModal () {
      this.$refs.ledgerModal.showModal()
    },
    openDeleteModal () {
      this.$refs.deleteModal.showModal()
    }
  }
}
</script>
