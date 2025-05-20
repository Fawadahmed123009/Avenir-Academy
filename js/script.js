
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav');

    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        if (mobileToggle.querySelector('i').classList.contains('fa-bars')) {
            mobileToggle.querySelector('i').classList.replace('fa-bars', 'fa-times');
        } else {
            mobileToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
        }
    });

    // Scroll Animation for Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        });
    });
     // Counter Animation
     const counters = document.querySelectorAll('.counter');
     let counterStarted = false;
     
     function runCounters() {
       if (counterStarted) return;
     
       const statsSection = document.querySelector('.stats');
       const sectionTop = statsSection.getBoundingClientRect().top;
       if (sectionTop < window.innerHeight) {
         counters.forEach(counter => {
           const updateCount = () => {
             const target = +counter.getAttribute('data-target');
             const current = +counter.innerText;
             const increment = target / 100;
     
             if (current < target) {
               counter.innerText = Math.ceil(current + increment);
               setTimeout(updateCount, 20);
             } else {
               counter.innerText = target;
             }
           };
           updateCount();
         });
         counterStarted = true;
       }
     }
     window.addEventListener('scroll', runCounters);
     
    // Animation on Scroll
    const animateElements = () => {
        const cards = document.querySelectorAll('.feature-card, .program-card, .testimonial-card, .faculty-card');
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.classList.add('animate');
            }
        });
    }

    // Initial animation check
    document.addEventListener('DOMContentLoaded', () => {
        animateElements();
    });

    // Animation check on scroll
    window.addEventListener('scroll', () => {
        animateElements();
    });

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Mock form submission success
            const formElements = contactForm.elements;
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].type !== 'submit') {
                    formElements[i].value = '';
                }
            }
            
            alert('Thank you for your message! We will get back to you soon.');
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Mock form submission success
            newsletterForm.querySelector('input').value = '';
            alert('Thank you for subscribing to our newsletter!');
        });
    }
    
    // Gallery Image Modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const imgAlt = item.querySelector('img').alt;
            
            // Create modal elements
            const modal = document.createElement('div');
            modal.classList.add('gallery-modal');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zIndex = '1001';
            modal.style.opacity = '0';
            modal.style.transition = 'opacity 0.3s ease';
            
            const modalContent = document.createElement('div');
            modalContent.style.maxWidth = '90%';
            modalContent.style.maxHeight = '90%';
            modalContent.style.position = 'relative';
            modalContent.style.transform = 'scale(0.9)';
            modalContent.style.transition = 'transform 0.3s ease';
            
            const modalImg = document.createElement('img');
            modalImg.src = imgSrc;
            modalImg.alt = imgAlt;
            modalImg.style.maxWidth = '100%';
            modalImg.style.maxHeight = '80vh';
            modalImg.style.display = 'block';
            
            const closeButton = document.createElement('span');
            closeButton.innerHTML = '&times;';
            closeButton.style.position = 'absolute';
            closeButton.style.top = '-40px';
            closeButton.style.right = '0';
            closeButton.style.color = 'white';
            closeButton.style.fontSize = '40px';
            closeButton.style.fontWeight = 'bold';
            closeButton.style.cursor = 'pointer';
            
            const caption = document.createElement('div');
            caption.textContent = imgAlt;
            caption.style.color = 'white';
            caption.style.padding = '10px 0';
            caption.style.textAlign = 'center';
            
            // Append elements
            modalContent.appendChild(modalImg);
            modalContent.appendChild(closeButton);
            modalContent.appendChild(caption);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            // Animation
            setTimeout(() => {
                modal.style.opacity = '1';
                modalContent.style.transform = 'scale(1)';
            }, 50);
            
            // Close modal when clicking close button or outside the image
            closeButton.addEventListener('click', () => {
                modal.style.opacity = '0';
                modalContent.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    document.body.removeChild(modal);
                }, 300);
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.opacity = '0';
                    modalContent.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        document.body.removeChild(modal);
                    }, 300);
                }
            });
        });
    });

    // Preloader
    window.addEventListener('load', () => {
        const preloader = document.createElement('div');
        preloader.style.position = 'fixed';
        preloader.style.top = '0';
        preloader.style.left = '0';
        preloader.style.width = '100%';
        preloader.style.height = '100%';
        preloader.style.backgroundColor = '#104e8b';
        preloader.style.display = 'flex';
        preloader.style.justifyContent = 'center';
        preloader.style.alignItems = 'center';
        preloader.style.zIndex = '9999';
        preloader.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
        
        const spinner = document.createElement('div');
        spinner.style.width = '50px';
        spinner.style.height = '50px';
        spinner.style.border = '5px solid rgba(255, 255, 255, 0.3)';
        spinner.style.borderRadius = '50%';
        spinner.style.borderTop = '5px solid white';
        spinner.style.animation = 'spin 1s linear infinite';
        
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `);
        
        preloader.appendChild(spinner);
        document.body.appendChild(preloader);
        
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => {
                document.body.removeChild(preloader);
            }, 500);
        }, 1000);
    });