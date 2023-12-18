import React, { Component } from "react";
import VehiclePartItem from "./VehiclePartItem/VehiclePartItem";
import "./FoundPage.css";
import VehilePartData from "../../VehiclePartData";
export default class Deneme extends Component {
  render() {
    return (
      <div className="cards">
        {VehilePartData.map((part) => (
          <VehiclePartItem key={part.id} part={part} />
        ))}
      </div>
    );
  }
}
