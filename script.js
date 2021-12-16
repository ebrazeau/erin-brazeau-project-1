// Creating a hamburger menu for mobile

// When the user reaches a certain screen size:
// 1. change the class name of our UL to take on the vertical menu styles
// 2. on mouse click, reveal the vertical menu
// 3. click again to hide the menu (Toggle class)


// get the icon element
const hamIcon = document.querySelector('.fa-bars');

// get the ul containing the nav
const navUl = document.querySelector('.hor-nav');

// Add an event listener that removes our vertical menu class if the screen gets larger than 780px.

var mediaQueryList = window.matchMedia('(min-width: 780px)');

function screenTest(e) {
    if (e.matches) {
        navUl.classList.remove('vert-nav');
    } 
};
        
mediaQueryList.addListener(screenTest);
        

// add an event listener on the icon
hamIcon.addEventListener('click', function (event) {
    navUl.classList.toggle('vert-nav');
});    


