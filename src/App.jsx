import { useEffect } from "react";
import MainContextProvider from "./Context/MainContext";
import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainLayout from "./Layouts/MainLayout";
import "./index.css";
import TrackingService from "./Components/TrackingService/TrackingService";
import Home from "./Components/Home/Home";

function App() {
  let [i18n] = useTranslation();
  function checkDirLang() {
    if (i18n.language === "ar" || i18n.language === "ar-EG") {
      document.dir = "rtl";
    } else if (i18n.language === "en") {
      document.dir = "ltr";
    }
  }
  useEffect(() => {
    checkDirLang();
  }, []);
  
  const routes = createHashRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          index: "home",
          element: <Home />,
        },
        {
          path: "track-shipment",
          element: <TrackingService />,
        },
      ],
    },
  ]);
  return (
    <>
      <MainContextProvider>
        <RouterProvider router={routes} />
      </MainContextProvider>
    </>
  );
}

export default App;
