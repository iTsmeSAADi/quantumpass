import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import ScreeningTables from "../../../Components/Tables/ScreeningTables";
import { RxCrossCircled } from "react-icons/rx";
import FadeIn from "react-fade-in/lib/FadeIn";
import Loader from "../../../Components/Loader/Loading";
import axios from "axios";
import { baseUrl } from "../../../Config/baseUrl";
import { CiFilter } from "react-icons/ci";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Screening = (props) => {
  const user = props.location?.state?.user;
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
// modal
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
// modal end
  const userData = localStorage.getItem("user");
  useEffect(() => {
    const tokens = localStorage.getItem("token");
    console.log("my tokenssssss", tokens);
  }, []);

  const users = userData ? JSON.parse(userData) : null;

  const mytoken = users.token;
  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/company`, {
        headers: {
          token: mytoken,
        },
      });
      setData(response.data.data);
      console.log(
        "my dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        response.data.data
      );
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
      <FadeIn delay={500} transitionDuration={1000}>
        <div className="px-6">
        <div className="flex justify-between items-center">
        <h1 className=" text-2xl lg:text-3xl font-semibold py-5">Screening</h1>
        <CiFilter onClick={handleOpen} className="text-2xl lg:hidden"/>
   
        </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='rounded-lg lg:hidden'>
        <div className=" items-center   lg:flex space-y-3   gap-x-4">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              className="border w-full outline-none rounded-md px-1 py-1"
              placeholder="Text Search"
            />
            <select className="outline-none border rounded-md px-1 py-[5px] w-full ">
              <option disabled selected hidden>
                Company
              </option>{" "}
              {data.map((items, index) => {
                return <option key={index}>{items.companyName}</option>;
              })}
            </select>
            {/* <select className="outline-none border rounded-md px-1 py-[5px] w-full ">
            <option disabled selected hidden>
              Company
            </option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select> */}
            <input
              type="date"
              className="outline-none border rounded-md px-1 py-[2.5px] w-full "
              placeholder="from date"
            ></input>

            <input
              type="date"
              className="outline-none border rounded-md px-1 py-[2.5px] w-full "
              placeholder="from date"
            ></input>
            <select
              placeholder="Extend Search"
              className="outline-none border rounded-md px-1 py-1 w-full "
            >
              <option disabled selected hidden>
                Extend Search
              </option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
            {/* <button>
              <RxCrossCircled size={22} />
            </button> */}
          </div>
        </Box>
      </Modal>
          <div className="lg:flex items-center hidden space-y-3 gap-x-4">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              className="border w-full outline-none rounded-md px-1 py-1"
              placeholder="Text Search"
            />
            <select className="outline-none border rounded-md px-1 py-[5px] w-full ">
              <option disabled selected hidden>
                Company
              </option>{" "}
              {data.map((items, index) => {
                return <option key={index}>{items.companyName}</option>;
              })}
            </select>
            {/* <select className="outline-none border rounded-md px-1 py-[5px] w-full ">
            <option disabled selected hidden>
              Company
            </option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select> */}
            <input
              type="date"
              className="outline-none border rounded-md px-1 py-[2.5px] w-full "
              placeholder="from date"
            ></input>

            <input
              type="date"
              className="outline-none border rounded-md px-1 py-[2.5px] w-full "
              placeholder="from date"
            ></input>
            <select
              placeholder="Extend Search"
              className="outline-none border rounded-md px-1 py-1 w-full "
            >
              <option disabled selected hidden>
                Extend Search
              </option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
            <button>
              <RxCrossCircled size={22} />
            </button>
          </div>
          <div className=" w-full">
          <ScreeningTables searchTerm={searchTerm} />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Screening;
