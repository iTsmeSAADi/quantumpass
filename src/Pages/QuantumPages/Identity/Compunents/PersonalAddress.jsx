import React from 'react'

const PersonalAddress = () => {
  return (
    <div className='w-[80%] m-auto'>
     <h1 className="text-2xl font-bold -mt-14 py-4">
        Confirm your personal address{" "}
      </h1>
      <div className="flex items-center gap-x-2">
        <p className=" w-36">Personal detail</p>
        <div className="h-[2px] w-full bg-[#cfcccc]"></div>
      </div>
        <div>
        <form>
        <div >
         
         <div className="flex gap-x-3 py-3">
         <div className="flex w-1/2 flex-col">
            <label className="text-sm ">ADDRESS </label>
            <input type="text" className="outline-none px-2  mt-1 rounded-tl-md rounded-tr-none py-2 border-t  border-l" placeholder="Address"></input>
          </div>
          <div className="flex w-1/2 flex-col">
            <label className="text-sm ">CITY</label>
            <input type="text" className="outline-none px-2 mt-1  rounded-tl-none rounded-tr-md py-2 border-t border-r" placeholder="City"></input>
          </div>
         </div>
         <div className="flex gap-x-3 py-3">
         <div className="flex w-1/2 flex-col mt-2">
            <label className="text-sm uppercase ">Post Code*</label>
            <input type="text" className="outline-none px-2  mt-1  rounded-bl-md rounded-tr-md py-2 border-b  border-l" placeholder="Post Code"></input>
          </div>
          <div className="flex w-1/2 flex-col">
            <label className="text-sm uppercase">Country of residence </label>
            <input type="text" className="outline-none px-2 mt-3 rounded-bl-none rounded-br-md py-2 border-b border-r" placeholder="Country of residence"></input>
          </div>
         </div>
         <div className='py-4'>
            <input type='file'></input>
            <label>Supported formate: mp4,avi,move,webm</label>
         </div>
        </div>
      </form>
        </div>
    </div>
  )
}

export default PersonalAddress