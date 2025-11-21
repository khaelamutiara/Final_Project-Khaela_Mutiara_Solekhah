function initTagAnimation() {
    const tagList = document.querySelector('.tag ul');
    
    if (tagList) {
        const originalContent = tagList.innerHTML;
        tagList.innerHTML = originalContent + originalContent;
        
        tagList.style.animation = 'none';
        setTimeout(() => {
            tagList.style.animation = 'scroll 20s linear infinite';
        }, 10);
        
        tagList.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        tagList.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initFormHandler() {
    document.getElementById('messageForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const pesan = document.getElementById('pesan').value;
        
        if (nama && email && pesan) {
            const statusDiv = document.getElementById('messageStatus');
            statusDiv.textContent = `Terima kasih ${nama}! Pesan Anda telah berhasil dikirim.`;
            statusDiv.style.display = 'block';
            
            this.reset();
            
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 5000);
        }
    });
}

function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'black';
            navbar.style.backdropFilter = 'none';
        }
    });
}

function initActiveMenu() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    function updateActiveMenu() {
        let currentSection = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            
            if (href === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveMenu);
    window.addEventListener('load', updateActiveMenu);
}

document.addEventListener('DOMContentLoaded', function() {
    initTagAnimation();
    initSmoothScroll();
    initFormHandler();
    initNavbarEffects();
    initActiveMenu();
    console.log('Blackpink Fan Site loaded successfully! 🖤💖');
});

window.addEventListener('load', initTagAnimation);