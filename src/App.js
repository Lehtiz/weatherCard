import './App.css';
import React, { useEffect, useState } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import Weather from './components/weather';
import useApi from './hooks/use-api';

export default function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
    // Fetch coords for api
    const fetchLocation = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    };

    fetchLocation();
  }, [lat, lon]);

  const data = useApi(lat, lon);

  return (
    <div className="App">
      {typeof data.main !== 'undefined' ? (
        <Weather weatherData={data} />
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
}
