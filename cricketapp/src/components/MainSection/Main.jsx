import React from "react";
import './Main.css';
import flagimg from '../../Image/flag1.jpg';

const Main = () => {
    return(
        <main className="main-container">
      {/* Hero Section */}
      {/* <section className="hero-section">
        <h1>Welcome to Cricket World!</h1>
        <p>Get the latest updates, scores, and tournaments from around the globe.</p>
        <button className="explore-button">Explore Now</button>
      </section> */}

      {/* Info cards Section */}
      <section className="cards-section">
        <div className="main-card">
          <h2>Live Scores</h2>
          <p>Stay up-to-date with real-time match scores.</p>
        </div>
        
        <div className="main-card">
          <h2>Upcomming Matches</h2>
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

      <section className="upcoming-matches-container">
        <div className="upcoming-matches">
            <div className="upper">
                <p className="league-name">Indian premier league</p>
               <p className="linup-status">Lineup <img src="" alt="" /></p>
            </div>
            <div className="middle">
                <p className="country-flag-code">
                  <img className="country-flag" src={"flagimg"} alt="" /> 
                  <h5 className="country-code">IND</h5>
                  </p>
                <div className="time">
                    <div className="remaining-time">2h 51m</div>
                    <div className="actual-time">09:00 PM</div>
                </div>
                <p className="country-flag-code">
                  <h5 className="country-code">ENG</h5>
                  <img className="country-flag" src={"flagimg"} alt="" /> 
                  </p>
            </div>

            <div className="lower">
                <p className="price-pool">Mega Rs 27 Crores +</p>
                <p className="bell-icon">bell icon</p>
            </div>
        </div>

        <div className="upcoming-matches">
            <div className="upper">
                <p className="league-name">Indian premier league</p>
               <p className="linup-status">Lineup <img src="" alt="" /></p>
            </div>
            <div className="middle">
                <p className="country-flag-code">
                  <img className="country-flag" src={"flagimg"} alt="" /> 
                  <h5 className="country-code">IND</h5>
                  </p>
                <div className="time">
                    <div className="remaining-time">2h 51m</div>
                    <div className="actual-time">09:00 PM</div>
                </div>
                <p className="country-flag-code">
                  <h5 className="country-code">ENG</h5>
                  <img className="country-flag" src={"flagimg"} alt="" /> 
                  </p>
            </div>

            <div className="lower">
                <p className="price-pool">Mega Rs 27 Crores +</p>
                <p className="bell-icon">bell icon</p>
            </div>
        </div>

        <div className="upcoming-matches">
            <div className="upper">
                <p className="league-name">Indian premier league</p>
               <p className="linup-status">Lineup <img src="" alt="" /></p>
            </div>
            <div className="middle">
                <p className="country-flag-code">
                  <img className="country-flag" src={"flagimg"} alt="" /> 
                  <h5 className="country-code">IND</h5>
                  </p>
                <div className="time">
                    <div className="remaining-time">2h 51m</div>
                    <div className="actual-time">09:00 PM</div>
                </div>
                <p className="country-flag-code">
                  <h5 className="country-code">ENG</h5>
                  <img className="country-flag" src={"flagimg"} alt="" /> 
                  </p>
            </div>

            <div className="lower">
                <p className="price-pool">Mega Rs 27 Crores +</p>
                <p className="bell-icon">bell icon</p>
            </div>
        </div>
        
        <div className="upcoming-matches">
            <div className="upper">
                <p className="league-name">Indian premier league</p>
               <p className="linup-status">Lineup <img src="" alt="" /></p>
            </div>
            <div className="middle">
                <p className="country-flag-code">
                  <img className="country-flag" src={"flagimg"} alt="" /> 
                  <h5 className="country-code">IND</h5>
                  </p>
                <div className="time">
                    <div className="remaining-time">2h 51m</div>
                    <div className="actual-time">09:00 PM</div>
                </div>
                <p className="country-flag-code">
                  <h5 className="country-code">ENG</h5>
                  <img className="country-flag" src={"flagimg"} alt="" /> 
                  </p>
            </div>

            <div className="lower">
                <p className="price-pool">Mega Rs 27 Crores +</p>
                <p className="bell-icon">bell icon</p>
            </div>
        </div>
        
        <div className="upcoming-matches">
            <div className="upper">
                <p className="league-name">Indian premier league</p>
               <p className="linup-status">Lineup <img src="" alt="" /></p>
            </div>
            <div className="middle">
                <p className="country-flag-code">
                  <img className="country-flag" src={"flagimg"} alt="" /> 
                  <h5 className="country-code">IND</h5>
                  </p>
                <div className="time">
                    <div className="remaining-time">2h 51m</div>
                    <div className="actual-time">09:00 PM</div>
                </div>
                <p className="country-flag-code">
                  <h5 className="country-code">ENG</h5>
                  <img className="country-flag" src={"flagimg"} alt="" /> 
                  </p>
            </div>

            <div className="lower">
                <p className="price-pool">Mega Rs 27 Crores +</p>
                <p className="bell-icon">bell icon</p>
            </div>
        </div>




        
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