let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");
let btn6=document.getElementById("btn6");
let btn7=document.getElementById("btn7");
let btn8=document.getElementById("btn8");
let btn9=document.getElementById("btn9");

btn1.addEventListener("click",clickBtn1);
btn2.addEventListener("click",clickBtn2);
btn3.addEventListener("click",clickBtn3);
btn4.addEventListener("click",clickBtn4);
btn5.addEventListener("click",clickBtn5);
btn6.addEventListener("click",clickBtn6);
btn7.addEventListener("click",clickBtn7);
btn8.addEventListener("click",clickBtn8);
btn9.addEventListener("click",clickBtn9);

let xturn=true, oturn=false,gameOver=false;
let b1=btn1.innerHTML,
    b2=btn2.innerHTML,
    b3=btn3.innerHTML,
    b4=btn4.innerHTML,
    b5=btn5.innerHTML,
    b6=btn6.innerHTML,
    b7=btn7.innerHTML,
    b8=btn8.innerHTML,
    b9=btn9.innerHTML;

 function xWin(){
    if(btn1.innerHTML=="X" && btn2.innerHTML=="X" && btn3.innerHTML=="X"){
        gameOver=true;
        btn1.style.background="green";
        btn2.style.background="green";
        btn3.style.background="green";
    }
    else if(btn4.innerHTML=="X" && btn5.innerHTML=="X" && btn6.innerHTML=="X"){
        gameOver=true;
        btn4.style.background="green";
        btn5.style.background="green";
        btn6.style.background="green";
    }
    else if(btn7.innerHTML=="X" && btn8.innerHTML=="X" && btn9.innerHTML=="X"){
        gameOver=true;
        btn7.style.background="green";
        btn8.style.background="green";
        btn9.style.background="green";
    }
    else if(btn1.innerHTML=="X" && btn4.innerHTML=="X" && btn7.innerHTML=="X"){
        gameOver=true;
        btn1.style.background="green";
        btn4.style.background="green";
        btn7.style.background="green";
    }
    else if(btn2.innerHTML=="X" && btn5.innerHTML=="X" && btn8.innerHTML=="X"){
        gameOver=true;
        btn2.style.background="green";
        btn5.style.background="green";
        btn8.style.background="green";
    }
    else if(btn3.innerHTML=="X" && btn6.innerHTML=="X" && btn9.innerHTML=="X"){
        gameOver=true;
        btn3.style.background="green";
        btn6.style.background="green";
        btn9.style.background="green";
    }
    else if(btn1.innerHTML=="X" && btn5.innerHTML=="X" && btn9.innerHTML=="X"){
        gameOver=true;
        btn1.style.background="green";
        btn5.style.background="green";
        btn9.style.background="green";
    }
    else if(btn3.innerHTML=="X" && btn5.innerHTML=="X" && btn7.innerHTML=="X"){
        gameOver=true;
        btn3.style.background="green";
        btn5.style.background="green";
        btn7.style.background="green";
    }
 }
 function oWin(){
    if(btn1.innerHTML=="0" && btn2.innerHTML=="0" && btn3.innerHTML=="0"){
        gameOver=true;
        btn1.style.background="green";
        btn2.style.background="green";
        btn3.style.background="green";
    }
    else if(btn4.innerHTML=="0" && btn5.innerHTML=="0" && btn6.innerHTML=="0"){
        gameOver=true;
        btn4.style.background="green";
        btn5.style.background="green";
        btn6.style.background="green";
    }
    else if(btn7.innerHTML=="0" && btn8.innerHTML=="0" && btn9.innerHTML=="0"){
        gameOver=true;
        btn7.style.background="green";
        btn8.style.background="green";
        btn9.style.background="green";
    }
    else if(btn1.innerHTML=="0" && btn4.innerHTML=="0" && btn7.innerHTML=="0"){
        gameOver=true;
        btn1.style.background="green";
        btn4.style.background="green";
        btn7.style.background="green";
    }
    else if(btn2.innerHTML=="0" && btn5.innerHTML=="0" && btn8.innerHTML=="0"){
        gameOver=true;
        btn2.style.background="green";
        btn5.style.background="green";
        btn8.style.background="green";
    }
    else if(btn3.innerHTML=="0" && btn6.innerHTML=="0" && btn9.innerHTML=="0"){
        gameOver=true;
        btn3.style.background="green";
        btn6.style.background="green";
        btn9.style.background="green";
    }
    else if(btn1.innerHTML=="0" && btn5.innerHTML=="0" && btn9.innerHTML=="0"){
        gameOver=true;
        btn1.style.background="green";
        btn5.style.background="green";
        btn9.style.background="green";
    }
    else if(btn3.innerHTML=="0" && btn5.innerHTML=="0" && btn7.innerHTML=="0"){
        gameOver=true;
        btn3.style.background="green";
        btn5.style.background="green";
        btn7.style.background="green";
    }
 }

