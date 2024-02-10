/* eslint-disable react/prop-types */

import { useContext } from "react";
import { WeatherContext } from "../context";
import useWeather from "../hooks/useWeather";


const WeatherProvider = ({ children }) => {
    const { weatherData, error, loading } = useWeather();
    return (
        <WeatherContext.Provider value={{ weatherData, error, loading }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;

export const useWeatherData =()=>useContext(WeatherContext);