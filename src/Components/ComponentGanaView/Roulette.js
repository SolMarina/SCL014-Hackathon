import React, { useState } from "react";
import './Roulette.css';
import RouletteSection from "./RouletteSection";

const Roulette = (props) => {
    const dayWeekSection = ['L', 'M', 'M', 'J', 'V'];
 
   /*  const updateCheckBox = () => {
        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("text");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    } */

    return (
        <div className='roulette-container'>
            <div className='rouletteBox'>
                <RouletteSection
                    moveProgressBar={props.moveProgressBar}
                />
            </div>

            <div className='calendar-container'>
                <h1>Usa MACH toda la semana</h1>
                <h3>Gana un dscto. sorpresa para el finde</h3>

                <div className='calendarBox'>
                    {dayWeekSection.map((day, index) => {
                        return (
                            <div key={index} className='calendarDayBox'>
                                <label class="container">{day}
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                </label>

                            </div>
                        )
                    })}
                </div>

            </div>


        </div>

    );
};
export default Roulette;