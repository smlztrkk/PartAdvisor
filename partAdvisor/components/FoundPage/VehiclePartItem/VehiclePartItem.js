import React from "react";
import "./VehiclePartItem.css";
const VehiclePartItem = ({ part }) => {
  return (
    <div className="item">
      <div className="image">
        <img width={200} height={200} src={part.resim} alt="ürün resmi" />
      </div>

      <div className="information">
        <h2>{part.marka}</h2>
        <h3>{part.model}</h3>
        <h4>{part.aractipi}</h4>
        <h5>{part.ozelligi}</h5>
      </div>
      <div className="bbut">
        <a href={part.link} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary but">ürüne git</button>
        </a>
      </div>
    </div>
  );
};

export default VehiclePartItem;
