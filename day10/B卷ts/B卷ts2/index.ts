let dlbtn: HTMLButtonElement = document.getElementsByTagName('button')[0]
let username: HTMLInputElement = document.getElementsByTagName('input')[0]
let password: HTMLInputElement = document.getElementsByTagName('input')[1]
let header: HTMLElement = document.getElementsByTagName('header')[0]
let div1: HTMLDivElement = document.getElementsByTagName('div')[0]
let div2: HTMLDivElement = document.getElementsByTagName('div')[1];
let div3: HTMLDivElement = document.getElementsByTagName('div')[2];
let div4: HTMLDivElement = document.getElementsByTagName('div')[3];
let ul1: HTMLUListElement = document.getElementsByTagName('ul')[1]
let ul2: HTMLUListElement = document.getElementsByTagName('ul')[2]
let ul3: HTMLUListElement = document.getElementsByTagName('ul')[3]
let tjcg: HTMLHeadingElement = document.getElementsByTagName('h4')[0]
let tscz: HTMLHeadingElement = document.getElementsByTagName('h4')[1]
let p1: HTMLParagraphElement = document.getElementsByTagName('p')[1]
let p2: HTMLParagraphElement = document.getElementsByTagName('p')[2]
let zzkflag: boolean = false
let ywjflag: boolean = false
interface guize {
    img: string,
    name: string,
    id: number,
    state: number,
    desc: string
}
let useflag: boolean = false
let pswflag: boolean = false
let btnflag: boolean = true

let array: Array<guize> = []
let arrays: Array<guize> = []
let arrayss: Array<guize> = []
let zhengze: RegExp = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
array = [
    {
        img: "1.jpg",
        name: "红楼梦",
        state: 0,
        id: 1,
        desc: "中国古代章回体长篇小说，中国古典四大名著之一，一般认为是清代作家曹雪芹所著"
    },
    {
        img: "2.jpg",
        name: "西游记",
        state: 0,
        id: 2,
        desc: "《西游记》是中国古代第一部浪漫主义章回体长篇神魔小说。现存明刊百回本《西游记》均无作者署名。清代学者吴玉搢等首先提出《西游记》作者是明代吴承恩"
    },
    {
        img: "3.jpg",
        name: "水浒传",
        state: 0,
        id: 3,
        desc: "《水浒传》是一部以描写古代农民起义为题材的长篇小说"
    },
    {
        img: "4.jpg",
        name: "三国演义",
        state: 0,
        id: 4,
        desc: "（全名为《三国志通俗演义》，又称《三国志演义》）是元末明初小说家罗贯中根据陈寿《三国志》和裴松之注解以及民间三国故事传说经过艺术加工创作而成"
    },
    {
        img: "5.jpg",
        name: "笑面人",
        state: 0,
        id: 5,
        desc: "是雨果在一八六九年写成的长篇小说。是雨果流亡时期创作的最后一部长篇小说"
    },
    {
        img: "6.jpg",
        name: "拿破仑",
        state: 0,
        id: 6,
        desc: "拿破仑·波拿巴（法语：Napoléon Bonaparte，1769年8月15日－1821年5月5日），即拿破仑一世（Napoléon I），出生于科西嘉岛"
    },
    {
        img: "7.jpg",
        name: "郭论",
        state: 0,
        id: 7,
        desc: "本书是著名艺人郭德纲在一档音频节目中演出的文字版"
    },
    {
        img: "8.jpg",
        name: "呼啸山庄",
        state: 0,
        id: 8,
        desc: "《呼啸山庄》是英国女作家勃朗特姐妹之一艾米莉·勃朗特的作品，是19世纪英国文学的代表作之一"
    }
]
let suiji1: number = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
let suiji2: number = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
let suiji3: number = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
// 渲染
function xr(arr: Array<guize>) {
    header.style.backgroundColor = `rgb(${suiji1}, ${suiji2}, ${suiji3})`
    ul1.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li')
        li.className = 'li2'
        li.innerHTML = `
        <img src="./素材/${arr[i].img}" alt="">
        <span class='descspan'>${arr[i].desc}</span><br>
        <span class='namespan'>${arr[i].name}</span><button class="add" onclick='add(${arr[i].id})'>+</button>
        `
        ul1.appendChild(li)
    }
}
xr(array)
// 手机号正则校验
function use(ele: HTMLInputElement) {
    let parent = ele.parentNode as ParentNode
    useflag = zhengze.test(ele.value)
    if (useflag == true) {
        parent.children[1].className = 'yin'
        parent.children[2].className = 'xian'
    } else {
        parent.children[1].className = 'xian'
        parent.children[2].className = 'yin'
    }
    if (useflag == true && pswflag == true) {
        btnflag = false
        dlbtn.style.backgroundColor = `rgb(${suiji1}, ${suiji2}, ${suiji3})`
        dlbtn.style.color = '#fff'
    } else {
        dlbtn.style.backgroundColor = 'rgb(193, 193, 193)'
        btnflag = true
    }
    dlbtn.disabled = btnflag

}
// 密码校验
function psw(ele: HTMLInputElement) {
    let parent = ele.parentNode as ParentNode
    if (ele.value == 'w12345') {
        pswflag = true
    } else {
        pswflag = false
    }
    if (pswflag) {
        parent.children[1].className = 'yin'
        parent.children[2].className = 'xian'
    } else {
        parent.children[1].className = 'xian'
        parent.children[2].className = 'yin'
    }
    if (useflag == true && pswflag == true) {
        btnflag = false
        dlbtn.style.backgroundColor = `rgb(${suiji1}, ${suiji2}, ${suiji3})`
        dlbtn.style.color = '#fff'
    } else {
        dlbtn.style.backgroundColor = 'rgb(193, 193, 193)'
        btnflag = true
    }
    dlbtn.disabled = btnflag

}
// 切换颜色
function qhzt() {
    suiji1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    suiji2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    suiji3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    header.style.backgroundColor = `rgb(${suiji1}, ${suiji2}, ${suiji3})`
    dlbtn.style.backgroundColor = `rgb(${suiji1}, ${suiji2}, ${suiji3})`
    use(username)
    psw(password)
}
// 登录
function dl() {
    div1.style.display = 'none'
    div2.style.display = 'block'
    div3.style.display = 'none'
}

