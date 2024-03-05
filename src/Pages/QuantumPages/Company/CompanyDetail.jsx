import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { baseUrl } from "../../../Config/baseUrl";
import axios from "axios";

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
  const navigate = useNavigate();
  const { id } = useParams();
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const tokens = localStorage.getItem("token");
    console.log("my tokenssssss", tokens);

    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v1/company/${id}`, {
          headers: {
            token: tokens,
          },
        });
        console.log("companyData", response.data.data);
        setCompanyData(response.data.data);
        console.log("get.............", response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div>
<FadeIn delay={500} transitionDuration={1000}>
  <div className="px-6">
    <div className="flex items-center justify-between py-8">
      <h1 className="text-3xl font-semibold">
        Company name: {companyData?.companyName}
      </h1>
      {/* <div className="flex gap-x-3 items-center">
        <AppButton btnText={"Assign to Company"} />
        <AppButton btnText={"Save"} />
      </div> */}
    </div>

    {/* Section two */}
    <div className="border shadow-md w-full mt-4 p-4 rounded-lg">
      <h5
        className="font-semibold text-l"
        style={{ fontSize: "22px", margin: "10px 0" }}
      >
        Details
      </h5>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="w-full gap-x-8 flex">
            <div className="w-full">
              <p className="font-semibold">Email: </p>
              <p>{companyData?.email}</p>
            </div>
            <div className="w-full">
              <p className="font-semibold">Role: </p>
              <p>{companyData?.role}</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ margin: "22px 0" }} />
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="w-full gap-x-8 flex">
            <div className="w-full">
              <p className="font-semibold">Created At: </p>
              <p>
                {new Date(
                  companyData?.createdAt * 1000
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</FadeIn>;

    </div>
  );
};

export default CompanyDetail;
