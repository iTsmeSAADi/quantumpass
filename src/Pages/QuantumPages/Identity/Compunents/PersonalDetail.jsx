import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const PersonalDetail = () => {
  return (
    <div className="w-[80%] m-auto">
      <h1 className="text-2xl font-bold -mt-14 py-4">
        Confirm your personal details{" "}
      </h1>
      <div className="flex items-center gap-x-2">
        <p className=" w-36">Personal detail</p>
        <div className="h-[2px] w-full bg-[#cfcccc]"></div>
      </div>
      <form>
        <div >
         <div className="flex items-center justify- py-3">
         <FormControl className="w-1/2 ">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
        <label className="text-sm text-[#7c7b7b]">Title</label>

              <div className="flex">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Mr"
                />
                <FormControlLabel value="male" control={<Radio />} label="Ms" />
              </div>
            </RadioGroup>
          </FormControl>
          <div className="flex w-1/2 flex-col">
            <label className="text-sm text-[#7c7b7b]">Date Of Birth</label>
            <input type="text" className="outline-none px-2  rounded-tl-md rounded-tr-md py-2 border-t border-r border-l" placeholder="Date Of Birth"></input>
          </div>
         </div>
         <div className="flex gap-x-3 py-3">
         <div className="flex w-1/2 flex-col">
            <label className="text-sm ">Given Name</label>
            <input type="text" className="outline-none px-2  rounded-tl-md rounded-tr-md py-2 border-t  border-l" placeholder="Given Name"></input>
          </div>
          <div className="flex w-1/2 flex-col">
            <label className="text-sm ">SurName</label>
            <input type="text" className="outline-none px-2  rounded-tl-md rounded-tr-md py-2 border-t border-r" placeholder="Your SurName"></input>
          </div>
         </div>
         <div className="flex gap-x-3 py-3">
         <div className="flex w-1/2 flex-col">
            <label className="text-sm ">CITIZENSHIP</label>
            <input type="text" className="outline-none px-2  rounded-tl-md rounded-tr-md py-2 border-t  border-l" placeholder="Given Name"></input>
          </div>
          <div className="flex w-1/2 flex-col">
            <label className="text-sm ">Identity Document Expiration Date</label>
            <input type="text" className="outline-none px-2  rounded-tl-md rounded-tr-md py-2 border-t border-r" placeholder="DD//MM/YY"></input>
          </div>
         </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetail;
