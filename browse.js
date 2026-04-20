let continentStories = [];

window.showCountry = function(country) {
    const storiesDiv = document.getElementById('country-stories');
    const filtered = country === 'all'
        ? continentStories
        : continentStories.filter(s => 
        Array.isArray(s.country) ? s.country.includes(country) : s.country === country
    );

    document.querySelectorAll('.country-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === country);
    });

    storiesDiv.innerHTML = filtered.length === 0
        ? '<p class="no-results">No stories found.</p>'
        : filtered.map(story => `
            <a class="result-card" href="${story.file}">
                <h2>${story.title}</h2>
                <p>${story.keywords.join(', ')}</p>
            </a>
        `).join('');
};

window.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const continent = params.get('continent') || '';

    const continentNames = {
        europe: 'Europe',
        asia: 'Asia',
        africa: 'Africa',
        northamerica: 'North America',
        southamerica: 'South America',
        oceania: 'Oceania'
    };

    document.getElementById('browse-title').textContent = 
        continentNames[continent] || continent.charAt(0).toUpperCase() + continent.slice(1);
    continentStories = storyData.filter(story => story.continent === continent);

    const visits = JSON.parse(localStorage.getItem('storyVisits') || '{}');

    const hasVisits = continentStories.some(story => visits[story.file]);

    let featured;
    if (hasVisits) {
        featured = [...continentStories]
            .sort((a, b) => (visits[b.file] || 0) - (visits[a.file] || 0))
            .slice(0, 3);
    } else {
        const shuffled = [...continentStories].sort(() => Math.random() - 0.5);
        featured = shuffled.slice(0, 3);
    }

    const featuredDiv = document.getElementById('featured-results');
    featuredDiv.innerHTML = featured.map(story => `
        <a class="featured-card" href="${story.file}">
            ${story.image ? `<img src="${story.image}" alt="${story.title}">` : ''}
            <h2>${story.title}</h2>
            <p>${hasVisits && visits[story.file] ? visits[story.file] + ' visit' + (visits[story.file] > 1 ? 's' : '') : 'Suggested'}</p>
        </a>
    `).join('');

    const countries = [...new Set(continentStories.flatMap(story => 
        Array.isArray(story.country) ? story.country : [story.country]
    ))];

    document.getElementById('country-buttons').innerHTML = countries.map(country => `
        <button class="country-btn" onclick="showCountry('${country}')">
            ${country.charAt(0).toUpperCase() + country.slice(1)}
        </button>
    `).join('');

    showCountry('all');
});