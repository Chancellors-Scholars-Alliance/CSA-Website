// Converts Google Drive link to a direct image link
function formatDriveLink(url) {
    const fileIdMatch = url.match(/(?:id=|\/d\/|file\/d\/)([a-zA-Z0-9_-]+)/);
    return fileIdMatch ? `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}` : url; // The major difference: /thumbnail?id=...
}

// Fetching data from Google Sheets Apps Script and formatting image links
const sheetURL = 'https://script.google.com/macros/s/AKfycbx_1MtpoMrcO-Jrtq3QF85dVhy6F2VqyXGRsGjF4ccjae8jpAZ3i1ijRrUB0oQ4VL4apw/exec';

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
        card.className = 'flex-item event-item';

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
