// ===== Password Unlock =====
const unlockBtn = document.getElementById("unlockBtn");
const pwdInput = document.getElementById("password");

unlockBtn.addEventListener("click", unlock);

function unlock() {
    const input = pwdInput.value.toLowerCase();
    if(input === "beatrice") {
        document.getElementById("lockScreen").style.display = "none";
        startAnimations();
    } else {
        document.getElementById("error").innerText = "Hmm… try again 🤭";
    }
}

// ===== Start All Animations =====
function startAnimations() {
    // -------- Typing Message --------
    const text = `Happy Birthday Beatrice 🎉

Even though we haven’t met yet, everything with you feels real.

You’re someone I genuinely enjoy talking to,
someone that makes my day better without even trying.

I don’t say this lightly… you’re special to me ❤️

I hope today gives you the same happiness you bring me.

Enjoy your day, beautiful ✨✨`;
    let i = 0;
    function typeEffect() {
        if(i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 35);
        }
    }
    typeEffect();

    // -------- Slideshow --------
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides.forEach(s => s.classList.remove("active"));
        slides[index].classList.add("active");
    }

    function changeSlide(n) {
        slideIndex = (slideIndex + n + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));

    showSlide(slideIndex);
    setInterval(() => changeSlide(1), 3500);

    // -------- Floating Hearts --------
    function heart() {
        const h = document.createElement("div");
        h.classList.add("heart");
        h.innerHTML = "❤️";
        h.style.left = Math.random()*100 + "vw";
        h.style.fontSize = (Math.random()*20+20) + "px";
        document.getElementById("hearts").appendChild(h);
        setTimeout(()=>h.remove(),5000);
    }
    setInterval(heart, 500);

    // -------- Name Floating --------
    setInterval(() => {
        const el = document.createElement("div");
        el.classList.add("name-float");
        el.innerText = "Beatrice";
        el.style.left = Math.random() * 100 + "vw";
        el.style.fontSize = (Math.random()*30 + 20) + "px";
        document.body.appendChild(el);
        setTimeout(()=>el.remove(),10000);
    }, 1500);

    // -------- Love Notes & Tap Glow --------
    const notes = ["You make me smile 😌","You’re special ❤️","I like you 🤭","My favorite person 😏","You matter to me ✨"];
    let musicStarted = false;
    document.body.addEventListener("click",(e)=>{
        // Play music on first click
        const bg = document.getElementById("bgMusic");
        if(!musicStarted){
            bg.play();
            musicStarted = true;
        }

        // Create love note
        const n = document.createElement("div");
        n.classList.add("love-note");
        n.innerText = notes[Math.floor(Math.random()*notes.length)];
        n.style.left = e.clientX + "px";
        n.style.top = e.clientY + "px";
        document.body.appendChild(n);
        setTimeout(()=>n.remove(),2000);

        // Tap glow
        const g = document.createElement("div");
        g.classList.add("tap-glow");
        g.style.left = e.clientX + "px";
        g.style.top = e.clientY + "px";
        document.body.appendChild(g);
        setTimeout(()=>g.remove(),600);
    });
}

// ===== Secret Message =====
function showMessage() {
    const s = document.getElementById("secret");
    s.style.display = "block";
    s.innerText = "Don’t lie… you felt that 😌❤️";
}
let musicStarted = false;
const bg = document.getElementById("bgMusic");

document.body.addEventListener("click", (e) => {
    if (!musicStarted) {
        musicStarted = true;
        bg.volume = 0;        // start muted
        bg.play().catch(err => console.log("Audio failed to play:", err));

        // Smooth fade-in
        let vol = 0;
        const fadeIn = setInterval(() => {
            if (vol < 1) {
                vol += 0.02; // increase volume gradually
                bg.volume = vol;
            } else {
                bg.volume = 1;
                clearInterval(fadeIn);
            }
        }, 100); // every 100ms
    }

    // Love note
    const notes = ["You make me smile 😌","You’re special ❤️","I like you 🤭","My favorite person 😏","You matter to me ✨"];
    const n = document.createElement("div");
    n.classList.add("love-note");
    n.innerText = notes[Math.floor(Math.random()*notes.length)];
    n.style.left = e.clientX + "px";
    n.style.top = e.clientY + "px";
    document.body.appendChild(n);
    setTimeout(()=>n.remove(),2000);

    // Tap glow
    const g = document.createElement("div");
    g.classList.add("tap-glow");
    g.style.left = e.clientX + "px";
    g.style.top = e.clientY + "px";
    document.body.appendChild(g);
    setTimeout(()=>g.remove(),600);
});