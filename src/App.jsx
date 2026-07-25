import { useEffect, useState } from "react";
import "./App.css";

import LoadingScreen from "./Components/LoadingScreen";
import Home from "./Pages/Home";

import ScrollReveal from "./Components/ScrollReveal";

function App() {

  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {

    const timer1 = setTimeout(() => {
      setHideLoader(true);
    }, 1800);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };

  }, []);

  return (
  <>
    <ScrollReveal />

    {loading && (
      <div className={hideLoader ? "loader-hide" : "loader-show"}>
        <LoadingScreen />
      </div>
    )}

    <div className={loading ? "page-hide" : "page-show"}>
      <Home />
    </div>
  </>
);
}

export default App;