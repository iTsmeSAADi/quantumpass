import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import AppButton from "../../../Components/AppButton/AppButton";
import AppInput from "../../../Components/form/AppInput";
import Backdrop from "@mui/material/Backdrop";

import {
  Box,
  Fade,
  FormControl,
  FormHelperText,
  MenuItem,
  Modal,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { RxCross2 } from "react-icons/rx";
import FadeIn from "react-fade-in/lib/FadeIn";
import { Field } from 'formik';
import { useNavigate } from "react-router-dom";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

// handle modal

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};
const CompanyDetail = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [SwitchOn, setSwitchOn] = useState(true);
  const [thirdSwitch, setthirdSwitch] = useState(true);
  const [fourSwitch, setFourSwitch] = useState(true);
  const [fiveSwitch, setFiveSwitch] = useState(true);

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  const handleSwitch = () => {
    setSwitchOn(!SwitchOn);
  };
  const handleThirdSwitch = () => {
    setthirdSwitch(!thirdSwitch);
  };
  const handleFourSwitch = () => {
    setFourSwitch(!fourSwitch);
  };
  const handleFiveSwitch = () => {
    setFiveSwitch(!fiveSwitch);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // handle modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Second Modal
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  useEffect(() => {
    const tokens = localStorage.getItem("token");
    console.log("my tokenssssss", tokens);

  // navigate("/company")

  }, []); 
  // for refresh the page
  const navigate=useNavigate()
useEffect(() => {
  const tokens = localStorage.getItem("token");
  console.log("my tokenssssss", tokens);

  navigate("/companydetail")

}, []); 
  return (
    <div>
     <FadeIn  delay={500} transitionDuration={1000} >
      <div className="px-6">
        <div className=" flex items-center justify-between py-8">
          <h1 className="text-3xl font-semibold">Test Company</h1>
          <div className="flex gap-x-3 items-center">
            <AppButton btnText={"Assign to Company"} />
            <AppButton btnText={"Save"} />
          </div>
        </div>
        {/* section one */}
        <div className=" flex justify-between gap-x-8">
          <div className="border shadow-md w-[75%] p-4  rounded-lg">
            <h2 className="font-semibold text-lg">Default Screening Setting</h2>
            <div className=" space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-1/2">
                  <p className="font-semibold">ID Verification 3 Credits</p>
                  <Stack
                    direction="row"
                    className="py-1"
                    spacing={1}
                    alignItems="center"
                  >
                    <AntSwitch
                      // defaultChecked
                      onChange={handleSwitchChange}
                      inputProps={{ "aria-label": "ant design" }}
                    />
                    <Typography>{isSwitchOn ? "Off" : "On"}</Typography>
                  </Stack>
                </div>
                <div className="w-1/2">
                  <p className="font-semibold">
                    AML/OFAC/PEP Screening 2 Credits
                    <Stack
                      direction="row"
                      className="py-1"
                      spacing={1}
                      alignItems="center"
                    >
                      <AntSwitch
                        // defaultChecked
                        onChange={handleSwitch}
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      <Typography>{SwitchOn ? "Off" : "On"}</Typography>
                    </Stack>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-1/2">
                  <p className="font-semibold">
                    Biomatric Facial Recognition 2 Credit
                  </p>
                  <Stack
                    direction="row"
                    className="py-1"
                    spacing={1}
                    alignItems="center"
                  >
                    <AntSwitch
                      // defaultChecked
                      onChange={handleThirdSwitch}
                      inputProps={{ "aria-label": "ant design" }}
                    />
                    <Typography>{thirdSwitch ? "Off" : "On"}</Typography>
                  </Stack>
                </div>
                <div className="w-1/2">
                  <p className="font-semibold">
                    Proof of Address Document Verification 2 Credits
                    <Stack
                      direction="row"
                      className="py-1"
                      spacing={1}
                      alignItems="center"
                    >
                      <AntSwitch
                        // defaultChecked
                        onChange={handleFourSwitch}
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      <Typography>{fourSwitch ? "Off" : "On"}</Typography>
                    </Stack>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-1/2">
                  <p className="font-semibold">
                    Geolocation Verification 1 Cridet
                  </p>
                  <Stack
                    direction="row"
                    className="py-1"
                    spacing={1}
                    alignItems="center"
                  >
                    <AntSwitch
                      // defaultChecked
                      onChange={handleFiveSwitch}
                      inputProps={{ "aria-label": "ant design" }}
                    />
                    <Typography>{fiveSwitch ? "Off" : "On"}</Typography>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
          <div className="border shadow-md w-[25%] p-4 h-[50%] bg-[#173563]  rounded-lg">
            <h1 className="text-6xl font-bold text-white text-center">0</h1>
          </div>
        </div>
        {/* Section two */}
        <div className="border shadow-md w-full mt-4 p-4  rounded-lg">
          <h2 className="font-semibold text-lg">Widget Setting</h2>
          <div className=" space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-full gap-x-8 flex">
                <div className="w-full">
                  <p className="font-semibold">ID Verification 3 Credits</p>
                  <FormControl className="w-full">
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="w-full">
                  <p className="font-semibold">ID Verification 3 Credits</p>
                  <FormControl className="w-full">
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-x-8 justify-between">
              <div className="w-1/2">
                <labe className="font-semibold">Minimum age in years</labe>
                {/* <Field  placeholder="18" /> */}
              </div>
              <div className="w-1/2">
                <p className="font-semibold">
                  Allow Video For Biomatric Analysis
                  <Stack
                    direction="row"
                    className="py-1"
                    spacing={1}
                    alignItems="center"
                  >
                    <AntSwitch
                      // defaultChecked
                      onChange={handleFourSwitch}
                      inputProps={{ "aria-label": "ant design" }}
                    />
                    <Typography>{fourSwitch ? "Off" : "On"}</Typography>
                  </Stack>
                </p>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <div className="w-full gap-x-8 flex">
                <div className="w-full">
                  <p className="font-semibold">Id Card Country Blacklist</p>
                  <FormControl className="w-full">
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="w-full">
                  <p className="font-semibold">
                    Driving License Countries Whitelist
                  </p>
                  <FormControl className="w-full">
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <div className="w-1/2">
                <p className="font-semibold">
                  Geolocation Verification 1 Cridet
                </p>
                <Stack
                  direction="row"
                  className="py-1"
                  spacing={1}
                  alignItems="center"
                >
                  <AntSwitch
                    // defaultChecked
                    onChange={handleFiveSwitch}
                    inputProps={{ "aria-label": "ant design" }}
                  />
                  <Typography>{fiveSwitch ? "Off" : "On"}</Typography>
                </Stack>
              </div>
            </div>
          </div>
        </div>
        {/* Section Three */}
        <div className="border shadow-md w-full mt-4 p-4  rounded-lg">
          <h2 className="font-semibold text-lg">Auto Rejected Setting</h2>
          <div className=" space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-full gap-x-8 flex">
                <div className="w-full">
                  <p className="font-semibold">AML / OFAC / PEP / Matches</p>
                  <FormControl className="w-full">
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="w-full">
                  <p className="font-semibold">ID Verification 3 Credits</p>
                  <FormControl className="w-full">
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-x-8 justify-between">
              <div className="w-1/2">
                <label className="font-semibold">Minimum age in years</label>
                {/* <Field placeholder="18" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* Section Four */}
        <div className="border shadow-md w-full mt-4 p-4  rounded-lg">
          <h2 className="font-semibold text-lg">
            Auto Accept: High Meduim Settings
          </h2>
          <div className=" space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-full gap-x-8 flex">
                <div className="w-full">
                  <p className="font-semibold">Countries</p>
                  <FormControl className="w-full">
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="w-full">
                  <p className="font-semibold">Nationalities</p>
                  <FormControl className="w-full">
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <hr />

            <div className="flex items-center justify-between">
              <div className="w-full gap-x-8 flex">
                <div className="w-full">
                  <p className="font-semibold">AML / OFAC / PEP / Matches</p>
                  <FormControl className="w-full">
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="w-full">
                  <p className="font-semibold">
                    AML / OFAC / PEP / Uncertainty Handling{" "}
                  </p>
                  <FormControl className="w-full">
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Five */}
        <div className="border shadow-md w-full mt-4 p-4  rounded-lg">
          <h2 className="font-semibold text-lg">
            Auto Accept: Low Risk Settings
          </h2>
          <p className="font-semibold py-2">
            All Screening that do not match any criteria defined above well be
            set is "Low" risk level.
          </p>
        </div>
        {/* Section Six */}
        <div className="border shadow-md w-full mt-4 p-4  rounded-lg">
          <div className=" flex items-center justify-between">
            <h2 className="font-semibold text-lg">Credintail Management</h2>
            <AppButton onClick={handleOpenModal} btnText={"Create New"} />
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openModal}
              onClose={handleCloseModal}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={openModal}>
                <Box sx={style}>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Credintail</h1>
                    <button
                      onClick={handleCloseModal}
                      type="button"
                      className="bg-black cursor-pointer text-white w-7 h-7 flex items-center justify-center rounded-full"
                    >
                      <RxCross2 size={18} />
                    </button>
                  </div>

                  <div>
                    <h2 className="font-bold text-lg py-3">Disclaimer</h2>
                    <p className="py-1">
                      You will not be able to see secrete again. Please write
                      down and keep it safe.
                    </p>
                    <div className="border bg-gray-100 rounded-lg shadow-sm px-2 py-4">
                      <p className=" text-center">{`{clientld: ddb6e854-a7bc-45f9-84bd-07a7219d5ddc
secret: v6jYwtA8k294u4RPg1Y3}`}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-x-2 py-3">
                    <AppButton
                      btnText={"Close"}
                      textColor="#000"
                      bgColor="#cfcccc"
                    />
                  </div>
                </Box>
              </Fade>
            </Modal>
          </div>

          <table className="w-full">
            <tr className="">
              <th className="py-4">Client Id</th>
              <th>Secret</th>
            </tr>
            <tr className="border border-t border-b-0 border-r-0 border-l-0 text-center text-lg space-y-2">
              <td className="py-4 text-sm font-semibold">
                fgereryhjyns-cr45233
              </td>
              <td className="">*************</td>
              <button className="border-[2px] px-2 py-[3px] text-sm border-red-500">
                Remove
              </button>
            </tr>
            <tr className="border border-t border-b-0 border-r-0 border-l-0 text-center text-lg space-y-2">
              <td className="py-4 text-sm font-semibold ">
                fgereryhjyns-cr45233
              </td>
              <td className="py-4">*************</td>
              <td className="py-4">
                <button className="border-[2px] px-2 py-[3px] text-sm border-red-500">
                  Remove
                </button>
              </td>
            </tr>
          </table>
        </div>
        {/* Section Seven */}
        <div className="border shadow-md w-full mt-4 p-4  rounded-lg">
          <div className=" flex items-center justify-between">
            <h2 className="font-semibold text-lg">WebHook Management</h2>
            <AppButton onClick={handleOpen} btnText={"Add New"} />
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">WebHook</h1>
                    <button
                      onClick={handleClose}
                      type="button"
                      className="bg-black cursor-pointer text-white w-7 h-7 flex items-center justify-center rounded-full"
                    >
                      <RxCross2 size={18} />
                    </button>
                  </div>
                  <div className="py-5">
                    <input
                      type="text"
                      className="w-full py-1 rounded-lg border px-2 "
                      placeholder="Url"
                    ></input>
                  </div>
                  <hr />
                  <div className="flex items-center justify-end gap-x-2 py-3">
                    <AppButton
                      btnText={"Close"}
                      textColor="#000"
                      bgColor="#cfcccc"
                    />
                    <AppButton btnText={"create"} />
                  </div>
                </Box>
              </Fade>
            </Modal>
          </div>

          <table className="w-full">
            <tr className=" ">
              <th className="py-4">WebHook Url</th>
              <th>WebHook Secret</th>
            </tr>
            <tr className="border border-t border-b-0 border-r-0 border-l-0 text-center text-lg space-y-2">
              <td className="py-4 text-sm font-semibold">
                fgereryhjyns-cr45233
              </td>
              <td className="">*************</td>
              <button className="border-[2px] px-2 py-[3px] text-sm border-red-500">
                Remove
              </button>
            </tr>
            <tr className="border border-t border-b-0 border-r-0 border-l-0 text-center text-lg space-y-2">
              <td className="py-4 text-sm font-semibold">
                fgereryhjyns-cr45233
              </td>
              <td className="">*************</td>
              <button className="border-[2px] px-2 py-[3px] text-sm border-red-500">
                Remove
              </button>
            </tr>
          </table>
        </div>
        {/* Section 8 */}
        <div
          className="py-4
       "
        >
          <div className="border  shadow-md w-full bg-gray-100  p-4  rounded-lg">
            <p className="py-3 font-semibold">Audit Log {`(0 entries)`}</p>
          </div>
        </div>
      </div>
      </FadeIn>
    </div>
  );
};

export default CompanyDetail;
