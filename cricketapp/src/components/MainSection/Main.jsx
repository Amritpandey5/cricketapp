import React from "react";
import './Main.css';

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
                {/* <img src="" alt="flags" /> */}
                <p>flag img here</p>
                <h5>IND</h5>
                <div className="time">
                    <div className="remaining-time">2h 51m</div>
                    <div className="actual-time">09:00 PM</div>
                </div>
                {/* <img src="" alt="" /> */}
                <p>flags img here</p>
                <h5>ENG</h5>
            </div>

            <div className="lower">
                <p></p>
                <p></p>
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