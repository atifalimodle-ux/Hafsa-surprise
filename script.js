function openSurprise() {
    document.querySelector(".box").innerHTML = `
        <div class="heart">♡</div>

        <h1>One Little Question 💭</h1>

        <p>
            What do you think makes a person truly special?
        </p>

        <button onclick="showMessage()">
            A kind heart 💗
        </button>

        <button onclick="showMessage()">
            A beautiful smile ✨
        </button>

        <button onclick="showMessage()">
            A sweet voice 🎶
        </button>
    `;

    roseRain();
    sparkles();
}


function showMessage() {
    document.querySelector(".box").innerHTML = `
        <div class="heart">♥</div>

        <h1>Well... I have an answer ❤️</h1>

        <p>
            For me, it's the little things.
            <br><br>

            Your voice is genuinely so sweet,
            and somehow it always makes things feel
            a little better.
            <br><br>

            And honestly...
            I missed having you around when you
            were away for those few days.
        </p>

        <button onclick="finalMessage()">
            There's more... 💌
        </button>
    `;

    roseRain();
    sparkles();
}


function finalMessage() {
    function finalMessage() {
    document.querySelector(".box").innerHTML = `
        <div class="heart">💖</div>

        <div class="premium-line"></div>

        <h1>For Hafsa ✨</h1>

        <p class="final-text">
            Some people quietly make the world
            a little brighter just by being in it.
            <br><br>

            Your smile, your voice, your presence,
            and all those little things that make
            you <b>you</b> are truly special.
            <br><br>

            I'm really glad you're back. 🌷
        </p>

        <div class="premium-line"></div>

        <h2>Made especially for you 💗</h2>
    `;

    roseRain();
    sparkles();
}


function sparkles() {
    for (let i = 0; i < 18; i++) {
        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";
        sparkle.innerHTML = "✦";

        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.top = Math.random() * 100 + "vh";
        sparkle.style.fontSize =
            (12 + Math.random() * 15) + "px";

        sparkle.style.animationDelay =
            Math.random() * 0.8 + "s";

        document.body.appendChild(sparkle);

        setTimeout(function () {
            sparkle.remove();
        }, 2500);
    }
}


function roseRain() {
    for (let i = 0; i < 25; i++) {

        const rose = document.createElement("div");

        rose.className = "falling-rose";
        rose.innerHTML = "🌹";

        rose.style.left =
            Math.random() * 100 + "vw";

        rose.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        rose.style.animationDelay =
            Math.random() * 2 + "s";

        rose.style.fontSize =
            (18 + Math.random() * 18) + "px";

        document.body.appendChild(rose);

        setTimeout(function () {
            rose.remove();
        }, 8000);
    }
}