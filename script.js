const counter = document.getElementsByClassName("counter")[0];
const followers = document.getElementsByClassName("followers")[0];
var i = 1;
setInterval(() => {
  if (i <= 1000) {
    counter.innerText = i;
    i++;
  }
}, 1);

setTimeout(() => {
  followers.innerText = "FOLLOWRES ON INSTAGRAM";
}, 5000);
