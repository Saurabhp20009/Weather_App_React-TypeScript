import React, { useContext } from "react";
import "../Side1/Side1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FaWind } from "react-icons/fa";
import { WeatherContext } from "../Context";
import { WiHumidity } from "react-icons/wi";
import DisplayData from "./Display/DisplayItem";


const Side1 = () => {
  let weatherCon = useContext(WeatherContext);

 

  
  const formattedDate = new Date().toDateString();
  

  console.log(formattedDate);
  return (
    <div className="side1-container">
      <div className="side1-head">
        <div className="side1-head-div">
          <input
            className="side1-head-input"
            placeholder="Search the city.."
            value={weatherCon?.city}
            onChange={weatherCon?.searchQuery}
          />
          <FontAwesomeIcon
            id="search-icon"
            icon={faMagnifyingGlass}
            onClick={weatherCon?.handleSearch}
          />
        </div>

        <h5>
          {weatherCon?.weatherInfo.data
            ? weatherCon.weatherInfo.data.name
            : "Default"}
        </h5>
        <h5>{formattedDate}</h5>
      </div>

      <div className="side1-body">
        <div className="side1-body-temp-and-weather">
          <h1>
            {weatherCon?.weatherInfo.data
              ? Math.floor(weatherCon.weatherInfo.data.main.temp)
              : "20"}
            °
          </h1>
          <h3>
            {weatherCon?.weatherInfo.data
              ? weatherCon.weatherInfo.data.weather[0].main
              : "Clouds"}
          </h3>
        </div>
        <div className="side1-body-wind-and-humidity">
          <h5>
            {" "}
            <FaWind />{" "}
            {weatherCon?.weatherInfo.data
              ? weatherCon.weatherInfo.data.wind.speed
              : "6.1"}
            mph
          </h5>
          <h4>
            <WiHumidity />
            {weatherCon?.weatherInfo.data
              ? weatherCon.weatherInfo.data.main.humidity
              : "90"}{" "}
            %
          </h4>
        </div>
      </div>

      <div className="side1-footer">
        <DisplayData
          heading={"Highest"}
          value={
            weatherCon?.weatherInfo.data
              ? `${weatherCon.weatherInfo.data.main.temp_max}°`
              : 20
          }
        />

        <DisplayData
          heading={"Lowest"}
          value={
            weatherCon?.weatherInfo.data
              ? `${weatherCon.weatherInfo.data.main.temp_min}°`
              : 15
          }
        />

        <DisplayData
          heading={"Pressure"}
          value={
            weatherCon?.weatherInfo.data
              ? `${weatherCon.weatherInfo.data.main.pressure} hPA`
              : 1017
          }
        />

        <DisplayData
          heading={"Visibility"}
          value={
            weatherCon?.weatherInfo.data
              ? `${weatherCon.weatherInfo.data.visibility / 1000} km`
              : 10000
          }
        />
      </div>
    </div>
  );
};

export default Side1;
