import React from "react";
import Lottie from "lottie-react";
import animationData from "./data.json";
import "@lottiefiles/lottie-player";

export default function Loader() {
  return <lottie-player
  autoplay
  loop
  mode="normal"
  src="./icons/data.json"
  style={{ width: "100vw", height: "100vh" }}
>
</lottie-player>;
}
