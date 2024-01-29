import React, { useEffect, useState } from "react";
import AppButton from "../../../../Components/AppButton/AppButton";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { MdInsertComment } from "react-icons/md";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import Chip from '@mui/material/Chip';
import { Alert, Box, Button, CardContent, CircularProgress, Fade, IconButton, Modal, Stack, Typography } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import Backdrop from "@mui/material/Backdrop";
import FadeIn from "react-fade-in/lib/FadeIn";
import axios from "axios";
import { baseUrl } from "../../../../Config/baseUrl";
import Loader from "../../../../Components/Loader/Loading";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/joy/Card';
import  AspectRatio  from '@mui/icons-material/AspectRatio';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Close from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const ScreeningToken = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedTwo, setSelectedTwo] = useState(false);
  const [selectedThree, setSelectedThree] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  const mytoken = user.token;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { _id: screeningToken } = useParams(); // Corrected usage of useParams


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDetail = () => {
    setShowDetail(!showDetail);
  };

  const handleForensic = () => {
    setShowForensic(!showForensic);
  };

  const handleDivClick = () => {
    setSelected(!selected);
  };

  const handleDivClickTwo = () => {
    setSelectedTwo(!selectedTwo);
  };

  const handleDivClickThree = () => {
    setSelectedThree(!selectedThree);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleLoadMore = () => {
    setDataDisplayCount((prevCount) => prevCount + 10);
  };

  const convertMillisecondsToDate = (milliseconds) => {
    const date = new Date(milliseconds);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return `${day} ${month} ${year}`;
  };
  
  function extractOrigValues(data, doc_url) {
    console.log('doc_id', doc_url)
    const extractedValues = [];
    // Function to recursively extract orig_value from nested objects
    const extractOrigValue = (obj, parentKey = '') => {
        for (const key in obj) {
            const currentKey = parentKey ? `${parentKey}.${key}` : key;

            if (obj[key] !== null && typeof obj[key] === 'object') {
                extractOrigValue(obj[key], currentKey);
            } else {
                // Check if the key is "orig_value" and obj[key] is truthy before rendering
                if (key === 'orig_value' && obj[key]) {
                    extractedValues.push(
                        <div key={obj[key]}>
                            <strong>{currentKey.split('.')[4]}:</strong> {obj[key]}
                        </div>
                    );
                }
            }
        }
    };

    // Extract orig_value from the provided data
    extractOrigValue(data, doc_url);

    
    console.log('.length', extractedValues.length)
    if(extractedValues.length > 0){
      return extractedValues;
    }
    else{
      console.log('doc_id', doc_url.replace(/^"(.*)"$/, '$1'));
      let review_url = doc_url.replace(/^"(.*)"$/, '$1')
            
      return (
        <>
          <h1 style={{ fontSize: '22px', color: '#173563' }}>Nothing to preview</h1>
          <br />
          <h1 style={{ color: '#173563' }}>Review this document</h1>
          <br />
          <Button style={{ marginTop: '10px' }} variant="contained" color="success">
          <a
  target='_blank'
  style={{ color: 'white', textDecoration: 'none' }}
  rel="noreferrer"
  href={review_url}
  id={review_url}
>
  Review Now
</a>
          </Button>
        </>
      );
      
    }
}




  const isValidUrl = (url) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

function isImageFile(url) {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'];

  console.log('url', url)
  
  // Split the URL by '?' to remove parameters and query strings
  const urlParts = url?.split('?');
  
  // Get the file extension from the first part
  const fileExtension = urlParts[0]?.split('.').pop().toLowerCase();
  console.log('fileExtension', fileExtension);
  
  return imageExtensions.includes(fileExtension);
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/manual/screeningReport/${screeningToken}`,
          {
            headers: {
              token: mytoken,
            },
          }
        );
  
          console.log('response.data?.screeningReport', response.data?.screeningReport.manualScreeningType)
          setData(response.data);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount
  

return data.success ? (
  data.screeningReport.manualScreeningId === 1 ? (
    <FadeIn delay={500} transitionDuration={1000}>
      <div className="px-6">
        {loading ? (
          <></>
        ) : (
          <>
<<<<<<< HEAD
            <div className="flex items-start gap-x-3 mt-8" style={{ marginLeft: '30px' }}>
=======
            <div className="flex items-center gap-x-3 mt-8" style={{ marginLeft: '30px' }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
              <h1 className="text-4xl font-semibold">{data.screeningReport.manualScreeningType}</h1>
            </div>
            <div className="px-6">
              <div className="px-4 py-6 gap-x-3 mt-4 border shadow-lg rounded-lg">
<<<<<<< HEAD
                <div className="flex flex-col lg:flex-row  justify-between gap-x-8">
                  <div style={{ width: '100%', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }} className="border shadow-md w-full lg:w-[65%] p-4 h-[50%]  flex items-start justify-between rounded-lg">
=======
                <div className="flex gap-x-3 items-center justify-between">
                  <Card sx={{ width: 'calc(33% - 1rem)', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                    <div>
                      <Typography level="title-xl" fontWeight="bold" mb={2}>
                        Basic Information
                      </Typography>
                      <Typography level="body-md" mb={1}>
                        {`Full Name: ${data.screeningReport.result.result.fullName}`}
                      </Typography>
                      <Typography level="body-md" mb={1}>
                        {`Sex: ${data.screeningReport.result.result.sex === "M" ? "Male" : "Female"}`}
                      </Typography>
                      <Typography level="body-md" mb={1}>
                        {`Company: ${data.screeningReport.company.name}`}
                      </Typography>
                      <Typography level="body-md" mb={1}>
                        {`Age: ${data.screeningReport.result.result.age}`}
                      </Typography>
                      <Typography level="body-md" mb={1}>
                        {`Document Number: ${data.screeningReport.result.result.documentNumber}`}
                      </Typography>
                      <Typography level="body-md" mb={1}>
                        {`Nationality: ${data.screeningReport.result.result.nationality_full}`}
                      </Typography>
                      <Typography level="body-md" mb={1}>
                        {`Date of Birth: ${data.screeningReport.result.result.dob}`}
                      </Typography>
                      <Typography level="body-md" mb={1}>
                        {`Issued Date: ${data.screeningReport.result.result.issued}`}
                      </Typography>
                      <Typography level="body-md" mb={1}>{`Expiry Date: ${data.screeningReport.result.result.expiry}`}</Typography>
                      <Typography level="body-md" mb={1}>
                        Verification Status: {data.screeningReport.result.verification.passed ? 
                          <span
                            style={{"padding":"5px 10px","borderRadius":"15px","background":"#0479042e","color":"green","fontWeight":"bold","marginLeft":"5px","fontSize":"12px"}}
                          >Verified <CheckIcon style={{"color":"green","fontSize":"12px","position":"relative","bottom":"1px","fontWeight":"bold"}}/> </span> : 
                          <span
                            style={{"padding":"5px 10px","borderRadius":"15px","background":"#ffdada","color":"green","fontWeight":"bold","marginLeft":"5px","fontSize":"12px"}}
                          >Not Verified <CloseIcon style={{"color":"red","fontSize":"12px","position":"relative","bottom":"1px","fontWeight":"bold"}}/> </span>}
                      </Typography>
                    </div>
<<<<<<< HEAD
                  </div>

                  <div  style={{ width: '100%', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }} className="border shadow-md w-full lg:w-[65%] p-4 h-[50%]  flex items-start justify-between rounded-lg">
=======
                  </Card>

                  <Card sx={{ width: 'calc(33% - 1rem)', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                    <div>
                      <Typography level="title-xl" fontWeight="bold" mb={2}>
                        Document Front
                      </Typography>
                      <Typography level="body-md" mb={1}>
                        <img src={data.screeningReport.doc_front_url} alt="doc_front_url" />
                      </Typography>
                    </div>
<<<<<<< HEAD
                  </div>

                  <div style={{ width: '100%', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }} className="border shadow-md w-full lg:w-[65%] p-4 h-[50%]  flex items-start justify-between rounded-lg">
=======
                  </Card>

                  <Card sx={{ width: 'calc(33% - 1rem)', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                    <div>
                      <Typography level="title-xl" fontWeight="bold" mb={2}>
                        Document Back
                      </Typography>
                      <Typography level="body-md" mb={1}>
                        <img src={data.screeningReport.doc_back_url} alt="doc_back_url" />
                      </Typography>
                    </div>
<<<<<<< HEAD
                  </div>
=======
                  </Card>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </FadeIn>
  ): (
    data.screeningReport.status_code === 202 ? (
      <>
          <FadeIn delay={500} transitionDuration={1000}>
      <div className="px-6">
        {loading ? (
          <></>
        ) : (
          <>
<<<<<<< HEAD
            <div className="flex items-start gap-x-3 mt-8" style={{ marginLeft: '30px' }}>
=======
            <div className="flex items-center gap-x-3 mt-8" style={{ marginLeft: '30px' }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
              <h1 className="text-4xl font-semibold">{data.screeningReport.manualScreeningType}</h1>
            </div>
            <div className="px-6">
              <div className="px-4 py-6 gap-x-3 mt-4 border shadow-lg rounded-lg">
<<<<<<< HEAD
                <div className="flex flex-col lg:flex-row  justify-between gap-x-8">
                  <div sx={{ width: '100%', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }} className="border shadow-md w-full lg:w-[65%] p-4 h-[50%]  flex items-start justify-between rounded-lg">
=======
                <div className="flex gap-x-3 items-center justify-between">
                  <Card sx={{ width: 'calc(33% - 1rem)', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                    <div>
                      <Typography level="title-xl" fontWeight="bold" mb={2}>
                        Document being process
                      </Typography>
                      {/* ... Other information components */}
<<<<<<< HEAD
                      <Typography level="body-md" mb={1} style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
=======
                      <Typography level="body-md" mb={1} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                        Your Document is still processing for forensic analysis. This might take a few minutes. <br />
                      <CircularProgress color="success" />

                      </Typography>
                    </div>
<<<<<<< HEAD
                  </div>
=======
                  </Card>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e

                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </FadeIn>
      </>
    ) : (
      <FadeIn delay={500} transitionDuration={1000}>
        <div className="px-6">
          {loading ? (
            <></>
          ) : (
            <>
<<<<<<< HEAD
              <div className="flex items-start gap-x-3 mt-8" style={{ marginLeft: '30px' }}>
=======
              <div className="flex items-center gap-x-3 mt-8" style={{ marginLeft: '30px' }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                <h1 className="text-4xl font-semibold">{data.message}</h1>
              </div>
              <div className="px-6">
                <div className="px-4 py-6 gap-x-3 mt-4 border shadow-lg rounded-lg">
<<<<<<< HEAD
                  <div className="flex flex-col lg:flex-row  justify-between gap-x-8">
                    {/* Card 1 */}
                    <div style={{ width: '100%', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }} className="border shadow-md w-full lg:w-[65%] p-4 h-[50%]  flex items-start justify-between rounded-lg">
=======
                  <div className="flex gap-x-3 items-center justify-between">
                    {/* Card 1 */}
                    <Card sx={{ width: 'calc(33% - 1rem)', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                      <div>
                        <Typography level="title-xl" fontWeight="bold" mb={2}>
                          {data.type}
                        </Typography>
                        <Typography level="title-xl" fontWeight="bold" mb={2}>
                          {extractOrigValues(data.screeningReport.data, JSON.stringify(data.screeningReport.meta_data.review_url))}
                        </Typography>
                      </div>
<<<<<<< HEAD
                    </div>

                    {/* Card 2 */}
                    <div style={{ width: '100%', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }} className="border shadow-md w-full lg:w-[65%] p-4 h-[50%]  flex items-start justify-between rounded-lg">
=======
                    </Card>

                    {/* Card 2 */}
                    <Card sx={{ width: 'calc(33% - 1rem)', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                      <div>
                        <Typography level="title-xl" fontWeight="bold" mb={2}>
                          {data.type}
                        </Typography>
                        <Typography level="title-xl" fontWeight="bold" mb={2}>
                          {isImageFile(data.doc_front_url) ? (
                            <img src={data.doc_front_url} alt="" />
                          ) : (
                            <div>
                              <Typography style={{ fontSize: '22px', color: '#173563' }} level="h1" fontWeight="bold" mb={2}>Download this document</Typography>
                              <Button style={{ marginTop: '10px' }} variant="contained" color="success">
                                <a
                                  style={{ color: 'white', textDecoration: 'none' }}
                                  href={data.doc_front_url}
                                  download="downloaded_document"
                                  target='_blank'
                                  rel="noreferrer"
                                >
                                  Download
                                </a>
                              </Button>
                            </div>
                          )}
                        </Typography>
                      </div>
<<<<<<< HEAD
                    </div>
=======
                    </Card>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </FadeIn>
    )
  )
) : (
  <FadeIn delay={500} transitionDuration={1000}>
    <div className="px-6">
      {loading ? (
        <></>
      ) : (
        <>
<<<<<<< HEAD
          <div className="flex items-start gap-x-3 mt-8" style={{ marginLeft: '30px' }}>
=======
          <div className="flex items-center gap-x-3 mt-8" style={{ marginLeft: '30px' }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
            <h1 className="text-4xl font-semibold">Document Not Verified</h1>
          </div>
          <div className="px-6">
            <div className="px-4 py-6 gap-x-3 mt-4 border shadow-lg rounded-lg">
<<<<<<< HEAD
              <div className="flex flex-col lg:flex-row  justify-between gap-x-8">
                <div style={{ width: '100%', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }} className="border shadow-md w-full lg:w-[65%] p-4 h-[50%]  flex items-start justify-between rounded-lg">
=======
              <div className="flex gap-x-3 items-center justify-between">
                <Card sx={{ width: 'calc(33% - 1rem)', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                  <div>
                    <Typography level="title-xl" fontWeight="bold" mb={2}>
                      Basic Information
                    </Typography>
                    <Typography level="body-md" mb={1}>
                      {`Full Name: ${data.screeningReport.fullName}`}
                    </Typography>
                    {/* ... Other information components */}
                    <Typography level="body-md" mb={1}>
                      Verification Status: {
                        <span
                          style={{"padding":"5px 10px","borderRadius":"15px","background":"#ffdada","color":"red","fontWeight":"bold","marginLeft":"5px","fontSize":"12px"}}
                        >Not Verified <CloseIcon style={{"color":"red","fontSize":"12px","position":"relative","bottom":"1px","fontWeight":"bold"}}/> </span>}
                    </Typography>
                  </div>
<<<<<<< HEAD
                </div>

                <div style={{ width: '100%', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }} className="border shadow-md w-full lg:w-[65%] p-4 h-[50%]  flex items-start justify-between rounded-lg">
=======
                </Card>

                <Card sx={{ width: 'calc(33% - 1rem)', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                  <div>
                    <Typography level="title-xl" fontWeight="bold" mb={2}>
                      Document Front
                    </Typography>
                    <Typography level="body-md" mb={1}>
                      <img src={data.screeningReport.doc_front_url} alt="doc_front_url" />
                    </Typography>
                  </div>
<<<<<<< HEAD
                </div>

                <div style={{ width: '100%', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }} className="border shadow-md w-full lg:w-[65%] p-4 h-[50%]  flex items-start justify-between rounded-lg">
=======
                </Card>

                <Card sx={{ width: 'calc(33% - 1rem)', minHeight: '300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', p: 3 }}>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
                  <div>
                    <Typography level="title-xl" fontWeight="bold" mb={2}>
                      Document Back
                    </Typography>
                    <Typography level="body-md" mb={1}>
                      <img src={data.screeningReport.doc_back_url} alt="doc_back_url" />
                    </Typography>
                  </div>
<<<<<<< HEAD
                </div>
=======
                </Card>
>>>>>>> 6fcb6695327c85b7deb738a143e5b70288d7234e
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  </FadeIn>
);

  
  
};

export default ScreeningToken;
