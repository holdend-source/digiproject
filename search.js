window.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q') || '';
    const normalisedQuery = query.toLowerCase().replace(/\s+/g, '');

    const input = document.querySelector('input[name="search"]');
    if (input) input.value = query;

    const title = document.getElementById('search-title');
    const resultsDiv = document.getElementById('search-results');

    title.textContent = 'Results for "' + query + '"';

    if (!query) {
        resultsDiv.innerHTML = '<p class="no-results">Enter something to search for.</p>';
        return;
    }

    const results = storyData.filter(story => {
        const countries = Array.isArray(story.country) ? story.country : [story.country];
        return story.title.toLowerCase().includes(query.toLowerCase()) ||
            story.keywords.some(k => k.includes(query.toLowerCase())) ||
            story.continent.includes(normalisedQuery) ||
            countries.some(c => c.includes(normalisedQuery));
    });

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p class="no-results">No stories found for "' + query + '".</p>';
        return;
    }

    resultsDiv.innerHTML = results.map(story => `
        <a class="result-card" href="${story.file}">
            <h2>${story.title}</h2>
            <p>${story.keywords.join(', ')}</p>
        </a>
    `).join('');
});