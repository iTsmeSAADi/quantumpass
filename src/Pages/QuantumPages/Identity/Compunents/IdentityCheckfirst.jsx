import React, { useState } from 'react'
import { GiBilledCap } from 'react-icons/gi'
import AppButton from '../../../../Components/AppButton/AppButton'
import { IoMdGlasses } from 'react-icons/io'
import { FaVideo } from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'

const IdentityCheckfirst = () => {
    const [show, setshow] = useState(true);
    const [next, setNext] = useState(false);
    const hanfeVerification = () => {
      setshow(false);
      setNext(true);
    };
  return (
    <>
    <div>
      <h1 className="text-2xl font-bold">Record yourself </h1>
      <p className="py-8 font-semibold">
        NOTE: On the next page you will be required to make a video of
        youself. For a faster and more comfortable user experience
        please keep these tips in mind:
      </p>
      <div className="bg-gray-200 border-[1px] rounded-lg border-black px-8 py-12 space-y-8  font-semibold">
        <p className="flex items-center gap-x-2">
          {" "}
          <HiLightBulb
            size={30}
            className="border-2 p-1 rounded-full border-green-500"
          />
          Make sure your face is well lit.
        </p>
        <p className="flex items-center gap-x-2">
          <FaVideo
            size={30}
            className="border-2 p-1 rounded-full border-green-500"
          />
          Make sure the camera is the same level as your face.
        </p>
        <p className="flex items-center gap-x-2">
          {" "}
          <IoMdGlasses
            size={40}
            className="border-2 rounded-full  p-1 border-green-500"
          />
          Make sure to remove your glasses if they are not in the
          identity document picture. If your must wear medical
          glasses, please make sure there are no reflection that would
          cover your eyes.
        </p>
        <p className="flex items-center gap-x-2">
          <GiBilledCap
            size={30}
            className="border-2 p-1 rounded-full border-green-500"
          />
          Please do not wear any head accessories if they are not
          present in the identity document picture
        </p>
      </div>
    </div>
   
  </>
  )
}

export default IdentityCheckfirst