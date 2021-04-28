const apiKey = '41a10ea3f2ec279f73560244fa5ad283';

export default class Model {
    url = `https://api.openweathermap.org/data/2.5/weather?`;
    
    search(city){
        return fetch(`${this.url}q=${city}&appid=${apiKey}`)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error, 'Nothing to geocode')
            });
    };
};


// .then (
//     response => {
//         if (response.status != 200) {
//             return null;
//         } else {
//             return response.json();
//         }
//     }
// )
