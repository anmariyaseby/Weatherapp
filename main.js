const checkweather = async()=>{
    console.log(userinput.value);
    if(userinput.value){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${userinput.value}&appid=95cb2c55447dcb75e2b0bdbdbcba8495`)
        console.log(response);
        if(response.status==200){
            const weatherdetails = await response.json()
            console.log(weatherdetails);
        
        // weather image icons
        const weatherCondition = weatherdetails.weather[0].main.toLowerCase();
        console.log(weatherCondition);
        const weatherImages = {
            rain: './images/rain.png',
            clear: './images/clear1.png',
            clouds: './images/clouds.png',
            mist: './images/mist.png',
            snow: './images/snow.png',
            thunderstorm: './images/thunderstorm.png',
            drizzle: './images/drizzle.png'
        };
        const weatherImage = weatherImages[weatherCondition] || './images/clear.png';
        // /weather image icons
        // weather background image changer

        // Update card background image based on weather
            const weatherColors = {
                rain: './images/rainbgg.jpg', 
                clear: './images/card.jpg',
                clouds: './images/cloudbg.jpg',
                mist: './images/mistbg.jpg', 
                snow: `./images/snowbg.jpg`,
                smoke:`./images/smokebg.jpg`,
                haze:`./images/hazebg.jpg`
                
            };
            const backgroundColor = weatherColors[weatherCondition] || './images/background5.jpg'; // Default to white
            document.getElementById("weatherCard").style.backgroundSize = "cover";
            document.getElementById("weatherCard").style.backgroundImage = `url(${backgroundColor})`;
        // Update card background image based on weather
        // detail section
            document.getElementById("result").innerHTML=`
            <img src="${weatherImage}" alt="Weather Icon">
            <p style="font-size:20px;font-weight:600">${weatherCondition}</p>
            <p class="temp" id="temp" style="font-size: 35px;">${weatherdetails.main.temp}°C</p>
           
            <p class="city" id="city">${weatherdetails.name}</p>`
        //  /detail section
        //weather and humidity details
            document.getElementById("result2").innerHTML=`<div class="humidity">
            <img src="./images/humidity.png" alt="No-Image">
            <div class="humdetail">
                <p>${weatherdetails.main.humidity} %</p>
                <p>Humidity</p>
            </div>
        </div>
        <div class="wind">
            <img src="./images/wind.png" alt="No-Image">
            <div class="winddetail">
                <p>${weatherdetails.wind.speed} Km/H</p>
                <p>Wind</p>
            </div>
        </div>`
        // /weather and humidity details
        }
        else{
            alert("Enter Valid Location")
        }
    }
    else{
        alert("Please Enter Location")
    }
}