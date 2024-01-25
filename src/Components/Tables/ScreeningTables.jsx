import React, { useEffect, useState } from "react";
import { AiFillCopy } from "react-icons/ai";
import axios from "axios";
import { baseUrl } from "../../Config/baseUrl";
import Loader from "../Loader/Loading";
import { useNavigate } from "react-router-dom";

const ScreeningTables = ({ searchTerm }) => {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  const mytoken = user.token;
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v1/getallscreenings`, {
          headers: {
            token: mytoken,
          },
        });

        setData(response.data?.docscansandforensics || []);
        console.log('data is', data)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [mytoken]);

  const convertMillisecondsToDate = (milliseconds) => {
    const date = new Date(milliseconds);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return `${day} ${month} ${year}`;
  };

  const navigate = useNavigate();
  const handleId = (id) => {
    navigate(`/screeningtoken/${id}`);
  };
  const handleName = (id) => {
    navigate(`/screeningtoken/${id}`);
  };

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 10);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="lg:w-full overflow-x-auto max-w-full">
<table className="w-[1600px] lg:w-full mt-12 overflow-x-auto space-y-4">
  {/* Header Row */}
  <tr className="py-12">
    <th>Name</th>
    <th>Screening Token</th>
    <th>Documents Number</th>
    {/* <th>Nationality</th> */}
    <th>Type</th>
    <th>Created</th>
    <th>Completed By</th>
    <th>Company</th>
  </tr>

  {/* Data Rows */}
  {data
    .filter(
      (item) =>
        (item?.result?.result?.fullName ||
          item?.fullName)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    )
    .slice(0, displayCount)
    .map((items, index) => (
      <tr
        key={items._id}
        className="text-center h-14 text-sm shadow border-b"
      >
        <td className="hover:text-blue-600 hover:scale-110 cursor-pointer">
          <div
            onClick={() => handleName(items._id)}
            className="flex items-center text-blue-900 gap-x-2 pl-2"
          >
            <AiFillCopy /> {items.result?.result?.fullName || items.fullName}
          </div>
        </td>

        <td className="mt-12">
          <div>
            <p
              onClick={() => handleId(items._id)}
              className="hover:text-blue-600 hover:scale-110 text-blue-900 cursor-pointer"
            >
              {items._id}
            </p>
          </div>
        </td>
        <td>{items.result?.result?.documentNumber || items.doc_id}</td>
        {/* <td>{items.result?.result?.nationality_full}</td> */}
        <td>{items.manualScreeningType}</td>
        <td>{convertMillisecondsToDate(items.createdAt)}</td>
        <td>{items.fk_admin.admin_name}</td>
        <td>{items.company.name}</td>
      </tr>
    ))}
</table>



          {/* Load More Button */}
          {displayCount < data.length && (
          <div style={{
            textAlign: 'center',
            margin: '8px',
            marginTop: '4px'
          }}>
                        <button
              onClick={handleLoadMore}
              className="mt-4 p-2 bg-blue-500 text-white rounded cursor-pointer"
              style={{backgroundColor: 'rgb(30 58 138)',
                padding: '4px 8px',
                fontSize: '14px',}}
            >
              Load More
            </button>
          </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ScreeningTables;
