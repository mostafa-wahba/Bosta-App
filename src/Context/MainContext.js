import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MainContext = createContext();

export default function MainContextProvider(props) {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (trackingNumber) {
      const fetchTrackingData = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const { data } = await axios.get(
            `https://tracking.bosta.co/shipments/track/${trackingNumber}`
          );
          setTrackingData(data);
          console.log(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchTrackingData()
    }
  }, [trackingNumber]);

  return (
    <MainContext.Provider
      value={{
        trackingNumber,
        setTrackingNumber,
        trackingData,
        isLoading,
        error,
        inputValue,
        setInputValue,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
