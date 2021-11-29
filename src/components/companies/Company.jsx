import React from 'react';
import Tooltip from "react-simple-tooltip";
import { ThemeContext } from '../../context';
import { useContext } from 'react';
import Geolane from "../../img/geolane.png";
import Netfective from "../../img/netfective.png";
import Decod from "../../img/decod.png";
import Skopai from "../../img/skopai.png";
import Henceforth from "../../img/henceforth.png";
import Matrix from "../../img/Matrix.PNG";
import "./company.css";
import {css} from "styled-components";

const Company = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="a">
            <div className="a-right">
                <h1 className="a-title" style={{marginLeft: "50px"}}>Professional Experience</h1>
                <p className="a-sub" style={{marginLeft: "50px"}}>Companies I Worked For</p>
                <p className="a-desc" style={{marginLeft: "50px"}}>
                    Throughout my professional experience, i worked under the flag of many companies and startups. I faced many challenges and learned from every dev team member.
                </p>
                <p className="a-desc" style={{marginLeft: "50px"}}>
                    You can hover over the companies to see more details.
                </p>
                <p className="a-desc" style={{marginLeft: "50px"}}>
                    If you want to know more about my professional experince, the missions and the stack i worked with, please visit my Linkedin profil.
                </p>
                <div className="a-award" style={{marginLeft: "50px"}}>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Tooltip
                           content="Internship - 3 Months"
                           customCss={css`
                             white-space: nowrap;
                             font-size: 12px;
                             font-weight: 30;            
                        `}
                        >
                            <img src={Henceforth} alt="" className="a-award-img" style={{backgroundColor:darkMode ? "#777" : "#eee"}}/>
                        </Tooltip>
                        <p>henceforth</p>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Tooltip
                           content="Final Studies Internship: MEAN Stack (7 Months)"
                           customCss={css`
                             white-space: nowrap;
                             font-size: 12px;
                             font-weight: 30;            
                        `}
                        >
                            <img src={Skopai} alt="" className="a-award-img" style={{backgroundColor:darkMode ? "#777" : "#eee"}} />
                        </Tooltip>
                        <p>Skopai</p>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Tooltip
                           content="Freelance: MEAN Stack (2 Months)"
                           customCss={css`
                             white-space: nowrap;
                             font-size: 12px;
                             font-weight: 30;            
                        `}
                        >
                            <img src={Decod} alt="" className="a-award-img" style={{backgroundColor:darkMode ? "#777" : "#eee"}} />
                        </Tooltip>
                        <p>DECOD</p>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Tooltip
                           content="Full Time: Software Engineer (2 Months)"
                           customCss={css`
                             white-space: nowrap;
                             font-size: 12px;
                             font-weight: 30;            
                        `}
                        >
                            <img src={Netfective} alt="" className="a-award-img" style={{backgroundColor:darkMode ? "#777" : "#eee"}} />
                        </Tooltip>
                        <p>Netfective</p>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Tooltip
                           content="Full Remote: Front-End Dev/React-Native & Angular (12 Months)"
                           customCss={css`
                             white-space: nowrap;
                             font-size: 12px;
                             font-weight: 30;            
                        `}
                        >
                            <img src={Geolane} alt="" className="a-award-img" style={{backgroundColor:darkMode ? "#777" : "#eee"}} />
                        </Tooltip>
                        <p>Géolane</p>
                    </div>
                    
                </div>   
            </div>

            <div className="a-left">
                <div className="a-left">
                    <div className="com-card bg"></div>
                    <div className="a-card">
                        <img src={Matrix}
                            alt="" 
                            className="a-img" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company
