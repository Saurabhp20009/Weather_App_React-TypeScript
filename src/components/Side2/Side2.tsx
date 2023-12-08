import React, { useContext } from "react";
import "../Side2/Side2.css";
import { IoMdSunny } from "react-icons/io";
import { IoIosRainy } from "react-icons/io";
import { BsCloudsFill } from "react-icons/bs";
import { MdThunderstorm } from "react-icons/md";
import { BsCloudDrizzleFill } from "react-icons/bs";
import { FaSnowflake } from "react-icons/fa";
import { RiMistLine } from "react-icons/ri";
import { WiSmoke } from "react-icons/wi";
import { LuHaze } from "react-icons/lu";
import { WiDust } from "react-icons/wi";
import { RiSunFoggyFill } from "react-icons/ri";
import { GiSandstorm } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa6";
import { PiFireFill } from "react-icons/pi";
import { LiaCloudShowersHeavySolid } from "react-icons/lia";
import { LuTornado } from "react-icons/lu";
import { WeatherContext } from "../Context";

const Side2 = () => {
  let IconData = [
    { name: "Clear", icon: <IoMdSunny /> },
    { name: "Rain", icon: <IoIosRainy /> },
    { name: "Clouds", icon: <BsCloudsFill /> },
    { name: "Thunderstrom", icon: <MdThunderstorm /> },
    { name: "Drizzle", icon: <BsCloudDrizzleFill /> },
    { name: "Snow", icon: <FaSnowflake /> },
    { name: "Mist", icon: <RiMistLine /> },
    { name: "Smoke", icon: <WiSmoke /> },
    { name: "Haze", icon: <LuHaze /> },
    { name: "Dust", icon: <WiDust /> },
    { name: "Fog", icon: <RiSunFoggyFill /> },
    { name: "Sand", icon: <GiSandstorm /> },
    { name: "Dust", icon: <FaIndustry /> },
    { name: "Ash", icon: <PiFireFill /> },
    { name: "Squall", icon: <LiaCloudShowersHeavySolid /> },
    { name: "Tornado", icon: <LuTornado /> },
  
  ];

  let weatherCon = useContext(WeatherContext);
  let index= IconData.findIndex((item) => {
    return (
      item.name ===
      (weatherCon?.weatherInfo.data
        ? weatherCon?.weatherInfo.data.weather[0].main
        : "clouds")
    ) 
  });
   
  let date= new Date()
  console.log(date.getHours())
  let greeting;
  if(date.getHours() <12)
  {
    greeting= "Good Morning"
  }

   else if(date.getHours()< 16 && date.getHours()>=12)
   {
     greeting="Good Afternoon"
   }
    
   else{
    greeting="Good Evening"
   }

  return (
    <div className="side2-container">
      <div className="side2-head">
        <h3>{greeting}</h3>
        <h4>{date.toLocaleTimeString()}</h4>
      </div>

      <div className="side2-body">
        <div className="displayIcon">{IconData[weatherCon?.weatherInfo.data? index : 0 ].icon}
        <h2>Feels like {weatherCon?.weatherInfo.data? Math.floor(weatherCon?.weatherInfo.data.main.feels_like) : "20" }°</h2></div>
      </div>
    </div>
  );
};

export default Side2;
