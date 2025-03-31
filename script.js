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


const dayElem = document.querySelector(".day"); // Select the day element

function updateDOM(data) {
    console.log("I will update the DOM", data);
    const temp = data.current.temp_c;
    const location = data.location.name;
    const time_Date = data.location.localtime; // Example: "2025-03-31 10:20"
    const [date, time] = time_Date.split(" ");
    const iconLink = data.current.condition.icon;
    const condition = data.current.condition.text;

    // Calculate correct weekday
    const dateObj = new Date(date);
    const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'long' });

    console.log("Raw API localtime:", data.location.localtime);
    console.log("Extracted Date:", date);
    console.log("Calculated Day of Week:", dayOfWeek);
    console.log("Before update: DateElem.innerText =", DateElem.innerText);
    console.log("Before update: dayElem.innerText =", dayElem.innerText); 

    /********************* 🔥 FIX: Update Day and Date Separately 🔥 *************************/
    if (dayElem) {
        dayElem.textContent = dayOfWeek; // Update only the day
    }
    if (DateElem) {
        DateElem.textContent = date; // Update only the date
    }

    /********************* Update the rest of the DOM *************************/
    tempElem.textContent = temp + "°C";
    locationElem.textContent = location;
    emojiElem.src = iconLink;
    TimeElem.innerText = time;
    conditionElem.innerText = condition;
}



async function fetchWeather(location){
    const url=`http://api.weatherapi.com/v1/current.json?key=6fc74cf82bc44773a8a171855241407&q=${location}&aqi=no`
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