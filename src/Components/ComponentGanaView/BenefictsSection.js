import React from "react";
import './BenefictsSection.css';
import dataBenefits from '../../dataBenefits.json'; 


const BenefictsSection = () => {


    let arrBenefit = [];
    const totalBenefit = 3;

    for (let index = 0; index < totalBenefit; index++) {
        arrBenefit.push(Object.values(dataBenefits).filter( benefit => benefit.level === `${index + 1}`));
    }

    console.log("arrBenefit", arrBenefit);

    return (

        <div className='benefict-container'>

            <h1>Beneficios</h1>
        

            { arrBenefit.map( ( benefit, index ) => (

                <article 
                    key={index} 
                    className={`level level-${index + 1}`}
                >
                    <h3>Nivel - {index + 1}</h3>
                    
                    {benefit.map((item, index) => (
                        <div key={index}>
                            {item.companyName}
                            <span><img src = {item.imagUrl} alt=""/></span>
                            <a href="#"><img src={item.logo} alt=""/></a>
                            <div>{item.discount}</div>
                        </div>
                    ))}
                
                </article>

            )) }  
            <div className="demo">
  <form className="form-search">
    <div className="input">
      <input className="form-control form-text" placeholder="Tus Beneficios"  />
    </div>
  </form>
</div>
      </div>
     
    );
};

export default BenefictsSection;