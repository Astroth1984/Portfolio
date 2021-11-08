import React from 'react';
import { ThemeContext } from '../../context';
import { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faStackOverflow,
    faCodepen
  } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="social-container" style={{backgroundColor: darkMode && "#666"}}>
            <div className="social-bg"></div>
            <h3>Social Follow</h3>
            <a href="https://www.linkedin.com/in/el-mounir-othmane-21ab46147/" target="_blank" rel="noreferrer"
               className="social">
               <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/Astroth1984" target="_blank" rel="noreferrer"
               className="social">
               <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://stackoverflow.com/users/10167565/elmounir-othmane" target="_blank" rel="noreferrer" className="social">
                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
            </a>
            <a href="https://codepen.io/astroth1984" target="_blank" rel="noreferrer"
                className="social">
                <FontAwesomeIcon icon={faCodepen} size="2x" />
            </a>
        </div>
        
    )
}

export default Footer
