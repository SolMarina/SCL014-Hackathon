import React from "react";
import './BottomBar.css';
import iconHelp from '../Assets/Icons/icon-help.png';

const BottomBar = () => {
    return (
        <div>
            <ul className="bottomBar">
              
                    <a className="nav-link active" href="#">
                        <img className="helpImg" src={iconHelp}></img>
                    </a>          

            </ul>

        </div>

    );
};
export default BottomBar;