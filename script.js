//selecting elements
const searchBtn=document.querySelector("#search");
const searchInput=document.querySelector("input");

//adding event listener
searchBtn.addEventListener("click",async function(){
    const location= searchInput.value;
    if(location!=""){
        // get data
        const data= await fetchWeather(location);
        // update data inside my dom
        if (data!=null){
            updateDOM(data);
        }
        searchInput.value="";
    }
})

const tempElem=document.querySelector(".temperature");
const locationElem=document.querySelector(".location");
const emojiElem=document.querySelector(".emoji");
const TimeElem=document.querySelector(".time");
const DateElem=document.querySelector(".date");
const conditionElem=document.querySelector(".condition");


function updateDOM(data){
    console.log("I will update the donm", data);
    const temp= data.current.temp_c;
    const location= data.location.name;
    const time_Date= data.location.localtime;
    const [date, time]=time_Date.split(" ");
    const iconLink= data.current.condition.icon;
    const condition= data.current.condition.text;
    console.log("```````````````");
    console.log("Temp:",temp, "Location:",location, "Date:", date);
    console.log("Time:",time, "Icon_Link:",iconLink);
    console.log("````````````````");

    /*********************update the dom*************************/
    tempElem.textContent=temp+ "°C";
    locationElem.textContent=location;
    emojiElem.src=iconLink;
    TimeElem.innerText=time;
    DateElem.innerText=date;
    conditionElem.innerText=condition;
    

}
async function fetchWeather(location){
    const url=`https://api.weatherapi.com/v1/current.json?key=6fc74cf82bc44773a8a171855241407&q=${location}&aqi=no`
    const response= await fetch(url)
    // fetch -> inbuilt function to get http response from a server
    if(response.status==400){
        alert("Location Invalid");
        return null;
    }
    else if(response.status==200){
        const json= await response.json();
        return json;
    }
    
}


//  search button -> click -> input get value -> fetchWeather -> update the UI

/***
 * HTTP packet -> Header-> metdata, status , body -> data 
 * 200 -> success
 * 404 -> page not found
 * 400 -> Bad request
 * 100->
 * 
 * **/ 