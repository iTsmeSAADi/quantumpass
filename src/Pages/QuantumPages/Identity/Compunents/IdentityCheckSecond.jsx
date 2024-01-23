import React from 'react'
import VideoRecorder from './Video'

const IdentityCheckSecond = () => {
  return (
    <div>
           <h1 className="text-2xl font-bold">Record yourself </h1>
              <h1 className="text-lg font-bold py-5">
                Record a video of yourself using your device camera{" "}
              </h1>

              <div className="bg-gray-200 border-[1px] rounded-lg border-black px-8 py-12 space-y-8  font-semibold">
                <div className="space-y-3 flex  justify-end  text-start">
                  <div>
                    <p>1: Facing the device camera for few seconds</p>
                    <p>
                      2: Then turn your head to the right and the to the left
                    </p>
                  </div>
                </div>
                <div className="border rounded-lg  flex flex-col items-center justify-center">
                  {/* <div className="shadow-lg w-44 py-6 space-y-4 rounded-lg border-[1px] border-gray-500 flex items-center justify-center flex-col">
                    <FaVideo
                      size={30}
                      className="border-2 p-1 text-white rounded-full bg-blue-400"
                    />
                    <p className="font-bold">Start video</p>
                    <p className="font-bold">recording</p>
                  </div> */}
                  <VideoRecorder/>
                </div>
              </div>
              <form className="py-3">
                <input type="file"></input>
                <label>Supported Formates:mp4,avi,mov,webm</label>
              </form>
    </div>
  )
}

export default IdentityCheckSecond