import React from "react";
import "./style.css";
const Steps = ({ step }) => {
  return (
    <div>
      <div className="stepper">
        <ul className="breadcrumb">
          <li className={step === 1 ? "active" : ""}>
            <span>اطلاعات اولیه آزمون</span>
          </li>
          <li className={step === 2 ? "active" : ""}>
            <span>مشخصات درس</span>
          </li>
          <li className={step === 3 ? "active" : ""}>
            <span>ایجاد سوال</span>
          </li>
          <li className={step === 4 ? "active" : ""}>
            <span>شرایط آزمون</span>
          </li>
          <li className={step === 5 ? "active" : ""}>
            <span>خروجی/ارسال</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Steps;
