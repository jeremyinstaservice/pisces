import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext();

export const useMyContext = () => React.useContext(MyContext);

// eslint-disable-next-line react/prop-types
const MyContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState("");
  const [continent, setContinent] = useState("");
  const [location, setLocation] = useState(null);
  const [backupEmail, setBackUpEmail] = useState(false);
  const [instagramBackup, setInstagramBackup] = useState(false);

  // GET LOCATION
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Fetch country and city based on latitude and longitude using the OpenCage Data API
        try {
          const apiKey = "d57ae589d4fd428abdbcfba4314790c8";
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
          );

          const { country, city, continent } =
            response.data.results[0].components;
          console.log(response.data.results[0].components);
          setCountry(country);
          setCity(city);
          setContinent(continent);
        } catch (error) {
          console.error("Error fetching geolocation data:", error);
        }
      });
    }
  }, [isAuthenticated]);

  // CHECK EMAIL
  const splitEmail = (email) => {
    const parts = email.split("@");
    const domain = parts[1];
    if (domain === "gmail.com") {
      setBackUpEmail(true);
    }
  };

  return (
    <MyContext.Provider
      value={{
        country,
        city,
        continent,
        location,
        backupEmail,
        instagramBackup,
        isAuthenticated,
        splitEmail,
        setInstagramBackup,
        setBackUpEmail,
        setIsAuthenticated,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
