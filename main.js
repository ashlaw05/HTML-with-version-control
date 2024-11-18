


// date code

window.onload = function() {
    const greetingElement = document.getElementById("greeting");
    const currentTime = new Date().getHours(); 

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


// Alert & Hover Button
const btn = document.getElementById("btn-alert");
btn.addEventListener("click", function () {
    alert("Why can't you hear a pterodactyl going to the bathroom? Because the P is silent.");
    console.log('clicked');
}); btn.addEventListener("mouseenter", function () {
    btn.textContent = "If... you... DARE!";
}); btn.addEventListener("mouseleave", function () {
    btn.textContent = "Click here to smile";
});

// loop code
for (let i = initialValue; i <= stopValue; i = i + 1) {
    // create a new <li> element with the createElement() document method
    // (your code here)
    // set the text content of the new <li> element
    listItem.textContent = 'text';
    // append the <li> element to your ordered list
    // (your code here)
  }


  

  