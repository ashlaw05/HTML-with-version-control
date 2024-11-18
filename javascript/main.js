// footer code

const currentYear = new Date().getFullYear();
const d = new Date();
const yearElement = document.getElementById("footerYear").textContent = currentYear;
console.log(d);


// date code

window.onload = function() {
    const greetingElement = document.getElementById("greeting");
    const currentTime = new Date().getHours(); 

    let greetingMessage = "";
    let greetingStyle = "";


    if (currentTime >= 5 && currentTime < 12) {
        greetingMessage = "Good morning!";
        greetingStyle = "morning"; 
    } else if (currentTime >= 12 && currentTime < 18) {
        greetingMessage = "Afternoon!";
        greetingStyle = "afternoon"; 
    } else {
        greetingMessage = "Good Evening!";
        greetingStyle = "evening"; 
    }
console.log(greetingMessage);

    greetingElement.textContent = greetingMessage;
    greetingElement.className = greetingStyle;
};



const button = document.getElementById('btn-alert');
button.addEventListener('click', function() {
    alert('Button was clicked!');
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

  

  