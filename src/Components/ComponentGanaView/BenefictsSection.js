import React, { useState } from "react";
import "./BenefictsSection.css";
import dataBenefits from "../../dataBenefits.json";

const BenefictsSection = () => {
  let arrBenefit = [];
  const totalBenefit = 3;

  for (let index = 0; index < totalBenefit; index++) {
    arrBenefit.push(
      Object.values(dataBenefits).filter(
        (benefit) => benefit.level === `${index + 1}`
      )
    );
  }

  const [beneficts, setBeneficts] = useState(arrBenefit);

  const filterBenefits = (event) => {
    const filterBen = [];
    arrBenefit.forEach((benefict, index) => {
      const filterBenefitLevel = [];
      benefict.forEach((ben, idx) => {
        if (ben.companyName.includes(event.target.value)) {
          filterBenefitLevel.push(benefict[idx]);
        }
      });

      filterBen.push(filterBenefitLevel);
    });
    console.log(filterBen);
    setBeneficts(filterBen);
  };

  return (
    <div className="benefict-container">
      <h1>Tus beneficios</h1>

      <div className="demo">
        <form className="form-search">
          <div className="input">
            <input
              className="form-control form-text"
              placeholder="Tus Beneficios"
              onChange={filterBenefits}
            />
          </div>
        </form>
      </div>

      {beneficts.map((benefit, index) => (
        <div key={index} className={`level level-${index + 1}`}>
          <h3>Nivel - {index + 1}</h3>

          {benefit.map((item, index) => (
            <div className="benefit" key={index}>
              <div className= "benefit-background"
              style={{backgroundImage: "url(" + item.imagUrl + ")",
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'}}>
              
              </div>
              {/* <div className="benefit-logo" >
                <img src={item.logo} alt=""/>
              </div> */}

              {/* <div>{item.companyName}</div>
              
              <div>{item.discount}</div> */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BenefictsSection;
