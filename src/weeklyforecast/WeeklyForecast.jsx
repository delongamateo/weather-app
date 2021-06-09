
import DayForecast from '../dayforecast/DayForecast';
import {forecast} from "../forecast.js";
import "./weeklyforecast.css";

function WeeklyForecast() {


    return (
        <div className="container">
            <h1>Weekly Weather Forecast</h1>
            <div className="week-forecast">
                {forecast.map((a, index) => {
                   return <DayForecast key={index} weekday={a.weekday} weather={a.weather} tempDay={a.tempDay} tempNight={a.tempNight} />
                })}
            </div>
        </div>
    
    )
};

export default WeeklyForecast;