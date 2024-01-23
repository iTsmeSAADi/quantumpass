import React, { useState } from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const ForensicAnalysis = () => {
  const [file, setFile] = useState(false);
  const [arr, setArr] = useState(true);

  const  handleFile=()=>{
    setFile(!file)
    setArr(!arr)
  }
  return (
    <div className="px-6">
      <div className="flex mt-4 py-4 items-center gap-x-3">
        <Link to="/forensics">
          <FiArrowLeft size={26} />
        </Link>
        <h1 className="text-4xl font-semibold">Screening Report</h1>
      </div>
      <div className="flex  justify-between gap-x-4">
        <div className="w-1/2 h-1/2 px-4 py-6 border shadow-lg rounded-lg">
          <h2 className="text-lg py-2 font-bold">Report Summary</h2>
          <div className="flex items-center justify-between py-3">
            <h1 className="text-base font-bold">File 1</h1>
            <p>Processing</p>
          </div>
          <hr />
        </div>
        <div className="w-1/2 px-4 py-6 border shadow-lg rounded-lg">
          <h2 className="text-lg py-2 font-bold">Report Summary</h2>
          <div className="flex items-center justify-between py-3">
            <h1 className="text-base font-bold w-1/2">Forensic Analysis Id</h1>
            <p className="w-1/2">fbedeffe-e69c-497c-ac1e-a6f28ff83849</p>
          </div>
          <hr />
          <div className="flex items-center justify-between py-3">
            <h1 className="text-base font-bold w-1/2">Screening Token</h1>
            <p className="w-1/2">fbedeffe-e69c-497c-ac1e-a6f28ff83849</p>
          </div>
          <hr />
          <div className="flex items-center justify-between py-3">
            <h1 className="text-base w-1/2 font-bold ">Tag</h1>
            <p className="w-1/2">SBLC</p>
          </div>
        </div>
      </div>
      <div className="w- px-4 py-6 mt-4 border shadow-sm rounded-lg">
        <div onClick={handleFile} className="font-semibold flex  cursor-pointer items-center gap-x-2">
         {
            arr===true ? <BsChevronDown size={18} className="" /> :  <BsChevronRight size={18} className="" />
         }
          <h1>file One Processing</h1>
        </div>
        {
            file && <>
            dsdsd

            </>
        }
      </div>
    </div>
  );
};

export default ForensicAnalysis;
