import React from "react";
import BenefictsSection from "../Components/ComponentGanaView/BenefictsSection";
import LevelUpOption from "../Components/ComponentGanaView/LevelUpOption";
import ProgressBar from "../Components/ComponentGanaView/ProgressBar";
import Roulette from "../Components/ComponentGanaView/Roulette";
import './GanaView.css';

const GanaView = () => {
    return (
        <div className='ganaViewContainer'>
            <ProgressBar />
            <LevelUpOption />
            <Roulette />
            <BenefictsSection />
        </div>
    );
};
export default GanaView;