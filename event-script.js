// Converts Google Drive link to a direct image link
function formatDriveLink(url) {
    const fileIdMatch = url.match(/(?:id=|\/d\/|file\/d\/)([a-zA-Z0-9_-]+)/);
    return fileIdMatch ? `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}` : url;
}

// Fetching data from Google Sheets and formatting image links
const sheetURL = 'https://script.google.com/macros/s/AKfycbzPrAmB9cLO5OTcXqTWiVgDVZGXtAPs9pHxi3bExJ76_l5fCjohuX0jkaLiM9kIbBQDFA/exec';

async function fetchEventData() {
    try {
        const response = await fetch(sheetURL);
        const json = await response.json();  // Directly parse as JSON

        const events = json.map(event => ({
            imageUrl: formatDriveLink(event.imageUrl),  // Format image URL here
            description: event.description 
        }));

        displayEvents(events);
    } catch (error) {
        console.error('Error fetching event data:', error);
    }
}

function displayEvents(events) {
    const container = document.getElementById('event-container');
    container.innerHTML = ''; 

    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';

        const img = document.createElement('img');
        img.src = event.imageUrl;
        img.alt = 'Event Image';

        const description = document.createElement('p');
        description.textContent = event.description;

        card.appendChild(img);
        card.appendChild(description);
        container.appendChild(card);
    });
}

fetchEventData();
