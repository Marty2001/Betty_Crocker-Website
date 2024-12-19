document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Header content
    const header = document.getElementById('gHeader');
    if (header) {
        header.innerHTML = `
            <div class="container">
                <div class="header-content">
                    <div class="logo">
                        <a href="index.html"><img src="./img/company-logo.png" alt="Betty Crocker Logo"></a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="product.html">Products</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        `;
    }

    // Footer content
    const footer = document.getElementById('gFooter');
    if (footer) {
        footer.innerHTML = `
            <div class="container">
                <div class="footer-content">
                    <div class="footer-column">
                        <h5>OVERVIEW</h5>
                        <ul>
                            <li><a href="https://bettycrocker.bigcityexperience.com/terms-and-conditions">Terms of Use</a></li>
                            <li><a href="https://www.generalmills.com/food-we-make/where-to-buy">Product Locator</a></li>
                            <li><a href="https://www.bettycrocker.com/coupons/printable">Coupons</a></li>
                            <li><a href="https://www.bettycrocker.com/recipes/easy-recipes">Easy Recipes</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h5>POLICIES</h5>
                        <ul>
                            <li><a href="https://www.generalmills.com/privacy-security/us-english-privacy-policy">Privacy Policy</a></li>
                            <li><a href="https://www.generalmills.com/privacy-security/legal-terms/english-terms-of-use">Legal Terms</a></li>
                            <li><a href="https://www.generalmills.com/privacy-security/us-english-privacy-policy#CookieNotice">Cookies Policy</a></li>
                            <li><a href="https://www.bettycrocker.com/community-membership-agreement">Community Guidelines</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h5>TRENDING RECIPES</h5>
                        <ul>
                            <li><a href="https://www.bettycrocker.com/recipes/bisquick-strawberry-shortcake/370099a9-c927-4eae-93ba-ab66a455b996">Bisquick Strawberry Shortcake</a></li>
                            <li><a href="https://www.bettycrocker.com/recipes/blackberry-cobbler/97b86fd2-7588-497b-866d-8a1bd8b2e491">Blackberry Cobbler</a></li>
                            <li><a href="https://www.bettycrocker.com/recipes/classic-blueberry-pie/78e913d6-7e53-4ee3-bec5-ca38083b70b0">Classic Blueberry Pie</a></li>
                            <li><a href="https://www.bettycrocker.com/recipes/strawberry-poke-cake/354fda2b-949f-4222-b939-24ea67b50f1a">Strawberry Poke Cake</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h5>QUICK LINKS</h5>
                        <ul>
                            <li><a href="https://www.bettycrocker.com/menus-holidays-parties/mhplibrary/desserts/celebrate-pride-all-month-with-these-colorful-desserts">Pride Month Recipes</a></li>
                            <li><a href="https://www.bettycrocker.com/special-occasions/wedding-recipes">Wedding Recipes</a></li>
                            <li><a href="https://www.bettycrocker.com/special-occasions">Holidays and Celebrations</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to product cards
    const productCards = document.querySelectorAll('.product-card');
    if (productCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        productCards.forEach(card => {
            observer.observe(card);
        });
    }

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with email: ${email}`);
            e.target.reset();
        });
    }

    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = e.target.querySelector('#name').value;
            const email = e.target.querySelector('#email').value;
            const message = e.target.querySelector('#message').value;
            alert(`Thank you for your message, ${name}! We'll get back to you at ${email} soon.`);
            e.target.reset();
        });
    }
});

