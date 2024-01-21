let todayName = document.getElementById("today_date_day_name")
let todayNumber = document.getElementById("today_date_day_number")
let todayMonth = document.getElementById("today_date_month")
let todayLocation = document.getElementById("today_location")
let todayTemp = document.getElementById("today_temp")
let todayConditionImg = document.getElementById("today_condition_img")
let todayConditionText = document.getElementById("today_condition text")
let humidity = document.getElementById("humidity")
let wind = document. getElementById("wind")
let windDirection = document.getElementById("wind_direction")

//next date
let nextDay = document.getElementsByClassName("next_day_name")
let nextMaxTemp = document.getElementsByClassName("next_max_temp")
let nextMinTemp = document.getElementsByClassName("next_min_temp")
let nextConditionImg = document.getElementsByClassName("next_condition_img")
let nextConditionText = document.getElementsByClassName("next_condition_text")
//search input
let searchInput = document.getElementById("search")
let date = new Date()


//fetch api
async function getWeatherdata(cityName)
{
  let WetherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=42caee5b67bd473ca7c145129241701&q=${cityName}&days=3`)
  let weatherData = await WetherResponse.json()
  return weatherData
}
getWeatherdata()

//display today data 
function displayTodayData(data)
{
  let TodayDate = new Date()
  todayName.innerHTML = TodayDate.toLocaleDateString("en-US", {weekday:"long"} )
  todayNumber.innerHTML = TodayDate.getDate()
  todayMonth.innerHTML = TodayDate.toLocaleDateString("en-US",{month:"long"})
  todayLocation.innerHTML = data.location.name
  todayTemp.innerHTML = data.current.temp_c
  todayConditionImg.setAttribute("src",data.current.condition.icon)
  todayConditionText.innerHTML = data.current.condition.text
  humidity.innerHTML = data.current.humidity+ "%"
  wind.innerHTML = data.current.wind_kph+ " km/h"
  windDirection.innerHTML = data.current.wind_dir
}
// display 
function displayNextData(data)
{
 let forecastData = data.forecast.forecastday
 for(let i = 0; i<2 ; i++)
 {
  let nextDate = new Date(forecastData[i+1].date)
  nextDay[i].innerHTML = nextDate.toLocaleDateString("en-US",{weekday:"long"})
  nextMaxTemp[i].innerHTML = forecastData[i+1].day.maxtemp_c
  nextMinTemp[i].innerHTML = forecastData[i+1].day.mintemp_c
  nextConditionImg[i].setAttribute("src", forecastData[i+1].day.condition.icon)
  nextConditionText[i].innerHTML = forecastData[i+1].day.condition.text

 }
}

// start 

async function startApp(city="cairo")
{
  let wheatherData = await getWeatherdata(city)
if(!wheatherData.error){

  displayTodayData(wheatherData)
  displayNextData(wheatherData)
}
  
}

startApp()

searchInput.addEventListener("input", function(){
  startApp(searchInput.value)
})



