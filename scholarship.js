const scholarshipForm = document.getElementById('scholarship-form');

scholarshipForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gpa = parseFloat(document.getElementById('gpa').value);
    const major = document.getElementById('major').value;
    const income = parseFloat(document.getElementById('income').value);
    const financialAid = parseFloat(document.getElementById('financial-aid').value);
    const purpose = document.getElementById('purpose').value;

    // You can add further validation and data processing here
    // For this simplified example, we're not handling submissions to a server.

    // Display a confirmation message
    alert('Application submitted successfully!');
    scholarshipForm.reset(); // Reset the form
});
