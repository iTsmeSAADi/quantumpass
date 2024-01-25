import React from "react";
import AppInput from "../form/AppInput";
import AppButton from "../AppButton/AppButton";

const Profile = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Profile</h1>
      <form className="space-y-5 mt-5">
        <AppInput label="User Name" placeholder="" />
        <AppInput label="Phone Numer" placeholder="" />
        <AppButton btnText={"Save"} />
      </form>
    </div>
  );
};

export default Profile;
