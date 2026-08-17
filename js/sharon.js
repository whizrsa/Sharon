// ===== Floating Petals =====
(function createPetals() {
    const container = document.getElementById('petals-container');
    if (!container) return;

    for (let i = 0; i < 12; i++) {
        const petal = LoveIcons.create('icon-petal', 'falling-petal', 16 + Math.random() * 14);
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (12 + Math.random() * 18) + 's';
        petal.style.animationDelay = (Math.random() * 15) + 's';
        petal.style.color = LoveIcons.floatingColors[Math.floor(Math.random() * LoveIcons.floatingColors.length)];
        petal.style.opacity = 0.15 + Math.random() * 0.25;
        container.appendChild(petal);
    }
})();

// ===== Floating Hearts & Sparkles =====
(function createFloatingHearts() {
    const container = document.getElementById('hearts-container');

    function spawnParticle() {
        const type = LoveIcons.floatingTypes[Math.floor(Math.random() * LoveIcons.floatingTypes.length)];
        const size = 14 + Math.random() * 18;
        const particle = LoveIcons.create(type, 'floating-heart', size);
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        particle.style.color = LoveIcons.floatingColors[Math.floor(Math.random() * LoveIcons.floatingColors.length)];
        particle.style.opacity = 0.25 + Math.random() * 0.45;
        container.appendChild(particle);

        const duration = parseFloat(particle.style.animationDuration) * 1000;
        setTimeout(() => {
            if (particle.parentNode) particle.remove();
        }, duration + 500);
    }

    for (let i = 0; i < 10; i++) setTimeout(spawnParticle, i * 400);
    setInterval(spawnParticle, 900);
})();

// ===== Typewriter Effect =====
(function typewriterEffect() {
    const text = `My Dearest Sharon,

Reading your letters brought tears to my eyes — happy tears. You have no idea how much your words mean to me.

When you told me you loved me on our movie date, my whole world changed. That kiss said everything, and when you finally found the words — "I love you, Elvis" — my heart knew it had found its home.

I know about high school. I know you were afraid, and I know you kept my love letter all those years, hoping we'd find our way back to each other. We did. And I thank God every single day for that second chance.

You are the woman of my dreams, Sharon. Not someday — right now. Today. You are my partner, my best friend, my greatest love, and the future I pray for every night.

I am not asking you to marry me today. But I need you to hear this promise from the deepest part of my soul:

I promise to marry you. One day, when the time is right, I will get down on one knee and ask you to be my wife. Until that day comes, I will love you, cherish you, and choose you — every single day.

You already call me your husband, and you are already my wife in my heart. I can't wait for the whole world to know what we already know — that we belong to each other, and only to each other.

I love you, Sharon. More than words could ever say.`;

    const container = document.getElementById('typewriter-text');
    if (!container) return;

    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'typewriter-cursor';
    container.appendChild(cursorSpan);

    let charIndex = 0;
    let hasStarted = false;
    const typingSpeed = 28;

    function typeNextChar() {
        if (charIndex < text.length) {
            cursorSpan.insertAdjacentText('beforebegin', text.charAt(charIndex));
            charIndex++;
            setTimeout(typeNextChar, typingSpeed);
        }
    }

    const promiseSection = document.getElementById('my-promise');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasStarted) {
                hasStarted = true;
                setTimeout(typeNextChar, 500);
                observer.disconnect();
            }
        });
    }, { threshold: 0.2 });

    observer.observe(promiseSection);
})();

// ===== Reveal on Scroll =====
(function revealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => observer.observe(el));
})();

// ===== Navbar Scroll Effect =====
(function navbarEffect() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });
})();

// ===== Click Heart Burst =====
(function clickHearts() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('button, a, .btn-proposal, .btn-close-modal')) return;

        const burst = LoveIcons.create('icon-heart', 'burst-heart', 28 + Math.random() * 12);
        burst.style.left = e.clientX + 'px';
        burst.style.top = e.clientY + 'px';
        burst.style.setProperty('--tx', (Math.random() * 120 - 60) + 'px');
        burst.style.setProperty('--ty', (Math.random() * -120 - 30) + 'px');
        burst.style.color = LoveIcons.floatingColors[Math.floor(Math.random() * LoveIcons.floatingColors.length)];
        document.body.appendChild(burst);

        setTimeout(() => { if (burst.parentNode) burst.remove(); }, 800);
    });
})();

