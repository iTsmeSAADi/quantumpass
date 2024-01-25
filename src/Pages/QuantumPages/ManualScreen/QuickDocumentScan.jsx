import React, { useEffect, useRef, useState } from "react";
import AppButton from "../../../Components/AppButton/AppButton";
import AppInput from "../../../Components/form/AppInput";
import FadeIn from "react-fade-in/lib/FadeIn";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "../../../Style/form.css";
import { Formik, Field, Form } from "formik";
import { baseUrl } from "../../../Config/baseUrl";
import axios from "axios";
import Loader from "../../../Components/Loader/Loading";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { companyData } from "../../../Config/TableData";
// import { Field } from 'formik'
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 600,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const QuickDocumentScan = () => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  // Modal
  const [open, setOpen] = React.useState(false);
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

  // posta data
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  console.log("userDataaaaaaaaaaaaaaaaa", user);
  const mytoken = user.token;
  const companyName = user.companyName;
  console.log("company name is", companyName);
  const onSubmit = async (values) => {
    setLoading(true);
    let frontEnd = { file: values["file"] };
    let backeEnd = { file: values["file2"] };
    try {
      const backeEndUrl = await axios.post(`${baseUrl}/upload`, backeEnd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const frontEndUrl = await axios.post(`${baseUrl}/upload`, frontEnd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      let myData = {
        companyName: companyName,
        docFrontImage: frontEndUrl.data.downloadURL,
        docBackImage: backeEndUrl.data.downloadURL,
      };

      // alert(myData.companyName)
      const scan = await axios.post(
        `${baseUrl}/api/v1/manual/quickdocumentscan`,
        myData,
        {
          headers: {
            token: mytoken,
          },
        }
      );
      setLoading(false);
      handleOpen();
      forceUpdate();
      console.log("company data tooooo api ", companyData);

      setResponseMessage(scan.data.message);
    } catch (error) {
      console.error("An error occurred:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (responseMessage) {
      handleOpen();
    }
  }, [responseMessage]);

  // show image in a div
  const [selectedImage, setSelectedImage] = useState("");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setSelectedImage(imageURL);
    // Rest of your code...
  };
  // backside
  const [selectedback, setSelectedBack] = useState("");
  const handleImageBack = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setSelectedBack(imageURL);
    // Rest of your code...
  };
  

  return (
    <>
      <FadeIn delay={500} transitionDuration={1000}>
        <div className="w-full px-6">
          <h1 className="text-2xl lg:text-4xl font-[900] py-8 mt-5">Quick Document Scan</h1>
          <div className=" flex flex-col lg:flex-row  justify-between gap-x-8">
            <div className="border shadow-md w-full lg:w-[65%] p-4 h-[50%]  flex items-center justify-between rounded-lg">
              {loading ? (
                <div className="w-full flex flex-col items-center justify-center">
                  <Loader />
                  <p className="font-semibold text-green-600">
                    This may take a while.
                  </p>
                </div>
              ) : (
                <>
                  <Formik
                    initialValues={{ file: "", file2: "" }}
                    onSubmit={onSubmit}
                  >
                    {({ isSubmitting, setFieldValue }) => (
                      <Form className="w-full space-y-8">
                        <div className="flex flex-col lg:flex-row space-y-4 items-center gap-x-5 justify-between">
                          <div className="w-full flex items-center justify-center lg:w-1/2">
                            <Field name="file" className="">
                              {({ field, form }) => (
                                <div className="flex flex-col ">
                                  <label htmlFor="fileUpload" className="text-center lg:text-start" >
                                    Front Side Image
                                  </label>
                                  {selectedImage && (
                                    <div className="mt-2 m-auto lg:m-0">
                                      <img
                                        src={selectedImage}
                                        alt="Selected Image"
                                        className="w-32 h-24 lg:w-56 lg:h-36"
                                      />
                                    </div>
                                  )}
                                  
                                  <input
                                    type="file"
                                    
                                    onChange={(event) => {
                                      handleImageChange(event);
                                      form.setFieldValue(
                                        "file",
                                        event.currentTarget.files[0]
                                      );
                                    }}
                                    className="pt-3 ml-20 lg:ml-0"
                                    title="Front Image"
                                  />
                                </div>
                              )}
                            </Field>
                          </div>
                          <div className=" w-full  flex items-center justify-center lg:w-1/2">
                            <Field name="file2">
                              {({ field, form }) => (
                                <div className="flex flex-col  ">
                                  <label htmlFor="fileUpload" className="text-center lg:text-start">
                                    Back Side Image
                                  </label>
                                  {selectedback && (
                                    <div className="mt-2">
                                      <img
                                        src={selectedback}
                                        alt="Selected Image"
                                        className="w-32 h-24 m-auto lg:m-0 lg:w-56 lg:h-36"
                                      />
                                    </div>
                                  )}
                                  {/* <input
                                    type="file"
                                    onChange={(event) => {
                                      form.setFieldValue(
                                        "file2",
                                        event.currentTarget.files[0]
                                      );
                                    }}
                                    className="pt-3"
                                  /> */}
                                  <input
                                    type="file"
                                    onChange={(event) => {
                                      handleImageBack(event);
                                      form.setFieldValue(
                                        "file2",
                                        event.currentTarget.files[0]
                                      );
                                    }}
                                    className="pt-3 ml-20 lg:ml-0"
                                    title="Front Image"
                                  />
                                </div>
                              )}
                            </Field>
                          </div>
                        </div>
                        {/* <div className="flex flex-col w-1/2  gap-y-1">
                  <label className="text-sm font-semibold px-2">
                    External Id
                  </label>
                  <Field name='externalid' className="outline-none border-[1px] border-[#4e5765] rounded-md py-[6px] px-2" />
                </div> */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-[#173563] w-full text-white  px-3 font-semibold rounded-md py-2 "
                        >
                          Scan
                        </button>
                      </Form>
                    )}
                  </Formik>
                </>
              )}
            </div>
           <div className="pb-5 mt-5 w-full lg:w-[35%]  lg:mt-0">
           <div className="border shadow-md    p-4   rounded-lg">
              <h1 className="text-lg font-semibold">Quick Document Scan</h1>
              <p>
                Use GlobalCompliance to perform a quick check of any
                individual's ID. Individual's full name will be automatically
                extracted from the provided identity document. You will receive
                a notification if they appear in the database or if they have a
                criminal record.
                <br />
                {/* <span className="font-bold">5 Credits</span> */}
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
            <Box sx={style} className='w-[90%] lg:w-[600px]'>
              {responseMessage && (
                <div className="">
                  <AppButton btnText={"Quick Document Scan"} />
                  <p className="font-semibold py-8">{responseMessage}</p>
                  <div className="w-full  flex items-center justify-end">
                    <AppButton onClick={handleCloseModal} btnText={"Cancel"} />
                  </div>
                </div>
              )}
            </Box>
          </Modal>
          {/* <p className="text-xl text-center text-white bg-black w-full">{responseMessage}</p> */}
        </div>
      </FadeIn>
    </>
  );
};

export default QuickDocumentScan;
