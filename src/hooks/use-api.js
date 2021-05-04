import { useState, useEffect } from 'react';

export default function useApi(lat, lon) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get data from api
    const fetchData = async () => {
      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    // Only call if we have both coords
    if (lat !== undefined && lon !== undefined) {
      fetchData();
    }
  }, [lat, lon]);
  return data;
}
