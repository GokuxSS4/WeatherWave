import { useSelector } from "react-redux";
import HighlightCard from "../HighlightCards";
import ReduxState from "../../Interfaces/ReduxState";

function HighLightRow() {
    const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData);

    function uvRange() : string {
        if(currentData.uv <= 5) return "Low";
        else if(currentData.uv > 5 && currentData.uv < 8) return "Moderate";
        else return "High";
    }

    function aqiRange():string{
        if(currentData.aqi<=60) return "High";
        else if(currentData.aqi>=61 && currentData.aqi<=120) return "Moderate";
        else return "Low"
    }

    function humidityRange():string{
        if(currentData.humidity<=30)return "Dry";
        else if(currentData.humidity>=31 && currentData.humidity<=60)return "Comfortable";
        else if(currentData.humidity>=60 && currentData.humidity<=80)return "Humid";
        else return "Very Humid"
    }

    function visibilityRange():string{
        if(currentData.vis_km<=2)return "Poor";
        else if(currentData.humidity>=3 && currentData.humidity<=5)return "Moderate";
        else return "Good"
    }

    return (
        <div className="flex flex-wrap gap-6 px-12 py-2">
            <HighlightCard title="UV Index"  data={currentData.uv.toString()} footer={uvRange()}/>
            <HighlightCard title="Wind Status"  data={currentData.wind_kmph.toString()} footer="km/h"/>
            <HighlightCard title="Humidity"  data={currentData.humidity.toString() + "%"} footer={humidityRange()}/>
            <HighlightCard title="Visibility"  data={currentData.vis_km.toString()} footer={visibilityRange()}/>
            <HighlightCard title="Sunrise & Sunset"  data={currentData.sunrise} footer={currentData.sunset}/>
            <HighlightCard title="Air quality"  data={currentData.aqi.toString()} footer={aqiRange()}/>
        </div>
    )
}

export default HighLightRow;