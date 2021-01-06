import React from "react";
import './LevelUpOption.css';
import arrow from '../../Assets/Icons/icon-arrow-right.svg'
import invite from '../../Assets//Icons/icon-invite.svg'
import calendar from '../../Assets//Icons/icon-calendar.svg'

const LevelUpOption = () => {
    return (
        <div>
            <div className="levelUp">
                <h1>Sube de Nivel</h1>
                <h4>Todas las operaciones con MACH suman puntos</h4>

                <div className="referaFriend">
                    <div className="icons">
                        <img className="inviteImg" src={invite}></img>
                    </div>
                    <div className="text">
                        <h1>Refiere a un Amigo</h1>
                        <h4>Gana 5 puntos mach</h4>
                    </div>
                    <div className="icons">
                        <img className="imgArrow" src={arrow}></img>
                    </div>
                </div>
                <br></br>
                <div className="activeNotifications">
                    <div className="icons" >
                        <img className="imgGift" src={calendar}></img>
                    </div>
                    <div className="text" >
                        <h1>Activa Notificaciones</h1>
                        <h4>Gana 5 puntos mach</h4>
                    </div>
                    <div className="icons">
                        <img className="imgIcons" src={arrow}></img>
                    </div>
                </div>
            </div>

        </div>

    );
};
export default LevelUpOption;