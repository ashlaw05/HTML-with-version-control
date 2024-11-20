// footer code

const currentYear = new Date().getFullYear();
const d = new Date();
const yearElement = document.getElementById("footerYear").textContent = currentYear;
console.log(d);

// greeting

window.onload = function() {
    const currentTime = new Date().getHours(); 
    const greetingElement = document.getElementById("greeting");

    let greetingMessage = "";
    let greetingStyle = "";

    if (currentTime >= 5 && currentTime < 12) {
        greetingMessage = "Morning sunshine!";
        greetingStyle = "morning"; 
    } else if (currentTime >= 12 && currentTime < 18) {
        greetingMessage = "Afternoon my friend!";
        greetingStyle = "afternoon"; 
    } else {
        greetingMessage = "Evening!";
        greetingStyle = "evening"; 
    }
console.log(greetingMessage);

    greetingElement.textContent = greetingMessage;
    greetingElement.className = greetingStyle;
};


// date/button code

let popup = document.getElementById("popup");

function openpopup(){
    popup.classList.add("open-popup");
}

function closepopup(){
    popup.classList.remove("open-popup");
}

const button = document.querySelector('button');
button.addEventListener('mouseenter', function ()  {
    button.textContent = "Please I Beg!";
});

button.addEventListener('mouseleave', function () {
    button.textContent = "Click Me!"
});

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

  

  