import React, { useState, useRef } from "react";
import { FaLeaf, FaVideo } from "react-icons/fa";
import { ReactMediaRecorder } from "react-media-recorder";
const VideoRecorder = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [show, setShow] = useState(true);
  const [showStop, setshowStop] = useState(false);



  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      mediaRecorderRef.current = new MediaRecorder(stream);
      setShow(false)
      setshowStop(true)

      const chunks = [];
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const videoURL = URL.createObjectURL(blob);
        console.log(videoURL); // You can use this URL to display or save the video.
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    //   setShow(true)
    }
  };

  return (
    // <div>
    //   <video ref={videoRef} autoPlay muted style={{ maxWidth: "70%" }} className="rounded-lg m-auto flex items-center justify-center" />
    //   <button onClick={startRecording} disabled={isRecording}>
    //    {
    //     show &&  <div className="shadow-lg w-44 py-6 space-y-4 rounded-lg border-[1px] border-gray-500 flex items-center justify-center flex-col">
    //       <FaVideo
    //         size={30}
    //         className="border-2 p-1 text-white rounded-full bg-blue-400"
    //       />
    //       <p className="font-bold">Start video</p>
    //       <p className="font-bold">recording</p>
    //     </div>
    //    }
    //   </button>
    //   {
    //     showStop &&  <button className="text-center w-full" onClick={stopRecording} disabled={!isRecording}>
    //     Stop Recording
    //   </button>

    //   }
     
    // </div>
    <div>
    <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
           <p>{status}</p>
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      {isRecording && (
        <video src={mediaBlobUrl} controls autoPlay loop />
      )}
        </div>
      )}
    />
  </div>
  );
};

export default VideoRecorder;
