async function fetchPins() {
    const response = await fetch('http://localhost:3000/pins');
    response.json().then(function (response) {
        console.log(response);
    });
}

fetchPins();