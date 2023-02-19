const tlacitkostart = document.getElementById("tlacitkostart");
const uvod = document.getElementById("uvod");
const burger = document.getElementById("burger");
const counter = document.getElementById("counter");
const meat = document.getElementById("meat");

let time = 0;

tlacitkostart.onclick = () => {
    uvod.style.display = "none";
burger.style.display = "block";
interval=setInterval(() => {
    time++;
  counter.innerHTML = time;
  if(time>=20){
    clearInterval(interval);
    meat.onclick = () => {
      burger.style.display = "none";
    }
  };
}, 1000);
}
tlacitko.onclick = () => {
  burger.style.display = "none";
}