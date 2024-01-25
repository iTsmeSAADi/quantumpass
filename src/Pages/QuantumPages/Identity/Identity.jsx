import React from "react";
import img from "../../../Images/logo.jpg";
import AppButton from "../../../Components/AppButton/AppButton";
import { useNavigate } from "react-router-dom";

const Identity = () => {
  const navigate=useNavigate()
  const toIdentityVerification=()=>{
    navigate('/identityverification')

  }

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="w-[70%]">
          <div className="flex flex-col items-center justify-center w-full">
            <img src={img} className="w-24  h-auto" />
            <p className="text-lg font-semibold">QuantumCompass</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-xl font-semibold py-8    ">
              You have been invited to verify your Identity in the
              GlobalCompliance platform by Test Company
            </p>
            <AppButton onClick={toIdentityVerification} btnText={"Identity Verification"} />
          </div>
          <div>
            <p className="text-lg font-semibold">Why it is needed ?</p>
            <p className="font-semibold py-7 leading-10">
              You have been invited to verify your Identity in the
              GlobalCompliance platform by Test Company You have been invited to
              verify your Identity in the GlobalCompliance platform by Test
              Company You have been invited to verify your Identity in the
              GlobalCompliance platform by Test Company You have been invited to
              verify your Identity in the GlobalCompliance platform by Test
              Company
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Identity;
