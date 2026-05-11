const DEFAULTS = {
    darkmode: false,
    fontSize: "medium",
    contrast: "normal"
};

function applySettings(settings) {
    document.documentElement.classList.toggle('dark', settings.darkmode);
    document.getElementById('darkmode-toggle').checked = settings.darkmode;

    document.documentElement.classList.remove("font-small", "font-medium", "font-large");
    document.documentElement.classList.add('font-' + settings.fontSize);
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.size === settings.fontSize);
    });

    document.querySelectorAll('.contrast-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.contrast === settings.contrast);
    });

    const style = contrastStyles[settings.contrast] || contrastStyles.normal;
    document.documentElement.style.setProperty('--contrast-bg', style.background);
    document.documentElement.style.setProperty('--contrast-color', style.color);

    const preview = document.getElementById('contrast-preview-text');
    if (preview) {
        preview.style.background = style.background;
        preview.style.color = style.color;
    }
}

function saveSettings(settings) {
    localStorage.setItem('siteSettings', JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem('siteSettings');
    return saved ? JSON.parse(saved) : { ...DEFAULTS };
}

function resetSettings() {
    saveSettings({ ...DEFAULTS });
    applySettings({ ...DEFAULTS });
}

window.addEventListener('DOMContentLoaded', function () {
    const settings = loadSettings();
    applySettings(settings);

    document.getElementById('darkmode-toggle').addEventListener('change', function () {
        const settings = loadSettings();
        settings.darkmode = this.checked;
        saveSettings(settings);
        applySettings(settings);
    });

    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const settings = loadSettings();
            settings.fontSize = this.dataset.size;
            saveSettings(settings);
            applySettings(settings);
        });
    });

    document.querySelectorAll('.contrast-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const settings = loadSettings();
            settings.contrast = this.dataset.contrast;
            saveSettings(settings);
            applySettings(settings);
        });
    });
});