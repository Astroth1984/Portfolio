import React from 'react';
import { saveAs } from "file-saver";
import MyResume from "../../img/Othmane-El-Mounir-CV.pdf";
import "./pdfsaver.css";
import {GrDocumentPdf} from "react-icons/gr";
import { ThemeContext } from '../../context';
import { useContext } from 'react';
import Tooltip from "react-simple-tooltip";
import {css} from "styled-components";


const Pdfsacer = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const saveFile = () => {
        saveAs(
            MyResume,
            "El-Mounir-Othmane-Resume"
        );
    };
    return (
        <div className="container">
            <Tooltip
                content="My Resume"
                customCss={css`
                    white-space: nowrap;
                    font-size: 12px;
                    font-weight: 30;            
            `}
            >
                <button 
                    className= "avatar" 
                    onClick={saveFile}
                    style={{border: darkMode ? "5px #666 solid" : "5px #eee solid"}}
                >
                    <GrDocumentPdf className="img" />
                </button>
            </Tooltip>
        </div>
    )
}

export default Pdfsacer
