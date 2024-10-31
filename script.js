// JavaScript Code for Handling Login and Registration

// Function to handle login
function handleLogin(event) {
    event.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Simple validation (In real application, validate against stored user data)
    if (email === "admin@example.com" && password === "Admin@123") {
        alert("Admin logged in successfully!");
        // Redirect to admin dashboard or enable admin features
    } else {
        // Check if user exists in the user data file (This is a placeholder)
        alert("User logged in successfully!");
        // Redirect to user dashboard or enable user features
    }
}

// Function to handle registration
function handleRegister(event) {
    event.preventDefault();
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var fullName = document.getElementById('full-name').value;
    var address = document.getElementById('address').value;
    var mobileNumber = document.getElementById('mobile-number').value;
    var status = document.getElementById('status').value;

    // Perform validation and save user data (This is a placeholder)
    alert("Registration successful!");

    // Switch back to login form
    showLoginForm();
}

// Function to show register form
function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

// Function to show login form
function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// Function to check if user is logged in before accessing downloads
document.addEventListener('DOMContentLoaded', function() {
    var downloadSection = document.getElementById('download');
    // Placeholder for user authentication check
    var isLoggedIn = true; // Replace with actual authentication check

    if (!isLoggedIn) {
        downloadSection.innerHTML = `
            <div class="container">
                <h2>Download</h2>
                <p>You need to register first to access the contents. <a href="./login.html">Click here to register</a>.</p>
            </div>
        `;
    }
});
