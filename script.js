// Creating a hamburger menu for mobile

// When the user reaches a certain screen size:
// 1. change the class name of our UL to take on the vertical menu styles
// 2. on mouse click, reveal the vertical menu
// 3. click again to hide the menu (Toggle class)

console.log('The script is attached');

// get the icon element
const hamIcon = document.querySelector('.fa-bars');
// get the ul containing the nav
const navUl = document.querySelector('.hor-nav');

// add an event listener on the icon
hamIcon.addEventListener('click', function (event) {
    navUl.classList.toggle('vert-nav');
});

// need to figure out how to remove the vert-nav class at the 780px breakpoint. 
// and apply more styles to the menu