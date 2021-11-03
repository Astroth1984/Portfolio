import React from 'react';
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) =>{
        //prevent refreshing the page on clicking on Submit button
        e.preventDefault();  
        
        emailjs
            .sendForm(
                'service_63g9elj', 
                'template_hsda83k', 
                formRef.current, 
                'user_zX4w5kcnT8eIR14FkJr1W'
            )
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your Project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                                src={Phone}
                                alt="" 
                                className="c-icon" 
                            />
                            +212 6190 465 65
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            elmn.othmane@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Rue 23 Biranzaran Maarif, Casablanca , Maroc
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Suject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="7" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
