// Add JavaScript code for form submission and interaction here
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // You can add code here to handle form submission, such as sending the message to an email address or displaying a confirmation message to the user.
    alert('Your message has been sent. We will get back to you shortly.');

    // Clear the form fields
    contactForm.reset();
});
