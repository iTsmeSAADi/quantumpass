import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import AppButton from "../../../Components/AppButton/AppButton";
import { MdInsertComment, MdOutlineEditNote } from "react-icons/md";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

const ForensicAnalysisToken = () => {
  const [showDetail, setShowDetail] = useState(true);

  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };
  const [activeSection, setActiveSection] = useState(null);
  const [active, setActive] = useState(null);


  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const handleActiveClick = (section) => {
    setActive(section);
  };

  return (
    <div className="px-6">
      <div className="flex mt-4 py-4 items-center gap-x-3">
        <Link to="/forensics">
          <FiArrowLeft size={26} />
        </Link>
        <h1 className="text-4xl font-semibold">Forensic Analysis</h1>
      </div>
      <div className="w- px-4 py-6 mt-4 flex justify-between gap-x-4 border shadow-sm rounded-lg">
        <div className="w-1/4">
          <AppButton btnText={"Send To Client"} btnWidth="100%" />
        </div>
        <div className="w-1/4 font-semibold">
          <p className="font-bold">Status</p>
          <p className="mt-2">Tag</p>
          <p className="py-1">SBLC</p>
          <p className="py-1">Company</p>
          <p className="py-1">Swiss AMF AG</p>
        </div>
        <div className="w-1/4">
          <h2 className="font-bold">Screening</h2>
          <Link
            to="/forensicanalysis"
            className="text-blue-800 gap-x-2 flex items-center py-2"
          >
            <MdOutlineEditNote size={22} />
            fbedeffe-e69c-497c-ac1e-a6f
          </Link>
        </div>
        <div className="w-1/4">
          <h2 className="font-bold">External Commond</h2>
        </div>
      </div>
      <div className="w- px-4 py-6 mt-4  border shadow-sm rounded-lg">
        <div onClick={handleShowDetail} className="flex cursor-pointer items-center gap-x-2">
          {showDetail === true ? (
            <BsChevronDown size={20} />
          ) : (
            <BsChevronRight size={20} />
          )}
          <h3 className="font-semibold ">Basic | Completion: 0%</h3>
        </div>
        {showDetail && (
          <div className="flex py-4 justify-between">
            <div className="w-[10%] ">
              <h1 className="font-bold text-lg">Field Name</h1>
              <p className="mt-4">Status</p>
            </div>
            <div className="w-[26.66%]">
              <h1 className="font-bold text-lg">Initial Value</h1>
            </div>{" "}
            <div className="w-[26.66%]  ">
              <h1 className="font-bold text-lg">Extracted Value</h1>
              <select className="outline-none border w-[70%] rounded-md py-1 mt-4">
                <option>Company</option>
                <option>Company</option>
                <option>Company</option>
                <option>Company</option>
              </select>
              <input type="file" className="mt-28"/>
            </div>
            <div className="w-[26.66%]  ">
              <h1 className="font-bold text-lg">Status</h1>
              <div className="w-[90%]  mt-4 flex border ">
                <div
                  className={`flex items-center  w-1/4 justify-center py-2 text-sm px-2 ${
                    activeSection === "extracted"
                      ? "bg-green-600 , text-white"
                      : ""
                  }`}
                  onClick={() => handleSectionClick("extracted")}
                >
                  Extracted
                </div>
                <div
                  className={`flex items-center w-1/4 justify-center text-sm py-2 px-2 ${
                    activeSection === "meeting"
                      ? "bg-green-600 , text-white"
                      : ""
                  }`}
                  onClick={() => handleSectionClick("meeting")}
                >
                  Meeting
                </div>
                <div
                  className={`flex items-center w-1/4 justify-center text-sm py-2 px-2 ${
                    activeSection === "valid" ? "bg-green-600 , text-white" : ""
                  }`}
                  onClick={() => handleSectionClick("valid")}
                >
                  Valid
                </div>
                <div
                  className={`flex items-center w-1/4 justify-center py-2 px-2 text-sm ${
                    activeSection === "notValid"
                      ? "bg-red-600 , text-white"
                      : ""
                  }`}
                  onClick={() => handleSectionClick("notValid")}
                >
                  Not Valid
                </div>
              </div>
              <div className="w-[90%]  mt-16 flex border ">
                <div
                  className={`flex items-center  w-1/4 justify-center py-4 text-sm px-2 ${
                    active === "extracted"
                      ? "bg-green-600 , text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveClick("extracted")}
                >
                  Extracted
                </div>
                <div
                  className={`flex items-center w-1/4 justify-center text-sm py-2 px-2 ${
                    active === "meeting"
                      ? "bg-green-600 , text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveClick("meeting")}
                >
                  Meeting
                </div>
                <div
                  className={`flex items-center w-1/4 justify-center text-sm py-2 px-2 ${
                    active === "valid" ? "bg-green-600 , text-white" : ""
                  }`}
                  onClick={() => handleActiveClick("valid")}
                >
                  Valid
                </div>
                <div
                  className={`flex items-center w-1/4 justify-center py-2 px-2 text-sm ${
                    active === "notValid"
                      ? "bg-red-600 , text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveClick("notValid")}
                >
                  Not Valid
                </div>
              </div>
            </div>
            <div className="w-[10%] ">
              <h1 className="font-bold text-lg">Comments</h1>
              <div className="rounded-xl  mt-4 flex items-center gap-x-2 px-2 py-1 bg-blue-100 w-16">
                <button type="button" className=" ">
                  <MdInsertComment size={22} />
                </button>
                <div className="rounded-2xl ">0</div>
              </div>
              <div className="rounded-xl  mt-28 flex items-center gap-x-2 px-2 py-1 bg-blue-100 w-16">
                <button type="button" className=" ">
                  <MdInsertComment size={22} />
                </button>
                <div className="rounded-2xl ">0</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForensicAnalysisToken;
