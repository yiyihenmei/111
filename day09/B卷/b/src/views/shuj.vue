<template>
    <div>
        <header> <span class="fh" @click="$router.push('/About')"> ❮ </span> 我的书架</header>

        <p class="one" ><span class="zzk">正在看</span> <span class="you">❯</span></p>
        <ul>
            <li   v-for="item,index in iist" :key="index" v-show="item.age==2">
                <div class="name"> {{item.name}}</div>
                <div class="todo">
                    <a href="#" @click="td(index)">标记为已完成</a>｜｜<a href="#" @click="sc(index)">删除图书</a>
                </div>
                </li>
        </ul>
        <p class="one"><span class="zzk">已看完</span> <span class="you">❯</span></p>
        <ul>
            <li  v-for="item,index in iist" :key="index" v-show="item.age==1">
                 <div class="name"> {{item.name}}</div>
                <div class="todo">
                    <a href="#"   @click="td(index)">再读一遍</a>｜｜<a href="#" @click="sc(index)">删除图书</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState} from 'vuex'
export default {
    data() {
        return {
            // ss:localStorage.getItem('shujv'),
            // age:1,
            onel:[],
            twol:[]
        }
    },
    computed:{
        ...mapState(['iist'])
    },
    methods: {
       sc(index){
        this.iist.splice(index,1)
       },
        td(i){
            // for (let i = 0; i < this.iist.length; i++){
            if(this.iist[i].age==1){
                // this.onel.push(this.iist[i])
                // console.log(this.onel);
            console.log(this.iist[i].age);
            this.iist[i].age=2

           }else{
            // this.twol.push(this.iist[i])
// console.log(this.twol);
            console.log(this.iist[i].age);

            this.iist[i].age=1
           }
            // }
         
        }
    },
}
</script>
<style scoped>
.todo{
    margin-left: 650px;
}
li{
    display: flex;
}
        header{
            background-color: red;
            color: white;
            padding: 20px 0;
            position: relative;
        }
        .fh{
            position: absolute;
            left: 6px;
            top: 10px;
        }
        .one{
            position: relative;
            background-color: red;
            width: 100%;
            padding: 20px 0;
        }
        .zzk{
            position: absolute;
                left: 5px;
                top: 0px;
                color: white;
        }
        .you{
            position: absolute;
            right: 5px;
          color: white;
        }
</style>