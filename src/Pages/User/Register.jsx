import React from 'react'
import AppInput from '../../Components/form/AppInput'

const Register = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row">
    <div className=" lg:w-1/2 h-[100vh] flex items-center justify-center text-white bg-[#173563]">
      <h1 className="text-5xl font-bold">QuantumPass</h1>
    </div>
    <div className="lg:w-1/2 p-3">
      <div className="flex justify-end ">
        <button
          type="button"
          className="bg-[#173563] text-white text-lg px-2 py-1 rounded-md"
        >
          Login
        </button>
      </div>
<div className="px-3">
<h1 className="text-4xl font-bold mt-20">Register</h1>
<form className="w-[70%] mt-6 flex flex-col gap-y-3">
  <div className="flex flex-col gap-y-2">
      <label>
          Email
      </label>
      <input type="text" className="border shadow-sm rounded-md py-1 outline-none px-2 "></input>
  </div>
  <div className="flex flex-col gap-y-2 ">
{/* <AppInput label="Name" placeholder="user Name" onChange={e=>alert("khi")}/> */}
      <label>
          Name
      </label>
      <input type="text" className="border shadow-sm rounded-md py-1 outline-none px-2 "></input>
  </div>
  <div className="flex flex-col gap-y-2 ">
      <label>
          Contact
      </label>
      <input type="text" className="border shadow-sm rounded-md py-1 outline-none px-2 "></input>
  </div>
  <div className="flex flex-col gap-y-2 ">
      <label>
          Password
      </label>
      <input type="text" className="border shadow-sm rounded-md py-1 outline-none px-2 "></input>
  </div>
  

  <button className="bg-[#173563] text-white w-24 px-3 rounded-md py-2 ">Register</button>
  


</form>

</div>
    </div>
  </div>  )
}

export default Register