import React, { useState } from "react";
import './ProgressBar.css';


const ProgressBar = () => {
    const [progress, setProgress] = useState(25);

    return (
        <div className='progress-container'>
            <div className="barProgress">
                <h1> Hola Hugo</h1>
                <h3>Llevas 32 de 50 puntos ¡Genial!</h3>
                <div>
                    <div className="progress">
                        <div className="progress-bar0 progress-bar-striped progress-bar-animated" style={{ width: progress + '%' }} role="progressbar" aria-valuenow="1" aria-valuemin="2" aria-valuemax="100">1</div>
                        2
                    </div>

                </div>
                <button onClick={() => setProgress(progress + 10)}>Ruleta</button>
                <div className="avance">
                    <h4>Faltan 18 puntos</h4>                    
                </div>
            </div>
            <br></br>
        </div>


    );
};
export default ProgressBar;