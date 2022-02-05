import React from "react";
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import './InfoBar.css'

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img src={onlineIcon} alt="onlineicon" className="onlineIcon" />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img title="Leave room"  className="offlineicon" src={closeIcon} alt="offliineicon" /></a>
            </div>
        </div>
    )
}

export default InfoBar;