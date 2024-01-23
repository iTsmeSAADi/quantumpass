import React from "react";
import { AiFillCamera } from "react-icons/ai";
import AppButton from "../../../../Components/AppButton/AppButton";

const PassportFront = () => {
  return (
    <div className=" w-[75%] m-auto">
      <h1 className="text-2xl font-bold -mt-14 py-2">
        Front of your passport{" "}
      </h1>
      <p className="py-5">
        Please do not cover any information with your finger
      </p>
      <div className="bg-gray-200 border-[1px] rounded-lg border-black px-8 py-12 space-y-8  font-semibold">
        <div className="flex items-center gap-x-6">
          <div className="w-[30%] h-32 bg-red-600"></div>
          <p className="">please scan the first page of your passport</p>
        </div>
        <div className="rounded-lg w-[30%] flex items-center justify-center m-auto h-52 border-[1px] border-gray-400">
          <div className="flex flex-col space-y-4">
            <div className="bg-blue-950 w-10 h-10 flex items-center justify-center m-auto text-white rounded-full p-1 ">
              <AiFillCamera size={24} />
            </div>
            <p className="font-bold text-blue-950">Take A Photo</p>
          </div>
        </div>
      </div>
      <form className="flex items-center gap-x-4 w-[80%] py-5">
        <input className=" w-56" type="file"></input>
        <label className="text-sm">
          Supported formats: jpg,png,heic
        </label>
      </form>

      {/* <AppButton btnText={'Next Step'}/> */}
    </div>
  );
};

export default PassportFront;
// import React, { useState } from "react";
// import { AiFillCamera } from "react-icons/ai";
// import Webcam from "react-webcam"; // Import the react-webcam library

// const PassportFront = () => {
//   const [photoURL, setPhotoURL] = useState(null);

//   const handleCapturePhoto = () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setPhotoURL(imageSrc);
//     }
//   };

//   const resetCapture = () => {
//     setPhotoURL(null);
//   };

//   const webcamRef = React.useRef(null);

//   return (
//     <div className="w-[75%] m-auto">
//       <h1 className="text-2xl font-bold -mt-14 py-2">Front of your passport </h1>
//       <p className="py-5">Please do not cover any information with your finger</p>
//       <div className="bg-gray-200 border-[1px] rounded-lg border-black px-8 py-12 space-y-8 font-semibold">
//         <div className="flex items-center gap-x-6">
//           <div className="w-[30%] h-32 bg-red-600"></div>
//           <p className="">please scan the first page of your passport</p>
//         </div>
//         <div className="rounded-lg w-[30%] flex items-center justify-center m-auto h-52 border-[1px] border-gray-400">
//           {photoURL ? (
//             <img src={photoURL} alt="Captured Passport" />
//           ) : (
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               width={480}
//               height={360}
//             />
//           )}
//         </div>
//         <div className="flex flex-col space-y-4">
//           {photoURL ? (
//             <div
//               className="bg-blue-950 w-10 h-10 flex items-center justify-center m-auto text-white rounded-full p-1"
//               onClick={resetCapture}
//             >
//               <AiFillCamera size={24} />
//             </div>
//           ) : (
//             <div
//               className="bg-blue-950 w-10 h-10 flex items-center justify-center m-auto text-white rounded-full p-1"
//               onClick={handleCapturePhoto}
//             >
//               <AiFillCamera size={24} />
//             </div>
//           )}
//           <p className="font-bold text-blue-950">Take A Photo</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PassportFront;

