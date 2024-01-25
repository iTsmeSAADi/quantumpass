import React, { useState } from "react";
import AppButton from "../AppButton/AppButton";
import AppInput from "../form/AppInput";

const PersonalData = () => {
    const [personalData,setPersonalData]=useState(true)
    const [deleteData,setDeleteData]=useState(false)

    const handleDelete=()=>{
        setPersonalData(false)
        setDeleteData(true)
    }
  return (
    <div>
  {
    personalData &&    <div>
     <h1 className="text-2xl font-semibold">Personal Data</h1>
      <p className="font-semibold py-3">
        Your account contains personal data that you have given
        <br /> us. This page allows you to download or delete that <br /> data.
      </p>
      <p className="font-extrabold py-1">
        Deleting this data will permanently remove your <br /> account, and this
        cannot be recovered.
      </p>
      <div className="space-y-3 py-3">
        <AppButton btnText={"Download"} />
        <AppButton onClick={handleDelete} btnText={"Delete"} bgColor="#f01127" />
      </div>
     </div>
  }
  {
    deleteData &&    <div>
     <h1 className="text-2xl font-semibold py-3">Delete Personal Data</h1>
      <p className="font-semibold py-5 text-gray-400 bg-red-200 rounded-lg px-4   
       ">
  Deleting this data permanently remove your account, and this cannot be recoverd.
      </p>
     <form className="py-3">
<AppInput label='Password'/>
        {/* <input type="password" className="w-full rounded-lg py-2 border"></input> */}
     </form>
      <div className="space-y-3 py-3">
        <AppButton onClick={handleDelete} btnText={"Delete data and close my account"} bgColor="#f01127" />
      </div>
     </div>
  }

    </div>
  );
};

export default PersonalData;
