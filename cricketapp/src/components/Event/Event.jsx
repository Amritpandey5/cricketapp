import React from "react";
import './Event.css';
import Eventimg from '../../Image/Event1.jpg'

const Event = () =>{
    return(
        <>

            <div className="event-container">
            <div className="cards">
                <div className="event-card">
                <div className="serie-name">Indian Premier League</div>
                </div>
                <div className="event-card">
                <div className="serie-name">Big Bash League</div>
                </div>
                <div className="event-card">
                <div className="serie-name">Caribbean Premier League</div>
                </div>
                <div className="event-card">
                <div className="serie-name">Pakistan Super League</div>
                </div>
                
                <div className="event-card">
                <div className="serie-name">Pakistan Super League</div>
                </div>
                <div className="event-card">
                <div className="serie-name">Pakistan Super League</div>
                </div>
                {/* <div className="event-card">
                <div className="serie-name">Pakistan Super League</div>
                </div> */}
                {/* <div className="event-card">
                <div className="serie-name">Pakistan Super League</div>
                </div>

                <div className="event-card">
                <div className="serie-name">The Hundred</div>
                </div> */}
            </div>
            </div>

        </>
    )
}
 export default Event;