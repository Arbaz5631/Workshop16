const fetch=require("node-fetch")
const express=require("express")
const app=express();
app.get("/data",async(req,res)=>{
    const data=await getWeatherInfo();
    console.log("data -->",data)
    res.status(200).send({"data":data})
})
async function getWeatherInfo(){
    const weatherData=await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&APPID=0e12ad84dbe4bcdf1f980898cfc713b6"

    ).then((res)=>res.json()).catch(e=>console.log(e))
    console.log(weatherData)
    return weatherData;
   
}
app.listen(9000,console.log("run on port 9000"))
