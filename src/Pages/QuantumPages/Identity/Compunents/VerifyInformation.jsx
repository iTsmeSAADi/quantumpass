import React from "react";
import img from '../../../../Images/pass.png'

const VerifyInformation = () => {
  return (
    <div className="w-[80%] m-auto">
      <h1 className="text-2xl font-bold -mt-14 py-4">
        Confirm your provided information{" "}
      </h1>
      <div className="flex justify-between items-center">
        <div className="w-1/2 text-clip flex flex-col justify-center">
            <p className="py-1  font-semibold">
            Passport 
            </p>
            <div>
                <img src={img} className="rounded-tr-lg rounded-br-lg"/>
            </div>
        </div>
        <div className="w-1/2 text-clip flex flex-col justify-center">
            <p className="py-1 font-semibold">
            Address information 
            </p>
            <div>
                <img src={img} className="rounded-tr-lg rounded-br-lg"/>
            </div>
        </div>

      </div>
      <form className="flex items-center py-4">
        <input type="file" className="py-2"></input>
        <label className="text-sm">please make sure the documents are in the focus ans clearly visible</label>
      </form>
    </div>
  );
};

export default VerifyInformation;
