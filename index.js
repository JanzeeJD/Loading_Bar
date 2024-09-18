const counter = document.querySelector(".counter")
const barEl = document.querySelector(".loading-bar-front")

let idx = 0;

updateNum()

function updateNum(){
  counter.innerHTML = "🏃‍♂️  " + idx + " %";
  barEl.style.width = idx + "%" 
  idx++
  console.log("Loading started...");
  if(idx<101){
    setTimeout(updateNum,20);
  }
}