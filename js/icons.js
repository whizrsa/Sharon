const LoveIcons = (() => {
    function create(iconId, className = '', size = 24) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('icon');
        if (className) className.split(' ').forEach(c => svg.classList.add(c));
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);
        svg.setAttribute('aria-hidden', 'true');
        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttribute('href', `#${iconId}`);
        svg.appendChild(use);
        return svg;
    }

    const floatingTypes = ['icon-heart', 'icon-rose', 'icon-sparkle', 'icon-petal', 'icon-star', 'icon-heart-double'];
    const floatingColors = ['#e75480', '#ff6b9d', '#ffb6c1', '#f0c27f', '#ff8fab', '#c2185b', '#d4a574'];

    return { create, floatingTypes, floatingColors };
})();
