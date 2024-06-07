var clutter = "";
var score = 0;
var rn;

function makebubble(){for(var i=1; i<=156; i++ ){
   var rnn = Math.floor(Math.random( ) * 10);
     clutter +=`<div class="bubbles">${rnn}</div>`;
}
}
makebubble();
document.querySelector("#pbot").innerHTML=clutter;
var timer =60;
function runtimer(){
   var timerint= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(timerint)
            document.querySelector("#pbot").innerHTML=`<h1>gameover</h1>`;
        }
    },1000);

}
runtimer();

function hitnew(){
   rn =Math.floor(Math.random() *10) 
  document.querySelector("#hit").textContent=rn; 
}
hitnew();

function getscore(){
    score+=10;   
    document.querySelector("#score").textContent=score;
 }
 
 document.querySelector("#pbot")
 .addEventListener("click" , function(dets){
   var clickednum = Number(dets.target.textContent);
     if(clickednum === rn){
        getscore();
        
    }
    makebubble();
        runtimer();
     hitnew(); 
 });
makebubble();
runtimer();
hitnew();