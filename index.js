let time = document.getElementById('receive');

let timer_start = () => { 

setInterval(function() {
let min = Math.floor(time.value / 60);
let sec = String(time.value % 60).padStart(2, '0');

if(time.value >= 0) {
  document.getElementById('timer').innerText = min + ':' + sec;
  document.getElementById("receive").style.display = "none";
  document.getElementById('start_btn').style.display = "none";
  time.value -= 1;
} else {
  document.getElementById('start_btn').style.display = "block";
  document.getElementById('start_btn').innerText = "타이머 종료";
}
}, 1000);

}