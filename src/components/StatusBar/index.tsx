import React from "react";
import { StatusBarContainer, Time, NetWorkwrapper } from "./style";
import MobileSignal from "../../assets/FriendListPage/Mobile Signal.svg"
import Wifi from "../../assets/FriendListPage/Wifi.svg";
import Battery from "../../assets/FriendListPage/_StatusBar-battery.svg";

const StatusBar: React.FC = () => {
    return(
    <StatusBarContainer>
        <Time>9:41</Time>
        <NetWorkwrapper>
            <img src={MobileSignal} alt="MobileSignal" />
            <img src={Wifi} alt="Wifi" />
            <img src={Battery} alt="StatusBar" />
        </NetWorkwrapper>
    </StatusBarContainer>
    );
}

export default StatusBar;