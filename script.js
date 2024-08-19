document.getElementById("search").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    const city = document.getElementById("city").value;
    
    const fetchdata = (city) => {
        const host = 'http://api.weatherapi.com/v1'; // Uncomment and use the host variable
        const APIKey = '3065c298526149568f8131429241108';
        const url = `${host}/forecast.json?key=${APIKey}&q=${city}&days=1`;

        fetch(url)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                
                // Ensure that all DOM elements are correctly selected
                document.getElementById("cityName").innerHTML = city;
                document.getElementById("temp_c").innerHTML = response.current.temp_c;
                document.getElementById("feelslike_c").innerHTML = response.current.feelslike_c;
                document.getElementById("maxtemp_c").innerHTML = response.forecast.forecastday[0].day.maxtemp_c;
                document.getElementById("mintemp_c").innerHTML = response.forecast.forecastday[0].day.mintemp_c;
                document.getElementById("avgtemp_c").innerHTML = response.forecast.forecastday[0].day.avgtemp_c;
                document.getElementById("humidity").innerHTML = response.current.humidity;
                document.getElementById("heatindex_c").innerHTML = response.current.heatindex_c;
                document.getElementById("pressure_mb").innerHTML = response.current.pressure_mb;
                document.getElementById("wind_kph").innerHTML = response.current.wind_kph;
                document.getElementById("wind_degree").innerHTML = response.current.wind_degree;
                document.getElementById("sunrise").innerHTML = response.forecast.forecastday[0].astro.sunrise;
                document.getElementById("sunset").innerHTML = response.forecast.forecastday[0].astro.sunset;
                document.getElementById("moonrise").innerHTML = response.forecast.forecastday[0].astro.moonrise;
                document.getElementById("moonset").innerHTML = response.forecast.forecastday[0].astro.moonset;
            })
            .catch(err => console.error('Error fetching weather data:', err));
    }

    fetchdata(city);
});
