/**
 * LOLAV KOSMETIK - JAVASCRIPT
 * Interactivité du site statique
 */

// ============================================
// STICKY HEADER
// ============================================

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// ============================================
// FAQ TOGGLE
// ============================================

function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    
    // Fermer tous les autres FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Basculer le FAQ actuel
    faqItem.classList.toggle('active');
}

// ============================================
// CTA BUTTONS - SMOOTH SCROLL
// ============================================

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        // Vous pouvez ajouter ici une action personnalisée
        // Par exemple : ouvrir un formulaire, rediriger vers une page de réservation, etc.
        console.log('CTA Button clicked');
    });
});

// ============================================
// SMOOTH SCROLL POUR LES ANCRES
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// ANIMATIONS À L'ARRIVÉE
// ============================================

// Observer pour les animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Appliquer l'observer aux cartes
document.querySelectorAll('.service-card, .method-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

console.log('Lolav Kosmetik - Site chargé avec succès');
