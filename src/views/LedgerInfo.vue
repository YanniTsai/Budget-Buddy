<template>
    <div class="container d-flex flex-column justify-content-center align-items-center">
        <div class="calendar w-100">
            <div class="calendar-header">
                <div>
                    <i class="bi bi-caret-left"></i>
                    <span class="mx-3">2024年01月</span>
                    <i class="bi bi-caret-right"></i>
                </div>
                <div class="search-btn">
                    <i class="bi bi-search"></i>
                </div>
            </div>
            <div>
                <table class="table table-bordered w-100">
                    <thead class="table-light">
                        <tr>
                            <th>SUN</th>
                            <th>MON</th>
                            <th>TUE</th>
                            <th>WED</th>
                            <th>THU</th>
                            <th>FRI</th>
                            <th>SAT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
                            <td v-for="(cell, cellIndex) in row" :key="cellIndex" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                {{ cell }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- 每日紀錄 -->
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" ref="offcanvas">
                <div class="offcanvas-header d-flex justify-content-between">
                    <button type="button" class="btn-close mx-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">2024 年 02 月 10 日 星期六</h5>
                    <button class="btn transparent-btn" @click.prevent="showRecordOption = !showRecordOption"><i class="bi bi-plus-circle"></i></button>
                    <div class="recordOption d-flex flex-column" v-if="showRecordOption">
                        <a href="" @click.prevent="openExpenditureModal(true)"><div class="addRecord-btn btn-border">新增支出</div></a>
                        <a href="" @click.prevent="openIncomeModal(true)"><div class="addRecord-btn btn-border">新增收入</div></a>
                        <a href="" @click.prevent="openTransferModal(true)"><div class="addRecord-btn">新增轉帳</div></a>
                    </div>
                </div>
                <div class="offcanvas-body">
                    <!-- 有紀錄 -->
                    <div>
                        <!-- 支出/收入 -->
                        <div class="mb-3">
                            <div class="mb-3">
                                <span>支出：$ 1,500</span>
                                <span class="ms-3">收入：$ 30,000</span>
                            </div>
                            <div>
                                <!-- 支出 -->
                                <div class="record-detail py-3 d-flex justify-content-between">
                                    <div class="d-flex">
                                        <div class="category-icon me-3 d-flex align-items-center">👕</div>
                                        <div class="d-flex flex-column justify-content-around">
                                            <div class="title">服飾</div>
                                            <div class="description">Uniqlo T-shirt *1</div>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="text-end d-flex flex-column justify-content-around">
                                            <div>- $ 1,500</div>
                                            <div class="payment">中國信託信用卡</div>
                                        </div>
                                        <div class="edit-btn d-flex flex-column justify-content-around">
                                            <button class="btn transparent-btn" @click.prevent="openExpenditureModal"><i class="bi bi-pencil"></i></button>
                                            <button class="btn transparent-btn" @click.prevent="openDeleteModal"><i class="bi bi-trash3"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <!-- 收入 -->
                                <div class="record-detail py-3 d-flex justify-content-between">
                                    <div class="d-flex">
                                        <div class="category-icon me-3 d-flex align-items-center">🧰</div>
                                        <div class="d-flex flex-column justify-content-around">
                                            <div class="title">薪水</div>
                                            <div class="description">10月薪水</div>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="text-end d-flex flex-column justify-content-around">
                                            <div class="income">+ $ 30,000</div>
                                            <div class="payment">郵局帳戶</div>
                                        </div>
                                        <div class="edit-btn d-flex flex-column justify-content-around">
                                            <button class="btn transparent-btn" @click.prevent="openIncomeModal"><i class="bi bi-pencil"></i></button>
                                            <button class="btn transparent-btn" @click.prevent="openDeleteModal"><i class="bi bi-trash3"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 轉帳 -->
                        <div>
                            <div class="mb-3">
                                <span>轉帳：$ 3,000</span>
                            </div>
                            <div>
                                <div class="record-detail py-3 d-flex justify-content-between">
                                    <div class="d-flex">
                                        <div class="category-icon me-3 d-flex align-items-center">🏦</div>
                                        <div class="d-flex flex-column justify-content-around">
                                            <div>郵局帳戶</div>
                                            <div class="description">10月卡費</div>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="text-end d-flex flex-column justify-content-around">
                                            <div>→ 中國信託信用卡</div>
                                            <div class="transfer">$ 3,000</div>
                                        </div>
                                        <div class="edit-btn d-flex flex-column justify-content-around">
                                            <button class="btn transparent-btn" @click.prevent="openTransferModal"><i class="bi bi-pencil"></i></button>
                                            <button class="btn transparent-btn" @click.prevent="openDeleteModal"><i class="bi bi-trash3"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 無紀錄 -->
                    <!-- <div class="d-flex justify-content-center">
                        今天沒有紀錄！
                    </div> -->
                </div>
            </div>
        </div>
    </div>
    <ExpenditureModal ref="expenditureModal"></ExpenditureModal>
    <IncomeModal ref="incomeModal"></IncomeModal>
    <TransferModal ref="transferModal"></TransferModal>
    <DeleteModal ref="deleteModal"></DeleteModal>
</template>

<script>
import ExpenditureModal from '../components/ExpenditureModal.vue'
import IncomeModal from '../components/IncomeModal.vue'
import TransferModal from '../components/TransferModal.vue'
import DeleteModal from '../components/DeleteModal.vue'
import Offcanvas from 'bootstrap/js/dist/offcanvas'

export default {
  data () {
    return {
    //   day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      tableData: Array.from({ length: 6 }, () => Array(7).fill('')),
      tempRecord: {},
      showRecordOption: false
    }
  },
  components: {
    ExpenditureModal,
    IncomeModal,
    TransferModal,
    DeleteModal
  },
  methods: {
    openExpenditureModal (isNew, item) {
      if (isNew) {
        this.tempRecord = {
          type: 'expenditure'
        }
      } else {
        this.tempRecord = { ...item }
      }

      this.$refs.expenditureModal.showModal()
    },
    openIncomeModal (isNew, item) {
      if (isNew) {
        this.tempRecord = {
          type: 'income'
        }
      } else {
        this.tempRecord = { ...item }
      }

      this.$refs.incomeModal.showModal()
    },
    openTransferModal (isNew, item) {
      if (isNew) {
        this.tempRecord = {
          type: 'transfer'
        }
      } else {
        this.tempRecord = { ...item }
      }

      this.$refs.transferModal.showModal()
    },
    openDeleteModal () {
      // this.tempLedger = { ...item }
      this.$refs.deleteModal.showModal()
    }
  },
  mounted () {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas)
    console.log(this.$route)
  }
}
</script>
