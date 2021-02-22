
  const form = document.querySelector(".app-search-section form");
  const input = document.querySelector(".app-search-section input");
  const msgErr=document.getElementById('msgErr');
  const list = document.querySelector(".app-result-section .cities");
  const msg = document.querySelector(".app-search-section .msg");
  const cityHeader=document.getElementById("city-header");  
  
  const apiKey = "c2404c3b6309eba042cad8632694d168";


  /* fetchDisplay function start **************************/
function fetchDisplay(url){
  fetch(url)
  .then(response => response.json())
  .then(data => {console.log(data)


   cityHeader.innerHTML=`Weather forecast for ${data.city.name},${data.city.country}`;

   for(x=0;x<30;x+= 3){
     const li=document.createElement("li")
     li.classList.add("city");
   const markup = `
     <h4 class="orange">${data.list[x].dt_txt}</h4>
     <div class="city-temp">${Math.round(data.list[x].main.temp)}<sup>°C</sup>
     </div>
     <figure>
       <img class="city-icon" src=img/${
         data.list[x].weather[0]["icon"]}.png alt=${data.list[x].weather[0]["icon"]}>
       <figcaption>${data.list[x].weather[0]["description"]}</figcaption>
     </figure>
   `;
  
   li.innerHTML = markup;
   list.appendChild(li);

   }
 
   })
   .catch(() => {
     msg.textContent = "Please search for a valid city";
   });
}

/*fetch ends****************************** */

  




/* Fetch forecast weather */
function fetchForecast(lat,long){

  const url= `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
        
  fetchDisplay(url);

      
}

   
/*search by user position */

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition,showError);
     
     
      function showPosition(position) {
        let lat=position.coords.latitude;
        let long= position.coords.longitude;


        //fetchCurrentWeather(lat,long);
        fetchForecast(lat,long)
      }}

   
      
     else { 
      msgErr.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

/*handle error */

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        msgErr.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        msgErr.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        msgErr.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        msgErr.innerHTML = "An unknown error occurred."
        break;
    }
  }




  

  
  /*end user position */


/* search weather by cities START*/


 
  form.addEventListener("submit", e => {
    e.preventDefault();
    const listItems = list.querySelectorAll(".app-result-section .city");
    let inputVal = input.value;

   
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${apiKey}&units=metric`;
  
             
  fetchDisplay(url);

});




















