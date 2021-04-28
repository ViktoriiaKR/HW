  export default class View {
    constructor(handleClickSearch){
        this.searchResult = document.querySelector('.search-result');
        document.querySelector('.btn-searching').addEventListener('click', () => handleClickSearch(document.getElementById("exampleSearchText").value));
    };

    renderWeather(data){
        const temp = Math.round(data.main.temp-273);
        const tempMax = Math.round(data.main.temp_max-273);
        const tempMin = Math.round(data.main.temp_min-273);

        const weatherInfoHTML = `
            <div class="description">
                <p><span>${data.name}</span>, <span>${data.sys.country}</span></p>
                <p>
                    <span>${temp} °C</span> temperature from 
                    <span>${tempMin} °C</span> to 
                    <span>${tempMax} °C</span>, 
                    <span>wind ${data.wind.speed} m/s, </span> 
                    <span>clouds ${data.clouds.all} %</span>
                </p>
                <p>Geo coords [${data.coord.lon}, ${data.coord.lat}]</p>
            </div>`

        this.searchResult.innerHTML = weatherInfoHTML;
    };
};