import React, {useState} from "react";
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
        setBeneficts(filterBen);
    };

    return (
        <div className="benefict-container">

            <div className="demo">
                <form className="form-search">
                    <div className="input">
                        <input
                            className="form-control form-text"
                            placeholder="Tus Beneficios"
                            onChange={filterBenefits}
                        />
                        <img src="https://res.cloudinary.com/geraldog09/image/upload/v1610000235/search_h2kkhv.svg" alt="" />
                    </div>
                </form>
            </div>

            <div className="levels-container">

              {beneficts.map((benefit, index) => (
                  <div key={index} className={`level level-${index + 1}`}>
                      <h3>Nivel {index + 1} { index === 0 ? <img src="https://res.cloudinary.com/geraldog09/image/upload/v1609998611/blocked_j78gqr.svg" alt="" /> : <img src="https://res.cloudinary.com/geraldog09/image/upload/v1609999239/unblocked_vmfkyo.svg" alt="" />}</h3>
                    
                      <div className="benefits">
                        {benefit.map((item, index) => (
                            <div className="benefit" key={index}>
                                <img className={"benefit-background"} src={item.imagUrl}
                                    alt=""/>
                                <div className="logo-percent">
                                  
                                  <img className={"benefit-logo"} src={item.logo} alt=""/>
                                  <span className={"benefit-company-discount"}>{item.discount}</span>

                                </div>
                            </div>
                        ))}
                      </div>
                  </div>
              ))}

            </div>
        </div>
    );
};

export default BenefictsSection;