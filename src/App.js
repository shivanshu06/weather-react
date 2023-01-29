
import React, { useState } from "react";
import "./design.css"
const api={
  key:"591abaec6fb68b448b103805ce7403b4",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {

  const[query,setquery]=useState('')
  const[weather,setweather]=useState({})

  const search =evt=>{
    if(evt.key==='Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result=>{setweather(result);
        setquery('');
        console.log(result)
      });
    }
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e=>setquery(e.target.value)}
          value={query}
          onKeyPress={search}/>

        </div>
        {(typeof weather.main!="undefined") ? (
       <div>
        <div className="location-box">
          <div className="location">
            {weather.name},{weather.sys.country}

          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)} °c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>

        </div>
        
       </div>
        ) :('')}
      </main>
      

    </div>
  );
}

export default App;
