const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
const dateOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
};

const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

function time() {
    let date = new Date();
    timeElement.textContent = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
    dateElement.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
}

time();
setInterval(time, 1000);
