let ul: HTMLUListElement = document.querySelector('ul')

interface todoArray {
    id: number,
    value: string,
    checked: boolean
}

type todoArray1 = Array<todoArray>

let array: todoArray1 = []

let num: number = 1
let ipt: HTMLInputElement = document.querySelector('.ipt')
ipt.focus()
function zz(e: { keyCode: number; target: { value: string } }): void {
    if (e.keyCode == 13) {
        let value1: string = e.target.value
        if (array.length > 0) {
            num++
        }
        let obj: todoArray = {
            id: num,
            checked: false,
            value: value1
        }
        array.push(obj)
        console.log(array);
        // zwsj()
        xr(array)
        sl1()
        let code = localStorage.getItem('code')
        if(code == '1'){
            qb()
        }else if(code == '2'){
            ywc()
        }else if(code == '3'){
            wwc()
        }

        // array = []
    }
}
// let btn: NodeListOf<HTMLButtonElement> 
function xr(array1: todoArray1) {
    ul.innerHTML = ''
    array.forEach(item => {
        let li: HTMLLIElement = document.createElement('li')
        li.innerHTML = `<input type="checkbox" id="${item.id}" checked:"${item.checked}" class="ipt1"><span id="${item.id}">${item.value}</span><button class="btn" id="${item.id}">X</button>`
        ul.appendChild(li)
    });
    // let li = document.getElementsByTagName('li')
    // for(let i =1;i<array.length;i++){
    //     if(array[i].checked==true){
    //         li[i].style.backgroundColor = 'red'
    //     }else{
    //         li[i].style.backgroundColor = '#fff'
    //     }
    // }

    // let btn: HTMLCollectionOf<Element> = document.getElementsByClassName('.btn')
    let btn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button')
    for (let i = 1; i < btn.length; i++) {
        btn[i].onclick = function () {
            for (let j = 0; j < array.length; j++) {
                if (array[j].id == Number(btn[i].id)) {
                    array.splice(j, 1)
                }
            }
            xr(array)
            sl1()
        }
    }

    let ipt: NodeListOf<HTMLInputElement> = document.querySelectorAll('.ipt1')
    for (let s = 0; s < ipt.length; s++) {
        ipt[s].onclick = function () {
            let li = document.getElementsByTagName('li')
            if (array[s].checked == true) {
                array[s].checked = false
                li[s].style.backgroundColor = '#fff'
                // 未选中
                // ncc()
                console.log(array);
                
            } else {
                array[s].checked = true
                li[s].style.backgroundColor = 'red'
                // 已选中
                // yxz()
            }


        }
    }
    // zwsj()
}

// function zwsj() {
//     let h4: HTMLHeadingElement = document.querySelector('h4') as HTMLHeadingElement
//     let li = document.querySelectorAll('li')
//     if (li.length == 0) {
//         h4.style.display = 'block'
//     } else {
//         h4.style.display = 'none'
//     }
// }


function sl1() {
    let a1: Element = document.querySelector('.a1') as Element
    // let li: NodeListOf<HTMLLIElement> = document.querySelectorAll('li')
    a1.innerHTML = `${array.length}`
}



function wwc() {
    sessionStorage.setItem('code', '3')
    let li = document.querySelectorAll('li')
    let ipt: NodeListOf<HTMLInputElement> = document.querySelectorAll('.ipt')
    for (let i = 0; i < array.length; i++) {
        if (array[i].checked == true) {
            li[i].style.display = 'none'
        } else {
            li[i].style.display = 'block'

        }
    }
}



function ywc() {
    sessionStorage.setItem('code', '2')
    let li: NodeListOf<HTMLLIElement> = document.querySelectorAll('li')
    // let sl: Element = document.querySelector('.sl') as Element
    let ipt: NodeListOf<HTMLInputElement> = document.querySelectorAll('.ipt')
    for (let i = 0; i < array.length; i++) {
        if (array[i].checked == false) {
            li[i].style.display = 'none'

        } else {
            li[i].style.display = 'block'
        }

    }
}


function qb() {
    sessionStorage.setItem('code', '1')
    // xr(todoArray1)
    let li = document.querySelectorAll('li')
    // let ipt: NodeListOf<HTMLInputElement> = document.querySelectorAll('.ipt')
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = 'block'
    }

}

function xzsc(){
    // sessionStorage.setItem('code', '4')
    for(let i = 0 ;i<array.length;i++){
        if(array[i].checked==true){
            array.splice(i,1)
        }
    }
   
    // array = arr1
    console.log(array);
    
    xr(array)
    sl1()
}



// function sc(id:number){
//     let arr1 = array.filter(item=>{
//         item.id==id
//     })
//     xr(arr1)
// }

