function quiz() {
  var points=0;
  var q1 = document.querySelector("input[name='q1']:checked").value;
if (q1=="dog") {
  points+=1;
}
  var q2 = document.querySelector("input[name='q2']:checked").value;
if (q2=="husky") {
  points+=2
}
else if (q2=="chow") {
  points+=4;
}
else if (q2=="spaniel") {
  points+=6;
}
else if (q2=="bull") {
  points+=8;
}
  var q3 = document.querySelector("input[name='q3']:checked").value;
if (q3=="husky") {
  points+=2;
}
else if (q3=="chow") {
  points+=4;
}
else if (q3=="spaniel") {
  points+=6;
}
else if (q3=="bull") {
  points+=8;
}
  var q4 = document.querySelector("input[name='q4']:checked").value;
if (q4=="husky") {
  points+=2;
}
else if (q4=="chow") {
  points+=4;
}
else if (q4=="spaniel") {
  points+=6;
}
else if (q4=="bull") {
  points+=8;
}
if (points<8) {
  window.alert("You are a husky!")
}
else if (points<14) {
  window.alert("You are a chow chow!")
}
else if (points<20) {
  window.alert("You are a cavaliar king spaniel!")
}
else
  window.alert("You are a bull dog!")
}
