let list = []
let result = 0;
let x;
let p;
let xValue;
let s;
let number;
let input = document.getElementById('tt');
let d;
let e;
let doc = document.getElementById('result');

function print(){
        doc.innerHTML = '';
        x = document.getElementById('tt');
        p = document.createElement('p')
        xValue = x.value;
        if (xValue){
                p.innerText = xValue
        }
        u = doc.appendChild(p)
        u.id = "love"
        console.log(result)
        p.style = 'font-weight:bold; font-size:50px; margin-top:50px';
}
let o = document.getElementById('love')
function render (){
        document.body.addEventListener('keypress', print)
        document.body.addEventListener('keyup', print)
        
}
function flush(){
        input.value = ''
}
render()
/*
function myFunction(){
        doc.innerHTML = '';
        
        if (xValue){
                p.innerText = xValue
        }
        else{
                alert("please enter a number")
        }
        doc.appendChild(p)
        p.style = 'font-weight:bold; font-size:50px; margin-top:50px'
        x.value = ''
}
*/


function add(){
        d = parseInt(input.value)
        list.push(1)
        if (d>=0){
                result += d;
                o.style.color ='green'
                input.value =''
        }
        else{
                alert("please enter a number")
        }
        console.log(list)
        console.log(result)
        
}

function sub(){
        list.push(2)
        d = parseInt(input.value)
        if (d>=0){
                if (result===0){
                        result=d
                }
                else{
                        result -= d;
                        
                }
                o.style.color ='green'
                input.value =''
        }
        else{
                alert("please enter a number")
        }
        console.log(list)
        console.log(result)
}

function equals(){
        console.log(input.value)
        d = parseInt(input.value)
        if (list[-1]==1){
                result = result + d;
        }
        else if (list[-1] ==2){
                result -=d
        }
        o.innerText = result;
        console.log(result)
}

function del(){
        
        result = 0
        input.value = ''
        o.innerText = result
        o.style.color = 'black'
}