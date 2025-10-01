class AuthForm {
    constructor() {
        this.isSignUp = true;
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        // Form elements
        this.form = document.getElementById('authForm');
        this.formTitle = document.getElementById('formTitle');
        this.toggleText = document.getElementById('toggleText');
        this.toggleLink = document.getElementById('toggleLink');
        
        // Button elements
        this.toggleBtn = document.getElementById('toggleBtn');
        this.currentBtn = document.getElementById('currentBtn');
        this.submitBtn = document.getElementById('submitBtn');
        this.loginSubmitBtn = document.getElementById('loginSubmitBtn');
        
        // Field containers
        this.signupFields = document.getElementById('signupFields');
        this.loginFields = document.getElementById('loginFields');
        this.loginFooter = document.getElementById('loginFooter');
    }

    bindEvents() {
        // Toggle buttons
        this.toggleBtn.addEventListener('click', () => this.toggleForm());
        this.toggleLink.addEventListener('click', () => this.toggleForm());
        
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    toggleForm() {
        this.isSignUp = !this.isSignUp;
        this.updateUI();
        this.resetForm();
    }

    updateUI() {
        if (this.isSignUp) {
            // Update to Sign Up mode
            this.formTitle.textContent = 'Sign Up';
            this.toggleText.innerHTML = 'Have an account? <span class="toggle-link" id="toggleLink">Login</span>';
            this.toggleBtn.textContent = 'Sign In';
            this.currentBtn.textContent = 'Sign Up';
            
            // Show/hide fields
            this.signupFields.classList.remove('hidden');
            this.loginFields.classList.add('hidden');
            this.loginSubmitBtn.classList.add('hidden');
            this.loginFooter.classList.add('hidden');
            
            // Re-bind toggle link event
            document.getElementById('toggleLink').addEventListener('click', () => this.toggleForm());
        } else {
            // Update to Login mode
            this.formTitle.textContent = 'Login';
            this.toggleText.innerHTML = 'Don\'t have an account? <span class="toggle-link" id="toggleLink">Sign Up</span>';
            this.toggleBtn.textContent = 'Sign Up';
            this.currentBtn.textContent = 'Sign In';
            
            // Show/hide fields
            this.signupFields.classList.add('hidden');
            this.loginFields.classList.remove('hidden');
            this.loginSubmitBtn.classList.remove('hidden');
            this.loginFooter.classList.remove('hidden');
            
            // Re-bind toggle link event
            document.getElementById('toggleLink').addEventListener('click', () => this.toggleForm());
        }
    }

    resetForm() {
        // Reset all form fields
        const inputs = this.form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
        inputs.forEach(input => input.value = '');
        
        const checkboxes = this.form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = false);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        if (this.isSignUp) {
            console.log('Sign Up Data:', {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
                rememberMe: data.rememberMe === 'on'
            });
            alert('Sign Up form submitted! Check console for data.');
        } else {
            console.log('Login Data:', {
                username: data.username,
                password: data.loginPassword,
                rememberMe: data.loginRememberMe === 'on'
            });
            alert('Login form submitted! Check console for data.');
        }
    }
}

// Initialize the form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AuthForm();
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to input fields
    const inputFields = document.querySelectorAll('.input-field');
    inputFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        field.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});