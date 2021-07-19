var n = 1;
function starWars(n) {
    let endPoint;
    if(n == 2){
        endPoint = `https://swapi.dev/api/planets/`;
    }
    else if(n==3){
        endPoint = `https://swapi.dev/api/films/`;
    }
    else if(n==4){
        endPoint = `https://swapi.dev/api/species/`
    }
    else if(n==5){
        endPoint = `https://swapi.dev/api/vehicles/`
    }
    else if(n == 6){
        endPoint = `https://swapi.dev/api/starships/`;
    }
    else {
        endPoint = `https://swapi.dev/api/people/`
    }
    let cardUi = "";
    fetch(endPoint)
    .then((response) => response.json())
    .then((data) => {
        if(n==2)
        data.results.forEach((item, index) => {
            cardUi += `<div class="container">
            <h3> ${item.name}</h3><hr>
            <h5>Period: ${item.rotation_period} </h5><hr>
            <h5>Diameter: ${item.diameter}</h5><hr>
            <h5>Climate: ${item.climate}</h5><hr>
            <h5>Gravity: ${item.gravity}</h5>
        </div> `
        });
        else if(n==3)
        data.results.forEach((item, index) => {
            cardUi += `<div class="container">
            <h3> ${item.title}</h3><hr>
            <h5>Director: ${item.director} </h5><hr>
            <h5>Producer: ${item.producer}</h5><hr>
            <h5>Release Date: ${item.release_date}</h5><hr>
            <h5>Episode Id: ${item.episode_id}</h5>
        </div> `
        });
        else if(n==4)
        data.results.forEach((item, index) => {
            cardUi += `<div class="container">
            <h3> ${item.name}</h3><hr>
            <h5>Classification: ${item.classification} </h5><hr>
            <h5>Average Height: ${item.average_height}</h5><hr>
            <h5>Average Lifespan: ${item.average_lifespan}</h5><hr>
            <h5>Language: ${item.language}</h5>
        </div> `
        });
        else if(n==5)
        data.results.forEach((item, index) => {
            cardUi += `<div class="container">
            <h3> ${item.name}</h3><hr>
            <h5>Model: ${item.model} </h5><hr>
            <h5>Cost In Credits: ${item.diameter}</h5><hr>
            <h5>Length: ${item.length}</h5><hr>
        </div> `
        });
        else if(n==6)
        data.results.forEach((item, index) => {
            cardUi += `<div class="container">
            <h3> ${item.name}</h3><hr>
            <h5>Model: ${item.model} </h5><hr>
            <h5>Length: ${item.length}</h5><hr>
            <h5>Hyperdrive Rating: ${item.hyperdrive_rating}</h5><hr>
            <h5>MGLT: ${item.MGLT}</h5>
        </div> `
        });
        else {
            data.results.forEach((item, index) => {
                cardUi += `<div class="container">
                <h3> ${item.name}</h3><hr>
                <h5>Height: ${item.height} </h5><hr>
                <h5>Mass: ${item.mass}</h5><hr>
                <h5>Hair Color: ${item.hair_color}</h5><hr>
                <h5>Skin Color: ${item.skin_color}</h5>
            </div> `
            });
        }
        setTimeout(() => {
            document.querySelector(".main").innerHTML = cardUi;
        }, 100);
    });
}
starWars();