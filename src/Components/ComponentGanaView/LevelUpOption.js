import React from "react";
import './LevelUpOption.css';
import arrow from '../../Assets/Icons/icon-arrow-right.svg'
import invite from '../../Assets//Icons/icon-invite.svg'
import calendar from '../../Assets//Icons/icon-calendar.svg'
import refresh from '../../Assets//Icons/icon-refresh.svg'
const LevelUpOption = () => {
    return (
        <div>
            <div className="levelUp">
                <div className="todayRecomend" >
                    <div>
                        <h1>Sube de Nivel</h1>
                        <h4>Hoy te recomendamos:</h4>
                    </div>
                    <div className="icons">
                        <img className="refreshImg" src={refresh}></img>
                    </div>
                </div>

                <div className="referaFriend">
                    <div className="icons">
                        <img className="inviteImg" src={invite}></img>
                    </div>
                    <div className="text">
                        <h3>Refiere a un Amigo</h3>
                        <h4>Gana 5 puntos MACH</h4>
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
                        <h3>Activa Notificaciones</h3>
                        <h4>Gana 5 puntos MACH</h4>
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