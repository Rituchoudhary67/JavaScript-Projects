const refreshBtn = document.querySelector(".ref-btn");
const container = document.querySelector(".container")
let maxNoOfBox = 10;
// console.log(refreshBtn)

// step2 makeing that function 
function randomColor() {

    // clearing the container
    container.innerHTML = "";
    for(let i=0; i< maxNoOfBox; i++){
    //generating random no
    let randomNo = Math.floor(Math.random() * 0xffffff).toString(16);
    randomNo = `#${randomNo.padStart(6,"0")}`

    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `
    <div class="react-box" style="background:${randomNo}"></div>
    <span class="hex-value">${randomNo}</span>`;

    container.appendChild(color)
    }
 }
randomColor();



// step 1 add event listener to btn
refreshBtn.addEventListener("click",randomColor);