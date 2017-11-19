<template>
  <div>
    <mu-paper :zDepth="2" class="container">
      <div class="header">
        <span class="title">累计收入: <span class="number">{{aggregateAmount}}元</span></span>

        <span class="title">钱包余额: <span class="number">{{aggregateAmount}}元</span></span>
        <div>
          <span class="sub_title">固定资金: <span class="number">{{workingFund}}元</span></span>
          <span class="sub_title"> 流动资金: <span class="number">{{fixedFund}}元</span></span>
        </div>
      </div>

      <mu-divider/>

      <div class="button_container">
        <mu-raised-button label="充值" primary class="button" @click="RechargeDialog = true"/>
        <mu-raised-button label="提现" primary class="button"/>
      </div>
      <mu-divider/>

      <mu-list>
        <mu-list-item v-for="(card,index) in bankCard" :title="card.bankName" :describeText="card.cardNumber"
                      :key="index" class="card_item">
          <mu-badge :content="card.cardType" primary slot="right"/>
        </mu-list-item>
      </mu-list>
      <mu-divider/>
      <mu-raised-button label="添加银行卡" primary @click=""/>

      <mu-table :fixedFooter="false" fixedHeader :height="'300px'"
                enableSelectAll multiSelectable
                :selectable="false" :showCheckbox="false">
        <mu-thead slot="header">
          <mu-tr>
            <mu-th tooltip="流水单号">流水单号</mu-th>
            <mu-th tooltip="项目名称">项目名称</mu-th>
            <mu-th tooltip="收支情况">资金情况</mu-th>
            <mu-th tooltip="金额">金额</mu-th>

          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="item,index in tableData" :key="index" :selected="item.selected">
            <mu-td>{{index + 1}}</mu-td>
            <mu-td>{{item.projectName}}</mu-td>
            <mu-td :style=[item.balance?incomeStyle:expenseStyle]>{{item.balance | balanceNormalizer}}</mu-td>
            <mu-td>￥{{item.amount}}</mu-td>

          </mu-tr>
        </mu-tbody>
      </mu-table>

    </mu-paper>


    <mu-dialog :open="RechargeDialog">
      <span slot="title">充值</span>
      <mu-text-field hintText="充值金额"/>
      <br/>
      <mu-raised-button label="支付宝"/>
      <mu-raised-button label="微信"/>
      <mu-raised-button label="银行卡"/>
      <mu-flat-button slot="actions" @click="closeRecharge" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="hanleRecharge" label="支付"/>
    </mu-dialog>


  </div>
</template>
<script>
  // import {getUserFundInfo} from '../../api/fund/base'
  export default {
    data () {
      return {
        incomeStyle: {
          color: 'red'
        },
        expenseStyle: {
          color: 'green'
        },
        tableData: [
          {
            projectName: '大项目',
            balance: true,
            amount: 100000
          },
          {
            projectName: '大项目',
            balance: false,
            amount: 100000
          },
          {
            projectName: '大项目',
            balance: true,
            amount: 100000
          },
          {
            projectName: '大项目',
            balance: false,
            amount: 100000
          }
        ],
        aggregateAmount: 10000,
        workingFund: 5000,
        fixedFund: 5000,
        bankCard: [
          {
            bankName: '中国建设银行',
            cardType: '储蓄卡',
            cardNumber: '**** **** **** 4567'
          },
          {
            bankName: '中国农业银行',
            cardType: '储蓄卡',
            cardNumber: '**** **** **** 1234'
          },
          {
            bankName: '中国招商银行',
            cardType: '信用卡',
            cardNumber: '**** **** **** 2345'
          }
        ],
        RechargeDialog: false
      }
    },
    components: {},
    methods: {
      closeRecharge () {
        this.RechargeDialog = false
      },
      hanleRecharge () {
        this.RechargeDialog = false
      }
    },
    computed: {},
    mounted () {
//      getUserFundInfo().then(res => {
//        console.log(res)
//      })
    },
    filters: {
      balanceNormalizer (balance) {
        if (balance > 0) {
          return '收入'
        } else {
          return '支出'
        }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .container {
    margin-top: 10px;
    padding: 20px 10px 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .header {
      align-self: center;
      .title {
        font-size: 32px;
        font-weight: bold;
        color: #9e9e9e;

        .number {
          color: #ffeb3b;

        }
      }
      .sub_title {
        font-size: 24px;
        font-weight: bold;
        color: #9e9e9e;

        .number {
          color: #facb3b;

        }
      }
    }

    .button_container {
      padding: 10px;
      align-self: center;
    }
    .card_item {
      .mu-item {
        .mu-item-right {
          width: 50px;
        }
      }

    }

  }
</style>
