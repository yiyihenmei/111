<template>
  <div class="home">
    <!-- 头部 -->
    <div class="head" :class="aa">
      <span class="da">用户登录</span>
      <button class="qh" :class="aa" @click="qhzt">切换主题</button>
    </div>
<!-- kuang -->
手机号：<input type="text" v-model="model" @keyup="sjh"><br>
<p v-show="flag" style="color:red">请输入正确手机号</p>
密码: <input type="text" v-model="mm" @keyup="pass"><br>
<p v-show="flaa" style="color:red">请输入正确密码</p>
<button @click="dl" >登录</button>

  </div>
</template>

<script>
export default {
 data() {
  return {
    aa:'',
    bb:1,
    model:'',
    mm:'', 
    reg:/^1[0-9]{9}$/,
    regg:/^[a-z][0-9]{6}$/,
    flag:false,
    flaa:false,
  }
 },
 methods: {
  //登录
  dl(){
    if(this.model==''||this.mm==''){
      alert('不能为空请输入')
      return
    }
    if(this.flag==false&&this.flaa==false){
      this.$router.push('/about')
        
    }
  },
  //校验手机号
  sjh(){
      if(this.reg.test(this.model)==false){
        this.flag=true
      }else{
        this.flag=false
      }
  },
  //校验密码
  pass(){
      if(this.regg.test(this.mm)==false){
        this.flaa=true
      }else{
        this.flaa=false
      }
  },
  //切换主题
  qhzt(){
    if(this.bb==1){
      this.aa='gren'
      this.bb=2
    }else if(this.bb==2){
      this.aa='re'
      this.bb=3
    }else{
      this.aa='blu'
      this.bb=1
    }
  },
 },
}
</script>

<style>
.gren{
  background-color: rgb(94, 230, 94);
}
.re{
  background-color: rgb(235, 118, 101);
}
.blu{
  background-color: aqua;
}

  .da{
    font-size: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .head{
    width: 100%;
    height: 200px;
 
    padding: 0;
    margin: 0;
    position: relative;
  }
  .qh{
    position: absolute;
    right: 10px;
    top: 10px;
   
  }
</style>