//////////////////////////////////////////////////////////////////////////
    // Function to update the date and time
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString('en-US', {
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: true
        });
        
        document.getElementById('date-time').innerText = dateTimeString;
    }
    
    // Initial call to display the date and time immediately when the page loads
    updateDateTime();
    
    // Update the date and time every second
    setInterval(updateDateTime, 1000);










// initializing the Materialize dropdowns
$(document).ready(function(){
    $('.dropdown-trigger').dropdown();
    $('.slider').slider({
        interval: 5000,  // Adjust the interval between slides (in milliseconds)
        height: 500,     // Adjust the height of the slider
        indicators: true // Show indicators for slides
    });
});








// Initialize Materialize dropdowns with adjusted options/////////////
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        hover: true,         // Dropdown shows on hover
        coverTrigger: false, // Ensures dropdown doesn't cover the trigger element
        alignment: 'left',   // Aligns dropdown to the left side of the trigger
        constrainWidth: false, // Ensures the dropdown does not get constrained to the trigger width
        closeOnClick: true   // Closes dropdown when an item is clicked
    });
});




// Initialize dropdowns///////////////
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, { hover: true, coverTrigger: false });
});















//Image Slider
$(document).ready(function(){
    $('.slider').slider({
        interval: 5000,  // Adjust the interval between slides (in milliseconds)
        height: 500,     // Adjust the height of the slider
        indicators: true // Show indicators for slides
    });
});



// Example of simple alert on icon click
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', (event) => {
        alert(`You clicked on ${event.currentTarget.getAttribute('href')}`);
    });
});



//HOW TO APPLY APPLICATION FORM EVENT LISTENER//
document.querySelector('.apply-button').addEventListener('click', function() {
    window.location.href = 'application_form.html'; // Replace with the actual URL of the application form
});



//SCRIPT FOR LIVE POPULATION COUNT//
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize Materialize components if needed (e.g., for sliders)
        M.AutoInit();

        // Function to animate the count
        const animateCount = (counter, target, speed) => {
            let count = 0;
            const step = Math.ceil(target / speed);

            const updateCounter = () => {
                count += step;
                if (count < target) {
                    counter.innerText = count;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };

            // Start animation
            requestAnimationFrame(updateCounter);
        };

        // Select all counters
        const counters = document.querySelectorAll('.count');

        // Set animation speed (lower means faster)
        const speed = 200; // You can adjust the speed for all counters

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            animateCount(counter, target, speed);
        });
    });



