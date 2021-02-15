const form = document.querySelector(".app-search-section form");
const input = document.querySelector(".app-search-section input");
const msg = document.querySelector(".app-search-section .msg");
const list = document.querySelector(".app-result-section .cities");

const apiKey = "c2404c3b6309eba042cad8632694d168";
 
form.addEventListener("submit", e => {
  e.preventDefault();
  const listItems = list.querySelectorAll(".app-result-section .city");
  let inputVal = input.value;







 

 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;


fetch(url)
  .then(response => response.json())
  .then(data => {console.log(data)

    console.log(data.sys.country)
    console.log(data.weather[0]["icon"])
    console.log(data.wind["speed"])
    


    
 /* 
 const { main, name, sys, weather } = data;
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

  })
  .catch(() => {
    msg.textContent = "Please search for a valid city";
  });

});