// 搜索
function sou(ele: HTMLInputElement) {
    let arr = array.filter(item => {
        return item.name.includes(ele.value)
    })
    xr(arr)
}
// 加入购物车
function add(index: number) {
    let arr = array[index]
    let ins = arrays.findIndex(ele => {
        return ele.name.includes(array[index].name)
    })
    if (ins == -1) {
        arrays.push(arr)
        tjcg.style.display = 'block'
        setTimeout(() => {
            tjcg.style.display = 'none'
        }, 500);
    } else {
        tscz.style.display = 'block'
        setTimeout(() => {
            tscz.style.display = 'none'
        }, 500);
    }
}
// 前往我的书架
function gomy() {
    div1.style.display = 'none'
    div2.style.display = 'none'
    div3.style.display = 'block'
    zzkflag = false
    ywjflag = false
    sjxr()
}

// 点击展开正在看
function zkzzk(ele: HTMLParagraphElement) {
    if (zzkflag == false) {
        ul2.style.display = 'block'
        ele.children[0].innerHTML = '↓'
        zzkflag = true
    } else {
        ul2.style.display = 'none'
        ele.children[0].innerHTML = '&gt;'
        zzkflag = false
    }
}
// 点击展开已看完
function zkywj(ele: HTMLParagraphElement) {
    if (ywjflag == false) {
        ul3.style.display = 'block'
        ele.children[0].innerHTML = '↓'
        ywjflag = true
    } else {
        ul3.style.display = 'none'
        ele.children[0].innerHTML = '&gt;'
        ywjflag = false
    }
}
// 渲染我的书架
function sjxr() {
    ul2.innerHTML = ''
    ul3.innerHTML = ''
    for (let i = 0; i < arrays.length; i++) {
        let li = document.createElement('li')
        li.innerHTML = `
        <span class='zfspan'>${arrays[i].name}</span><span class="myspan" onclick='bwykw(this)'>标为已看完</span>|<span class="rem" onclick='rem1(this)'>删除此书</span>
        `
        ul2.appendChild(li)
    }
    for (let i = 0; i < arrayss.length; i++) {
        let li = document.createElement('li')
        li.innerHTML = `
        <span class='zfspan'>${arrayss[i].name}</span><span class="myspan" onclick='zdyb(this)'>再读一遍</span>|<span class="rem" onclick='rem2(this)'>删除此书</span>
        `
        ul3.appendChild(li)
    }
}
// 标为未看完
function bwykw(ele: HTMLSpanElement) {
    let name = ele.parentNode?.children[0].innerHTML as string
    let index = arrays.findIndex(ele => {
        return ele.name.includes(name)
    })
    arrayss.push(arrays[index])
    arrays.splice(index, 1)
    sjxr()
}
// 再读一遍
function zdyb(ele: HTMLSpanElement) {
    let name = ele.parentNode?.children[0].innerHTML as string
    let index = arrayss.findIndex(ele => {
        return ele.name.includes(name)
    })
    arrays.push(arrayss[index])
    arrayss.splice(index, 1)
    sjxr()
}
// 删除未看完
function rem1(ele: HTMLSpanElement) {
    let name = ele.parentNode?.children[0].innerHTML as string
    let index = arrays.findIndex(ele => {
        return ele.name.includes(name)
    })
    arrays.splice(index, 1)
    sjxr()
}
// 删除已看完
function rem2(ele: HTMLSpanElement) {
    let name = ele.parentNode?.children[0].innerHTML as string
    let index = arrayss.findIndex(ele => {
        return ele.name.includes(name)
    })
    arrayss.splice(index, 1)
    sjxr()
}
// 返回
function fanhui() {
    div1.style.display = 'none'
    div2.style.display = 'block'
    div3.style.display = 'none'
    zzkflag = true
    ywjflag = true
    zkzzk(p1)
    zkywj(p2)
}