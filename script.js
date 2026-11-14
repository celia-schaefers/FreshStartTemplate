// Runs in the browser. Find the button and the message line on the page.
const button = document.getElementById("cheer");
const message = document.getElementById("message");

// ✏️ Try adding your own messages to this list.
const cheers = [
  "Go Tribe! 💚",
  "You just ran JavaScript!",
  "Keep building!",
];

let clicks = 0;

// When the button is clicked, show the next message.
button.addEventListener("click", () => {
  message.textContent = cheers[clicks % cheers.length];
  clicks++;
});
