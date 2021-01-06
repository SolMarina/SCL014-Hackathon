import React, { useState } from "react";
import './Roulette.css';
import RouletteSection from "./RouletteSection";

const Roulette = () => {
    const dayWeekSection = ['L', 'M', 'M', 'J', 'V'];
    // const [dayWeek, setDayWeek] = useState(dayWeekSection);

    const updateCheckBox = () => {
        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("text");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }

    return (
        <div>
            <h2>Usa MACH todos los días</h2>
            <h4>Al final de la semana te enviaremos un premio sorpresa</h4>
            <div className='rouletteBox'>
                <RouletteSection />
            </div>

            <div className='calendarBox'>
                {dayWeekSection.map((day, index) => {
                    return (
                        <div key={index} className='calendarDayBox'>
                            <label for={index}>{day}</label>
                            <input className='checkbox-input' type='checkbox' id={index} onclick={() => updateCheckBox()} />
                        </div>
                    )
                })}
            </div>


        </div>

    );
};
export default Roulette;