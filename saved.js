window.addEventListener('DOMContentLoaded', function() {
    const savedFiles = JSON.parse(localStorage.getItem('savedStories') || '[]');
    const resultsDiv = document.getElementById('saved-stories-container');

    const savedStoriesData = storyData.filter(story => savedFiles.includes(story.file));

    if (savedStoriesData.length === 0) {
        resultsDiv.innerHTML = '<p class="no-results">You haven\'t saved any stories yet.</p>';
        return;
    }

    resultsDiv.innerHTML = savedStoriesData.map(story => `
        <a class="result-card" href="${story.file}">
            <h2>${story.title}</h2>
            <p>${story.continent.charAt(0).toUpperCase() + story.continent.slice(1)}</p>
        </a>
    `).join('');
});