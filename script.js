const display = document.querySelector(".order-btn");
const colour= document.querySelector(".green");
function callToAction(){
    return display.classList.toggle("green");
}
setInterval(callToAction, 500)