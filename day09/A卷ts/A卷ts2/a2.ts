// const configJson= require('./data.json')
// 这里导入的数据已经是Json格式，不要再使用JSON.parse()转换了，否则报错

interface datasj {
    id: number,
    goods_name: string,
    price: number
}
type datada = Array<datasj>

let datalist: datada = [
    {
        "id": 1,
        "goods_name": "vivo 手机 p30",
        "price": 1242
    },
    {
        "id": 2,
        "goods_name": "苹果手机 iphone plus",
        "price": 45000
    },
    {
        "id": 3,
        "goods_name": "宝马 X7 4驱",
        "price": 750000
    },
    {
        "id": 4,
        "goods_name": "宝马 5系 2驱",
        "price": 450000
    },
    {
        "id": 5,
        "goods_name": "锤子手机 200G",
        "price": 2000
    },
    {
        "id": 6,
        "goods_name": "华为手机 P40",
        "price": 5000
    },
    {
        "id": 7,
        "goods_name": "红米 手机",
        "price": 1200
    },
    {
        "id": 8,
        "goods_name": "海尔电冰箱 3匹",
        "price": 980
    },
    {
        "id": 9,
        "goods_name": "苹果笔记本电脑 i9",
        "price": 20000
    },
    {
        "id": 10,
        "goods_name": "精品手机 华为 200G",
        "price": 3200
    }
]
// 调用渲染
getlist(datalist)

// 渲染页面封装
function getlist(listarr: Array<datasj>): void {
    console.log(listarr);
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    for (var i = 0; i < listarr.length; i++) {
        let tr = document.createElement('tr')
        tr.innerHTML = `
                <td>${listarr[i].id}</td>
                <td>${listarr[i].goods_name}</td>
                <td>${listarr[i].price}</td>
         `
        tbody?.appendChild(tr)
    }
}
//let sousuoitem:HTMLElement=document.getElementsByClassName('sousuoval')
//console.log(sousuoitem,' sousuoitem');

// sousuoitem.onkeyup(function(){
//     alert(111)
//     sousuo(datalist)
// })

function baocuo(event) {
    if (event.keyCode == 13) {
        console.log(123);

        sousuo(datalist, event.target.value)
    }
}
//sousuoitem.addEventListener('click',function(){
//  sousuo(datalist)
//})

// 搜索功能实现
function sousuo(listarr: Array<datasj>, value: string) {
    if (listarr.length < 10) {
        listarr = datalist
    }
    let allss: Array<datasj> = []
    listarr.forEach(item => {
        let sousuoitem = value
        if (sousuoitem.length == null) {
            listarr = datalist
        }
        var arr = item.goods_name.includes(sousuoitem)
        if (arr) {
            console.log(123);
            allss.push(item)

        }
    })
    getlist(allss)
}
// id排序
let ids: boolean = false
function sortsid(event) {
    ids = !ids
    let sorts: Array<datasj> = []
    sorts = datalist.sort(function (a, b) {
        return ids ? b.id - a.id : a.id - b.id
    })
    getlist(sorts);

}
// 价格price排序
let pics: boolean = false
function sortspic(event) {
    pics = !pics
    let sortpics: Array<datasj> = []
    sortpics = datalist.sort(function (a, b) {
        return pics ? b.price - a.price : a.price - b.price
    })
    getlist(sortpics);
}

// 分页
// 定义数据
let pagesize: number = 10
let pagenum: number = Math.ceil(datalist.length / pagesize)
pagenumss(pagenum)
let nums = document.getElementsByTagName('input')[1]
nums.value = `${pagesize}`
// 输入页数调用函数
function pagenumss(numss) {
    let sizenums: Array<number> = []
    let num: number = 1
    for (var i = 0; i < numss; i++) {
        sizenums.push(num++)
    }
    let ul: HTMLUListElement = document.getElementsByTagName('ul')[0]
    ul.innerHTML=``
    sizenums.forEach(item => {
        let li = document.createElement('li')
        li.innerHTML = `
        ${item}
    `
        ul.appendChild(li)
        li.onclick=function(){
            console.log(item);
            let getnumarr:Array<datasj>=[]
            getnumarr=datalist.slice(((item-1)*pagesize),item*pagesize)
            getlist(getnumarr)
        }
    })
}
// 点击页码调用函数
function getpagesize(event) {
    if (event.keyCode == 13) {
        console.log(event.target.value);
        pagesize=event.target.value
        pagenum=Math.ceil(datalist.length / pagesize)
        pagenumss(pagenum)
        let getpagearr:Array<datasj>=[]
        getpagearr=datalist.slice(((pagenum-1)*pagesize),pagenum*pagesize)
        getlist(getpagearr)
    }
}