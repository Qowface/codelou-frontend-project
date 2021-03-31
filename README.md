# CodeLou Front-End Project

This is my project for the Code Louisville Front-End Web Development course. It is a dashboard / home page designed to give you information at a glance. As this is only a front-end, there is a lot of placeholder data.

## Included Features:
* Media Queries:
    * Starting at 800px, the navigation is switched from a vertical layout to a horizontal layout using flexbox.
    * Starting at 1000px, the main content is displayed in a two column layout (instead of a single column).
    * Starting at 1200px, the main content is displayed in a three column layout.
* CSS Features:
    * *A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal styles, or is opened and closed by clicking the “hamburger” icon.*
        * The navigation menu switches from vertical to horizontal starting at 800px width.
    * *Use Flexbox or CSS Grid to organize content areas based on mobile or desktop views. Simply applying a basic flex property so that text wraps as you change screen sizes does not count. You must actually rearrange content or perform some more advanced feature. For example, swapping from a single column layout to a two-column layout on desktop.*
        * Flexbox is used for the horizontal navigation, the two and three column layouts, and for sticking the footer to the bottom of the page.
* JS Features:
    * *Create and populate a JavaScript array with one or more values and display the contents of some or all of the array on your page.*
        * The values from the arrays set in **news.js** and **bookmarks.js** are displayed on the page.
    * *Create a Javascript loop that dynamically displays HTML on your page - for example displaying a number of list items \<li> based on how many times you loop.*
        * This is also demonstrated in **news.js** and **bookmarks.js**, as they loop over the arrays to generate the HTML output to the page.
    * *Create at least 3 variables (var, const, or let), set their values in JavaScript, and display the values somewhere on your page.*
        * Variables for the greeting, time, and date are set in **greeting.js** and **clock.js**, and are displayed on the page.
