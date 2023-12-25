document.getElementById('urlForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const originalUrl = document.getElementById('originalUrl').value;

    try {
        const response = await fetch('http://localhost:8888/url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: originalUrl })
        });

        const data = await response.json();

        const shortUrlContainer = document.getElementById('shortUrlContainer');
        const shortUrlElement = document.getElementById('shortUrl');
        
        shortUrlElement.innerText = window.location.href + data.id;
        shortUrlContainer.style.display = 'block';

       
        const shortUrlLink = document.createElement('a');
        //shortUrlLink.href = window.location.href + data.id;
       // shortUrlLink.innerText = window.location.href + data.id;
        shortUrlElement.appendChild(shortUrlLink);
        
    } catch (error) {
        console.error('Error:', error);
    }
});
