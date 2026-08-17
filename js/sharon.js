// Typewriter — Elvis's promise letter
(function typewriterEffect() {
    const text = `My beautiful Sharon,

Every time I look at you, I am reminded of how incredibly beautiful my life has become since you became the center of it. You are my peace, my greatest inspiration, and the absolute love of my life. Loving you is the easiest, most natural thing my heart has ever done.

You are the woman of my dreams—not in some distant fantasy, but here and now, in my reality. You are my partner in everything, my best friend, and the only person I want by my side as we navigate this world together. Your love brings so much light into my life, and just knowing you are mine gives me a sense of joy I can hardly put into words.

When I look at you, I see my entire future. I am not asking you to marry me today, but I want you to carry this promise deep in your heart: One day, when the time is right, I will get down on one knee and ask you to spend the rest of your life with me as my wife.

Until that beautiful day comes, please know that you are already my everything. You already hold the space of a wife in my soul. I promise to cherish you, to protect our love, and to choose you over and over again, every single day.

I love you, Sharon. With my whole heart, today, tomorrow, and forever.

Yours always,
Elvis`;

    const container = document.getElementById('typewriter-text');
    if (!container) return;

    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    container.appendChild(cursor);

    let i = 0;
    let started = false;

    function type() {
        if (i < text.length) {
            cursor.insertAdjacentText('beforebegin', text.charAt(i++));
            setTimeout(type, 26);
        }
    }

    new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !started) {
            started = true;
            setTimeout(type, 400);
        }
    }, { threshold: 0.2 }).observe(document.getElementById('my-promise'));
})();

// Scroll reveal
(function revealOnScroll() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
})();

// Header on scroll
(function headerScroll() {
    const header = document.getElementById('navbar');
    const toggle = () => header.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
})();

// Modal
(function modal() {
    const btn = document.getElementById('promise-btn');
    const modalEl = document.getElementById('promise-modal');
    const close = document.getElementById('close-modal-btn');
    if (!btn || !modalEl) return;

    const open = () => {
        modalEl.classList.add('active');
        modalEl.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    const shut = () => {
        modalEl.classList.remove('active');
        modalEl.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    btn.addEventListener('click', open);
    close.addEventListener('click', shut);
    modalEl.querySelector('.modal-backdrop').addEventListener('click', shut);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') shut(); });
})();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
