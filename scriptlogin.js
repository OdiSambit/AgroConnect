document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '') {
            alert('Please enter your username or email.');
            return;
        }

        if (password === '') {
            alert('Please enter your password.');
            return;
        }

        // Here you would typically send the login data to a server
        // For this example, we'll just log to the console and show an alert
        console.log('Login attempt:', { username, password });
        alert('Login attempt successful. In a real application, this would connect to a server for authentication.');

        // Clear the form
        loginForm.reset();
    });
});