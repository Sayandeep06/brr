const messages = [
    "Are you sure love?",
    "You don't love me??",
    "Even the kisses we shared in rain",
    "The hugs?",
    "All the sleepless nights we shared!",
    "If you say no, I will be really hurt...",
    "I will cry...",
    "Do you hate me...",
    "Ok fine, I will stop asking...",
    "Just kidding, say you love me! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}