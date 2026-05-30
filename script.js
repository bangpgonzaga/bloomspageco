// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        const productPrice = this.parentElement.querySelector('.product-price').textContent;
        
        // Show feedback to user
        const originalText = this.textContent;
        this.textContent = '✓ Added to Cart';
        this.style.background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }, 2000);
        
        // Log the action (you can replace this with actual cart functionality)
        console.log(`Added to cart: ${productName} - ${productPrice}`);
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (name && email && message) {
            // Show success message
            alert(`Thank you, ${name}! We'll get back to you soon at ${email}`);
            
            // Reset form
            this.reset();
            
            // Log the data (you can replace this with actual API call)
            console.log({ name, email, message });
        } else {
            alert('Please fill in all fields');
        }
    });
}

// Add scroll animation for products
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});