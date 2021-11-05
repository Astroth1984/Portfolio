import React from 'react';
import { ThemeContext } from '../../context';
import { useContext } from 'react';
import "./tech.css";
import { FaAngular, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiSwagger, SiPostman, SiElasticsearch, SiMongodb, SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";


const Tech = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div class="ts" style={{backgroundColor: darkMode && "#666"}}>
            <div className="ts-texts">
                <h1 className="ts-title">Tech Stack</h1>
            </div>
            <div className="ts-list">
                <SiJavascript className="t-item javascrpit" />
                <SiTypescript className="t-item typescript" />
                <FaAngular className="t-item angular" />
                <FaReact className="t-item react" />
                <FaNodeJs className="t-item node" />
                <SiSwagger className="t-item swagger" />
                <SiPostman className="t-item postman" />
                <SiElasticsearch className="t-item elastic" />
                <SiMongodb className="t-item mongo" />
                <SiPostgresql className="t-item postgres" />
                <GrMysql className="t-item mysql" />
                <FaGitAlt className="t-item git" />
            </div>  
        </div>
         
    )
}

export default Tech
