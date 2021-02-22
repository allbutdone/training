
  const form = document.querySelector(".app-search-section form");
  const input = document.querySelector(".app-search-section input");
  const msgErr=document.getElementById('msgErr');
  const list = document.querySelector(".app-result-section .cities");
  const msg = document.querySelector(".app-search-section .msg");
  
  const apiKey = "c2404c3b6309eba042cad8632694d168";


  /*search by user position */

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition,showError);
     
     
      function showPosition(position) {
        let lat=position.coords.latitude;
        let long= position.coords.longitude;



        
     

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
            fetch(url)
             .then(response => response.json())
             .then(data => {console.log(data)




              const { main, name, sys, weather } = data;

           
               console.log(main.temp)
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
                  <img class="city-icon" src=img/${
                    weather[0]["icon"]}.png alt=${weather[0]["main"]}>
                  <figcaption>${weather[0]["description"]}</figcaption>
                </figure>
              `;
              li.innerHTML = markup;
              list.appendChild(li);



         
           
              
            
              })
              .catch(() => {
                msg.textContent = "Please search for a valid city";
              });
            

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

   
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  
  
  fetch(url)
    .then(response => response.json())
    .then(data => {console.log(data)
 
 
 const { main, name, sys, weather } = data;

   
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
      <img class="city-icon" src=img/${
        weather[0]["icon"]}.png alt=${weather[0]["main"]}>
      <figcaption>${weather[0]["description"]}</figcaption>
    </figure>
  `;
  li.innerHTML = markup;
  list.appendChild(li);
  

  

  })
  .catch(() => {
    msg.textContent = "Please search for a valid city";
  });

});


