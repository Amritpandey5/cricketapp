import React from "react";
import { NavLink } from "react-router-dom";
import flagimg from '../../Image/flag1.jpg';
import flagimg2 from '../../Image/flag2.jpg';

const UpcomingMatch = ({ leagueName, lineupStatus, timeRemaining, actualTime, country1, country2, pricePool }) => {
    return (
        <div className="upcoming-matches">
            <div className="upper">
                <p className="league-name">{leagueName}</p>
                <p className="linup-status">Lineup <img src="" alt={lineupStatus} /></p>
            </div>
            <div className="middle">
                <p className="country-flag-code">
                    <img className="country-flag" src={flagimg} alt={`${country1} flag`} />
                    <h5 className="country-code">{country1}</h5>
                </p>
                <div className="time">
                    <div className="remaining-time">{timeRemaining}</div>
                    <div className="actual-time">{actualTime}</div>
                </div>
                <p className="country-flag-code">
                    <h5 className="country-code">{country2}</h5>
                    <img className="country-flag" src={flagimg2} alt={`${country2} flag`} />
                </p>
            </div>
            <div className="lower">
                <p className="price-pool">{pricePool}</p>
                <p className="bell-icon">bell icon</p>
            </div>
            <div className="bet-btn"><NavLink to="#">BET NOW</NavLink></div>
        </div>
    );
};

export default UpcomingMatch;