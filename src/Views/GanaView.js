import React, { useState } from "react";
import BenefictsSection from "../Components/ComponentGanaView/BenefictsSection";
import LevelUpOption from "../Components/ComponentGanaView/LevelUpOption";
import ProgressBar from "../Components/ComponentGanaView/ProgressBar";
import Roulette from "../Components/ComponentGanaView/Roulette";
import './GanaView.css';

const GanaView = () => {

    const [progress, setProgress] = useState(25);

    const moveProgressBar = () => {
        setProgress(progress + 10);
    };

    return (
        <div className='ganaViewContainer'>

            <ProgressBar
                progress={progress}
            />

            <LevelUpOption />

            <Roulette
                moveProgressBar={moveProgressBar}
            />

            <BenefictsSection />
        </div>
    );
};
export default GanaView;