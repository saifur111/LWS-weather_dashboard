import Page from "./Page";
import { LocationProvider } from "./provider";
import FavouriteProvider from "./provider/FavouriteProvider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavouriteProvider>
            <Page />
          </FavouriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}

export default App;
