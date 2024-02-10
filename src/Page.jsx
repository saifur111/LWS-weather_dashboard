// import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
// import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
// import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
// import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
// import SnowImage from "./assets/backgrounds/sunny.jpg";
// import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
// import WinterImage from "./assets/backgrounds/winter.jpg";
// import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

function Page() {
    // const [climateImage, setClimateImage] = useState("");
    
    // function getBackgroundImage(climate) {
    //     switch (climate) {
    //         case "Rain":
    //             return RainyDayImage;
    //         case "Clouds":
    //             return ScatterdCloudsImage;
    //         case "Clear":
    //             return ClearSkyImage;
    //         case "Snow":
    //             return SnowImage;
    //         case "Thunder":
    //             return ThunderStormImage;
    //         case "Fog":
    //             return WinterImage;
    //         case "Haze":
    //             return FewCloudsImage;
    //         case "Mist":
    //             return MistImage;
    //         default:
    //             return ClearSkyImage;
    //     }
    // }
    // useEffect(() => {
    //     const bgImage = getBackgroundImage("Rain");
    //     setClimateImage(bgImage);
    // }, []);
    
    return (
        <>  
        <div
            style={{ backgroundImage: `url('${RainyDayImage}')` }}
            className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
            <Header />
            <main>
                <section>
                    <WeatherBoard />
                </section>
            </main>
        </div>

        </>
    );
}

export default Page;
// ea4f0bba17468b414f43415f6bab06db