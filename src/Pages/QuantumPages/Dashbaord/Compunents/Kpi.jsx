import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../../../../Components/Navbar/Navbar';

const Kpi = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
  return (
    <>
        <div className='px-6'>
           <h1 className="text-4xl font-[900] py-8 mt-5">KPI Report</h1>

           <form className="flex gap-x-5 items-center  justify-between">
    <div className='flex flex-col w-full'>
    <label>From</label>
          <div className="w-full px-2 rounded-lg border py-[5px] shadow-sm outline-none">
            <DatePicker
              placeholderText="From Date"
              className="outline-none"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
    </div>
        <div className='flex flex-col w-full'>
        <label>To</label>
          <div className="w-full px-2 rounded-lg border py-[5px] shadow-sm outline-none">
            <DatePicker
              placeholderText="To Date"
              className="outline-none"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
        </div>
      
        </form>
    
    <table className="w-full   rounded-lg shadow-md ">
      <tr className="text-sm ">
        <th className="py-4">Admin</th>
        <th>Manual Completion</th>
        <th>Auto Completed Reviews</th>
        <th>Manually Completed screening Sent Again</th>
        <th>Auto Completed screening Sent Again</th>
        <th>Initail Checks</th>
        <th>Forensics</th>
        <th>Total</th>




      </tr>
      <tr className="border border-t border-b-0 border-r-0 border-l-0 text-center text-lg space-y-2">
        <td className="py-4 text-sm font-semibold">Total</td>
        <td className='text-sm font-semibold'>0</td>
        <td className='text-sm font-semibold'>0</td>
        <td className='text-sm font-semibold'>0</td>
        <td className='text-sm font-semibold'>0</td>
        <td className='text-sm font-semibold'>0</td>
        <td className='text-sm font-semibold'>0</td>
        <td className='text-sm font-semibold'>0</td>

      </tr>
     
    </table>
    </div>
    </>
  )
}

export default Kpi