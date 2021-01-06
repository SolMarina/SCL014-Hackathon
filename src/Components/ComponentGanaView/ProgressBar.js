import React, { useState } from "react";
import './ProgressBar.css';


const ProgressBar = () => {
    const [progress, setProgress] = useState(25);

    return (
        <div>
            <div className="barProgress">
                <h1> Hola Hugo</h1>
                <h2>Haz avanzado <span>32 pts</span> al siguiente nivel.</h2>
                <div>
                    <div className="progress">
                        <div className="progress-bar0 progress-bar-striped progress-bar-animated" style={{ width: progress + '%' }} role="progressbar" aria-valuenow="1" aria-valuemin="2" aria-valuemax="100">1</div>
                        2
                    </div>

                </div>
                <button onClick={() => setProgress(progress + 10)}>Ruleta</button>
                <div className="avance">
                    <div>Faltan 18 puntos</div>
                    
                </div>
            </div>
            <br></br>
        </div>


    );
};
export default ProgressBar;