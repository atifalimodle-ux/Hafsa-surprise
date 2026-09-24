function openSurprise() {
    showSection(1);
}

function showSection(section) {

    const box = document.querySelector(".box");

    box.classList.remove("page-enter");

    void box.offsetWidth;

    box.classList.add("page-enter");

    if (section === 1) {
        box.innerHTML = `
            <div class="heart">♡</div>

            <h1>A Little Journey ✨</h1>

            <p>
                Okay Hafsa...
                <br><br>
                This isn't just a little message anymore.
                I thought I'd make something that takes
                a little more time to reach the end. 🌷
            </p>

            <button onclick="showSection(2)">
                Let's begin 💌
            </button>
        `;
    }

    else if (section === 2) {
        box.innerHTML = `
            <div class="heart">💗</div>

            <h1>Something About You</h1>

            <p>
                You know those people who don't have to
                try too hard to be memorable?
                <br><br>
                Somehow, you have that kind of presence.
                ✨
            </p>

            <button onclick="showSection(3)">
                Tell me more 👀
            </button>
        `;
    }

    else if (section === 3) {
        box.innerHTML = `
            <div class="heart">📺</div>

            <h1>The Web-Series Girl</h1>

            <p>
                I know you love watching web-series...
                <br><br>
                And honestly, I can see why.
                You have the kind of personality that makes
                even ordinary conversations feel like
                a scene worth remembering.
                <br><br>
                Maybe that's why talking to you never feels
                completely ordinary. ✨
            </p>

            <button onclick="showSection(4)">
                Next chapter 📺
            </button>
        `;
    }

    else if (section === 4) {
        box.innerHTML = `
            <div class="heart">📖</div>

            <h1>The Novel Reader</h1>

            <p>
                And then there's your love for novels. 📖
                <br><br>
                I feel like people who love stories
                notice little things that others sometimes miss.
                <br><br>
                Maybe that's why you have this way of making
                small moments feel a little more meaningful.
                🌙
            </p>

            <button onclick="showSection(5)">
                Turn the page 📖
            </button>
        `;
    }

    else if (section === 5) {
        box.innerHTML = `
            <div class="heart">🎶</div>

            <h1>Your Voice</h1>

            <p>
                Okay, this one deserves its own page.
                <br><br>
                Your voice is genuinely so sweet.
                🎶
                <br><br>
                There's something about hearing you talk
                that can make a normal moment feel
                surprisingly nice.
            </p>

            <button onclick="showSection(6)">
                One more thing ✨
            </button>
        `;
    }

    else if (section === 6) {
        box.innerHTML = `
            <div class="heart">🌷</div>

            <h1>The Little Things</h1>

            <p>
                It's not just one thing.
                <br><br>
                It's the way you talk,
                the way you laugh,
                the things you get excited about,
                and all those tiny details
                that make you... you.
                <br><br>
                Those little things are often the
                most memorable ones. 💗
            </p>

            <button onclick="showSection(7)">
                Keep going 🌸
            </button>
        `;
    }

    else if (section === 7) {
        box.innerHTML = `
            <div class="heart">🌙</div>

            <h1>While You Were Away...</h1>

            <p>
                There was something I noticed.
                <br><br>
                Things felt a little quieter when you
                weren't around for those few days.
                <br><br>
                And honestly...
                I missed having you around.
                🫶
            </p>

            <button onclick="showSection(8)">
                There's more...
            </button>
        `;
    }

    else if (section === 8) {
        box.innerHTML = `
            <div class="heart">✨</div>

            <h1>A Small Reminder</h1>

            <p>
                You don't always realise how special
                the little things about you can be.
                <br><br>
                Sometimes someone remembers your voice,
                your conversations, your laugh,
                or simply the way you make a moment feel.
                <br><br>
                That's what makes people memorable.
            </p>

            <button onclick="showSection(9)">
                Almost there 💌
            </button>
        `;
    }

    else if (section === 9) {
        box.innerHTML = `
            <div class="heart">🌹</div>

            <h1>One Last Question</h1>

            <p>
                If this little website were a novel,
                what would this chapter be called?
                <br><br>

                <button onclick="showSection(10)">
                    A Sweet Surprise 🌷
                </button>

                <button onclick="showSection(10)">
                    A Random Night ✨
                </button>

                <button onclick="showSection(10)">
                    A Chapter Worth Remembering 📖
                </button>
            </p>
        `;
    }

    else if (section === 10) {
        box.innerHTML = `
            <div class="heart">💖</div>

            <h1>And Finally...</h1>

            <div class="premium-line"></div>

            <p class="final-text">
                Hafsa,
                <br><br>

                Some people become memorable because
                of one big moment.
                <br><br>

                And then there are people who become
                memorable because of a hundred little things.
                <br><br>

                Your love for stories,
                your web-series obsession,
                your sweet voice,
                your smile,
                your conversations,
                and all those little things that make
                you who you are...
                <br><br>

                they're all part of the reason
                you're genuinely special.
                🌷
                <br><br>

                And yes...
                I'm really glad you're back. ❤️
            </p>

            <div class="premium-line"></div>

            <h2>Made especially for you ✨</h2>
        `;
    }

    roseRain();
    sparkles();
}


function sparkles() {

    for (let i = 0; i < 18; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";
        sparkle.innerHTML = "✦";

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            Math.random() * 100 + "vh";

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

    for (let i = 0; i < 20; i++) {

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
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const button = document.querySelector(".music-button");

    if (music.paused) {
        music.play();
        button.innerHTML = "⏸️ Pause Music";
    } else {
        music.pause();
        button.innerHTML = "🎵 Play Music";
    }
}