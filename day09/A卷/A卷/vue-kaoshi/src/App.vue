<template>
  <div>
    <input type="text" @keyup="sou" v-model="val">
    <table>
      <thead>
        <tr>
          <th>
            编号
            <button v-show="!px1" @click="pxid()">正序</button>
            <button v-show="px1" @click="pxid()">倒序</button>
          </th>
          <th>
            名称
          </th>
          <th>
            价格
            <button v-show="!px2" @click="pxjg()">正序</button>
            <button v-show="px2" @click="pxjg()">倒序</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ele, index in goods1" :key="index">
          <td>
            {{ ele.id }}
          </td>
          <td>
            {{ ele.goods_name }}
          </td>
          <td>
            {{ ele.price }}
          </td>
        </tr>
      </tbody>
    </table>
    <span>
      每页 <input class="input" type="text" v-model="number" @keyup="tiao"> 条,共<span>{{ goods.length }}</span>条
    </span>
    <span v-for="ele, index in leng" :key="index">
      <button @click="go(index + 1)">{{ index + 1 }}</button>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: [],
      val: '',
      number: 10,
      leng: 1,
      goods1: [],
      px1: true,
      px2: true,
    }
  },
  mounted() {
    this.xr()
  },
  methods: {
    xr() {
      this.$axios.get('./data.json').then(res => {
        this.goods = res.data.data
        this.goods1 = this.goods
      })
    },
    pxid() {
      if (this.px1 == false) {
        this.goods1.sort(function (a, b) {
          return a.id - b.id
        })
        this.px1 = true
      } else {
        this.goods1.sort(function (a, b) {
          return b.id - a.id
        })
        this.px1 = false
      }
    },
    pxjg() {
      if (this.px2 == false) {
        this.goods1.sort(function (a, b) {
          return a.price - b.price
        })
        this.px2 = true
      } else {
        this.goods1.sort(function (a, b) {
          return b.price - a.price
        })
        this.px2 = false
      }
    },
    sou() {
      var goods2 = this.goods1.filter(ele => {
        return ele.goods_name.includes(this.val)
      })
      this.goods1 = goods2
      if (this.val == '') {
        this.$axios.get('./data.json').then(res => {
          this.goods1 = res.data.data
        })
      }
    },
    tiao() {
      if (this.number <= 1) {
        this.number = 1
      }
      if (this.number != '') {
        this.leng = Math.ceil(this.goods.length / this.number);
        this.go(1)
      }
      if (this.number > this.goods.length) {
        this.number = 10
      }
    },
    go(index) {
      // 利用截取来实现页数的切换，这个分页并不是一个新页面而是同一条数据利用截取下标来进行渲染
      /* 分页有一个公式：
      a:页码:b:每页条数
      ((a-1)*b,a*b)
      var 开始下标 = (页码 - 1) * 每页条数
      var 结束下标 = 页码 * 每页条数
      用于渲染的数组 = 原数组.slice(开始下标, 结束下标) */
      var index1 = (index - 1) * this.number
      var index2 = index * this.number
      this.goods1 = this.goods.slice(index1, index2)
    }
  }

}
</script>
<style>
.input {
  width: 50px;
}

body {
  text-align: center;
}

table {
  border: 1px solid #000;
  text-align: center;
  margin: auto;
}

td {
  border: 1px solid #000;
  width: 400px;
  text-align: center;
}

tr {
  border: 1px solid #000;
  width: 400px;
}

th {
  border: 1px solid #000;
  text-align: center;
}
</style>