import React, { useEffect, useState } from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { BsCheckAll } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RxCross1 } from "react-icons/rx";
import FadeIn from "react-fade-in/lib/FadeIn";
import axios from "axios";
import { baseUrl } from "../../../../Config/baseUrl";
import Loader from "../../../../Components/Loader/Loading";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 2,
};

const ScreeningReport = () => {
  const [add, setAdd] = useState(true);
  const [showTable, seshowTable] = useState(false);

  const handleAddButton = () => {
    seshowTable(!showTable);
    setAdd(!add);
  };

  // eye modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // get data from the api
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
 const mytoken=user.token;
const [data, setData] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v1/getallscreenings`, {
          headers: {
            token: mytoken,
          },
        });
        setData(response);
        setData([response.data?.docscansandforensics]);
        setLoading(false)

     
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // time conversion
  const convertMillisecondsToDate = (milliseconds) => {
    const date = new Date(milliseconds);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    return `${day} ${month} ${year}`;
  };

  return (
    <FadeIn delay={500} transitionDuration={1000}>
      {
        loading ? <Loader/>:<>
        {
      data.map((items,index)=>(
        <div className="px-6 py-8">
        <div className="flex items-center gap-x-3">
          <Link to="/screening">
            <FiArrowLeft size={26} />
          </Link>
          <h1 className="text-4xl font-semibold">Screening Report</h1>
        </div>
     
        <div className=" mt-8 flex  justify-between gap-x-5">
          <div className="w-1/2 px-4 py-8 border h-[50%] rounded-lg shadow-md">
            <h2 className="font-bold text-lg">Report Summary</h2>
            <table className="w-full    ">
              <tr className="  border-b border-r-0 border-l-0 text-center text-lg space-y-2">
                <td className="py-4 text-start font-bold">Date</td>
                <td className=" text-start text-sm font-[500]">
                {convertMillisecondsToDate(items?.[0].createdAt)}
                </td>
              </tr>
              <tr className="border  border-b-0 border-r-0 border-l-0 text-center text-lg space-y-2">
                <td className="py-4 text-start font-bold">Screening Token</td>
                <td className=" text-start text-sm font-[500] text-blue-900">
                {items?.[0]?.fk_admin.admin_id}
                </td>
              </tr>
              <tr className="border  border-b-1 border-r-0 border-l-0 text-center text-lg space-y-2">
                <td className="py-4 text-start font-bold">Status</td>
                <td className=" text-start text-sm font-[500]">
                {items?.[0]?.manualScreeningType}
                </td>
              </tr>
            </table>
            <div className="rounded-lg text-white px-5 py-6 mt-4 bg-[#173563]">
              <h2 className="text-lg font-bold">Submitted File</h2>
              <p className=" font-bold">None</p>
            </div>
          </div>
          <div className="w-1/2 px-4 py-8 border rounded-lg shadow-md">
            <h2 className="font-bold text-lg">Client Profile</h2>
            <h2 className="font-bold text-lg">Alexendra Maxwell</h2>
            <h2 className="font-semibold">Male, 1990-12-26</h2>

            <table className="w-full  mt-3   ">
              <tr className="border border-t border-r-0 border-l-0 space-y-2">
                <th className=" py-4 text-start">Info Type</th>
                <th className="text-start">Detail</th>
                <th className="text-start">Status</th>
                <th className="text-start"></th>
              </tr>

              <tr className="  border-b border-r-0 border-l-0 text-center text-lg space-y-2">
                <td className="py-4 text-start font-bold text-sm">Gender</td>
                <td className=" text-start text-sm font-[500] ">Male</td>
                <td className=" text-start text-sm font-[500] flex items-center gap-x-1">
                  <BsCheckAll size={22} />
                  Submitted
                </td>
                <td className=" text-start text-sm font-[500]  ">
                  <div className="flex items-center gap-x-1 -mt-2">
                    <MdOutlineMessage size={18} />
                    <span>0</span>
                  </div>
                </td>
              </tr>
              <tr className="  border-b border-r-0 border-l-0 text-center text-lg space-y-2">
                <td className="py-4 text-start font-bold text-sm">
                  Given Name
                </td>
                <td className=" text-start text-sm font-[500] ">{items?.[0]['result']['result'].fullName}</td>
                <td className=" text-start text-sm font-[500] flex items-center gap-x-1">
                  <BsCheckAll size={22} />
                  Submitted
                </td>
                <td className=" text-start text-sm font-[500]  ">
                  <div className="flex items-center gap-x-1 -mt-2">
                    <MdOutlineMessage size={18} />
                    <span>0</span>
                  </div>
                </td>
              </tr>
              <tr className="  border-b border-r-0 border-l-0 text-center text-lg space-y-2">
                <td className="py-4 text-start font-bold text-sm">Sur Name</td>
                <td className=" text-start text-sm font-[500] "> {items?.[0]['result']['result'].firstName}</td>
                <td className=" text-start text-sm font-[500] flex items-center gap-x-1">
                  <BsCheckAll size={22} />
                  Submitted
                </td>
                <td className=" text-start text-sm font-[500]  ">
                  <div className="flex items-center gap-x-1 -mt-2">
                    <MdOutlineMessage size={18} />
                    <span>0</span>
                  </div>
                </td>
              </tr>
              <tr className="  border-b border-r-0 border-l-0 text-center text-lg space-y-2">
                <td className="py-4 text-start font-bold text-sm">
                  Date Of Birth
                </td>
                <td className=" text-start text-sm font-[500] "> {items?.[0]['result']['result'].dob}</td>
                <td className=" text-start text-sm font-[500] flex items-center gap-x-1">
                  <BsCheckAll size={22} />
                  Submitted
                </td>
                <td className=" text-start text-sm font-[500]  ">
                  <div className="flex items-center gap-x-1 -mt-2">
                    <MdOutlineMessage size={18} />
                    <span>0</span>
                  </div>
                </td>
              </tr>
              <tr className="  border-b border-r-0 border-l-0 text-center text-lg space-y-2">
                <td className="py-4 text-start font-bold text-sm">
                  Nationality
                </td>
                <td className=" text-start text-sm font-[500] "> {items?.[0]['result']['result'].nationality_full}</td>
                <td className=" text-start text-sm font-[500] flex items-center gap-x-1">
                  <BsCheckAll size={22} />
                  Submitted
                </td>
                <td className=" text-start text-sm font-[500]  ">
                  <div className="flex items-center gap-x-1 -mt-2">
                    <MdOutlineMessage size={18} />
                    <span>0</span>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="rounded-lg p-4  border mt-4">
          <h2>AML / OFAC / PEP Screening</h2>
          <div className=" flex border-[1px] border-black items-center pr-3 mt-3 justify-between ">
            <div className=" flex gap-x-3 h-auto items-center  border-black">
              <button
                onClick={handleAddButton}
                className="bg-blue-300 w-12 h-12 text-xl"
              >
                {add === true ? "+" : "-"}
              </button>
              <h2 className="text-lg font-bold">{`Hide "Medium" and Weak Matches (Match < 85%) `}</h2>
            </div>
            <h2 className="text-lg font-bold ">Result:1</h2>
          </div>
          {showTable && (
            <>
              <table className="w-[100%] mt-2">
                <tr className="border border-t  border-r-0 border-b-0 border-l-0">
                  <th></th>
                  <th className="">Match Score</th>
                  <th>Name</th>
                  <th>Reason Listed</th>

                  <th>Gender</th>

                  <th>Date Of Birth</th>

                  <th>Country</th>
                </tr>
                <tr>
                  <td className="py-3 cursor-pointer" onClick={handleOpen}>
                    <AiOutlineEye size={22} />
                  </td>
                  <td className=" text-center">65%</td>
                  <td className="font-bold">{items?.[0]['result']['result'].fullName}</td>
                  <td className=" text-center">National:PEP:Former PEP </td>
                  <td className=" text-center">{`AMatched [Male]`}</td>
                  <td className=" text-center">{`Not Matched [1963-12-24]`}</td>
                  <div className=" text-center">
                    Not Matched [French Guiana]
                  </div>
                </tr>
              </table>
              {/* eye modal */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div>
                    <div className=" flex items-center justify-between">
                      <h2 className="text-xl font-bold">Alexandre, Alex</h2>
                      <button
                        onClick={handleClose}
                        className="bg-black rounded-full p-1 text-white"
                      >
                        <RxCross1 size={18} />
                      </button>
                    </div>
                    <div className="py-3 ">
                      <h2 className="text-xl font-bold">Comments</h2>
                      <p>Source: International,Website</p>
                      <p className="py-4">Level: National</p>
                      <p className="py-2">Category: PEP</p>
                      <p className="py-2">Subcategory: Former PEP</p>
                      <p className="py-3"> Last updated: 2019-09-30</p>
                      <p className="py-3">
                        Profile Notes: Career:
                        <span>
                          Vice-President of the General Council of French Guiana
                          (2008 - March 2011);
                          <br /> Member of the General Council of French Guiana
                          (2001 - 2015). Additional Information DOB - 1963-12-24
                        </span>
                      </p>
                      <h4 className="font-bold text-lg py-3">
                        Additional Information
                      </h4>
                      <h4 className="font-bold text-lg pb-3">
                        {" "}
                        DOB - 1963-12-24
                      </h4>
                      <hr />
                      <h4 className="font-bold text-lg py-3">
                        Other - Sources of Record Information
                      </h4>
                      <p className="text-blue-800">
                        https://web.archive.org/web/20130512073237/http://www.cg973.fr/Le-President-et-les-Vice
                      </p>
                      <p className="text-blue-800">
                        https://www.franceguyane.fr/regions/guyane/la-composition-du-conseil-general-28-03-2011-86153.php?
                      </p>
                    </div>
                  </div>
                </Box>
              </Modal>
            </>
          )}
        </div>
       
       
      </div>
      ))
    }
        </>
   
      }
    </FadeIn>
  );
};

export default ScreeningReport;
