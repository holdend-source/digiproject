const stories = {
    europe: {
        england: 3,
        france: 2,
        germany: 1,
    },
    asia: {
        china: 4,
        japan: 2
    },
    africa: {
        egypt: 1,
        sudan: 1
    },
    northamerica: {
        mexico: 1,
        usa: 1
    },
    southamerica: {
        venezuela: 1,
    },
    oceania: {
        newzealand: 1,
    }
};

const storyData = [
    { file: 'stories/europeengland1.html', title: 'The Battle of Hastings', continent: 'europe', country: 'england', image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/168A1/production/_91912329_hi035716367.jpg.webp", keywords: ['england', 'europe', 'battle', 'norman'] },
    { file: 'stories/europegermany1.html', title: 'The Berlin Wall', continent: 'europe', country: 'germany', image: "https://daily.jstor.org/wp-content/uploads/2016/06/Berlin_Wall_Niederkirchnerstra%C3%9Fe_Berlin_1988-1800x1200.jpg", keywords: ['germany', 'europe', 'cold war', 'berlin'] },
    { file: 'stories/europeengland2.html', title: 'The Black Death', continent: 'europe', country: 'england', image: "https://images.aeonmedia.co/images/b055a78f-b44e-4547-82c9-fe1bb124e920/essay-prado-the-triumph-of-death.jpg", keywords: ['england', 'europe', 'plague', 'medieval'] },
    { file: 'stories/europeengland3.html', title: 'The Battle of Waterloo', continent: 'europe', country: 'england', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rEpVprBNDXpK-QnaeSzTvSRLUvjhIi4o8wH1hI-Fs2KEmnBV6qTPwAQtlLYmNVb4iYBK_Ny0hhp-FU7TGx_wPOkAmZZwzwLeuqGkwYo&s=10", keywords: ['england', 'europe', 'france', 'napoleon'] },
    { file: 'stories/europefrance1.html', title: 'The French Revolution', continent: 'europe', country: 'france', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Anonymous_-_Prise_de_la_Bastille.jpg/1280px-Anonymous_-_Prise_de_la_Bastille.jpg", keywords: ['france', 'europe', 'revolution'] },
    { file: 'stories/asiachina1.html', title: 'The Terracotta Army', continent: 'asia', country: 'china', image: "https://www.archaeology.wiki/wp-content/uploads/2022/03/Terracotta_army_2.jpg", keywords: ['clay', 'qin shi huang', 'mausoleum', 'qin dynasty']},
    { file: 'stories/asiachina2.html', title: '1911 Revolution', continent: 'asia', country: 'china', image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Opstanden%2C_revolutie%2C_SFA022823302.jpg", keywords: ['sun yat-sen', 'qing dynasty', 'last dynasty', 'republic of china']},
    { file: 'stories/asiajapan1.html', title: 'Yasuke', continent: 'asia', country: 'japan', image: "https://kintaro-publishing.com/cdn/shop/articles/Yasuke_The_African_Samurai_in_Japan.jpg", keywords: ['sengoku period', 'portugese mozambique', 'samurai', '16th century']},
    { file: 'stories/africaegypt1.html', title: 'Egyptian-Hittite Peace Treaty', continent: 'africa', country: 'egypt', image: 'https://egypt-museum.com/wp-content/uploads/2022/10/The-Kadesh-Treaty-Hittite-version.jpg', keywords: ['ramses ii', 'eternal treaty', 'hattusili iii', 'anatolia']},
    { file: 'stories/africasudan1.html', title: 'Kingdom of Kush', continent: 'africa', country: ['sudan', 'egypt'], image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/NubianMeroePyramids30sep2005%282%29.jpg', keywords: ['nubian', 'kushite', 'monarchy', 'king kashta']},
    { file: 'stories/northamericamexico1.html', title: 'Aztec Empire', continent: 'northamerica', country: 'mexico', image: 'https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/aztec-alliance-gettyimages-122319907', keywords: ['triple alliance', 'tenochca', 'tetzcoco', 'tlacopan']},
    { file: 'stories/northamericausa1.html', title: 'Revolutionary War', continent: 'northamerica', country: 'usa', image: 'https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/washington-crosses-the-delaware', keywords: ['war', 'britain', 'independence', 'george washington']},
    { file: 'stories/oceanianewzealand1.html', title: 'New Zealand Wars', continent: 'oceania', country: 'newzealand', image: 'https://images.ctfassets.net/q60gmaba8x5v/1xYU1x8Hov8XyQmmTTpRKF/a8b409836cdb3c5f558e059129a7d336/Attack_on_Te_Ngutu-o-te-manu__7_September_1868.jpg', keywords: ['wairau affray', 'hutt valley', 'taranaki', 'britain']},
    { file: 'stories/southamericavenezuela1.html', title: 'Independence Wars', continent: 'southamerica', country: ['bolivia', 'colombia', 'ecuador', 'panama', 'peru', 'venezuela'], image: 'https://images.squarespace-cdn.com/content/v1/53b17013e4b0f83f2d8a8a4a/1404820132025-TYMXDQDC44Z9AEUPIRYM/Latin+American+Independence.jpg', keywords: ['simon bolivar', 'latin america']},
];

const continentNames = {
    europe: 'Europe',
    asia: 'Asia',
    africa: 'Africa',
    northamerica: 'North America',
    southamerica: 'South America',
    oceania: 'Oceania'
};

let selectedStory = null;
let selectedContinent = null;

window.addEventListener('DOMContentLoaded', function () {
    const continents = Object.keys(stories);

    selectedStory = storyData[Math.floor(Math.random() * storyData.length)];

    selectedContinent = continents[Math.floor(Math.random() * continents.length)];

    const storyImg = document.getElementById('random-story-img');
    const storyTitle = document.getElementById('random-story-title');
    if (storyImg && selectedStory) {
        storyImg.src = selectedStory.image || 'https://placehold.co/400x200?text=No+Image';
        storyImg.alt = selectedStory.title;
    }
    if (storyTitle && selectedStory) {
        storyTitle.textContent = selectedStory.title;
    }

    const continentImg = document.getElementById('random-continent-img');
    const continentTitle = document.getElementById('random-continent-title');
    const continentImages = {
        europe: 'continent/europe.png',
        asia: 'continent/asia.png',
        africa: 'continent/africa.png',
        northamerica: 'continent/northamerica.png',
        southamerica: 'continent/southamerica.png',
        oceania: 'continent/oceania.png'
    };
    if (continentImg) {
        continentImg.src = continentImages[selectedContinent] || 'https://placehold.co/400x200?text=' + selectedContinent;
        continentImg.alt = selectedContinent;
    }
    if (continentTitle) {
        continentTitle.textContent = continentNames[selectedContinent] || selectedContinent;
    }
});

function goToRandomStory() {
    if (selectedStory) window.location.href = selectedStory.file;
}

function goToRandomContinent() {
    if (selectedContinent) window.location.href = 'browse.html?continent=' + selectedContinent;
}

function doSearch() {
    const query = document.querySelector('input[name="search"]').value.trim();
    if (!query) return;
    const params = new URLSearchParams({ q: query });
    window.location.href = 'search.html?' + params;
}

function trackVisit(file) {
    const visits = JSON.parse(localStorage.getItem('storyVisits') || '{}');
    visits[file] = (visits[file] || 0) + 1;
    localStorage.setItem('storyVisits', JSON.stringify(visits));
}