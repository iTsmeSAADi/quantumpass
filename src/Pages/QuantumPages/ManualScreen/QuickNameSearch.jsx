import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AppButton from "../../../Components/AppButton/AppButton";
import AppInput from "../../../Components/form/AppInput";
import Navbar from "../../../Components/Navbar/Navbar";
import FadeIn from "react-fade-in/lib/FadeIn";
import { baseUrl } from "../../../Config/baseUrl";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPostData, setPostError } from "../../../Store/Slice/PostSlice";
import Loader from "../../../Components/Loader/Loading";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const validationSchema = Yup.object().shape({
  givenName: Yup.string().required("Given Name is required"),
  surname: Yup.string(),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.string().required("Date of Birth is required"),
  nationality: Yup.string().required("Nationality is required"),
  externalId: Yup.string().required("External Id is required"),
});

const QuickNameSearch = () => {
  const [open, setOpen] = React.useState(false);
  const [loading,setLoading]=useState(false)
  const handleOpen = () => {
    if (responseMessage) {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const [responseMessage, setResponseMessage] = useState("");
  const initialValues = {
    firstName: "",
    surname: "",
    country: "",
    gender: "",
    dob: "",
    idNumber: "",
  };

  
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  console.log(
    "local storage Data is dataaaa ...............",
    user.companyName
  );
  const mytoken = user.token;
  console.log("my toekn issssewewew", mytoken);
  const dispatch = useDispatch();
  // const handleSubmit = async (values) => {
  //   try {
  //     const response = await axios.post(
  //       `${baseUrl}/api/v1/manual/quicknamesearch`,
  //       values,
  //       {
  //         headers: {
  //           token: mytoken,
  //         },
  //       }
  //     );
  //     console.log("Data posted successfully:", response.data);
  //     setResponseMessage(response.data.message);
  //     console.log("messageeeeeeeeeeeeeeeee", values);
  //     handleOpen();
  
  //   } catch (error) {
  //     console.error("An error occurred:", error);
    
  //     console.log("the value is", values);
  //   }
  // };
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/manual/quicknamesearch`,
        values,
        {
          headers: {
            token: mytoken,
          },
        }
      );
      console.log("Data posted successfully:", response.data);
      setResponseMessage(response.data.message);
      handleOpen();
      setLoading(false);
      dispatch(setPostData(response.data)); 
    } catch (error) {
      console.error("An error occurred:", error);
    
  
      dispatch(setPostError(error)); 
    }
  };
 
  const [countryCodes, setCountryCodes] = useState([]);

  useEffect(() => {
    fetchCountryCodes();
  }, []);
  useEffect(() => {
    handleOpen();
  }, [responseMessage])
  const fetchCountryCodes = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all"); // Replace with the correct API endpoint
      const data = await response.json();
      const codes = data.map((country) => ({
        name: country.name.common,
        code: country.cca2,
      }));
      setCountryCodes(codes);
    } catch (error) {
      console.error("Error fetching country codes:", error);
    }
  };

  console.log("counrtyyyyyyyyyyyy", countryCodes);

  return (
    <>
      <FadeIn delay={500} transitionDuration={1000}>
        <div className="px-6">
          <h1 className="text-2xl lg:text-4xl font-[900] py-8 mt-5">Quick Name Search</h1>
          <div className="w-full  flex  flex-col lg:flex-row justify-between gap-x-8">
            <div className="border shadow-md w-full lg:w-[65%] p-4  flex items-center justify-between rounded-lg">
            {loading ? (<div className="w-full flex items-center justify-center"><Loader/></div>):
              <Formik
                initialValues={initialValues}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched }) => (
                  <Form className="w-full space-y-4  p-6 lg:p-0">
                    <div className="w-full flex flex-col lg:flex-row space-y-3 items-center justify-between gap-x-8">
                      <div className="w-full flex flex-col">
                        <label
                          className="text-sm font-semibold px-2"
                          htmlFor="name"
                        >
                          Given Name *
                        </label>
                        <Field
                          type="text"
                          name="firstName"
                          className="outline-none  border-[1px] border-[#4e5765] rounded-md py-[6px] px-2"
                        />
                      </div>
                      <div className="w-full flex flex-col">
                        <label
                          className="text-sm font-semibold px-2"
                          htmlFor="email"
                        >
                          Surname
                        </label>
                        <Field
                          type="text"
                          name="surname"
                          // placeholder="surname"
                          autocomplete="off"
                          className="outline-none border-[1px] border-[#4e5765] rounded-md py-[6px] px-2"
                        />
                      </div>
                    </div>

                    <div className="w-full flex flex-col lg:flex-row space-y-3 items-center justify-between gap-x-8">
                      <div className="w-full flex flex-col">
                        <label
                          className="text-sm font-semibold px-2"
                          htmlFor="name"
                        >
                          Gender *
                        </label>

                        <Field
                          as="select"
                          className="outline-none border-[1px] border-[#4e5765] rounded-md py-[8px] px-2"
                          name="gender"
                        >
                          <option value="">Select Gender</option>
                          <option value="M">M</option>
                          <option value="F">F</option>
                        </Field>
                      </div>
                      <div className="w-full flex flex-col">
                        <label
                          className="text-sm font-semibold px-2"
                          htmlFor="email"
                        >
                          Date Of Birth *
                        </label>
                        <Field
                          type="date"
                          name="dob"
                          className="outline-none border-[1px] w-full border-[#4e5765] rounded-md py-[6px] px-2"
                        />
                      </div>
                    </div>

                    <div className="w-full flex flex-col lg:flex-row space-y-3 items-center justify-between gap-x-8">
                      <div className="w-full flex flex-col">
                        <label
                          className="text-sm font-semibold px-2"
                          htmlFor="name"
                        >
                          Nationality *
                        </label>
                     
                        <Field
                          as="select"
                          className="outline-none  border-[1px] border-[#4e5765] rounded-md py-[8px] px-2  select-box"
                          name="country"
                        >
                          <option value="">Selec Nationality</option>
                          <option value="PK">PK</option>
                          <option value="US">US</option>
{/* 
                          {countryCodes.map((country) => (
                            <option key={country.code} className="h-20">{country.code}</option>
                          ))} */}
                        </Field>
                       
                      </div>
                      <div className="w-full flex flex-col">
                        <label
                          className="text-sm font-semibold px-2"
                          htmlFor="email"
                        >
                          External Id *
                        </label>
                        <Field
                          type="text"
                          name="idNumber"
                          className="outline-none border-[1px] border-[#4e5765] rounded-md py-[6px] px-2"
                        />
                    
                      </div>
                    </div>
                 

                    <div className="pt-6 lg:pt-0 lg:pb-5">
                      <AppButton
                        btnText={"Search"}
                        btnWidth="100%"
                        type="submit"
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            }
            </div>
           <div className="py-5 lg:w-[35%]">
           <div className="border  lg:-mt-0 shadow-md w-full  p-4 h-[50%]  rounded-lg">
              <h1 className="text-lg font-semibold">Quick Name Search</h1>
              <p>
                You can look up a person using the GlobalCompliance database.
                You will receive a notification if they appear in the database
                or if they have a criminal record.
                <br />
                {/* <span className="font-bold">2 Credits</span> */}
              </p>
            </div>
           </div>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {responseMessage && (
                <div className="">
                  <AppButton btnText={"Quick Name Search"} />
                  <p className="font-semibold py-8">{responseMessage}</p>
                  <div className="w-full  flex items-center justify-end">
                    <AppButton onClick={handleCloseModal} btnText={"Cancel"} />
                  </div>
                </div>
              )}
            </Box>
          </Modal>
        </div>
      </FadeIn>
    </>
  );
};

export default QuickNameSearch;
