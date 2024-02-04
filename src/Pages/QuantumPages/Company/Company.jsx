import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import { companyData } from "../../../Config/TableData";
import AppButton from "../../../Components/AppButton/AppButton";
import { BsSearch } from "react-icons/bs";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in";
import { baseUrl } from "../../../Config/baseUrl";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Loading from "../../../Components/Loader/Loading";
import Loader from "../../../Components/Loader/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 650,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const Company = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [Loading, setLoading] = useState();

  const navigate = useNavigate();

  const toCompanyDetail = (id) => {
    navigate("/companydetail/"+id);
  };
  // Retrieve user data from localStorage
  const userData = localStorage.getItem("user");
  useEffect(() => {
    const tokens = localStorage.getItem("token");
    console.log("my tokenssssss", tokens);

  navigate("/company")

  }, []); 

  const user = userData ? JSON.parse(userData) : null;

  console.log("local storage Data is ...............", user.role);
  // console.log("my toekn", user.token);

  const mytoken = user.token;
  // console.log("my token isss",mytoken
  // Post Data
  const initialValues = {
    email: "",
    password: "",
    companyName: "",
    role: "admin",
  };

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/user/register`,
        values,
        {
          headers: {
            token: mytoken,
          },
        }
      );
      console.log("Data posted successfully:", response.data);
      toast.success(response.data.message);
      setOpen(false);
      fetchData();
      // Handle success or other operations here
    } catch (error) {
      console.error("An error occurred:", error);
      setOpen(false);
      // Handle error or display an error message here
      console.log("the value is", values);
      toast("Company already Exist !");
    }
  };


  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/company`, {
        headers: {
          token: mytoken,
        },
      });
      setData(response.data);
      console.log("get.............", response.data.data);
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
    <div>
      <ToastContainer
        toastStyle={{
          backgroundColor: "#173563",
          color: "white",
          left: 10,
          top: 10,
        }}
      />
      <FadeIn delay={500} transitionDuration={1000}>
        <div className="px-6">
          <div className="flex items-center justify-between py-8">
            <h1 className="text-2xl lg:text-3xl font-semibold">Companies</h1>
            <AppButton onClick={handleOpen} btnText={"Add New Company"} />
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
                <Box sx={style} className='w-[90%] lg:w-[50%]'>
                  <div className="flex items-center justify-between">
                    <h1 className=" text-base lg:text-2xl font-semibold">
                      Create New Company
                    </h1>
                    <button
                      onClick={handleClose}
                      type="button"
                      className="bg-black cursor-pointer text-white w-7 h-7 flex items-center justify-center rounded-full"
                    >
                      <RxCross2 size={18} />
                    </button>
                  </div>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    <Form>
                      <div className="py-4">
                        <div className="py-3">
                          <Field
                            type="text"
                            name="companyName"
                            className="w-full py-1 outline-none rounded-lg border px-2"
                            placeholder="Enter Your Company Name"
                          />
                          <ErrorMessage
                            name="companyName"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        <div className="py-3">
                          <Field
                            type="text"
                            name="email"
                            className="w-full py-1 outline-none rounded-lg border px-2"
                            placeholder="Enter Your Email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        <div className="py-3">
                          <Field
                            type="password"
                            name="password"
                            className="w-full py-1 rounded-lg outline-none border px-2"
                            placeholder="Password"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="flex items-center justify-end gap-x-2 py-3">
                        <AppButton
                          type="button"
                          onClick={handleClose}
                          btnText={"Close"}
                          textColor="#000"
                          bgColor="#cfcccc"
                        />
                        <AppButton type="submit" btnText={"Save Company"} />
                      </div>
                    </Form>
                  </Formik>
                </Box>
              </Fade>
            </Modal>
          </div>
          <div className="border w-1/2 lg:w-1/4 rounded-lg  py-1 px-2 flex justify-between items-center">
            <input
              type="text"
              className="outline-none w-full"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <BsSearch />
          </div>

          {loading ? (
            <Loader />
          ) : (
            <>
              {" "}
              <div className="space-y-3 py-4">
                {data?.data
                  ?.filter((item) =>
                    item.companyName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                  .map((items, index) => (
                    <div onClick={() => toCompanyDetail(items._id)} className="border w-full py-2 px-2 shadow cursor-pointer rounded-lg font-semibold" key={index}>
                      {items.companyName}
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default Company;
