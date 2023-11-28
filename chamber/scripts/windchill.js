const airtemp = document.querySelector('#input-air-temp');
const button = document.querySelector('#wind-chill');
const wspeed = document.querySelector('#input-wind-speed');
const result = document.querySelector('#windchill-result');

button.addEventListener('click', function() {

    if (airtemp.value <= 50 && wspeed.value > 3 ) {

        calculation = (35.74 + (0.6215*airtemp.value) - 35.75*(wspeed^0.16) + (0.4275*airtemp.value)*(wspeed^0.16))

        result.textContent = 'Wind Chill Index = ' + calculation.toFixed(2) + " °F";

    }
    else{

        result.textContent = 'N/A - Temperature <= 50°F and Wind Speed > 3 mph';
    }

});

const currentTemp = document.querySelector('#tempValue');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('p.weatherDescription');
const windSpeedElement = document.querySelector('#windspeedValue');

const url = 'https://api.openweathermap.org/data/2.5/https://openweathermap.org/city/4509884';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`; 

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    const windSpeedKPH = ConvertMeterPerSecondToKPH(weatherData.wind.speed).toFixed(1);
    windSpeedElement.innerHTML = `${windSpeedKPH}`;

    const tempFarenheit = CelsiusToFarenheit(weatherData.main.temp);
    const windSpeedMPH = ConvertKPHToMPH(windSpeedKPH);

    if (tempFarenheit <= 50 && windSpeedMPH > 3) {
        let f = CalculateWindChill(tempFarenheit, windSpeedMPH);
        document.querySelector('#windChillValue').innerHTML = f.toFixed(2);
    }
}

apiFetch2();



function displayResults2(data2){

    const date = `${data2.list[0].dt_txt}`;
    

    more.innerHTML = `<p>3-day Forecast:<br> ${data2.list[0].dt_txt.substring(5,10)}: ${data2.list[0].main.temp}&deg;F</p>
                        <p>${data2.list[7].dt_txt.substring(5,10)}: ${data2.list[7].main.temp}&deg;F</p>
                        <p>${data2.list[15].dt_txt.substring(5,10)}: ${data2.list[15].main.temp}&deg;F</p>`
}



const banner = document.querySelector('#week-banner');
const currentDay = new Date(Date.now()).getDay();

if (currentDay == 1 || currentDay == 2 || currentDay == 3) 
{
        banner.innerHTML = `You are invited to attend the Chamber of Commerce meet and greet on Wednesday at 7:00 PM`;
} 
else {banner.classList.toggle('close');}

banner.addEventListener('click', () => {
	banner.classList.toggle('close');
});