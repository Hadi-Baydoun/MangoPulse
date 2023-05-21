Mangopulse Website.

This project presents a website for MangoPulse product showing what features and services they provide along with some of their clients.

#Built With:
HTML
CSS
JavaScript

#Libraries Used:
Animate.css - CSS animation library     https://github.com/animate-css/animate.css
Tiny Slider - JavaScript slider library https://github.com/ganlanyuan/tiny-slider 
AOS - Animate On Scroll library         https://github.com/michalsnik/aos



#Contains 5 Sections:
Home section: Introduces Mangopulse
with 2 boxes live demo and unleash your potential that takes you to contact me section and introduction to mangopulse

Services Section: Highlights various services provided by Mangopulse
Appear after scrolling with hover effect 

Features Section: Showcases notable features of Mangopulse
It is slider showing the features

Clients Section: Displays Mangopulse's clients
Hover effect over logos of the clients

Contact Section: Provides contact details with a Google Map location
having 4 sections to write: name, phone, email and message with animation on send button and on the left side google map location , email of mangopulse and phone number

Footer


#JS Code:

The code starts by selecting necessary elements using document.querySelector and document.querySelectorAll methods. It selects elements such as the up icon, mobile menu, menu items, and header.

Adding Click Event Listener to the Up Icon
An event listener is added to the up icon (up) to toggle the 'active' class on the up and mobile_menu elements when the icon is clicked.

Adding Scroll Event Listener to Change Header Background Color
A scroll event listener is added to the document to change the background color of the header based on the scroll position. If the scroll position is greater than 250 pixels, the background color is set to '#29323c'. Otherwise, it is set to transparent.

Adding Click Event Listener to Menu Items
Event listeners are added to each menu item (menu_item) to toggle the 'active' class on the up and mobile_menu elements when a menu item is clicked.

Checking Element Visibility
The isInViewport function is defined to check if an element is visible within the viewport. It calculates the element's position and dimensions using getBoundingClientRect and returns true if the element is at least partially visible.

Handling Scroll Animations
The handleScrollAnimations function selects all elements with the class 'service-item' and adds or removes the 'animate' class based on whether they are in the viewport. This function is used to trigger scroll animations.

Initializing Scroll Animations on Page Load
The handleScrollAnimations function is called on page load to initially check if any elements with the 'service-item' class are in the viewport and add the 'animate' class accordingly.

Initializing AOS Library
The AOS (Animate On Scroll) library is initialized using the AOS.init function. It sets options such as animation duration, whether animations occur only once, and the offset before elements are considered in the viewport. This initialization is performed when the DOMContentLoaded event is fired.

Adding Scroll Event Listener to Trigger Scroll Animations for Service Items
Another scroll event listener is added to trigger scroll animations for service items (serviceItems). When an item is in the viewport, the 'animate' class is added to it.

Initializing Slider using the tns Library
The code initializes a slider using the tns (Tiny Slider) library. It specifies the container element, slide transition settings, navigation controls, and responsive settings for different screen sizes.
