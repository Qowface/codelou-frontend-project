// Name to use for the greeting
const greetingName = 'Robert';

// Target element
const greetingElement = document.getElementById('greeting');

let greetingHours = new Date().getHours();
let greetingText = '';

// Set greeting text based on time of day
if (greetingHours < 6) {
    greetingText = `Still awake, ${greetingName}?`;
} else if (greetingHours >= 6 && greetingHours < 12) {
    greetingText = `Good morning, ${greetingName}!`;
} else if (greetingHours >= 12 && greetingHours < 18) {
    greetingText = `Good afternoon, ${greetingName}!`;
} else {
    greetingText = `Good evening, ${greetingName}!`;
}

// Set greeting text on the page
greetingElement.textContent = greetingText;
