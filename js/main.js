var elWrapper = document.querySelector(".wrapper");
var elInp = document.querySelector(".inp");

var arr = ["olma", "behi", "anor"];
function fn() {
  if (elInp.value.length < 4) {
    arr.unshift(elInp.value);

    console.log(arr);
  } else {
    arr.push(elInp.value);
    console.log(arr);
  }
}
