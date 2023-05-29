import React from 'react';
import logoImage from "../../assets/logo-dark.png";
import "./style.css"

const LogoFooter = () => {
  return (
    <div>
      <img src={logoImage} alt="Logo" className="logo-footer"/>
    </div>
  );
};

export default LogoFooter;