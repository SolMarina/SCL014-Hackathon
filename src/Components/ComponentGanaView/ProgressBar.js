import React, { useState } from "react";
import './ProgressBar.css';
const ProgressBar = () => {
    const [progress, setProgress] = useState(25);

    return (
        <div className='progress-container'>
            <div className="barProgress">
                <h1> Hola Hugo</h1>
                <h4>Llevas 32 de 50 puntos ¡Genial!</h4>
                <div>
                    <div className="progress">
                        <div className="progress-bar0" style={{ width: progress + '%' }} role="progressbar" aria-valuenow="1" aria-valuemin="2" aria-valuemax="100"><div className = "number1">1</div></div>
                       <div className = "number2">2</div>
                    </div>

                </div>
                <div className="avance">
                    <h4>Faltan 18 puntos</h4>                    
                </div>
            </div>
            <br></br>
        </div>


    );
};
export default ProgressBar;