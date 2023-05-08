import React from "react";
import Lottie from "lottie-react";
import animationData from "./data.json";

export default function Loader() {
  return (
    <div style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "20%", maxWidth: "100px", height: "auto" }}>
        <Lottie animationData={animationData} autoplay loop />
      </div>
    </div>
  );
}
