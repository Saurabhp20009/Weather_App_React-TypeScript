import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

type childProp = {
  children: React.ReactNode;
};

type WeatherContextType = {
  city: string;
  searchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  weatherInfo: any;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

const Context = ({ children }: childProp) => {
  const [searchCity, setSearchCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>({});
  
  
  useEffect(() => {
    const fetchDefaultData = async () => {
      const apiResult = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=dehradun&appid=ca8d77fb8d17bdd1cf6a1db424ec297c&units=metric"
      );
       setWeatherData(apiResult);
    }
    fetchDefaultData()
  }, []);

  return (
    <div>
      <WeatherContext.Provider
        value={{
          city: searchCity,
          searchQuery: (event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchCity(event.target.value),
          handleSearch: async () => {
            const apiResult = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=ca8d77fb8d17bdd1cf6a1db424ec297c&units=metric`
            );
            setWeatherData(apiResult);
          },
          weatherInfo: weatherData,
        }}
      >
        {children}
      </WeatherContext.Provider>
    </div>
  );
};

export default Context;
