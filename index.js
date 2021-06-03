const fetch=require("node-fetch");

async function getWeatherInfo(){
    const weather=await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&APPID=0e12ad84dbe4bcdf1f980898cfc713b6"

    ).then((res)=>res.json()).catch(e=>console.log(e))
    console.log(weather);    
}

getWeatherInfo();