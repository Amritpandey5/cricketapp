import React from "react";
import Nav from "../navbar/Nav";
import Main from "../MainSection/main";
import './Series.css';

const Series = () => {
    return (
        <>
            <Nav />
            <div className="series-container">
                <div className="series-card">
                    <div className="series-type">
                        ODIs
                    </div>
                </div>
                <div className="series-card">
                    <div className="series-type">
                        T20s
                    </div>
                </div>
                <div className="series-card">
                    <div className="series-type">
                        Test
                    </div>
                </div>
                <div className="series-card">
                    <div className="series-type">
                        WOMENS
                    </div>
                </div>
            </div>
            <Main />
            
        </>
    );
}

export default Series;