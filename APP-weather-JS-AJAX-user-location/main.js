  /*user position */


  var x = document.getElementById("userLat");
  var y = document.getElementById("userLong");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      console.log(navigator.geolocation);
     
      function showPosition(position) {
        x.innerHTML =position.coords.latitude;
        y.innerHTML= position.coords.longitude;
       
      }
      
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  

  
  /*end user position */




 
form.addEventListener("submit", e => {
  e.preventDefault();
  const listItems = list.querySelectorAll(".app-result-section .city");
  let inputVal = input.value;


  console.log(x.innerHTML);
  console.log(y.innerHTML);



 
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${x.innerHTML}&lon=${y.innerHTML}&appid=${apiKey}`;


  fetch(url)
  .then(response => response.json())
  .then(data => {
    
    console.log(data)

   // console.log(data.sys.country)
   // console.log(data.weather[0]["icon"])
   // console.log(data.wind["speed"])


 /*

 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;


fetch(url)
  .then(response => response.json())
  .then(data => {console.log(data)

    console.log(data.sys.country)
    console.log(data.weather[0]["icon"])
    console.log(data.wind["speed"])
    
    */
  
  
    
    
    
 

    
 
/* const { main, name, sys, weather } = data;
  const icon = `https://openweathermap.org/img/wn/${
    weather[0]["icon"]
  }@2x.png`;
   
  const li = document.createElement("li");
  li.classList.add("city");
  const markup = `
    <h2 class="city-name" data-name="${name},${sys.country}">
      <span>${name}</span>
      <sup>${sys.country}</sup>
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
    </div>
    <figure>
      <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
      <figcaption>${weather[0]["description"]}</figcaption>
    </figure>
  `;
  li.innerHTML = markup;
  list.appendChild(li);
  */
  document.getElementById("myicon").innerHTML=`<h2>${data.name},${data.sys.country}</h2><img src=img/${
    data.weather[0]["icon"]
  }.png><p>${data.main.temp}</p><p>${data.weather[0].description}</p><p>${data.coord.lon}</p><p>${data.coord.lat}</p>`;
  

  })
  .catch(() => {
    msg.textContent = "Please search for a valid city";
  });

});


