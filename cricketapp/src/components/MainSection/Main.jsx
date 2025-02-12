import React from "react";
import './Main.css';
import flagimg from '../../Image/flag1.jpg';
import flagimg2 from '../../Image/flag2.jpg';
import image1 from '../../Image/Event1.jpg';
import { NavLink } from "react-router-dom";
const Main = () => {
    return(
        <main className="main-container">

      {/* Info cards Section */}
      <section className="cards-section">
        <div className="main-card">
          <h2>Upcomming Matches</h2>
          <p>Stay up-to-date with real-time match scores.</p>
        </div>
        
        <div className="main-card">
          <h2>Live Matches</h2>
          <p>Stay up-to-date with real-time match scores.</p>
        </div>

        <div className="main-card">
          <h2>Match Highlights</h2>
          <p>Relive the best moments of the game with video highlights.</p>
        </div>
        <div className="main-card">
          <h2>Exclusive News</h2>
          <p>Catch up on the latest cricket news and insights.</p>
        </div>
      </section>

        <div className="upcoming-matches-header">
          <h2 className="upcoming-matches-heading">Upcomming Matches</h2>
          <p>100% off</p>
        </div>
      <section className="upcoming-matches-container">
        <div className="upcoming-matches-wraper">
            <div className="upcoming-matches">
                <div className="upper">
                    <p className="league-name">Indian premier league</p>
                  <p className="linup-status">Lineup <img src="" alt="" /></p>
                </div>
                <div className="middle">
                    <p className="country-flag-code">
                      <img className="country-flag" src={flagimg} alt="" /> 
                      <h5 className="country-code">IND</h5>
                      </p>
                    <div className="time">
                        <div className="remaining-time">2h 51m</div>
                        <div className="actual-time">09:00 PM</div>
                    </div>
                    <p className="country-flag-code">
                      <h5 className="country-code">ENG</h5>
                      <img className="country-flag" src={flagimg2} alt="" /> 
                      </p>
                </div>

                <div className="lower">
                    <p className="price-pool">Mega Rs 27 Crores +</p>
                    <p className="bell-icon">bell icon</p>
                </div>
              <NavLink to = "/contests"> <button className="bet-btn">Bet Now</button></NavLink>
            </div>

            <div className="upcoming-matches">
                <div className="upper">
                    <p className="league-name">Indian premier league</p>
                  <p className="linup-status">Lineup <img src="" alt="" /></p>
                </div>
                <div className="middle">
                    <p className="country-flag-code">
                      <img className="country-flag" src={flagimg} alt="" /> 
                      <h5 className="country-code">IND</h5>
                      </p>
                    <div className="time">
                        <div className="remaining-time">2h 51m</div>
                        <div className="actual-time">09:00 PM</div>
                    </div>
                    <p className="country-flag-code">
                      <h5 className="country-code">ENG</h5>
                      <img className="country-flag" src={flagimg2} alt="" /> 
                      </p>
                </div>

                <div className="lower">
                    <p className="price-pool">Mega Rs 27 Crores +</p>
                    <p className="bell-icon">bell icon</p>
                </div>
                <NavLink><button className="bet-btn">Bet Now</button></NavLink>
            </div>

            <div className="upcoming-matches">
                <div className="upper">
                    <p className="league-name">Indian premier league</p>
                  <p className="linup-status">Lineup <img src="" alt="" /></p>
                </div>
                <div className="middle">
                    <p className="country-flag-code">
                      <img className="country-flag" src={flagimg} alt="" /> 
                      <h5 className="country-code">IND</h5>
                      </p>
                    <div className="time">
                        <div className="remaining-time">2h 51m</div>
                        <div className="actual-time">09:00 PM</div>
                    </div>
                    <p className="country-flag-code">
                      <h5 className="country-code">ENG</h5>
                      <img className="country-flag" src={flagimg2} alt="" /> 
                      </p>
                </div>

                <div className="lower">
                    <p className="price-pool">Mega Rs 27 Crores +</p>
                    <p className="bell-icon">bell icon</p>
                </div>
                <button className="bet-btn">Bet Now</button>
            </div>
            
            <div className="upcoming-matches">
                <div className="upper">
                    <p className="league-name">Indian premier league</p>
                  <p className="linup-status">Lineup <img src="" alt="" /></p>
                </div>
                <div className="middle">
                    <p className="country-flag-code">
                      <img className="country-flag" src={flagimg} alt="" /> 
                      <h5 className="country-code">IND</h5>
                      </p>
                    <div className="time">
                        <div className="remaining-time">2h 51m</div>
                        <div className="actual-time">09:00 PM</div>
                    </div>
                    <p className="country-flag-code">
                      <h5 className="country-code">ENG</h5>
                      <img className="country-flag" src={flagimg2} alt="" /> 
                      </p>
                </div>

                <div className="lower">
                    <p className="price-pool">Mega Rs 27 Crores +</p>
                    <p className="bell-icon">bell icon</p>
                </div>
                <button className="bet-btn">Bet Now</button>
            </div>
            
            <div className="upcoming-matches">
                <div className="upper">
                    <p className="league-name">Indian premier league</p>
                  <p className="linup-status">Lineup <img src="" alt="" /></p>
                </div>
                <div className="middle">
                    <p className="country-flag-code">
                      <img className="country-flag" src={flagimg} alt="" /> 
                      <h5 className="country-code">IND</h5>
                      </p>
                    <div className="time">
                        <div className="remaining-time">2h 51m</div>
                        <div className="actual-time">09:00 PM</div>
                    </div>
                    <p className="country-flag-code">
                      <h5 className="country-code">ENG</h5>
                      <img className="country-flag" src={flagimg2} alt="" /> 
                      </p>
                </div>

                <div className="lower">
                    <p className="price-pool">Mega Rs 27 Crores +</p>
                    <p className="bell-icon">bell icon</p>
                </div>
                <button className="bet-btn">Bet Now</button>
            </div>
            
            <div className="upcoming-matches">
                <div className="upper">
                    <p className="league-name">Indian premier league</p>
                  <p className="linup-status">Lineup <img src="" alt="" /></p>
                </div>
                <div className="middle">
                    <p className="country-flag-code">
                      <img className="country-flag" src={flagimg} alt="" /> 
                      <h5 className="country-code">IND</h5>
                      </p>
                    <div className="time">
                        <div className="remaining-time">2h 51m</div>
                        <div className="actual-time">09:00 PM</div>
                    </div>
                    <p className="country-flag-code">
                      <h5 className="country-code">ENG</h5>
                      <img className="country-flag" src={flagimg2} alt="" /> 
                      </p>
                </div>

                <div className="lower">
                    <p className="price-pool">Mega Rs 27 Crores +</p>
                    <p className="bell-icon">bell icon</p>
                </div>
                <button className="bet-btn">Bet Now</button>
            </div>
            
        </div>
        {/* <div className="img-container">
          
        </div> */}




        
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Join the Community!</h2>
        <button className="cta-button">Get Started</button>
      </section>
    </main>
    )
}
 export default Main;