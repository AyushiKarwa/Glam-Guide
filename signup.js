document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
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

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Signup successful! Please log in.');
                window.location.href = 'login.html';
            } else {
                alert(data.message || 'Signup failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to connect to the server.');
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

