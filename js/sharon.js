// Typewriter — Elvis's promise letter
(function typewriterEffect() {
    const text = `My dearest Sharon,

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
