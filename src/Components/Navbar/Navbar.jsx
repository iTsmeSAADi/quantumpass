import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppButton from "../AppButton/AppButton";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import logo from "../../Images/changesLogo.png";
import logOut from "../../Images/logOut.png";
import { BsFilterLeft } from "react-icons/bs";
import FadeIn from "react-fade-in/lib/FadeIn";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { FaChevronRight } from "react-icons/fa";
const Navbar = () => {
  const [icon, seticon] = useState(false);

  const navigate = useNavigate();
  const toDashboard = () => {
    navigate("/screening");
  };
  const location = useLocation();
  const isManageAccountPath = location.pathname === "/manageaccount";
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // Manual screen PopOver
  const [anchorEManual, setAnchorEManual] = React.useState(null);

  const handleClickManual = (event) => {
    setAnchorEManual(event.currentTarget);
  };

  const handleCloseManual = () => {
    setAnchorEManual(null);
  };

  const openManual = Boolean(anchorEManual);
  const idManual = openManual ? "simple-popover" : undefined;
  const toLogout = () => {
    navigate("/logout");
  };

  // dynamically change the text of the dashboard dropdown
  const [selectedLink, setSelectedLink] = useState("Dashboard");

  const handleLinkClick = (linkText) => {
    setSelectedLink(linkText);
    handleClose();
    // Your logic for handling the link click goes here
  };

  const [selectedManual, setSelectedManual] = useState("Manual Screening");

  const handleLinkClickManual = (linkTextManual) => {
    setSelectedManual(linkTextManual);
    handleCloseManual();
    // Your logic for handling the link click goes here
  };

  // hide navbar from the longin pages
  // Local storage
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  console.log("NavaBar Data is............", user.role);
  // drawer
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 330 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="lg:hidden "
    >
    
      <div className="flex lg:hidden flex-col h-[100vh]  bg-[#173563] flex-wrap items-center justify-between px-2   lg:px-6">
          {isManageAccountPath ? (
            <>
              <div className=" w-full  flex justify-between items-center">
                <div className="w-44 h-16      rounded-md">
                  <img className="rounded-md" src={logo} />
                </div>
                <div className="flex items-center gap-x-3">
                  <AppButton
                    onClick={toDashboard}
                    btnText={"Go to globale compliance portal"}
                  />
                  <AppButton
                    btnText={"Log out from identity"}
                    bgColor="#f00a1d"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className=" h-16 w-full flex  justify-between items-center text-white text-lg gap-x-4">
                <Link to="/screening" className="w-44  rounded-md">
                  <img className="rounded-md " src={logo} />
                </Link>
             
              </div>
             
                <div className="w-full relative  ">
                  {user.role === "user" ? (
                    <div className="absolute -top-[80vh] w-full space-y-4">
                      <Link
                        to="/screening"
                        className={`  ${
                          location.pathname === "/screening"
                            ? "bg-[#173563]  border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                            : " border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                        } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                      >
                        Screening
                        <FaChevronRight />
                      </Link>

                      <Link
                        onClick={handleClickManual}
                        className={` ${
                          location.pathname === "/dashboard" ||
                          location.pathname === "/emailidentity" ||
                          location.pathname === "/quicknamesearch" ||
                          location.pathname === "/quickdocumentscan" ||
                          location.pathname === "/quickdocumentscan" ||
                          location.pathname === "/documentsforensic"
                            ? "bg-[#173563]  border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                            : " border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                        } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                      >
                        {selectedManual} <FaChevronDown />
                      </Link>
                      <Popover
                        id={idManual}
                        open={openManual}
                        anchorEl={anchorEManual}
                        onClose={handleCloseManual}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <div className="flex text-sm flex-col space-y-4 px-4  py-2">
                          <Link
                            to="/emailidentity"
                            onClick={() =>
                              handleLinkClickManual(
                                "Email Identity Verification"
                              )
                            }
                            className="hover:bg-[#173563] hover:text-white font-semibold py-2 rounded-sm px-2"
                          >
                            Email Identity Verification
                          </Link>
                          <Link
                            to="/quicknamesearch"
                            onClick={() =>
                              handleLinkClickManual("Quick Name Search")
                            }
                            className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                          >
                            Quick Name Search
                          </Link>
                          <Link
                            to="/quickdocumentscan"
                            onClick={() =>
                              handleLinkClickManual("Quick Document Scan")
                            }
                            className="hover:bg-[#173563] hover:text-white py-2 rounded-sm font-semibold px-2"
                          >
                            Quick Document Scan
                          </Link>
                          <Link
                            to="/documentsforensic"
                            onClick={() =>
                              handleLinkClickManual(
                                "Document Forensics Anaylsis"
                              )
                            }
                            className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                          >
                            Document Forensics Anaylsis
                          </Link>
                        </div>
                      </Popover>
                    </div>
                  ) : (
<<<<<<< HEAD
                    <div className="absolute -top-[0vh] w-full space-y-4">
=======
                    <div className="absolute -top-[80vh] w-full space-y-4">
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                      {user.role === "admin" ? (
                        <div className="flex flex-col  items-center justify-center  w-full">
                          <Link
                            to="/screening"
                            className={`  ${
                              location.pathname === "/screening"
                                ? "bg-[#173563]  border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                                : " border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                            } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                          >
                            Screening
                        <FaChevronRight />

                          </Link>

                          <Link
                            onClick={handleClickManual}
                            className={` ${
                              location.pathname === "/dashboard" ||
                              location.pathname === "/emailidentity" ||
                              location.pathname === "/quicknamesearch" ||
                              location.pathname === "/quickdocumentscan" ||
                              location.pathname === "/quickdocumentscan" ||
                              location.pathname === "/documentsforensic"
                                ? "bg-[#173563]  border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                                : " border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                            } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                          >
                            {selectedManual} <FaChevronDown />
                          </Link>
                          <Popover
                            id={idManual}
                            open={openManual}
                            anchorEl={anchorEManual}
                            onClose={handleCloseManual}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                          >
                            <div className="flex text-sm flex-col space-y-4 px-4  py-2">
                              <Link
                                to="/emailidentity"
                                onClick={() =>
                                  handleLinkClickManual(
                                    "Email Identity Verification"
                                  )
                                }
                                className="hover:bg-[#173563] hover:text-white font-semibold py-2 rounded-sm px-2"
                              >
                                Email Identity Verification
                              </Link>
                              <Link
                                to="/quicknamesearch"
                                onClick={() =>
                                  handleLinkClickManual("Quick Name Search")
                                }
                                className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                              >
                                Quick Name Search
                              </Link>
                              <Link
                                to="/quickdocumentscan"
                                onClick={() =>
                                  handleLinkClickManual("Quick Document Scan")
                                }
                                className="hover:bg-[#173563] hover:text-white py-2 rounded-sm font-semibold px-2"
                              >
                                Quick Document Scan
                              </Link>
                              <Link
                                to="/documentsforensic"
                                onClick={() =>
                                  handleLinkClickManual(
                                    "Document Forensics Anaylsis"
                                  )
                                }
                                className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                              >
                                Document Forensics Anaylsis{" "}
                              </Link>
                            </div>
                          </Popover>

                          <Link
                            to="/usermanagement"
                            className={` ${
                              location.pathname === "/usermanagement"
                                ? "bg-[#173563]  border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                                : " border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                            } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                          >
                            User Management
                            <FaChevronRight />
                          </Link>
                        </div>
                      ) : (
                         <div className=" absolute -top-[80vh] w-full space-y-4">
                         <Link
                            to="/screening"
                            className={`  ${
                              location.pathname === "/screening"
                                ? "bg-[#173563]  border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                                : " border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                            } border-2 border-[#173563] text-white text-lg hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px]  font-semibold gap-x-1 flex items-center`}
                          >
                            <span>Screening</span>
                        <FaChevronRight />

                          </Link>

                          <Link
                            onClick={handleClickManual}
                            className={` ${
                              location.pathname === "/dashboard" ||
                              location.pathname === "/emailidentity" ||
                              location.pathname === "/quicknamesearch" ||
                              location.pathname === "/quickdocumentscan" ||
                              location.pathname === "/quickdocumentscan" ||
                              location.pathname === "/documentsforensic"
                                ? "bg-[#173563]   text-white border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                                : "border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                            } border-2 border-[#173563]  text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px]  font-semibold gap-x-1 flex items-center`}
                          >
                            {selectedManual} <FaChevronDown />
                          </Link>
                          <Popover
                            id={idManual}
                            open={openManual}
                            anchorEl={anchorEManual}
                            onClose={handleCloseManual}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                          >
                            <div className="flex  text-sm flex-col space-y-4 px-4  py-2">
                              <Link
                                to="/emailidentity"
                                onClick={() =>
                                  handleLinkClickManual(
                                    "Email Identity Verification"
                                  )
                                }
                                className="hover:bg-[#173563] hover:text-white font-semibold py-2 rounded-sm px-2"
                              >
                                Email Identity Verification
                              </Link>
                              <Link
                                to="/quicknamesearch"
                                onClick={() =>
                                  handleLinkClickManual("Quick Name Search")
                                }
                                className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                              >
                                Quick Name Search
                              </Link>
                              <Link
                                to="/quickdocumentscan"
                                onClick={() =>
                                  handleLinkClickManual("Quick Document Scan")
                                }
                                className="hover:bg-[#173563] hover:text-white py-2 rounded-sm font-semibold px-2"
                              >
                                Quick Document Scan
                              </Link>
                              <Link
                                to="/documentsforensic"
                                onClick={() =>
                                  handleLinkClickManual(
                                    "Document Forensics Anaylsis"
                                  )
                                }
                                className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                              >
                                Document Forensics Anaylsis{" "}
                              </Link>
                            </div>
                          </Popover>

                          <Link
                            to="/company"
                            className={`  ${
                              location.pathname === "/company"
                                ? "border  text-white  border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                                : "border border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                            } border-2 border-[#173563]  text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px]  font-semibold gap-x-1 flex items-center`}

                            // className="border-2 border-[#173563] rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center"
                          >
                            Company
                            <FaChevronRight />
                          </Link>
                          <Link
                            to="/usermanagement"
                            className={` ${
                              location.pathname === "/usermanagement"
                                ? "border  text-white  border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                                : "border  text-white  border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                            } border-2 border-[#173563]  text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px]  font-semibold gap-x-1 flex items-center`}
                          >
                            User Management
                            <FaChevronRight />
                          </Link>
                         </div>
                      )}
                    </div>
                  )}

                  
                  <div className="w-full relative flex items-center justify-center py-2">
                    <button
                      onClick={toLogout}
                      type="button"
                      className="border bottom-0 text-white  border-b-2 flex items-center justify-between border-white border-t-0 border-r-0 border-l-0 rounded-none w-full"
                    >
                      Log out
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
             
            </>
          )}
        </div>
    </Box>
  );
  return (
    <>
      <FadeIn delay={500} transitionDuration={1000}>
        <div className="hidden lg:flex bg-[#173563] flex-wrap items-center justify-between    lg:px-6">
          {isManageAccountPath ? (
            <>
              <div className=" w-full flex justify-between items-center">
                <div className="w-44 h-16      rounded-md">
                  <img className="rounded-md" src={logo} />
                </div>
                <div className="flex items-center gap-x-3">
                  <AppButton
                    onClick={toDashboard}
                    btnText={"Go to globale compliance portal"}
                  />
                  <AppButton
                    btnText={"Log out from identity"}
                    bgColor="#f00a1d"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-[30%]  h-16 flex   items-center gap-x-4">
                <Link to="/screening" className="w-44  rounded-md">
                  <img className="rounded-md " src={logo} />
                </Link>
              </div>
              <div className="w-[70%] flex    justify-around">
                {user.role === "user" ? (
                  <div className="flex  gap-x-8 ml-[40%]   ">
                    <Link
                      to="/screening"
                      className={`  ${
                        location.pathname === "/screening"
                          ? "border border-white text-white"
                          : "border-[#173563]"
                      } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                    >
                      Screening
                    </Link>

                    <Link
                      onClick={handleClickManual}
                      className={` ${
                        location.pathname === "/dashboard" ||
                        location.pathname === "/emailidentity" ||
                        location.pathname === "/quicknamesearch" ||
                        location.pathname === "/quickdocumentscan" ||
                        location.pathname === "/quickdocumentscan" ||
                        location.pathname === "/documentsforensic"
                          ? "border border-white text-white"
                          : "border-[#173563]"
                      } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                    >
                      {selectedManual} <MdArrowDropDown size={20} />
                    </Link>
                    <Popover
                      id={idManual}
                      open={openManual}
                      anchorEl={anchorEManual}
                      onClose={handleCloseManual}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div className="flex text-sm flex-col space-y-4 px-4  py-2">
                        <Link
                          to="/emailidentity"
                          onClick={() =>
                            handleLinkClickManual("Email Identity Verification")
                          }
                          className="hover:bg-[#173563] hover:text-white font-semibold py-2 rounded-sm px-2"
                        >
                          Email Identity Verification
                        </Link>
                        <Link
                          to="/quicknamesearch"
                          onClick={() =>
                            handleLinkClickManual("Quick Name Search")
                          }
                          className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                        >
                          Quick Name Search
                        </Link>
                        <Link
                          to="/quickdocumentscan"
                          onClick={() =>
                            handleLinkClickManual("Quick Document Scan")
                          }
                          className="hover:bg-[#173563] hover:text-white py-2 rounded-sm font-semibold px-2"
                        >
                          Quick Document Scan
                        </Link>
                        <Link
                          to="/documentsforensic"
                          onClick={() =>
                            handleLinkClickManual("Document Forensics Anaylsis")
                          }
                          className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                        >
                          Document Forensics Anaylsis
                        </Link>
                      </div>
                    </Popover>
                  </div>
                ) : (
                  <div>
                    {user.role === "admin" ? (
                      <div className="flex gap-x-8  xl:ml-[10%]   w-full">
                        <Link
                          to="/screening"
                          className={`  ${
                            location.pathname === "/screening"
                              ? "border border-white text-white"
                              : "border-[#173563]"
                          } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                        >
                          Screening
                        </Link>

                        <Link
                          onClick={handleClickManual}
                          className={` ${
                            location.pathname === "/dashboard" ||
                            location.pathname === "/emailidentity" ||
                            location.pathname === "/quicknamesearch" ||
                            location.pathname === "/quickdocumentscan" ||
                            location.pathname === "/quickdocumentscan" ||
                            location.pathname === "/documentsforensic"
                              ? "border border-white text-white"
                              : "border-[#173563]"
                          } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                        >
                          {selectedManual} <MdArrowDropDown size={20} />
                        </Link>
                        <Popover
                          id={idManual}
                          open={openManual}
                          anchorEl={anchorEManual}
                          onClose={handleCloseManual}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                        >
                          <div className="flex text-sm flex-col space-y-4 px-4  py-2">
                            <Link
                              to="/emailidentity"
                              onClick={() =>
                                handleLinkClickManual(
                                  "Email Identity Verification"
                                )
                              }
                              className="hover:bg-[#173563] hover:text-white font-semibold py-2 rounded-sm px-2"
                            >
                              Email Identity Verification
                            </Link>
                            <Link
                              to="/quicknamesearch"
                              onClick={() =>
                                handleLinkClickManual("Quick Name Search")
                              }
                              className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                            >
                              Quick Name Search
                            </Link>
                            <Link
                              to="/quickdocumentscan"
                              onClick={() =>
                                handleLinkClickManual("Quick Document Scan")
                              }
                              className="hover:bg-[#173563] hover:text-white py-2 rounded-sm font-semibold px-2"
                            >
                              Quick Document Scan
                            </Link>
                            <Link
                              to="/documentsforensic"
                              onClick={() =>
                                handleLinkClickManual(
                                  "Document Forensics Anaylsis"
                                )
                              }
                              className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                            >
                              Document Forensics Anaylsis{" "}
                            </Link>
                          </div>
                        </Popover>
                        {/* 
              <Link
                to="/company"
                className={`  ${
                  location.pathname === "/company"
                    ? "bg-[#173563] text-white"
                    : "border-[#173563]"
                } border-2 border-[#173563] hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}

                // className="border-2 border-[#173563] rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center"
              >
                Company
              </Link> */}
                        <Link
                          to="/usermanagement"
                          className={` ${
                            location.pathname === "/usermanagement"
                              ? "border border-white text-white"
                              : "border-[#173563]"
                          } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                        >
                          User Management
                        </Link>
                      </div>
                    ) : (
                      <div className=" flex gap-x-6 ml-24 ">
                        <Link
                          to="/screening"
                          className={`  ${
                            location.pathname === "/screening"
                              ? "bg-[#173563]  border border-white"
                              : "border-[#173563]"
                          } border-2 border-[#173563] text-white text-lg hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                        >
                          Screening
                        </Link>

                        <Link
                          onClick={handleClickManual}
                          className={` ${
                            location.pathname === "/dashboard" ||
                            location.pathname === "/emailidentity" ||
                            location.pathname === "/quicknamesearch" ||
                            location.pathname === "/quickdocumentscan" ||
                            location.pathname === "/quickdocumentscan" ||
                            location.pathname === "/documentsforensic"
                              ? "bg-[#173563] border border-white text-white"
                              : "border-[#173563]"
                          } border-2 border-[#173563]  text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                        >
                          {selectedManual} <MdArrowDropDown size={20} />
                        </Link>
                        <Popover
                          id={idManual}
                          open={openManual}
                          anchorEl={anchorEManual}
                          onClose={handleCloseManual}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                        >
                          <div className="flex  text-sm flex-col space-y-4 px-4  py-2">
                            <Link
                              to="/emailidentity"
                              onClick={() =>
                                handleLinkClickManual(
                                  "Email Identity Verification"
                                )
                              }
                              className="hover:bg-[#173563] hover:text-white font-semibold py-2 rounded-sm px-2"
                            >
                              Email Identity Verification
                            </Link>
                            <Link
                              to="/quicknamesearch"
                              onClick={() =>
                                handleLinkClickManual("Quick Name Search")
                              }
                              className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                            >
                              Quick Name Search
                            </Link>
                            <Link
                              to="/quickdocumentscan"
                              onClick={() =>
                                handleLinkClickManual("Quick Document Scan")
                              }
                              className="hover:bg-[#173563] hover:text-white py-2 rounded-sm font-semibold px-2"
                            >
                              Quick Document Scan
                            </Link>
                            <Link
                              to="/documentsforensic"
                              onClick={() =>
                                handleLinkClickManual(
                                  "Document Forensics Anaylsis"
                                )
                              }
                              className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                            >
                              Document Forensics Anaylsis{" "}
                            </Link>
                          </div>
                        </Popover>

                        <Link
                          to="/company"
                          className={`  ${
                            location.pathname === "/company"
                              ? "border border-white text-white"
                              : "border-[#173563]"
                          } border-2 border-[#173563]  text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}

                          // className="border-2 border-[#173563] rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center"
                        >
                          Company
                        </Link>
                        <Link
                          to="/usermanagement"
                          className={` ${
                            location.pathname === "/usermanagement"
                              ? "border border-white text-white"
                              : "border-[#173563]"
                          } border-2 border-[#173563]  text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                        >
                          User Management
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {/* </div> */}
                <button
                  onClick={toLogout}
                  type="button"
                  className="bg-red-500 hover:bg-red-700 px-6 w-32 py-0 rounded-lg text-white"
                >
                  Log out
                </button>
              </div>
            </>
          )}
        </div>
        {/* smal screen */}
        <div className="flex hidden flex-col  bg-[#173563] flex-wrap items-center justify-between px-2   lg:px-6">
          {isManageAccountPath ? (
            <>
              <div className=" w-full  flex justify-between items-center">
                <div className="w-44 h-16      rounded-md">
                  <img className="rounded-md" src={logo} />
                </div>
                <div className="flex items-center gap-x-3">
                  <AppButton
                    onClick={toDashboard}
                    btnText={"Go to globale compliance portal"}
                  />
                  <AppButton
                    btnText={"Log out from identity"}
                    bgColor="#f00a1d"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className=" h-16 w-full flex  justify-between items-center text-white text-lg gap-x-4">
                <Link to="/screening" className="w-44  rounded-md">
                  <img className="rounded-md " src={logo} />
                </Link>
                <div className="menu__icon">
                  <span
                    className="navbar__icon text-white"
                    onClick={() => seticon(!icon)}
                  >
                    {!icon ? <FaBars /> : <FaTimes />}
                  </span>
                </div>
              </div>
              {icon && (
                <div className="w-[70%] flex flex-col   justify-around">
                  {user.role === "user" ? (
                    <div className="flex flex-col items-center justify-center  ">
                      <Link
                        to="/screening"
                        className={`  ${
                          location.pathname === "/screening"
                            ? "border border-white text-white"
                            : "border-[#173563]"
                        } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                      >
                        Screening
                      </Link>

                      <Link
                        onClick={handleClickManual}
                        className={` ${
                          location.pathname === "/dashboard" ||
                          location.pathname === "/emailidentity" ||
                          location.pathname === "/quicknamesearch" ||
                          location.pathname === "/quickdocumentscan" ||
                          location.pathname === "/quickdocumentscan" ||
                          location.pathname === "/documentsforensic"
                            ? "border border-white text-white"
                            : "border-[#173563]"
                        } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                      >
                        {selectedManual} <MdArrowDropDown size={20} />
                      </Link>
                      <Popover
                        id={idManual}
                        open={openManual}
                        anchorEl={anchorEManual}
                        onClose={handleCloseManual}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <div className="flex text-sm flex-col space-y-4 px-4  py-2">
                          <Link
                            to="/emailidentity"
                            onClick={() =>
                              handleLinkClickManual(
                                "Email Identity Verification"
                              )
                            }
                            className="hover:bg-[#173563] hover:text-white font-semibold py-2 rounded-sm px-2"
                          >
                            Email Identity Verification
                          </Link>
                          <Link
                            to="/quicknamesearch"
                            onClick={() =>
                              handleLinkClickManual("Quick Name Search")
                            }
                            className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                          >
                            Quick Name Search
                          </Link>
                          <Link
                            to="/quickdocumentscan"
                            onClick={() =>
                              handleLinkClickManual("Quick Document Scan")
                            }
                            className="hover:bg-[#173563] hover:text-white py-2 rounded-sm font-semibold px-2"
                          >
                            Quick Document Scan
                          </Link>
                          <Link
                            to="/documentsforensic"
                            onClick={() =>
                              handleLinkClickManual(
                                "Document Forensics Anaylsis"
                              )
                            }
                            className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                          >
                            Document Forensics Anaylsis
                          </Link>
                        </div>
                      </Popover>
                    </div>
                  ) : (
                    <div>
                      {user.role === "admin" ? (
                        <div className="flex flex-col  items-center justify-center  w-full">
                          <Link
                            to="/screening"
                            className={`  ${
                              location.pathname === "/screening"
                                ? "border border-white text-white"
                                : "border-[#173563]"
                            } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                          >
                            Screening
                          </Link>

                          <Link
                            onClick={handleClickManual}
                            className={` ${
                              location.pathname === "/dashboard" ||
                              location.pathname === "/emailidentity" ||
                              location.pathname === "/quicknamesearch" ||
                              location.pathname === "/quickdocumentscan" ||
                              location.pathname === "/quickdocumentscan" ||
                              location.pathname === "/documentsforensic"
                                ? "border border-white text-white"
                                : "border-[#173563]"
                            } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                          >
                            {selectedManual} <MdArrowDropDown size={20} />
                          </Link>
                          <Popover
                            id={idManual}
                            open={openManual}
                            anchorEl={anchorEManual}
                            onClose={handleCloseManual}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                          >
                            <div className="flex text-sm flex-col space-y-4 px-4  py-2">
                              <Link
                                to="/emailidentity"
                                onClick={() =>
                                  handleLinkClickManual(
                                    "Email Identity Verification"
                                  )
                                }
                                className="hover:bg-[#173563] hover:text-white font-semibold py-2 rounded-sm px-2"
                              >
                                Email Identity Verification
                              </Link>
                              <Link
                                to="/quicknamesearch"
                                onClick={() =>
                                  handleLinkClickManual("Quick Name Search")
                                }
                                className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                              >
                                Quick Name Search
                              </Link>
                              <Link
                                to="/quickdocumentscan"
                                onClick={() =>
                                  handleLinkClickManual("Quick Document Scan")
                                }
                                className="hover:bg-[#173563] hover:text-white py-2 rounded-sm font-semibold px-2"
                              >
                                Quick Document Scan
                              </Link>
                              <Link
                                to="/documentsforensic"
                                onClick={() =>
                                  handleLinkClickManual(
                                    "Document Forensics Anaylsis"
                                  )
                                }
                                className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                              >
                                Document Forensics Anaylsis{" "}
                              </Link>
                            </div>
                          </Popover>

                          <Link
                            to="/usermanagement"
                            className={` ${
                              location.pathname === "/usermanagement"
                                ? "border border-white text-white"
                                : "border-[#173563]"
                            } border-2 border-[#173563] text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                          >
                            User Management
                          </Link>
                        </div>
                      ) : (
                        <div className=" flex flex-col space-y-2 gap-x-6 items-center justify-center ">
                          <Link
                            to="/screening"
                            className={`  ${
                              location.pathname === "/screening"
                                ? "bg-[#173563]  border border-white"
                                : "border-[#173563]"
                            } border-2 border-[#173563] text-white text-lg hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                          >
                            Screening
                          </Link>

                          <Link
                            onClick={handleClickManual}
                            className={` ${
                              location.pathname === "/dashboard" ||
                              location.pathname === "/emailidentity" ||
                              location.pathname === "/quicknamesearch" ||
                              location.pathname === "/quickdocumentscan" ||
                              location.pathname === "/quickdocumentscan" ||
                              location.pathname === "/documentsforensic"
                                ? "bg-[#173563] border border-white text-white"
                                : "border-[#173563]"
                            } border-2 border-[#173563]  text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                          >
                            {selectedManual} <MdArrowDropDown size={20} />
                          </Link>
                          <Popover
                            id={idManual}
                            open={openManual}
                            anchorEl={anchorEManual}
                            onClose={handleCloseManual}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                          >
                            <div className="flex  text-sm flex-col space-y-4 px-4  py-2">
                              <Link
                                to="/emailidentity"
                                onClick={() =>
                                  handleLinkClickManual(
                                    "Email Identity Verification"
                                  )
                                }
                                className="hover:bg-[#173563] hover:text-white font-semibold py-2 rounded-sm px-2"
                              >
                                Email Identity Verification
                              </Link>
                              <Link
                                to="/quicknamesearch"
                                onClick={() =>
                                  handleLinkClickManual("Quick Name Search")
                                }
                                className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                              >
                                Quick Name Search
                              </Link>
                              <Link
                                to="/quickdocumentscan"
                                onClick={() =>
                                  handleLinkClickManual("Quick Document Scan")
                                }
                                className="hover:bg-[#173563] hover:text-white py-2 rounded-sm font-semibold px-2"
                              >
                                Quick Document Scan
                              </Link>
                              <Link
                                to="/documentsforensic"
                                onClick={() =>
                                  handleLinkClickManual(
                                    "Document Forensics Anaylsis"
                                  )
                                }
                                className="hover:bg-[#173563] hover:text-white py-2 font-semibold rounded-sm px-2"
                              >
                                Document Forensics Anaylsis{" "}
                              </Link>
                            </div>
                          </Popover>

                          <Link
                            to="/company"
                            className={`  ${
                              location.pathname === "/company"
                                ? "border border-white text-white"
                                : "border-[#173563]"
                            } border-2 border-[#173563]  text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}

                            // className="border-2 border-[#173563] rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center"
                          >
                            Company
                          </Link>
                          <Link
                            to="/usermanagement"
                            className={` ${
                              location.pathname === "/usermanagement"
                                ? "border border-white text-white"
                                : "border-[#173563]"
                            } border-2 border-[#173563]  text-white hover:scale-105 hover:bg-[#173563] hover:text-white rounded-lg py-[6px] px-2 font-semibold gap-x-1 flex items-center`}
                          >
                            User Management
                          </Link>
                        </div>
                      )}
                    </div>
                  )}

                  {/* </div> */}
                  <div className="w-full flex items-center justify-center py-2">
                    <button
                      onClick={toLogout}
                      type="button"
                      className="bg-red-500 hover:bg-red-700 px-6 w-32 py-0 rounded-lg text-white"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        {/* drawer */}
        <div className="lg:hidden  flex items-center py-2">
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <BsFilterLeft  size="35"/>
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
          <Link to="/screening" className="w-36  m-auto   rounded-md">
            <img className="rounded-md w-full h-full " src={logOut} />
          </Link>
        </div>
      </FadeIn>
    </>
  );
};

export default Navbar;
