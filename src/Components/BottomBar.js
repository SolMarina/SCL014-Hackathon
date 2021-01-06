import React from "react";
import './BottomBar.css';
import iconHelp from '../Assets/Icons/icon-help.png';
import homeIcon from '../Assets/Icons/home-icon.png';
import transferIcon from '../Assets/Icons/transfer-icon.png';
import cardIcon from '../Assets/Icons/cards-icon.png';
import serviceIcon from '../Assets/Icons/service-icon.png';
import ganaIcon from '../Assets/Icons/gana-icon.png';


const BottomBar = () => {
    const IconBottomSection = [
        {
            'icon': homeIcon,
            'nameIcon': 'Inicio'
        },
        {
            'icon': transferIcon,
            'nameIcon': 'Transferir'
        },
        {
            'icon': cardIcon,
            'nameIcon': 'Tarjetas'
        },
        {
            'icon': serviceIcon,
            'nameIcon': 'Servicios'
        },
        {
            'icon': ganaIcon,
            'nameIcon': 'Gana'
        },
    ];

    return (
        <div className="bottomBar">

            {IconBottomSection.map((iconMenu, index) => {
         
                return (
                    <div key={index}className="bottomBar-box" >
                        <a className="bottomIcons-box" href="#">
                            <img className="iconImg" src={iconMenu.icon}></img>{iconMenu.nameIcon}
                        </a>
                    </div>
                )
            })}

        </div>

    );
};
export default BottomBar;