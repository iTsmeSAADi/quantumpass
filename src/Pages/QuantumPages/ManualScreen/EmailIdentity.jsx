import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import AppInput from "../../../Components/form/AppInput";
import { Checkbox } from "@mui/material";
import AppButton from "../../../Components/AppButton/AppButton";
import IdentityTable from "../../../Components/Tables/IdentityVerTable";
import { GiCheckMark } from "react-icons/gi";
import FadeIn from "react-fade-in/lib/FadeIn";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { baseUrl } from "../../../Config/baseUrl";
import Loader from "../../../Components/Loader/Loading";
import { useNavigate } from "react-router-dom";
const EmailIdentity = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // post data
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  console.log("companyyyyyyyyyyyy", user.companyName);

  const mytoken = user.token;
  console.log("Teken is", mytoken);
  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/manual/emailverificationidentity`,
        values,
        {
          headers: {
            token: mytoken,
          },
        }
      );
      // console.log("Data posted successfully:", response.data);
      alert("data is Added");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("Identity Verification is already exist");
      } else {
        console.error("An error occurred:", error);
        // Handle error or display an error message here
        console.log("the value is", values);
      }
    }
  };

  // Get Data
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  console.log("my data", data);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/manual/getallinvitations`,
          {
            headers: {
              token: mytoken,
            },
          }
        );
        setData(response);
        setData(response.data.result.items);

        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  const convertMillisecondsToDate = (milliseconds) => {
    const date = new Date(milliseconds);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return `${day} ${month} ${year}`;
  };
  // console.log("my data issssssssssssss".data)
  const navigate=useNavigate()
  const handleId=(id)=>{
    navigate(`/emailidentitydetail/${id}`)
    
  }
  // const navigate=useNavigate()
useEffect(() => {
  const tokens = localStorage.getItem("token");
  console.log("my tokenssssss", tokens);

  navigate("/emailidentity")

}, []); 

  return (
    <>
      <FadeIn delay={500} transitionDuration={1000}>
        <div className="px-6">
          <h1 className="text-xl lg:text-4xl font-[900] py-8 mt-5">
            Email Identity Verification
          </h1>
          <div className=" flex flex-col space-y-4 lg:flex-row justify-between gap-x-8">
            <div className="border shadow-md w-full lg:w-[65%] p-4  flex items-center justify-between rounded-lg">
              {/* <form className="w-full">
                <div className="w-full flex items-center justify-between gap-x-8">
                  <div className="w-full flex flex-col">
                    <label className="text-sm font-semibold px-2">Name</label>
                    <input
                      placeholder="Enter Name"
                      className="outline-none  border-[1px] border-[#4e5765] rounded-md py-[6px] px-2"
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="text-sm font-semibold px-2">Email</label>
                    <input
                      placeholder="Enter Eamil"
                      className="outline-none border-[1px] border-[#4e5765] rounded-md py-[6px] px-2"
                    />
                  </div>
                </div>
                <div className="py-6">
                  <Checkbox {...label} />
                </div>
                <div className="pb-5">
                  <AppButton btnText={"Invite"} />
                </div>
              </form> */}
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  company: user.companyName,
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="w-full">
                    <div className="w-full flex flex-col lg:flex-row space-y-4 items-center justify-between gap-x-8">
                      <div className="w-full flex flex-col">
                        <label
                          className="text-sm font-semibold px-2"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          className="outline-none  border-[1px] border-[#4e5765] rounded-md py-[6px] px-2"
                        />
                        {/* <div>
                     <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                     </div> */}
                      </div>
                      <div className="w-full flex flex-col">
                        <label
                          className="text-sm font-semibold px-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter Email"
                          className="outline-none border-[1px] border-[#4e5765] rounded-md py-[6px] px-2"
                        />
                        {/* <div>
                      <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 mt-2 text-sm"
                        />
                      </div> */}
                      </div>
                    </div>
                    {/* <div className="py-6">
                      <Field name="checkbox" type="checkbox" as={Checkbox} {...label} />
                    </div> */}
                    <div className="py-10">
                      <button
                        type="submit"
                        className="bg-[#173563] text-white w-fit px-3 font-semibold rounded-md py-2 "
                      >
                        Invite
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="border shadow-md w-full lg:w-[35%] p-4 h-auto  rounded-lg">
              <h1 className="text-lg font-semibold">
                Email Identity Verification
              </h1>
              <p>
                In order to invite a user to verify their identity in the Global
                Compliance platform via email, please fill in the required
                fields. Upon pressing Invite, the user will receive an email
                invitation to verify their identity.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-extrabold py-8">Invitation Sent</h1>
            {/* <IdentityTable/> */}
            {loading ? (
              <Loader />
            ) : (
              <>
              <div className=" lg:w-full  overflow-x-auto max-w-full">
              <table className="w-[1600px] lg:w-full   rounded-lg shadow-md ">
                  <tr className="text-lg ">
                    <th className="py-4">Screening Token</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Completed</th>
                    <th>Updated Request</th>
                    <th>Linked Open</th>
                    <th>Created</th>
                    <th>Company</th>
                  </tr>

                  {data?.map((items, index) => (
                    <tr
                      key={index}
                      onClick={() => handleId(items?.id)}
                      className="border border-t hover:bg-gray-100 cursor-pointer border-b-0 border-r-0 border-l-0 text-center text-lg space-y-2"
                    >
                      <td className="py-4 text-sm">{items?.id}</td>
                      {console.log(
                        "the items is ssssssssssssssssssssssss",
                        items
                      )}
                      <td className="text-sm">{items?.fullName} </td>
                      <td className="text-sm">hazeatzahid@gmail.com</td>
                      <td className="text-green-600 text-center">
                        <GiCheckMark size={20} className="m-auto" />
                      </td>
                      <td className="text-green-600 text-center">
                        <GiCheckMark size={20} className="m-auto" />
                      </td>
                      <td className="text-sm">9/2/2022</td>
                      <td className="text-sm">9/2/2022</td>
                      <td className="text-sm">Test Company</td>
                    </tr>
                  ))}
                </table>
              </div>
              
              </>
            )}
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default EmailIdentity;
