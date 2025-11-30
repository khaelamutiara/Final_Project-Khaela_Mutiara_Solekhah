//animasi tag
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

//scroll halus
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            //ambil target id
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            //cari elemen target
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

//form
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

//blur navbar
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

//cari lagu
function searchSong() {
    const input = document.getElementById("searchSong").value.toLowerCase();
    const table = document.getElementById("songTable");
    const rows = table.getElementsByTagName("tr");
    const notFound = document.getElementById("notFound");

    let found = false;

    for (let i = 1; i < rows.length; i++) {
       const titleCell = rows[i].getElementsByTagName("td")[0]; 
        if (titleCell) {
            const title = titleCell.textContent.toLowerCase();
            if (title.includes(input)) {
                rows[i].style.display = "";
                found = true;
            } else {
                rows[i].style.display = "none";
            }
        }
    }

    notFound.style.display = found ? "none" : "block";
}

//scroll navbar bergerak
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

// Jalankan ulang animasi tag saat page benar-benar selesai load
window.addEventListener('load', initTagAnimation);
