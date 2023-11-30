// Add JavaScript code for form submission and interaction here
const appointmentForm = document.getElementById('appointment-form');

appointmentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // You can add code here to handle form submission, such as sending the request to a server or displaying a confirmation message to the user.
    alert('Your appointment request has been received. We will get back to you shortly.');

    // Clear the form fields
    appointmentForm.reset();
});
