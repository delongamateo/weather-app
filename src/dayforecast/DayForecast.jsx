
import "./dayforecast.css";

function DayForecast(props) {

   const {weekday, weather, tempDay, tempNight} = props;


    return (
       <div className="day-forecast">
           <div className="day-forecast__header">{weekday}</div>
            <div className="day-forecast__body">
               <div className={`day-forecast__image weather-${weather}`}></div>
               <div className="day-forecast__temps">
                 <span className="temp-day">{tempDay}°</span>
                 <span className="temp-night">{tempNight}°</span>
               </div>
            </div>
       </div>
    )
}


export default DayForecast;

