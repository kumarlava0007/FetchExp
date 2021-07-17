function starWars() {
    let endPoint = `https://swapi.dev/api/people/`;
    let cardUi = "";
    fetch(endPoint)
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach((item, index) => {
            cardUi += `<div class="container">
            <h3> ${item.name}</h3><hr>
            <h5>Height: ${item.height} </h5><hr>
            <h5>Mass: ${item.mass}</h5><hr>
            <h5>Hair Color: ${item.hair_color}</h5><hr>
            <h5>Skin Color: ${item.skin_color}</h5>
        </div> `
        });
        setTimeout(() => {
            document.querySelector(".main").innerHTML = cardUi;
        }, 2000);
    });
}
starWars();