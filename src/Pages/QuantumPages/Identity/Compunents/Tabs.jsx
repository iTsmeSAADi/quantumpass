import React, { useState } from "react";
// import AppButton from "../../../Components/AppButton/AppButton";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';
import { GiCheckMark } from "react-icons/gi";
import { CiWarning } from "react-icons/ci";

import { HiLightBulb } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import { IoMdGlasses } from "react-icons/io";
import { GiBilledCap } from "react-icons/gi";
import AppButton from "../../../../Components/AppButton/AppButton";
import VideoRecorder from "./Video";
import IdentityCheckfirst from "./IdentityCheckfirst";
import IdentityCheckSecond from "./IdentityCheckSecond";
import IdentityCheckThird from "./IdentityCheckThird";
import PersonalDetail from "./PersonalDetail";
import ConfirmPersonalDetail from "./ConfirmPersonalDetail";
import PersonalAddress from "./PersonalAddress";
import VerifyInformation from "./VerifyInformation";
import Success from "./Success";

const IdentityTabs = () => {
  const [show, setshow] = useState(true);
  const [next, setNext] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [activeTab, setactiveTab] = useState("Welcome");
  const [personalDetail, setpersonalDetail] = useState(true);
  const [confirmDetail, setconfirmDetail] = useState(false);
  const [personalAddres, setpersonalAddres] = useState(false);
  const [verifyInformation, setverifyInformation] = useState(false);

  const hanfeVerification = () => {
    setshow(false);
    setNext(true);
  };
  const handleBack = () => {
    setshow(true);
    setNext(false);
    setShowThird(false);
  };

  const hanfeVerificationSecond = () => {
    setshow(false);
    setNext(false)
    setShowThird(true);
  };
  const handleBackThird = () => {
    setshow(false);
    setNext(true);
    setShowThird(false)
  };

  const handlePersonalDetail=()=>{
    setpersonalDetail(false)
    setconfirmDetail(true)
  }
  const handleConfirmDetail=()=>{
    // setpersonalDetail(false)
    setconfirmDetail(false)
    setpersonalAddres(true)
  }
  const handleConfirmDetailBack=()=>{
    setpersonalDetail(false)
    setconfirmDetail(false)
    setpersonalAddres(false)
    setpersonalAddres(true)
    setverifyInformation(false)
  }
  const handleVerifyInfomation=()=>{
    // setpersonalDetail(false)
    setverifyInformation(true)
    setpersonalAddres(false)
  }

  const handlePersonalBack=()=>{
    setpersonalDetail(true)
    setconfirmDetail(false)
  }
  const handlePersonalDetailback=()=>{
    setpersonalDetail(true)
    setconfirmDetail(false)
  }
  const handleStartVerification = () => {
    // Set the state to switch to the next tab
    setactiveTab("Identity Check");
  };
  

  return (
    <div>
      <Tabs>
        <TabList className="flex outline-none justify-between  py-5 px-32">
          <Tab       onClick={() => setactiveTab("Welcome")} className="outline-none">
            <div className=" text-center space-y-2">
              <div className="flex items-center gap-x-2">
                <div className={`w-2 h-2 rounded-full ${activeTab==='Welcome'? "bg-gray-600 text-gray-300":"bg-gray-300"}`}></div>
                <div className={`w-28 h-[2px] ${activeTab==='Welcome'? "bg-gray-600 text-gray-300":"bg-gray-300"} rounded-xl`}></div>
              </div>
            <p className={`font-semibold ${activeTab==='Welcome'? " text-gray-700":"text-gray-300"}`}>Welcome</p>
            </div>
          </Tab>
          <Tab  onClick={() => setactiveTab("Identity Check")} className="outline-none text-center ">
            <div className=" text-center space-y-2">
              <div className="flex items-center gap-x-2">
              <div className={`w-2 h-2 rounded-full ${activeTab==='Identity Check'? "bg-gray-600 text-gray-300":"bg-gray-300"}`}></div>

                <div className={`w-28 h-[2px] ${activeTab==='Identity Check'? "bg-gray-600 text-gray-300":"bg-gray-300"} rounded-xl`}></div>

              </div>
              <p className={`font-semibold ${activeTab==='Identity Check'? " text-gray-700":"text-gray-300"}`}>Identity Check</p>
            </div>
          </Tab>
          <Tab onClick={() => setactiveTab("Personal Detail")} className="outline-none text-center">
            <div className=" text-center space-y-2">
              <div className="flex items-center gap-x-2">
              <div className={`w-2 h-2 rounded-full ${activeTab==='Personal Detail'? "bg-gray-600 text-gray-300":"bg-gray-300"}`}></div>

              <div className={`w-28 h-[2px] ${activeTab==='Personal Detail'? "bg-gray-600 text-gray-300":"bg-gray-300"} rounded-xl`}></div>
              </div>
              <p className={`font-semibold ${activeTab==='Personal Detail'? " text-gray-700":"text-gray-300"}`}>Personal Detail</p>
            </div>
          </Tab>
          <Tab onClick={() => setactiveTab("Success")} className="outline-none text-center">
            <div className=" text-center space-y-2">
              <div className="flex items-center gap-x-2">
              <div className={`w-2 h-2 rounded-full ${activeTab==='Success'? "bg-gray-600 text-gray-300":"bg-gray-300"}`}></div>
                <div className={`w-28 h-[2px] ${activeTab==='Success'? "bg-gray-600 text-gray-300":"bg-gray-300"} rounded-xl`}></div>

              </div>
              <p className={`font-semibold ${activeTab==='Success'? " text-gray-700":"text-gray-300"}`}>Success</p>
            </div>
          </Tab>
        </TabList>
        <TabPanel className="py-6  w-[60%]">
          <>
            <div>
              <h1 className="text-2xl font-bold">
                Welcome to aur User Verification Portal
              </h1>
              <h3 className="text-xl font-semibold py-6">
                Before starting the Verification process please make sure:
              </h3>
              <p className="flex gap-x-2 items-center py-5">
                <GiCheckMark size={20} className="text-green-600 font-bold " />
                <span className="font-semibold">
                  Your device camera is working properly
                </span>
                <CiWarning size={22} />
              </p>
              <p className="flex gap-x-2 items-center py-5">
                <GiCheckMark size={20} className="text-green-600 font-bold " />
                <span className="font-semibold">
                  You have valid Identity document with you
                </span>
              </p>
              <p className="flex gap-x-2 items-center py-5">
                <GiCheckMark size={20} className="text-green-600 font-bold " />
                <span className="font-semibold">
                  You have a valid proof address document
                </span>
                <CiWarning size={22} />
              </p>
            </div>

            <div className="flex items-center justify-end gap-x-24">
              <button
                type="button"
                className="bg-gray-100 text-black font-semibold w-fit px-3 rounded-md py-2 "
              >
                Back
              </button>
              <AppButton onClick={handleStartVerification} btnText={"Start Varification  "} />
            </div>
          </>
        </TabPanel>
        <TabPanel>
          {show && (
            <>
              <IdentityCheckfirst />
            <div className="flex items-center justify-center py-3 gap-x-12">
        
        <AppButton
        onClick={handleBack}
        bgColor="#cfcccc"
        textColor="#000"
        btnText={"Back"}
        />

        <AppButton onClick={hanfeVerification} btnText={"Next Step"} />
    </div>
            </>
          )}

          {next && (
            <>
              <IdentityCheckSecond />
              <div className="flex items-center justify-center py-3 gap-x-12">
          
          <AppButton
            onClick={handleBack}
            bgColor="#cfcccc"
            textColor="#000"
            btnText={"Back"}
          />

          <AppButton onClick={hanfeVerificationSecond} btnText={"Next Step"} />
        </div>

            
            </>
          )}

          {showThird && (
            <>
              <IdentityCheckThird />
              <div className="flex items-center justify-center py-3 gap-x-12">
          
          <AppButton
            onClick={handleBackThird}
            bgColor="#cfcccc"
            textColor="#000"
            btnText={"Back"}
          />
          <AppButton
            onClick={handleBackThird}
            // bgColor="#cfcccc"
            // textColor="#000"
            btnText={"Next Step"}
          />


        </div>

            
            </>
          )}

          

          {/* <div className="flex items-center justify-center py-3 gap-x-12">
          
            <AppButton
              onClick={handleBack}
              bgColor="#cfcccc"
              textColor="#000"
              btnText={"Back"}
            />

            <AppButton onClick={hanfeVerification} btnText={"Next Step"} />
          </div> */}
        </TabPanel>
        <TabPanel>
       {
        personalDetail && 
       <>
       <PersonalDetail/>
        <div className="flex items-center w-[80%] gap-x-12 py-3 m-auto">
        <AppButton btnText={"back"} onClick={handlePersonalDetailback}   textColor="#000" bgColor='#cfcccc'/>
        <AppButton  onClick={handlePersonalDetail} btnText={"Next Step"} btnWidth="600"   />
        </div>
       </>
       }
       {
        confirmDetail && 
       <>
       <ConfirmPersonalDetail/>
        <div className="flex items-center w-[80%] gap-x-12 py-5 m-auto">
        <AppButton btnText={"back"}  onClick={handlePersonalBack}    textColor="#000" bgColor='#cfcccc'/>
        <AppButton onClick={handleConfirmDetail} btnText={"Next Step"} btnWidth="600"   />
        </div>
       </>
       }
       {
        personalAddres && 
       <>
       <PersonalAddress/>
        <div className="flex items-center w-[80%] gap-x-12 py-5 m-auto">
        <AppButton onClick={handleConfirmDetailBack} btnText={"back"}   textColor="#000" bgColor='#cfcccc'/>
        <AppButton onClick={handleVerifyInfomation} btnText={"Next Step"} btnWidth="600"   />
        </div>
       </>
       }
       {
        verifyInformation && 
       <>
       <VerifyInformation/>
        <div className="flex items-center w-[80%] gap-x-12 py-5 m-auto">
        <AppButton onClick={handleConfirmDetailBack} btnText={"back"}   textColor="#000" bgColor='#cfcccc'/>
        <AppButton  btnText={"Submit for Final Approval"} btnWidth="600"   />
        </div>
       </>
       }

        </TabPanel>{" "}
        <TabPanel>
         <Success/>
        <div className=" w-full">
        <AppButton btnText="Done" btnWidth="50%" />
        </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default IdentityTabs;
