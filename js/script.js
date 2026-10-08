const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const successModal = document.getElementById("successModal");
const continueButton = document.getElementById("continueButton");
const invitationPage = document.getElementById("invitationPage");
const planPage = document.getElementById("planPage");

let noAttempts = 0;

yesButton.addEventListener("click", function () {
    successModal.classList.add("active");
});

continueButton.addEventListener("click", function () {
    successModal.classList.remove("active");

    setTimeout(function () {
        invitationPage.style.display = "none";
        planPage.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 300);
});

function moveNoButton() {
    noAttempts++;

    noButton.classList.add("running");

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const margin = 25;

    const maxX = window.innerWidth - buttonWidth - margin;
    const maxY = window.innerHeight - buttonHeight - margin;

    const randomX = Math.max(
        margin,
        Math.random() * maxX
    );

    const randomY = Math.max(
        margin,
        Math.random() * maxY
    );

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    const yesScale = Math.min(1 + noAttempts * 0.08, 1.6);

    yesButton.style.transform = `scale(${yesScale})`;

    if (noAttempts === 1) {
        noButton.textContent = "Are you sure?";
    }

    if (noAttempts === 2) {
        noButton.textContent = "Really?";
    }

    if (noAttempts === 3) {
        noButton.textContent = "Think again.";
    }

    if (noAttempts === 4) {
        noButton.textContent = "Nice try.";
    }

    if (noAttempts === 5) {
        noButton.textContent = "You can't escape.";
    }

    if (noAttempts >= 6) {
        noButton.textContent = "Okay... YES it is.";
    }
}

noButton.addEventListener("mouseenter", function () {
    moveNoButton();
});

noButton.addEventListener("touchstart", function (event) {
    event.preventDefault();
    moveNoButton();
});

noButton.addEventListener("click", function (event) {
    event.preventDefault();
    moveNoButton();
});

