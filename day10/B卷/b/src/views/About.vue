<template>
  <div class="about">
    <!-- 头 -->
    <div class="tou">
      <span class="shu">图书商城</span> <button class="jia" @click="$router.push('/shuj')">我的书架</button>
    </div>
    <!-- 框 -->
    <input
      type="text"
      class="sou"
      v-model="suo"
      @keyup.enter="sou"
      placeholder="输入书名搜索"
    />
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <img :src="'' + item.img" alt="" />
        <p class="jie">{{ item.desc }}</p>

        <div class="name">{{ item.name }}</div>
        <div class="jiaa" @click="addsj(item)">+</div>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import list from "../../public/data副本.json";
export default {
  data() {
    return {
      list: list,
      suo: "",
      list1: [],
     

    };
  },
  computed:{
    ...mapState(['iist'])
  },
  methods: {
    //添加
    addsj(itm) {
      let ss= this.iist.findIndex(item=>{
        return item.name==itm.name
       })
        if(ss==-1){
          let obj={
           name:itm.name,
           img:itm.img,
           id:itm.id,
           desc:itm.desc,
           state:itm.state,
           age:1
          }
  this.$store.commit('addsj', obj);
     console.log(this.iist);
     alert('添加成功')
    //  localStorage.setItem('shujv',this.iist)
        }    else{
          alert('已存在')
        }   
    
    },
    //搜索
    sou() {
      this.list = list;

      var list2 = this.list.filter((item) => {
        return item.name.includes(this.suo);
      });
      console.log(this.list1);
      this.list = list2;
      if (this.suo == "") {
        this.list = list;
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.jie {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.jiaa {
  display: inline-block;
  color: white;
  background-color: red;
  border-radius: 10px;
  padding: 0px 5px;
}
.name {
  font-size: 25px;
  color: red;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
li {
  width: 45%;
  padding: 10px 0;
  border: 1px solid #ccc;
  margin: 20px 0;
}
.tou {
  width: 100%;
  height: 200px;
  background-color: rgb(213, 55, 55);
  position: relative;
}
.shu {
  font-size: 30px;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.jia {
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 10px;
}
.sou {
  width: 100%;
  height: 40px;
  background-color: #ccc;
  border: 0;
}
</style>