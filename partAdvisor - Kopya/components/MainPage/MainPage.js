import React from "react";
import MainPageShow from "./MainPageShow/MainPageShow";
import MainVehiclePart from "../../MainVehiclePart";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div>
      <div>
        <h3 className="urun">Anasayfa Vitrini</h3>
      </div>
      <div className="dcards">
        {MainVehiclePart.map((part) => (
          <MainPageShow key={part.id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
