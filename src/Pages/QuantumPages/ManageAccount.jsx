import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Profile from "../../Components/ManageAccount/Profile";
import Password from "../../Components/ManageAccount/Password";
import TwoFactor from "../../Components/ManageAccount/TwoFactor";
import PersonalData from "../../Components/ManageAccount/PersonalData";

const ManageAccount = () => {
  const [CurrentTab, setCurrentTab] = useState("Profile");
  useEffect(() => {
    const tokens = localStorage.getItem("token");
    console.log("my tokenssssss", tokens);

  navigate("/company")

  }, []); 
  return (
    <div className="px-12">
      <div className="px-6">
        <h1 className="text-3xl font-semibold pt-7">Manage your account</h1>
        <h1 className="text-xl font-semibold py-5">
          Change your account setting
        </h1>
        <hr />

        {/* sidebar section */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 flex flex-col gap-y-1 p-4">
            {/* Sidebar content goes here */}
            <p
              className={`font-semibold ${
                CurrentTab === "Profile" ? "bg-[#173563] cursor-pointer text-white" : "bg-white"
              }  px-2 rounded-md py-1`}
              onClick={() => setCurrentTab("Profile")}
            >
              Profile
            </p>
            <p
              className={`font-semibold ${
                CurrentTab === "Password" ? "bg-[#173563]  text-white" : "bg-white"
              }  px-2 rounded-md py-1 cursor-pointer`}
              onClick={() => setCurrentTab("Password")}
            >
              Password
            </p>
            <p
              className={`font-semibold ${
                CurrentTab === "Two" ? "bg-[#173563]  text-white" : "bg-white"
              }  px-2 rounded-md py-1 cursor-pointer`}
              onClick={() => setCurrentTab("Two")}
            >
              Two Factor Authentication
            </p>
            <p
              className={`font-semibold ${
                CurrentTab === "Personal" ? "bg-[#173563]  text-white" : "bg-white"
              }  px-2 rounded-md py-1 cursor-pointer`}
              onClick={() => setCurrentTab("Personal")}
            >
              Personal Data
            </p>
          </div>

          <div className="w-3/4 p-4">
            {/* Main content goes here */}
            {CurrentTab === "Profile" ? (
              <Profile />
            ) : CurrentTab === "Password" ? (
              <Password />
            ) : CurrentTab === "Two" ? (
              <TwoFactor />
            ) : CurrentTab === "Personal" ? (
              <PersonalData />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
