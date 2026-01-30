// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.classList.remove(currentTheme);
    body.classList.add(newTheme);
    
    localStorage.setItem('theme', newTheme);
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Smooth Scroll to Section
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigation Scroll Effect
function handleNavScroll() {
    const nav = document.getElementById('navigation');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Intersection Observer for Fade In Animation
function setupIntersectionObserver() {
    const fadeElements = document.querySelectorAll('.fade-in-element');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Contact Form Validation and Submission
function setupContactForm() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('success-message');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Validate form
        let isValid = true;
        
        if (!nameInput.value.trim()) {
            showError('name', 'Name is required');
            isValid = false;
        }
        
        if (!emailInput.value.trim()) {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError('email', 'Please enter a valid email');
            isValid = false;
        }
        
        if (!messageInput.value.trim()) {
            showError('message', 'Message is required');
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            successMessage.style.display = 'flex';
            
            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                successMessage.style.display = 'none';
            }, 3000);
        }
    });
}

function showError(fieldName, message) {
    const errorElement = document.getElementById(fieldName + '-error');
    const inputElement = document.getElementById(fieldName);
    
    errorElement.textContent = message;
    inputElement.classList.add('error');
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    errorMessages.forEach(error => error.textContent = '');
    inputs.forEach(input => input.classList.remove('error'));
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    setupIntersectionObserver();
    setupContactForm();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleNavScroll);
    
    // Trigger initial check
    handleNavScroll();
});
