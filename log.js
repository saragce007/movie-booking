// Function to show the selected form and hide others
function showForm(formId) {
    document.querySelectorAll('.form-container').forEach(form => {
        form.classList.add('hidden');
    });
    document.getElementById(formId).classList.remove('hidden');
}

// Validate sign-in form based on the selected role
function validateSignIn() {
    const role = document.getElementById('signin-role').value;

    if (role === 'admin') {
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;

        if (email === 'sara@gmail.com' && password === '12345@') {
            window.location.href = '../HTML/amn.html'; // Redirect to admin page
            return false;
        } else {
            alert('Invalid admin credentials');
            return false;
        }
    } else if (role === 'user') {
        const email = document.getElementById('user-email').value;
        const password = document.getElementById('user-password').value;

        if (email === 'm@gmail.com' && password === '12345') {
            window.location.href = './lnd.html'; // Redirect to landing page
            return false;
        } else {
            alert('Invalid user credentials');
            return false;
        }
    }

    return false;
}

// Show or hide fields based on the selected role
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signin-role').addEventListener('change', function() {
        const role = this.value;
        if (role === 'admin') {
            document.getElementById('admin-fields').classList.remove('hidden');
            document.getElementById('user-fields').classList.add('hidden');
        } else if (role === 'user') {
            document.getElementById('admin-fields').classList.add('hidden');
            document.getElementById('user-fields').classList.remove('hidden');
        } else {
            document.getElementById('admin-fields').classList.add('hidden');
            document.getElementById('user-fields').classList.add('hidden');
        }
    });
});
