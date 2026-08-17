// ===== Floating Hearts Generator =====
(function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    const heartSymbols = ['❤️', '💕', '💗', '💖', '💘', '🌹', '✨', '💝'];
    const colors = ['#e75480', '#ff6b9d', '#ffb6c1', '#f0c27f', '#ff8fab', '#ff5c8a'];

    function spawnHeart() {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 14) + 'px';
        heart.style.animationDuration = (Math.random() * 8 + 8) + 's';
        heart.style.animationDelay = '0s';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.textShadow = '0 0 10px rgba(231,84,128,0.5)';
        container.appendChild(heart);

        const duration = parseFloat(heart.style.animationDuration) * 1000;
        setTimeout(() => {
            if (heart.parentNode) heart.remove();
        }, duration + 500);
    }

    for (let i = 0; i < 8; i++) {
        setTimeout(spawnHeart, i * 300);
    }
    setInterval(spawnHeart, 600);
})();

// ===== Typewriter Effect for Elvis's Promise Letter =====
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
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observer.observe(el));
})();

// ===== Navbar Scroll Effect =====
(function navbarEffect() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
})();

// ===== Click Anywhere for Heart Burst =====
(function clickHearts() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.btn-proposal') ||
            e.target.closest('.btn-close-modal')) return;

        const burstHeart = document.createElement('span');
        burstHeart.className = 'burst-heart';
        burstHeart.textContent = '❤️';
        burstHeart.style.left = e.clientX + 'px';
        burstHeart.style.top = e.clientY + 'px';
        burstHeart.style.setProperty('--tx', (Math.random() * 120 - 60) + 'px');
        burstHeart.style.setProperty('--ty', (Math.random() * -120 - 30) + 'px');
        burstHeart.style.fontSize = (Math.random() * 1.2 + 1.5) + 'rem';
        document.body.appendChild(burstHeart);

        setTimeout(() => {
            if (burstHeart.parentNode) burstHeart.remove();
        }, 800);
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
        createCelebrationHearts();
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', openModal);
    iconContainer.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
})();

// ===== Celebration Hearts in Modal =====
function createCelebrationHearts() {
    const symbols = ['🎉', '❤️', '💕', '✨', '💖', '🎊', '💍', '🥂', '💘', '🌟'];
    for (let i = 0; i < 25; i++) {
        const span = document.createElement('span');
        span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        span.style.cssText = `
            position: fixed;
            pointer-events: none;
            z-index: 3000;
            font-size: ${Math.random() * 1.5 + 1.2}rem;
            animation: celebrationFloat ${Math.random() * 2 + 1.5}s ease-out forwards;
            animation-delay: ${Math.random() * 0.5}s;
            left: ${Math.random() * 80 + 10}%;
            top: ${Math.random() * 50 + 30}%;
            opacity: 0;
        `;
        span.style.setProperty('--float-distance', (Math.random() * 200 - 100) + 'px');
        document.body.appendChild(span);

        setTimeout(() => {
            if (span.parentNode) span.remove();
        }, 4000);
    }

    if (!document.getElementById('celebration-style')) {
        const style = document.createElement('style');
        style.id = 'celebration-style';
        style.textContent = `
            @keyframes celebrationFloat {
                0% { transform: translate(0, 0) scale(0.3); opacity: 0; }
                20% { opacity: 1; }
                100% { transform: translate(calc(var(--float-distance, 0px)), -200px) scale(1.4); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== Smooth Scroll for Anchor Links =====
(function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();

// ===== Dynamic Title Glow Enhancement =====
(function titleGlowEnhancement() {
    const heroTitle = document.querySelector('.hero h1');
    if (!heroTitle) return;

    let hue = 330;
    setInterval(() => {
        hue = (hue + 2) % 360;
        heroTitle.style.color = `hsl(${hue}, 80%, 85%)`;
        heroTitle.style.textShadow = `0 0 40px hsla(${hue}, 85%, 60%, 0.6), 0 0 80px hsla(${hue}, 85%, 50%, 0.3)`;
    }, 100);
})();

// ===== Promise Heart Sparkle Effect =====
(function promiseSparkle() {
    const icon = document.getElementById('promise-icon-container');
    if (!icon) return;

    icon.addEventListener('mouseenter', () => {
        for (let i = 0; i < 12; i++) {
            const sparkle = document.createElement('span');
            sparkle.textContent = '✨';
            sparkle.style.cssText = `
                position: absolute;
                pointer-events: none;
                font-size: 1rem;
                animation: sparkleOut 1s ease-out forwards;
                left: 50%;
                top: 50%;
                z-index: 5;
            `;
            sparkle.style.setProperty('--sx', (Math.random() * 160 - 80) + 'px');
            sparkle.style.setProperty('--sy', (Math.random() * 160 - 80) + 'px');
            icon.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) sparkle.remove();
            }, 1000);
        }
    });

    if (!document.getElementById('sparkle-style')) {
        const style = document.createElement('style');
        style.id = 'sparkle-style';
        style.textContent = `
            @keyframes sparkleOut {
                0% { transform: translate(0, 0) scale(0); opacity: 1; }
                100% { transform: translate(var(--sx), var(--sy)) scale(1.2); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
})();

console.log('%c❤️ Made with love for Sharon ❤️', 'font-size:24px;color:#e75480;font-weight:bold;');
console.log('%cThe woman of my dreams.', 'font-size:16px;color:#ffb6c1;');
console.log('%cI promise to marry you one day. 💕', 'font-size:20px;color:#d4a574;font-weight:bold;');
