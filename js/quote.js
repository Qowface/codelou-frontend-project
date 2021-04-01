// Array of quote objects
const quotes = [
    {
        "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis diam, bibendum et enim id, vehicula cursus urna. Duis laoreet tortor non nulla porttitor, ut varius enim convallis. Proin a fringilla dui, quis ornare nisl.",
        "source": "Source #1",
    },
    {
        "quote": "Aliquam ultrices maximus diam, vel mattis turpis pretium eget. In ultrices felis lectus, at luctus massa accumsan sit amet. Suspendisse elementum egestas libero, at pharetra quam molestie a. Proin aliquet nibh non erat volutpat pellentesque. Nunc eget cursus dui, ut sodales nisl.",
        "source": "Source #2",
    },
    {
        "quote": "Vestibulum pharetra eget nisl at interdum. Ut congue dictum aliquet. Vestibulum sed sem eu quam vulputate faucibus. Etiam ultricies felis turpis, sed varius libero laoreet non.",
        "source": "Source #3",
    },
    {
        "quote": "Etiam semper, turpis gravida accumsan pretium, elit ex hendrerit nisl, in tristique mi mauris eu felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida sed erat vitae accumsan.",
        "source": "Source #4",
    }
];

// Target element
const quoteElement = document.querySelector('.quote figure');

// Get random quote from array and display to page
function randomQuote() {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.innerHTML = `
        <blockquote>
            <p>"${quote.quote}"</p>
        </blockquote>
        <figcaption>- <cite>${quote.source}</cite></figcaption>
    `;
}

// Call function once
randomQuote();
