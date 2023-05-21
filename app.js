// Selecting the necessary elements
const up = document.querySelector('.header .nav-bar .nav-list .up'); // Selects the element with class 'up' within the navigation list in the header
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul'); // Selects the <ul> element within the navigation list in the header
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a'); // Selects all <a> elements within the list items in the navigation list
const header = document.querySelector('.header.container'); // Selects the element with class 'header' and 'container'

// Adding click event listener to the up icon
up.addEventListener('click', () => {
  up.classList.toggle('active'); // Toggles the 'active' class on the 'up' element
  mobile_menu.classList.toggle('active'); // Toggles the 'active' class on the 'mobile_menu' element
});

// Adding scroll event listener to change header background color
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY; // Retrieves the vertical scroll position of the page
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c'; // Changes the background color of the 'header' element to '#29323c' when the scroll position is greater than 250 pixels
  } else {
    header.style.backgroundColor = 'transparent'; // Sets the background color of the 'header' element to transparent when the scroll position is less than or equal to 250 pixels
  }
});


// Adding click event listener to menu items
menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    up.classList.toggle('active'); // Toggles the 'active' class on the 'up' element
    mobile_menu.classList.toggle('active'); // Toggles the 'active' class on the 'mobile_menu' element
  });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect(); // Retrieves the position and dimensions of the element
  return (
    rect.top >= 0 && // Checks if the top edge of the element is at least partially visible
    rect.left >= 0 && // Checks if the left edge of the element is at least partially visible
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && // Checks if the bottom edge of the element is at least partially visible
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) // Checks if the right edge of the element is at least partially visible
  );
}

// Function to handle scroll animations
function handleScrollAnimations() {
  var serviceItems = document.querySelectorAll('.service-item'); // Selects all elements with the class 'service-item'

  serviceItems.forEach(function (item) {
    if (isInViewport(item)) { // Checks if the item is in the viewport using the 'isInViewport' function
      item.classList.add('animate'); // Adds the 'animate' class to the item to trigger the scroll animation
    } else {
      item.classList.remove('animate'); // Removes the 'animate' class from the item if it is not in the viewport
    }
  });
}


// Adding scroll event listener to trigger scroll animations
window.addEventListener('scroll', function () {
  handleScrollAnimations();
});

// Initial check on page load
handleScrollAnimations();

// Initializing AOS library on DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800, // Sets the duration of animation in milliseconds
    once: true, // Specifies whether the animation should only occur once
    offset: 200, // Sets the offset (in pixels) before the element is considered in the viewport
  });
});


// Adding scroll event listener to trigger scroll animations for service items
window.addEventListener('scroll', function () {
  const serviceItems = document.querySelectorAll('.service-item'); // Selects all elements with the class 'service-item'
  serviceItems.forEach(function (item) {
    if (isInViewport(item)) { // Checks if the item is in the viewport using the 'isInViewport' function
      item.classList.add('animate'); // Adds the 'animate' class to the item to trigger the scroll animation
    }
  });
});


// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 && // Check if the top of the element is visible in the viewport
    rect.left >= 0 && // Check if the left side of the element is visible in the viewport
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && // Check if the bottom of the element is visible in the viewport
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) // Check if the right side of the element is visible in the viewport
  );
}


// Initializing slider using the tns library
let slider = tns({
  container:".my-slider", // Specifies the container element for the slider
  "slideBy": 1, // Defines the number of slides to move when using navigation
  "speed":400, // Sets the speed of slide transitions in milliseconds
  "nav":false, // Disables the default navigation buttons
  controlsContainer: "#custom-controls", // Specifies the container element for custom controls
  responsive:{ // Defines responsive settings for different screen sizes
    1600:{
      items:4, // Number of items to display at a time on screens with a width of 1600px or more
      gutter:20 // Sets the space between items
    },
    1024:{
      items:3, // Number of items to display at a time on screens with a width between 1024px and 1599px
      gutter:20
    },
    768:{
      items:2, // Number of items to display at a time on screens with a width between 768px and 1023px
      gutter:20
    },
    480:{
      items:1, // Number of items to display at a time on screens with a width between 480px and 767px
      gutter:20
    }
  }
});



	