// ===== Promise Button & Modal =====
(function promiseModal() {
    const btn = document.getElementById('promise-btn');
    const modal = document.getElementById('promise-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const iconContainer = document.getElementById('promise-icon-container');

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        createCelebration();
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', openModal);
    iconContainer.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
})();

function createCelebration() {
    const types = ['icon-heart', 'icon-sparkle', 'icon-star', 'icon-rose', 'icon-heart-double', 'icon-petal'];
    for (let i = 0; i < 30; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        const el = LoveIcons.create(type, 'celebration-particle', 18 + Math.random() * 20);
        el.style.cssText += `
            position: fixed;
            pointer-events: none;
            z-index: 3000;
            left: ${Math.random() * 80 + 10}%;
            top: ${Math.random() * 50 + 30}%;
            color: ${LoveIcons.floatingColors[Math.floor(Math.random() * LoveIcons.floatingColors.length)]};
            animation: celebrationFloat ${1.5 + Math.random() * 2}s ease-out forwards;
            animation-delay: ${Math.random() * 0.5}s;
            opacity: 0;
        `;
        el.style.setProperty('--float-distance', (Math.random() * 200 - 100) + 'px');
        document.body.appendChild(el);
        setTimeout(() => { if (el.parentNode) el.remove(); }, 4000);
    }

    if (!document.getElementById('celebration-style')) {
        const style = document.createElement('style');
        style.id = 'celebration-style';
        style.textContent = `
            @keyframes celebrationFloat {
                0% { transform: translate(0,0) scale(0.3) rotate(0deg); opacity: 0; }
                20% { opacity: 1; }
                100% { transform: translate(var(--float-distance,0),-220px) scale(1.3) rotate(180deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== Smooth Scroll =====
(function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
})();

// ===== Hero Title Glow =====
(function titleGlowEnhancement() {
    const heroTitle = document.querySelector('.hero h1');
    if (!heroTitle) return;

    let hue = 340;
    setInterval(() => {
        hue = (hue + 1) % 360;
        heroTitle.style.color = `hsl(${hue}, 75%, 88%)`;
        heroTitle.style.textShadow = `0 0 50px hsla(${hue}, 80%, 65%, 0.5), 0 0 100px hsla(${hue}, 70%, 50%, 0.25)`;
    }, 120);
})();

// ===== Promise Heart Sparkle =====
(function promiseSparkle() {
    const icon = document.getElementById('promise-icon-container');
    if (!icon) return;

    icon.addEventListener('mouseenter', () => {
        for (let i = 0; i < 14; i++) {
            const sparkle = LoveIcons.create('icon-sparkle', 'sparkle-particle', 14 + Math.random() * 10);
            sparkle.style.cssText = `
                position: absolute;
                pointer-events: none;
                left: 50%;
                top: 50%;
                z-index: 5;
                color: #f0c27f;
                animation: sparkleOut 1s ease-out forwards;
            `;
            sparkle.style.setProperty('--sx', (Math.random() * 180 - 90) + 'px');
            sparkle.style.setProperty('--sy', (Math.random() * 180 - 90) + 'px');
            icon.appendChild(sparkle);
            setTimeout(() => { if (sparkle.parentNode) sparkle.remove(); }, 1000);
        }
    });

    if (!document.getElementById('sparkle-style')) {
        const style = document.createElement('style');
        style.id = 'sparkle-style';
        style.textContent = `
            @keyframes sparkleOut {
                0% { transform: translate(0,0) scale(0); opacity: 1; }
                100% { transform: translate(var(--sx),var(--sy)) scale(1.3); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
})();

// ===== Gallery Lightbox feel =====
(function galleryHover() {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const heart = LoveIcons.create('icon-heart', 'gallery-heart', 20);
            heart.style.cssText = 'position:absolute;top:12px;right:12px;color:#fff;opacity:0;animation:galleryHeartPop 0.5s ease forwards;z-index:3;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.4));';
            item.appendChild(heart);
        });
        item.addEventListener('mouseleave', () => {
            const h = item.querySelector('.gallery-heart');
            if (h) h.remove();
        });
    });

    if (!document.getElementById('gallery-style')) {
        const style = document.createElement('style');
        style.id = 'gallery-style';
        style.textContent = `@keyframes galleryHeartPop { 0%{transform:scale(0);opacity:0} 60%{transform:scale(1.2);opacity:1} 100%{transform:scale(1);opacity:0.9} }`;
        document.head.appendChild(style);
    }
})();

console.log('%cMade with love for Sharon', 'font-size:22px;color:#e75480;font-weight:bold;font-family:Georgia,serif');
console.log('%cThe woman of my dreams.', 'font-size:15px;color:#ffb6c1');
console.log('%cI promise to marry you one day.', 'font-size:18px;color:#d4a574;font-weight:bold');
