// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // Récupérer le bouton CTA
    const ctaButton = document.getElementById('ctaButton');
    
    // Ajouter un événement au clic
    ctaButton.addEventListener('click', function() {
        // Vous pouvez modifier cette action selon vos besoins
        alert('Bienvenue ! La section projets arrive bientôt.');
        
        // Ou pour rediriger vers une page projets :
        // window.location.href = 'projets.html';
    });

    // Animation d'apparition au scroll (optionnel)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observer les éléments avec animation
    const animatedElements = document.querySelectorAll('.hero-content');
    animatedElements.forEach(el => observer.observe(el));

    // Effet de parallaxe sur les cercles (optionnel)
    document.addEventListener('mousemove', function(e) {
        const circles = document.querySelectorAll('.gradient-circle');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        circles.forEach((circle, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            circle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

});
