const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const pay = document.querySelector('.pay');
const okay = document.querySelector('.okay');
const header = document.querySelector('.header');
const message = document.querySelector('.message');
const con = document.querySelector('.confirm');
const success = document.querySelector('.succ');
const err = document.querySelector('.error');

let mess;
let head;

function play(str) {
    let len = str.length;
    if(len>8) {
        str = str.slice(0,8) + '...';
    } 
    console.log(str);
}

function play2(str) {
    let len = str.length;
    let coll = '';
    if(len > 8) {
        for(let i=0;i<8;i++) {
            coll += str[i];
        }
        coll+='...'
    } else {
        coll =str;
    }
    return coll;
}
console.log(play2('boboremohlomi'))
function endStr(str,ends) {
    let com =str.slice(str.length-ends.length)
    if(com === ends) {
        return true
    } else{
        return false
    }
    
}
console.log(endStr('mohlomi','ohlomi'))
function end2(str,ends) {
    let cell = '';
    for(let i=str.length-ends.length;i< str.length;i++){
        if(i<0) {
            i=0;
        }
        cell+=str[i];
    }
    console.log(`end is ${cell} and taget is ${ends}`)
    if(cell === ends) {
        return true;
    } else {
        return false;
    }
    
}
console.log(end2('mohlomi','ohlomiiiii'));

play('boboremohlomi')


const arr = [1,1,3];
console.log(arr);
const copy =arr.filter((value)=>{
    if(value===1) {
       return false;  
    } else{
        return true;
    }
   
});
console.log(copy);
const mop = arr.map((value)=>{
    return value * 2;
})
console.log(mop);
const arr2 =[];
for(let i=0; i<arr.length;i++){
    let value = arr[i]*3;
    arr2.push(value);
}
console.log(arr2);

let randomNum =0;
setTimeout(()=>{
    //document.querySelector('.wrapper').style.transform='scale(1,0)';
    document.querySelector('.wrapper').style.opacity='0';
    setTimeout(()=>{
        document.querySelector('.wrapper').style.display='none';
    },500)
    document.querySelector('.cir').style.display='none';
},8000)

okay.addEventListener('click', ()=>{
    //con.style.display='none';
    con.classList.add('rev');
    pay.innerHTML='PAY';
    pay.style.backgroundColor='green';
    setTimeout(()=>{
        document.querySelector('.container').style.transition='2s';
        document.querySelector('.container').style.transform='scale(1,1)';
        
    },3000);
    
});

pay.addEventListener('click',()=>{
    pay.innerHTML='<div class="cir"></div>';
    document.querySelector('.container').style.transition='2s';
    document.querySelector('.container').style.transform='scale(0,0)';
    randomNum = Math.random();
    setTimeout(()=>{
        if(randomNum>0.499) {
            pay.innerHTML='Processed!!!';
            pay.style.backgroundColor='green';
            mess='Your order has processed successfully!!!';
            head = 'Success';
            header.style.color = 'green';
            success.style.display= 'block';
            err.style.display='none';
        } else {
            pay.innerHTML='Failed!!!';
            pay.style.backgroundColor='red';
            mess = 'Failed to process your order. Please try again.';
            head = 'Failure';
            header.style.color = 'red';
            success.style.display= 'none';
            err.style.display='block';
        }
        con.style.display='block';
        con.classList.remove('rev');
        header.innerHTML=head;
        message.innerHTML =mess;
    },5000);
})

let hours = 0;
let mins = 0;
let secs = 0;
let printa;
let mina=0;
let houra=0;
let intervalID;
reset.addEventListener('click',()=>{
    clearInterval(intervalID);
    start.innerHTML='Start';
    start.style.backgroundColor='white';
    printa =0;
    mina =0;
     mins = 0;
    secs = 0;
    if(secs< 10) {
        printa = '0'+secs+'<sub>s</sub>';
    } else {
        printa = secs+'<sub>s</sub>';
    }
    
    if(mins<10) {
        mina = '0'+mins+'<sub>m</sub>';
    }else {
        mina = mins+'<sub>m</sub>';
    }
    if(hours<10) {
        houra = '0'+hours+'<sub>h</sub>';
    }else {
        houra = hours+'<sub>h</sub>';
    }
    hour.innerHTML=houra;
    sec.innerHTML=printa;
    min.innerHTML=mina;
    reset.style.display='none';
})
start.addEventListener('click',()=>{
    if(start.innerText==='Start') {
        start.innerHTML='Pause';
        start.style.backgroundColor='red';
        reset.style.display='inline';
        starter();
    } else if(start.innerText==='Pause'){
        start.innerHTML='Resume';
        start.style.backgroundColor='green';
        clearInterval(intervalID);
    } else {
        start.innerHTML='Pause';
        start.style.backgroundColor='red';
        starter();
    }
    
    
});
function starter() {
    intervalID= setInterval(()=>{
        secs++
        if(secs< 10) {
            printa = '0'+secs+'<sub>s</sub>';
        } else {
            printa = secs+'<sub>s</sub>';
        }
        if(secs ===60) {
            mins++
            secs=0;
            
        }
        if(mins<10) {
               mina = '0'+mins+'<sub>m</sub>';
            }else {
                mina = mins+'<sub>m</sub>';
            }
        if(mins===60) {
            hours++;
            mins=0;
        }
        if(hours<10) {
            houra = '0'+hours+'<sub>h</sub>';
        }else {
            houra = hours+'<sub>h</sub>';
        }
        hour.innerHTML=houra;
        sec.innerHTML=printa;
        min.innerHTML=mina;
    },1000);
}