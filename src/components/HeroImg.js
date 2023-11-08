import "./HeroStyles.css";
import React from 'react'
import img from '../assets/2202757.jpg'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="IntroImg" src={img} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
