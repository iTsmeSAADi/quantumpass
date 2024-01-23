import React, { useEffect, useState } from "react";
import UserManagementTable from "../../../Components/Tables/UserManagementTable";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { RxCross2 } from "react-icons/rx";
import AppButton from "../../../Components/AppButton/AppButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FadeIn from "react-fade-in/lib/FadeIn";
import axios from "axios";
import { baseUrl } from "../../../Config/baseUrl";
import Loader from "../../../Components/Loader/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 850,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const validationSchemaUser = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const UserManagement = ({ userRole }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");
  const [data, setData] = useState([]);

  const [selectedCompany, setSelectedCompany] = useState();
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  console.log(
    "local storage Data is dataaaa ...............",
    user.companyName
  );
  const mytoken = user.token;
  console.log("my toekn issssewewew", mytoken);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${baseUrl}/api/v1/company`, {
  //         headers: {
  //           token: mytoken,
  //         },
  //       });
  //       setData(response.data);
  //       console.log("Company data................:", response.data.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

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

      console.log("Data posted successfully:", response.data.message);
      // alert(response.data.message);
      setOpen(false);
      toast.success(response.data.message);
      fetchData();
    } catch (error) {
      console.error("An error occurred:", error);
      console.log("the value is", values);
    }
  };

  const handleUser = async (values) => {
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
      // alert(response.data.message);
      toast.success(response.data.message);
      console.log(
        "Data posted successfully Messsageeeeee:",
        response.data.message
      );
      setLoading(false);
      setOpen(false);
      fetchData();
    } catch (error) {
      console.error("An error occurred:", error);
      console.log("the value is", values);
      setLoading(false);
    }
  };

  // get User
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${baseUrl}/api/v1/company/users`, {
  //         headers: {
  //           token: mytoken,
  //         },
  //       });
  //       setData(response.data);
  //       console.log("get.............", response.data.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/company/users`, {
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


  console.log("my data is ", data);

  return (
    <div>
      <FadeIn delay={500} transitionDuration={1000}>
        <ToastContainer
          toastStyle={{
            backgroundColor: "#173563",
            color: "white",
            left: 10,
            top: 15,
          }}
          closeButton={() => <div style={{ color: "white" }}>X</div>}
        />

        <div className="px-6">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <h1 className="text-xl lg:text-3xl font-semibold py-5">User Management</h1>
            <button
              type="button"
              onClick={handleOpen}
              className="bg-[#173563] text-white text-sm lg:text-base rounded-md px-3 py-2"
            >
              Invite New User
            </button>
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
                <Box sx={style} className='w-[90%] lg:w-[850px]'>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Invite New User</h1>
                    <button
                      onClick={handleClose}
                      type="button"
                      className="bg-black cursor-pointer text-white w-7 h-7 flex items-center justify-center rounded-full"
                    >
                      <RxCross2 size={18} />
                    </button>
                  </div>
                  <div className="py-3">
                    <AppButton btnText={"Company"} />
                  </div>

                  {user.role === "superAdmin" ? (
                    <>
                      <Formik
                        initialValues={{
                          name: "",
                          email: "",
                          password: "",
                          companyName: "",
                          role: "user",
                          companyName: "",
                        }}
                        validationSchema={validationSchemaUser}
                        onSubmit={onSubmit}
                      >
                        {({ isSubmitting }) => (
                          <Form>
                            {/* Rest of your form content... */}
                            <div className="py-3">
                              <label className="pb-2 font-bold">
                                Enter Email
                              </label>
                              <Field
                                type="text"
                                name="email"
                                autoComplete="off"
                                className="w-full outline-none py-1 mt-1 rounded-lg border px-2"
                                placeholder="Enter Your Email"
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                            <div className="py-3">
                              <label className="pb-2 font-bold">
                                Enter Password
                              </label>
                              <Field
                                autoComplete="off"
                                type="password"
                                name="password"
                                className="w-full outline-none py-1 mt-1 rounded-lg border px-2"
                                placeholder="Password"
                              />
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="text-red-500"
                              />
                            </div>

                            <>
                              <div className="pb-3 flex flex-col gap-y-1">
                                <label className=" font-bold ">
                                  Select Companies
                                </label>

                                <Field
                                  as="select"
                                  name="companyName"
                                  className="px-2 py-[6px] outline-none border rounded-md shadow-md"
                                >
                                  <option value="">Select a company</option>
                                  {data?.data?.map((item, index) => (
                                    <option
                                      key={index}
                                      value={item.companyName}
                                    >
                                      {item?.companyName}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </>

                            <hr />
                            <div className="flex items-center justify-end gap-x-2 py-3">
                              <AppButton
                                onClick={handleClose}
                                btnText={"Close"}
                                textColor="#000"
                                bgColor="#cfcccc"
                              />
                              <AppButton btnText={"Save"} />
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </>
                  ) : (
                    <>
                      {loading ? (
                        <div className="">
                          <Loader />
                        </div>
                      ) : (
                        <Formik
                          initialValues={{
                            name: user.companyName,
                            email: "",
                            password: "",
                            role: "user",
                            companyName: user.companyName,
                          }}
                          validationSchema={validationSchemaUser}
                          onSubmit={handleUser}
                        >
                          {({ isSubmitting }) => (
                            <Form>
                              <div className="py-3">
                                <label className="pb-2 font-bold">
                                  Enter Email
                                </label>
                                <Field
                                  type="text"
                                  name="email"
                                  autoComplete="off"
                                  className="w-full outline-none py-1 mt-1 rounded-lg border px-2"
                                  placeholder="Enter Your Email"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className="text-red-500"
                                />
                              </div>
                              <div className="py-3">
                                <label className="pb-2 font-bold">
                                  Enter Password
                                </label>
                                <Field
                                  autoComplete="off"
                                  type="password"
                                  name="password"
                                  className="w-full outline-none py-1 mt-1 rounded-lg border px-2"
                                  placeholder="Password"
                                />
                                <ErrorMessage
                                  name="password"
                                  component="div"
                                  className="text-red-500"
                                />
                              </div>

                              <div className="py-3">
                                <label className="pb-2 font-bold">
                                  Company
                                </label>
                                <Field
                                  type="text"
                                  name="companyName"
                                  className="w-full outline-none py-1 mt-1 rounded-lg border px-2"
                                  placeholder="Company"
                                />
                                <ErrorMessage
                                  name="company"
                                  component="div"
                                  className="text-red-500"
                                />
                              </div>

                              <hr />
                              <div className="flex items-center justify-end gap-x-2 py-3">
                                <AppButton
                                  onClick={handleClose}
                                  btnText={"Close"}
                                  textColor="#000"
                                  bgColor="#cfcccc"
                                />
                                <AppButton btnText={"Save"} />
                              </div>
                            </Form>
                          )}
                        </Formik>
                      )}
                    </>
                  )}
                </Box>
              </Fade>
            </Modal>
          </div>
          <div className=" lg:w-full py-4  overflow-x-auto max-w-full">
            {/* <UserManagementTable /> */}
            <table className=" w-[800px] lg:w-full   shadow-md">
              <tr className="px-2 py-1 rounded-md border-b">
                <th className="text-start px-2 py-1">User_Id</th>
                <th className="text-start">Email</th>
                <th className="text-start">Role</th>
                <th className="text-start">Company</th>
              </tr>
              {loading ? (
                <div className="ml-96">
                  {" "}
                  <Loader />
                </div>
              ) : (
                <>
                  {data?.data?.map((items) => (
                    <tr className="rounded-md border-b  ">
                      <td className="py-2 px-2">{items._id}</td>
                      <td>{items.email}</td>
                      <td>{items.role}</td>
                      <td>{items.companyName}</td>
                    </tr>
                  ))}
                </>
              )}
            </table>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default UserManagement;
