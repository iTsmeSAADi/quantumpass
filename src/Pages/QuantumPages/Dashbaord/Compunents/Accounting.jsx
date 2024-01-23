import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../../../Components/Navbar/Navbar";

const Accounting = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
   <>
     <div className="px-6">
      <h1 className="text-4xl font-[900] py-8 mt-5">Accounting</h1>

      <table className="w-full   rounded-lg shadow-md ">
        <tr className="text-xl ">
          <th className="py-4">Company</th>
          <th>Require Manual Completion</th>
          <th>Auto Complete</th>
        </tr>
        <tr className="border border-t border-b-0 border-r-0 border-l-0 text-center text-lg space-y-2">
          <td className="py-4">Test Company</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr className="border border-t border-b-0 border-r-0 text-center border-l-0 text-lg space-y-2">
          <td className="py-4">Centro Moctezuma</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </table>
      <div>
        <h1 className="text-4xl font-[900] py-5 ">Accounting</h1>
        <form className="flex gap-x-5 items-center  justify-between">
          <select className="w-full px-2 border py-[6px] rounded-lg shadow-sm">
            <option>Zong</option>
            <option>Zong</option>
            <option>Zong</option>
            <option>Zong</option>
          </select>
          {/* <input  className="w-full px-2 rounded-lg py-1 border shadow-sm" type="date"></input> */}
          <div className="w-full px-2 rounded-lg border py-[5px] shadow-sm outline-none">
            <DatePicker
              placeholderText="From Date"
              className="outline-none"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="w-full px-2 rounded-lg border py-[5px] shadow-sm outline-none">
            <DatePicker
              placeholderText="From Date"
              className="outline-none"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
          <button
            type="submit"
            className="bg-[#173563] rounded-lg shadow-sm border w-full text-white py-1"
          >
            Search
          </button>
        </form>
      </div>
    </div>
   </>
  );
};

export default Accounting;
