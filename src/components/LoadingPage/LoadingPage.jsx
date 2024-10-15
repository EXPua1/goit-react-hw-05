import React from "react";
import css from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loader"></div>
      <p>Loading, please wait...</p>
    </div>
  );
};

export default LoadingPage;
