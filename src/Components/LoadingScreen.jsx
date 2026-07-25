import "./LoadingScreen.css";
import { FaGraduationCap } from "react-icons/fa";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">

      <div className="loading-content">

        <div className="loading-logo">

          <FaGraduationCap />

        </div>

        <h1>
          Bright<span>Future</span>
        </h1>

        <p>
          Preparing Future Leaders...
        </p>

        <div className="loading-bar">

          <span></span>

        </div>

      </div>

    </div>
  );
};

export default LoadingScreen;