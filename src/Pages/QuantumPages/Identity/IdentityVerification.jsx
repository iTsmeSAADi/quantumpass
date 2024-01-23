import React from 'react'

import img from "../../../Images/logo.jpg";

import { useState } from "react";
import Tabs from './Compunents/Tabs';
import IdentityTabs from './Compunents/Tabs';

const IdentityVerification = () => {
    const [show, setshow] = useState(true)
    const [next, setNext] = useState(false)
    const hanfeVerification=()=>{
        setshow(false)
        setNext(true)
      }
  return (
    <div> <div className="flex items-center justify-center w-full">
    <div className="w-[70%]">
      <div className="flex flex-col items-center justify-center w-full">
        <img src={img} className="w-24  h-auto" />
        <p className="text-lg font-semibold">QuantumCompass</p>
      </div>
      <IdentityTabs/>
    </div>
  </div></div>
  )
}

export default IdentityVerification