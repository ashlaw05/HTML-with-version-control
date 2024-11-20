// footer code

const currentYear = new Date().getFullYear();
const d = new Date();
const yearElement = document.getElementById("footerYear").textContent = currentYear;
console.log(d);


// date/button code

let popup = document.getElementById("popup");

function openpopup(){
    popup.classList.add("open-popup");
}

function closepopup(){
    popup.classList.remove("open-popup");
}

// loop code

window.onload = function () {
    const ol = document.getElementById("numbers");
    for (let i = 1; i <= 12; i++) {
        const li = document.createElement("li");
        if (i % 2 === 0) {
            listItem.textContent = `Even`;
        } else {
            listItem.textContent = `Odd`;
        }
        ol.appendChild(li);
    }
    }

  

  