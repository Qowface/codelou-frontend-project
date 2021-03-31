// Array of sections, which contain a heading and bookmarks
const bookmarksData = [
    {
        "heading": "Social Media",
        "bookmarks": [
            {
                "title": "Facebook",
                "url": "https://www.facebook.com"
            },
            {
                "title": "Twitter",
                "url": "https://twitter.com"
            },
            {
                "title": "LinkedIn",
                "url": "https://www.linkedin.com"
            }
        ]
    },
    {
        "heading": "Productivity",
        "bookmarks": [
            {
                "title": "Gmail",
                "url": "https://mail.google.com"
            },
            {
                "title": "Keep",
                "url": "https://keep.google.com"
            },
            {
                "title": "Drive",
                "url": "https://drive.google.com"
            },
            {
                "title": "Calendar",
                "url": "https://calendar.google.com"
            },
            {
                "title": "Evernote",
                "url": "https://www.evernote.com/client/web"
            }
        ]
    },
    {
        "heading": "Entertainment",
        "bookmarks": [
            {
                "title": "YouTube",
                "url": "https://www.youtube.com"
            },
            {
                "title": "Twitch",
                "url": "https://www.twitch.tv"
            },
            {
                "title": "Spotify",
                "url": "https://open.spotify.com"
            },
            {
                "title": "Netflix",
                "url": "https://www.netflix.com"
            }
        ]
    }
];

// Target element
const bookmarksElement = document.querySelector('.bookmarks');

let bookmarksHTML = '';

// Loop over each section from the bookmarks data array
bookmarksData.forEach(function(section) {
    // Add heading and open <ul> tag
    bookmarksHTML += `
        <p>${section.heading}</p>
        <ul>
    `;
    
    // Loop over each bookmark in the section and add HTML for each
    section.bookmarks.forEach(function(bookmark) {
        bookmarksHTML += `
            <li>
                <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>
            </li>
        `;
    });

    // Close <ul> tag
    bookmarksHTML += `
        </ul>
    `;
});

// Append HTML to the page
bookmarksElement.innerHTML += bookmarksHTML;
