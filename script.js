  // Confetti effect
    function createConfetti() {
        const container = document.getElementById("confetti-container");
        const colors = ["#ff6f91","#ffcb77","#ffe066","#6a4c93","#a18cd1"];
        for(let i=0;i<50;i++){
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = Math.random() * window.innerWidth + "px";
            confetti.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
            confetti.style.animationDuration = (3 + Math.random()*2) + "s";
            confetti.style.width = (5 + Math.random()*8) + "px";
            confetti.style.height = confetti.style.width;
            container.appendChild(confetti);
        }
    }

    createConfetti();