function validateForm() {
    // Fetch form elements
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Simple validation
    if (name.trim() === '' || email.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    // If validation passes, show success message
    document.getElementById('myForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
}