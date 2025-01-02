// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Define the API URL (replace with your actual API endpoint)
    const apiUrl = 'http://localhost:3000/pins';

    // Make a GET request to the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();  // Parse the JSON data
        })
        .then(data => {
            console.log(data);
            

        });
})
