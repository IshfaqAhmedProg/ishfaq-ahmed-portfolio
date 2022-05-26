import React from "react";
import Images from "../../../components/Images";
import '../Workedwith/WorkedWith.scss';
function WorkedWith() {
  return (
    <div className="workedwith-section">
      <div className="workedwith-title">
        <h1>Worked<span>With</span></h1>
      </div>
      <div className="workedwith-list">
        <div className="workedwith-list-element">
            <img src={Images.sheraspacebw} alt="sheraspace logo" className="companylogo-bw" />
            <img src={Images.sheraspace} alt="sheraspace logo" className="companylogo" />
        </div>
        <div className="workedwith-list-element">
            <img src={Images.pearsbw} alt="Pears BD logo" className="companylogo-bw" />
            <img src={Images.pears} alt="Pears BD logo" className="companylogo" />
        </div>
        <div className="workedwith-list-element">
            <img src={Images.yyvbw} alt="YY ventures logo" className="companylogo-bw" />
            <img src={Images.yyv} alt="YY ventures logo" className="companylogo" />
        </div>
      </div>
    </div>
  );
}

export default WorkedWith;
