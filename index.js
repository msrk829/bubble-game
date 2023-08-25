var hit = 0;
var score =0;
var time =30;
function getBubble() {
    var bubble ="";
    for(var i=0;i<168;i++){
        var bbl = Math.floor(Math.random()*10);
        bubble += `<div class="bubble">${bbl}</div>`;
        document.querySelector("#pbtm").innerHTML = bubble;
    }
}
function getNewHit() {
    hit = Math.floor(Math.random()*10);
    document.querySelector("#newhit").innerHTML = hit ;
}
function getTimer() {
    var timer = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#timer").innerHTML = time;
        }else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over with ${score} Score</h1>`;
        }
    },1000);
}

function getScore() {
    document.addEventListener("click",function(e){
        var temp = Number(e.target.innerHTML);
        if(hit === temp){
            score +=10;
            document.querySelector("#score").textContent = score;
            getNewHit();
            getBubble();
        }
    });
}
getScore();
getTimer();
getNewHit();
getBubble();