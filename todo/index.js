var ul = document.querySelector('ul');
var array = [];
var num = 1;
var ipt = document.querySelector('.ipt');
ipt.focus();
function zz(e) {
    if (e.keyCode == 13) {
        var value1 = e.target.value;
        if (array.length > 0) {
            num++;
        }
        var obj = {
            id: num,
            checked: false,
            value: value1
        };
        array.push(obj);
        console.log(array);
        // zwsj()
        xr(array);
        sl1();
        var code = localStorage.getItem('code');
        if (code == '1') {
            qb();
        }
        else if (code == '2') {
            ywc();
        }
        else if (code == '3') {
            wwc();
        }
        // array = []
    }
}
// let btn: NodeListOf<HTMLButtonElement> 
function xr(array1) {
    ul.innerHTML = '';
    array.forEach(function (item) {
        var li = document.createElement('li');
        li.innerHTML = "<input type=\"checkbox\" id=\"".concat(item.id, "\" checked:\"").concat(item.checked, "\" class=\"ipt1\"><span id=\"").concat(item.id, "\">").concat(item.value, "</span><button class=\"btn\" id=\"").concat(item.id, "\">X</button>");
        ul.appendChild(li);
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
    var btn = document.querySelectorAll('button');
    var _loop_1 = function (i) {
        btn[i].onclick = function () {
            for (var j = 0; j < array.length; j++) {
                if (array[j].id == Number(btn[i].id)) {
                    array.splice(j, 1);
                }
            }
            xr(array);
            sl1();
        };
    };
    for (var i = 1; i < btn.length; i++) {
        _loop_1(i);
    }
    var ipt = document.querySelectorAll('.ipt1');
    var _loop_2 = function (s) {
        ipt[s].onclick = function () {
            var li = document.getElementsByTagName('li');
            if (array[s].checked == true) {
                array[s].checked = false;
                li[s].style.backgroundColor = '#fff';
                // 未选中
                // ncc()
                console.log(array);
            }
            else {
                array[s].checked = true;
                li[s].style.backgroundColor = 'red';
                // 已选中
                // yxz()
            }
        };
    };
    for (var s = 0; s < ipt.length; s++) {
        _loop_2(s);
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
    var a1 = document.querySelector('.a1');
    // let li: NodeListOf<HTMLLIElement> = document.querySelectorAll('li')
    a1.innerHTML = "".concat(array.length);
}
function wwc() {
    sessionStorage.setItem('code', '3');
    var li = document.querySelectorAll('li');
    var ipt = document.querySelectorAll('.ipt');
    for (var i = 0; i < array.length; i++) {
        if (array[i].checked == true) {
            li[i].style.display = 'none';
        }
        else {
            li[i].style.display = 'block';
        }
    }
}
function ywc() {
    sessionStorage.setItem('code', '2');
    var li = document.querySelectorAll('li');
    // let sl: Element = document.querySelector('.sl') as Element
    var ipt = document.querySelectorAll('.ipt');
    for (var i = 0; i < array.length; i++) {
        if (array[i].checked == false) {
            li[i].style.display = 'none';
        }
        else {
            li[i].style.display = 'block';
        }
    }
}
function qb() {
    sessionStorage.setItem('code', '1');
    // xr(todoArray1)
    var li = document.querySelectorAll('li');
    // let ipt: NodeListOf<HTMLInputElement> = document.querySelectorAll('.ipt')
    for (var i = 0; i < li.length; i++) {
        li[i].style.display = 'block';
    }
}
function xzsc() {
    // sessionStorage.setItem('code', '4')
    for (var i = 0; i < array.length; i++) {
        if (array[i].checked == true) {
            array.splice(i, 1);
        }
    }
    // array = arr1
    console.log(array);
    xr(array);
    sl1();
}
// function sc(id:number){
//     let arr1 = array.filter(item=>{
//         item.id==id
//     })
//     xr(arr1)
// }
