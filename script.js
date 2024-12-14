const countdownDate = new Date("January 1, 2025 00:00:00").getTime();  

const timer = setInterval(() => {  
    const now = new Date().getTime();  
    const distance = countdownDate - now;  

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));  
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);  

    document.getElementById("days").innerHTML = days;  
    document.getElementById("hours").innerHTML = hours;  
    document.getElementById("minutes").innerHTML = minutes;  
    document.getElementById("seconds").innerHTML = seconds;  

    if (distance < 0) {  
        clearInterval(timer);  
        document.getElementById("message").style.display = "block";  
        document.getElementById("timer").style.display = "none";  
    }  
}, 1000);  

document.getElementById("preview").addEventListener("click", () => {  
    document.getElementById("message").style.display = "block";  
    document.getElementById("timer").style.display = "none";  
});  