function clickBtn1(){
    if(btn1.innerHTML=="" && !gameOver){
        if(xturn){
            btn1.innerHTML="X";
            xturn=false;
            oturn=true;
        }
        else{
            btn1.innerHTML="0";
            oturn=false;
            xturn=true;
        }
    }
    xWin();
    oWin();
}
function clickBtn2(){
    if(btn2.innerHTML=="" && !gameOver){
        if(xturn){
            btn2.innerHTML="X";
            xturn=false;
            oturn=true;
        }
        else{
            btn2.innerHTML="0";
            oturn=false;
            xturn=true;
        }
    }
    xWin();
    oWin();
}
function clickBtn3(){
    if(btn3.innerHTML=="" && !gameOver){
        if(xturn){
            btn3.innerHTML="X";
            xturn=false;
            oturn=true;
        }
        else{
            btn3.innerHTML="0";
            oturn=false;
            xturn=true;
        }
    }
    xWin();
    oWin();
}
function clickBtn4(){
    if(btn4.innerHTML=="" && !gameOver){
        if(xturn){
            btn4.innerHTML="X";
            xturn=false;
            oturn=true;
        }
        else{
            btn4.innerHTML="0";
            oturn=false;
            xturn=true;
        }
    }
    xWin();
    oWin();
}
function clickBtn5(){
    if(btn5.innerHTML=="" && !gameOver){
        if(xturn){
            btn5.innerHTML="X";
            xturn=false;
            oturn=true;
        }
        else{
            btn5.innerHTML="0";
            oturn=false;
            xturn=true;
        }
    }
    xWin();
    oWin();
}
function clickBtn6(){
    if(btn6.innerHTML=="" && !gameOver){
        if(xturn){
            btn6.innerHTML="X";
            xturn=false;
            oturn=true;
        }
        else{
            btn6.innerHTML="0";
            oturn=false;
            xturn=true;
        }
    }
    xWin();
    oWin();
}
function clickBtn7(){
    if(btn7.innerHTML=="" && !gameOver){
        if(xturn){
            btn7.innerHTML="X";
            xturn=false;
            oturn=true;
        }
        else{
            btn7.innerHTML="0";
            oturn=false;
            xturn=true;
        }
    }
    xWin();
    oWin();
}
function clickBtn8(){
    if(btn8.innerHTML=="" && !gameOver){
        if(xturn){
            btn8.innerHTML="X";
            xturn=false;
            oturn=true;
        }
        else{
            btn8.innerHTML="0";
            oturn=false;
            xturn=true;
        }
    }
    xWin();
    oWin();
}
function clickBtn9(){
    if(btn9.innerHTML=="" && !gameOver){
        if(xturn){
            btn9.innerHTML="X";
            xturn=false;
            oturn=true;
        }
        else{
            btn9.innerHTML="0";
            oturn=false;
            xturn=true;
        }
    }
    xWin();
    oWin();
}