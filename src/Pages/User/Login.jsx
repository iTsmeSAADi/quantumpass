import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { baseUrl } from "../../Config/baseUrl";
import { useDispatch } from "react-redux";
import { SetAuth } from "../../Store/Slice/AuthSlice";
import FadeIn from "react-fade-in/lib/FadeIn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiMail, HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import Loader from "../../Components/Loader/Loading";
import logo from '../../Images/changesLogo.png'

const Login = () => {
  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/register");
  };
  const toScreening = () => {
    navigate("/screening");
  };
  const goToverification = () => {
    navigate("/identity");
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  

    const handleSubmit = async (values, { setSubmitting }) => {
      console.log("handlSbmitted")
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/login`, values);
      console.log(response.data);
      if (response.status === 200) {
   
      
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.user.token));

        console.log("teken isssssssssssss..................",response.data.user.token);
        dispatch(SetAuth(response.data.user));
        // navigate("/screening");
        navigate("/screening", { state: { user: response.data.user } });
        // if (rememberMe) {
        //   localStorage.setItem("email", values.email);
        //   localStorage.setItem("password", values.password);
        // } else {
        //   localStorage.removeItem("email");
        //   localStorage.removeItem("password");
        // }
        // window.location.reload("true");
        // setLoading(false)
        toast("Login Successfully")
      }
    } catch (error) {
      console.log("API response:", error.request.status);
      console.error("API error:", error);
      console.log("show error error:", error);
      // alert("Incorrect Password");
      toast("Incorrect Password")
      // setLoading(false)
    }
    setSubmitting(false);
  };


  return (
 
      <div className="flex justify-between flex-col lg:flex-row">
    <div className=" lg:w-1/2 h-[50vh] lg:h-[100vh] flex items-center justify-center text-white bg-[#173563]">
    <ToastContainer toastStyle={{ backgroundColor: "crimson",color:"white",left:0, }} />
      {/* <h1 className="text-5xl font-bold">QuantumPass</h1> */}
    <div className="w-[90%]">
    <img src={logo}></img>
    </div>
    </div>
   
    <div className="lg:w-1/2 h-[50vh] lg:[100vh] p-3">
    <FadeIn  delay={300} transitionDuration={1000} >
      <div className="flex justify-end ">
      
      </div>
      <div className="px-3">
        <h1 className="text-4xl font-bold py-4 lg:mt-20">Log in</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className=" w-full lg:w-[70%] lg:mt-6 flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <label>Email</label>
                <div className="border flex gap-x-1 items-center shadow-sm rounded-md py-[5px] outline-none px-2">
                <HiMail size={28} className="text-gray-400"/>
                <Field
                  type="text"
                  name="email"
                  className="w-full outline-none bg-white"
                />
                </div>
              
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Password</label>
                <div className="border flex gap-x-1 items-center shadow-sm rounded-md py-[5px]  outline-none px-2">
                <RiLockPasswordFill size={24} className="text-gray-400"/>
                <Field
                  type="password"
                  name="password"
                  className="w-full outline-none"
                />
                </div>
                
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/* <div className="flex items-center gap-x-3">
                <Field type="checkbox" name="rememberMe" />
                <label>Remember me</label>
              </div> */}
              <button
                type="submit"
                className="bg-[#173563] cursor-pointer text-white w-28 tracking-wider text-lg rounded-md py-1"
                disabled={isSubmitting}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
      </FadeIn>
    </div>
   
  </div>
     

  
  );
};

export default Login;
