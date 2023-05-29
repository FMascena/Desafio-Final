import React from 'react';
import logoImage from "../../assets/logo-light.png";
import "./style.css"
const LogoHeader = () => {
  return (
    <div>
      <img src={logoImage} alt="Logo" className="logo-image"/>
    </div>
  );
};

export default LogoHeader;