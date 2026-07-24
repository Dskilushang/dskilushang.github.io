// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Filter Portfolio
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter items
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'grid';
            item.style.animation = 'fadeInUp 0.6s ease';
        } else if (item.getAttribute('data-category') === category) {
            item.style.display = 'grid';
            item.style.animation = 'fadeInUp 0.6s ease';
        } else {
            item.style.display = 'none';
        }
    });
}

// Project Modal Data
const projectData = {
    techvision: {
        title: 'TechVision Logo',
        category: 'Logo Design',
        description: 'Création d\'un logo moderne et minimaliste pour une startup technologique. Le design combine les formes géométriques avec une approche contemporaine.',
        client: 'TechVision Inc.',
        date: 'Mars 2025',
        services: ['Logo Design', 'Guide d\'utilisation'],
        details: 'Ce projet a demandé une approche itérative pour trouver le perfect équilibre entre modernité et mémorabilité. Le logo final fonctionne sur tous les supports.'
    },
    ecogreen: {
        title: 'EcoGreen Branding',
        category: 'Branding Complet',
        description: 'Développement complet de l\'identité visuelle pour une marque de produits écologiques. Incluant logo, palette de couleurs et guidelines.',
        client: 'EcoGreen Solutions',
        date: 'Janvier 2025',
        services: ['Logo Design', 'Branding', 'Guidelines'],
        details: 'Un projet ambitieux qui a nécessité une recherche approfondie sur les tendances écologiques actuelles et les attentes des consommateurs éco-conscients.'
    },
    festival: {
        title: 'Festival d\'Été Affiche',
        category: 'Affiche & Flyer',
        description: 'Design d\'une affiche événementielle pour un festival d\'été. Utilisation de couleurs vibrantes et d\'une typographie impactante.',
        client: 'Festival d\'Été 2025',
        date: 'Février 2025',
        services: ['Affiche', 'Flyer', 'Design d\'événement'],
        details: 'Cette affiche a été conçue pour capturer l\'essence festive de l\'événement tout en restant lisible et attrayante de loin.'
    },
    fashion: {
        title: 'Fashion Brand Social Media',
        category: 'Design Social Media',
        description: 'Création de visuels engageants pour les réseaux sociaux d\'une marque de mode. Posts Instagram, stories et reels optimisés.',
        client: 'Fashion Brand XYZ',
        date: 'Décembre 2024',
        services: ['Social Media Design', 'Content Creation'],
        details: 'Une stratégie visuelle cohérente développée pour augmenter l\'engagement et la visibilité sur Instagram et TikTok.'
    },
    coffee: {
        title: 'Coffee Shop Logo',
        category: 'Logo Design',
        description: 'Logo chaleureux et accueillant pour une petite café. Le design reflète l\'ambiance cozy et l\'amour du café artisanal.',
        client: 'Café Local',
        date: 'Novembre 2024',
        services: ['Logo Design', 'Branding basique'],
        details: 'Un logo qui fonctionne parfaitement sur les tasses, les enseignes et les cartes de visite.'
    },
    startup: {
        title: 'Startup Tech Branding',
        category: 'Branding Complet',
        description: 'Identité visuelle complète pour une startup tech émergente. Logo, couleurs, typographie et application sur différents supports.',
        client: 'Tech Startup Co.',
        date: 'Septembre 2024',
        services: ['Branding complet', 'Logo', 'Guidelines'],
        details: 'Un branding moderne et scalable conçu pour évoluer avec la startup à mesure de sa croissance.'
    }
};

// Open Project Modal
function openProjectModal(event, projectId) {
    event.preventDefault();
    const project = projectData[projectId];
    const modal = document.getElementById('projectModal');
    
    let modalHTML = `
        <h2>${project.title}</h2>
        <p class="modal-category">${project.category}</p>
        
        <div class="modal-grid">
            <div class="modal-info">
                <h3>Détails du Projet</h3>
                <ul>
                    <li><strong>Client:</strong> ${project.client}</li>
                    <li><strong>Date:</strong> ${project.date}</li>
                    <li><strong>Services:</strong> ${project.services.join(', ')}</li>
                </ul>
            </div>
        </div>
        
        <h3>Description</h3>
        <p>${project.description}</p>
        
        <h3>Détails du Projet</h3>
        <p>${project.details}</p>
        
        <div class="modal-cta">
            <button class="btn btn-primary" onclick="scrollToSection('contact')">Commander un projet similaire</button>
        </div>
    `;
    
    document.getElementById('modalBody').innerHTML = modalHTML;
    modal.style.display = 'block';
}

// Close Project Modal
function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle contact form submission
function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    console.log('Formulaire soumis:', { name, email, service, message });
    
    // Show success message
    showSuccessMessage('✓ Votre demande a été envoyée avec succès ! Je vous recontacterai très bientôt.');
    
    // Reset form
    event.target.reset();
}

// Show success message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    
    // Remove after 4 seconds
    setTimeout(() => {
        successDiv.style.animation = 'slideOut 0.5s ease forwards';
        setTimeout(() => {
            successDiv.remove();
        }, 500);
    }, 4000);
}

// Add scroll animation on elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and items
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card, .testimonial-card, .portfolio-item');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Add smooth scroll to navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '#333';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = var('--primary');
        }
    });
});

// Add animation slideOut
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);