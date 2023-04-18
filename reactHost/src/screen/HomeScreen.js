import React from "react";
import LandingPage from "../components/LandingPage";
import Counter from "rmoteAppReact/Counter";


const HomeScreen = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <LandingPage />
      <Counter />
    </div>
  );
};

export default HomeScreen;
