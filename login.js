document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    emailInput.addEventListener('input', () => {
        const email = emailInput.value;
        if (!validateEmail(email)) {
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = 'green';
        }
    });

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const strengthMessage = checkPasswordStrength(password);
        passwordInput.style.borderColor = strengthMessage.color;
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        alert('Logging in...');
        // Add API or backend call logic here
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function checkPasswordStrength(password) {
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (strongRegex.test(password)) {
            return { message: 'Strong Password', color: 'green' };
        } else if (mediumRegex.test(password)) {
            return { message: 'Medium Strength', color: 'orange' };
        } else {
            return { message: 'Weak Password', color: 'red' };
        }
    }
});
