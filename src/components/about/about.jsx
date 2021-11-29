import React from 'react';
import "./about.css";
import Award from "../../img/award.png";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://imgsrc.cineserie.com/2021/02/lunatic-at-large-un-projet-abandonne-de-stanley-kubrick-va-se-tourner.jpg?ver=1" 
                         alt="" 
                         className="a-img" 
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                  <strong>" To strive. To seek. To find and be found, and not To yield "{'    '} - Detachment (2011)</strong>
                </p>
                <p className="a-desc">
                  Always curious and motivated to learn more. I can adapt to any form of the Tech-Stack and make use of the documentations. 
                </p>
                <p className="a-desc">I code better in the Dark Mode, it makes me feel that i'm doing something worth staying up all night.</p>
                <p className="a-desc">
                  A man in black. A Metalhead and Cinephile.
                  </p>
                <p className="a-desc">
                  Also as a bonus, you can check out my top 10 favorite tracks on the mp3 Player, some amazing solos are hidden there.
                </p>
                <p className="a-desc">
                  If i ever did not respond on time, i must have been made it to the Burning man Festival.
                </p>
              <div className="a-award">
                <a href="https://letterboxd.com/astroth1984/" target="_blank" rel="noreferrer">
                  <img src={Award} alt="" className="a-award-img" />
                </a>
              <div className="a-award-texts">
                <h4 className="a-award-title">Letterboxd Profil: Astroth1984</h4>
                <p className="a-award-desc">
                  Rewarded with Pro status on letterboxed. Click on the letterboxd icon for movies suggestions. Or also you can mail me your favorite ones, never say no to a movie suggestion.
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default About
