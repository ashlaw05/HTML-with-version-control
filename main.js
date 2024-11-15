

const fyear = document.getElementById("footerYear");
const d = new Date();
fyear.textContent = d.getFullYear();

const greeting = () => {
    if (d.getHours() <= 11) {
        alert('Good morning!');
        } else if (d.getHours() < 18 ) {
            alert('Good afternoon.');
        } else {
            alert('Good evening...');
        } 
}

const btn = document.getElementById("btn");
btn.addEventListener("click", greeting);    
