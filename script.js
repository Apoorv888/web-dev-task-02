document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

    window.openModal = function() {
        modal.style.display = "block";
    };

    window.closeModal = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.transform = 'translateX(-100%)';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.transform = 'translateX(0)';
    }

    setInterval(showNextImage, 1000);

    // Testimonials carousel
    const testimonials = document.querySelector('.testimonials');
    const testimonialElements = testimonials.querySelectorAll('.testimonial');
    let currentTestimonialIndex = 0;

    function showNextTestimonial() {
        testimonialElements[currentTestimonialIndex].style.display = 'none';
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialElements.length;
        testimonialElements[currentTestimonialIndex].style.display = 'block';
    }

    setInterval(showNextTestimonial, 5000);

    // Form submission
    const preorderForm = document.getElementById('preorder-form');
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    
    preorderForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
        const phoneValue = phoneInput.value.trim();
        const phonePattern = /^\d{10}$/; // Example pattern for a 10-digit phone number
    
        if (!phonePattern.test(phoneValue)) {
            phoneError.textContent = 'Please enter a valid 10-digit phone number.';
            phoneError.style.display = 'block';
        } else {
            phoneError.style.display = 'none';
            alert('Thank you for your pre-order! We will contact you soon.');
            closeModal();
        }
    });
});


