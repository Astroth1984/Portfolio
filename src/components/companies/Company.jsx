import React from 'react';
import { ThemeContext } from '../../context';
import { useContext } from 'react';
import Geolane from "../../img/geolane.png";
import Netfective from "../../img/netfective.png";
import Decod from "../../img/decod.png";
import Skopai from "../../img/skopai.png";
import Henceforth from "../../img/henceforth.png";
import Matrix from "../../img/Matrix.PNG";
import "./company.css";

const Company = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="a">
            <div className="a-right">
                <h1 className="a-title" style={{marginLeft: "50px"}}>About Me</h1>
                <p className="a-sub" style={{marginLeft: "50px"}}>Somthing</p>
                <p className="a-desc" style={{marginLeft: "50px"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </p>
                <div className="a-award" style={{marginLeft: "50px"}}>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <img src={Henceforth} alt="" className="a-award-img" style={{backgroundColor:darkMode ? "#777" : "#eee"}}/>
                        <p>henceforth</p>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <img src={Skopai} alt="" className="a-award-img" style={{backgroundColor:darkMode ? "#777" : "#eee"}} />
                        <p>Skopai</p>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <img src={Decod} alt=""X className="a-award-img" style={{backgroundColor:darkMode ? "#777" : "#eee"}} />
                        <p>DECOD</p>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <img src={Netfective} alt="" className="a-award-img" style={{backgroundColor:darkMode ? "#777" : "#eee"}} />
                        <p>Ntfective</p>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <img src={Geolane} alt="" className="a-award-img" style={{backgroundColor:darkMode ? "#777" : "#eee"}} />
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
