const refreshBtn = document.querySelector(".ref-btn");
// console.log(refreshBtn)

// step2 makeing that function 
function randomColor() {
//   console.log("hello")
let randomNo = Math.floor(Math.random() * 0xffffff).toString(16);
// randomNo = `#{$randomNo.pad}`
console.log(randomNo)

}




// step 1 add event listener to btn
refreshBtn.addEventListener("click",randomColor);