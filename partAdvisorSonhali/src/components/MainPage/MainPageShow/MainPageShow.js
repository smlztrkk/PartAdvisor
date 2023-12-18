import React from "react";
import "./MainPageShow.css";
const MainPageShow = ({ part }) => {
  return (
    <div className="Mitem">
      <div className="Mimage">
        <img
          className="Mimage"
          width={200}
          height={200}
          src={part.resim}
          alt="ürün resmi"
        />
      </div>
      <div className="Minformation">
        <h2>{part.marka}</h2>
        <h3>{part.model}</h3>
        <h4>{part.aractipi}</h4>
        <h5>{part.ozelligi}</h5>
      </div>
      <div className="Mbbut">
        <a href={part.link} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary Mbut">ürüne git</button>
        </a>
      </div>
    </div>
  );
};

export default MainPageShow;
