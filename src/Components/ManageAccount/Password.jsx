import React from "react";
import AppInput from "../form/AppInput";
import AppButton from "../AppButton/AppButton";

const Password = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Change Password</h1>
      <form className="space-y-5 mt-5">
        {/* <label></label>
            <input type='text' className=''></input> */}
        <AppInput label="Current Password" placeholder="" />
        <AppInput label="New Password" placeholder="" />
        <AppInput label="Confirm New Password" placeholder="" />

        <AppButton btnText={'Save'} />
      </form>
    </div>
  );
};

export default Password;
