import React, { useState } from "react";
import AppButton from "../../Components/AppButton/AppButton";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/logOut.png";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const Logout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toScreening = () => {
    navigate("/screening");
  };

  const handleLogout = () => {
    setOpen(false);
    navigate("/");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <div className=" px-12 lg:px-32 py-5">
      <div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-44 lg:w-56 lg:h-auto rounded-md">
            <img className="rounded-md" src={logo} alt="Logo" />
          </div>
          <div className="flex items-center gap-x-4">
           
                              <button  onClick={toScreening} type='submit'  className='bg-[#173563] text-white mt-3 lg:mt-0 lg:w-fit px-3 w-full font-semibold rounded-md py-2 '>Go to Global Compliance Portal</button>

          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl py-16 font-bold">Log Out</h1>
        <div className="space-y-4">
          <AppButton
            onClick={handleClickOpen}
            btnWidth="100%"
            btnText={"Click here Log out"}
          />
          <Dialog className=""  open={open} onClose={handleClose}>
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent>
              Are you sure you want to log out?
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleLogout} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Logout;
