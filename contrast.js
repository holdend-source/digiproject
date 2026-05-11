const contrastStyles = {
    normal: { background: '#ffffff', color: '#000000' },
    soft:   { background: '#f5f0e8', color: '#3b2e1e' },
    high:   { background: '#000000', color: '#ffff00' }
};

(function() {
    const saved = localStorage.getItem('siteSettings');
    if (saved) {
        const settings = JSON.parse(saved);

        const style = contrastStyles[settings.contrast] || contrastStyles.normal;
        document.documentElement.style.setProperty('--contrast-bg', style.background);
        document.documentElement.style.setProperty('--contrast-color', style.color);

        if (settings.darkmode) {
            document.documentElement.classList.add('dark');
        }

        if (settings.fontSize) {
            document.documentElement.classList.add('font-' + settings.fontSize);
        }
    }
})();