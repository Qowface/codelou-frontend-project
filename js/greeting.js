const greetingName = 'Robert';
const greetingElement = document.getElementById('greeting');

let greetingHours = new Date().getHours();
let greetingText = '';

if (greetingHours < 6) {
    greetingText = `Still awake, ${greetingName}?`;
} else if (greetingHours >= 6 && greetingHours < 12) {
    greetingText = `Good morning, ${greetingName}!`;
} else if (greetingHours >= 12 && greetingHours < 18) {
    greetingText = `Good afternoon, ${greetingName}!`;
} else {
    greetingText = `Good evening, ${greetingName}!`;
}

greetingElement.textContent = greetingText;
