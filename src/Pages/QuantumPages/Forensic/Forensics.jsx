import React from 'react'
import ForensicsTable from '../../../Components/Tables/ForensicsTable'
import Navbar from '../../../Components/Navbar/Navbar'
import { RxCrossCircled } from 'react-icons/rx'
import StickyHeadTable from '../../../Components/Tables/ForensicsTable'

const Forensics = () => {
  return (
    <div>

   <div className='px-6'>
   <h1 className="text-3xl font-semibold py-5">Forensics Anaylsis</h1>
   <div className="flex items-center w-[90%] gap-x-4">
          <input
            type="text"
            className="border w-full outline-none rounded-md px-1 py-1"
            placeholder="Text Search"
          />
          <select className="outline-none border rounded-md px-1 py-[5px] w-full ">
            <option disabled selected hidden>
              Status
            </option>{" "}
            <option className='py-4'>Status</option>
            <option>Accepted</option>
            <option>Rejected</option>
           
          </select>
          <select className="outline-none border rounded-md px-1 py-[5px] w-full ">
            <option disabled selected hidden>
              Company
            </option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        

       
        
          <button ><RxCrossCircled size={22}/></button>
        </div>

<div className='py-4'>
<StickyHeadTable/>
</div>
   </div>
    </div>
  )
}

export default Forensics