// Formatting options to pass to Intl.DateTimeFormat()
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

// Target elements for time and date
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

// Display current time/date on the page
function time() {
    // Get current time/date
    let date = new Date();

    // Format time/date
    let timeOutput = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
    let dateOutput = new Intl.DateTimeFormat('en-US', dateOptions).format(date);

    // Update text on the page
    timeElement.textContent = timeOutput;
    dateElement.textContent = dateOutput;
}

// Call time() once, and then again every second
time();
setInterval(time, 1000);
