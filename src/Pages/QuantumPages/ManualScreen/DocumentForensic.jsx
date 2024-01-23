import React, { useEffect, useState } from "react";
import AppButton from "../../../Components/AppButton/AppButton";
import Loader from "../../../Components/Loader/Loading";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FadeIn from "react-fade-in/lib/FadeIn";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { baseUrl } from "../../../Config/baseUrl";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button, Link } from "@mui/material";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const DocumentForensic = () => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [scannedDocUrl, setScannedDocUrl] = useState("");
  const [ocrText, setOcrText] = useState("");
  const [selectedDoc, setSelectedDoc] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [allowedTypes, setAllowedTypes] = useState([]); // State to store allowed document types
  const [documentId, setDocumentId] = useState(null)
  const [documentReviewUrl, setDocumentReviewUrl] = useState(null)



  const handleOpen = () => {
    if (responseMessage) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  const mytoken = user?.token;
  const companyName = user?.companyName;

  const onSubmit = async (values) => {
    setLoading(true);
    const { tag, file } = values;
    console.log(tag, file);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const fileUrl = await axios.post(`${baseUrl}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    
      const myData = {
        companyName: companyName,
        file: fileUrl.data.downloadURL,
        tag: tag,
      };
    
      const scan = await axios.post(
        `${baseUrl}/api/v1/manual/forensicScan`,
        myData,
        {
          headers: {
            token: mytoken,
          },
        }
      );
    
      console.log("scan", scan);
    
      setLoading(false);
    
      // Check scan status
      const status = scan.data.success;
    
      // Create the response message with doc_url and ocr_text
      if (status) {
        const message = scan.data.message;
        setDocumentId(scan.data.docScanInstance.doc_id)
        setDocumentReviewUrl(scan.data.docScanInstance.review_url)
        setResponseMessage({ message, color: "green" });
    
      } else {
        const errorMessage = `Error: ${scan.data.message}`;
        setResponseMessage({ errorMessage, color: "red" });
      }
    
      handleOpen();
    
      // Clear the selected image URL after successful submission
      setSelectedDoc("");
      setSelectedFile(null);
    } catch (error) {
      console.error("An error occurred:", error.response);
      setLoading(false);
      // Set a generic error message in case specific details are not available
      setResponseMessage({
        errorMessage:
          error.response?.data?.message ||
          "An error occurred. Please try again later.",
        color: "red",
      });
      handleOpen();
    }
    
  };

  const handleImageChange = (event, form) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setSelectedDoc(imageURL);
    form.setFieldValue("file", file);
    setSelectedFile(file);
  };

  useEffect(() => {
    const fetchAllowedDocumentTypes = async () => {
      try {
        const response = await axios.get(
          "https://app.docsumo.com/api/v1/eevee/apikey/limit/",
          {
            headers: {
              accept: "application/json",
              apikey: "eNEUARkGjXQSo0Wb9p4UG1r5dCWNrIAzige22QUkC7q8anKY76umpAy8RcCc"
            },
          }
        );

        if (response.data.status === "success") {
          const types = response.data.data.document_types.map(
            (type) => type.title
          );
          setAllowedTypes(types);
        } else {
          console.error("Failed to fetch allowed document types!");
        }
      } catch (error) {
        console.error("An error occurred while fetching document types:", error);
      }
    };

    fetchAllowedDocumentTypes();
    console.log("Response Message:", responseMessage);
    if (responseMessage) {
      handleOpen();
    }
  }, [responseMessage]);

  return (
    <>
      <FadeIn delay={500} transitionDuration={1000}>
        <div className="w-full px-6">
          <h1 className="text-2xl lg:text-4xl font-[900] py-8 mt-5">
            Document Forensic Analysis
          </h1>
          <div className="flex flex-col lg:flex-row justify-between gap-x-8">
            <div className="border shadow-md w-full lg:w-[65%] p-4 h-[50%] flex items-center justify-between rounded-lg">
              {loading ? (
                <div className="w-full flex flex-col items-center justify-center">
                  <Loader />
                  <p className="font-semibold text-green-600">
                    This may take a while.
                  </p>
                </div>
              ) : (
                <>
                  <Formik
                    initialValues={{ tag: "", file: "" }}
                    onSubmit={onSubmit}
                  >
                    {({ isSubmitting, setFieldValue }) => (
                      <Form className="w-full space-y-8">

                        <div className="flex flex-col lg:flex-row space-y-4 items-center gap-x-5 justify-between">
                        <div className="flex flex-col w-full gap-y-1">
                          <label className="text-sm font-semibold px-2" htmlFor="tag">
                            Select Document Type
                          </label>
                          <Field
                            as="select"
                            id="tag"
                            name="tag"
                            className="outline-none border-[1px] border-[#4e5765] rounded-md py-[6px] px-2"
                          >
                            <option value="" disabled>
                              Select Document Type
                            </option>
                            {/* Add options dynamically based on your data */}
                            {allowedTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
 
                            {/* Add more options as needed */}
                          </Field>
                        </div>
                        </div>
                        <div className="flex flex-col w-full gap-y-1">
                          <label
                            className="text-sm font-semibold px-2"
                            htmlFor="tag"
                          >
                            Tag
                          </label>
                          <Field
                            id="tag"
                            disabled
                            name="tag"
                            className="outline-none border-[1px] border-[#4e5765] rounded-md py-[6px] px-2"
                          />
                        </div>
                        <div className="flex flex-col w-full gap-y-1">
        <label
          className="text-sm font-semibold px-2"
          htmlFor="fileUpload"
        >
          Upload Document
        </label>
        <Field name="file">
          {({ field, form }) => (
            <div className="flex flex-col">
              {selectedDoc && (
                <div className="mt-2 m-auto lg:m-0">
                  <img
                    src={selectedDoc}
                    alt="Selected Image"
                    className="w-32 h-24 lg:w-56 lg:h-36"
                  />
                </div>
              )}
              <input
                type="file"
                id="fileUpload"
                name="file"
                onChange={(event) =>
                  handleImageChange(event, form)
                }
                className="pt-3 ml-20 lg:ml-0"
                title="Upload Document"
              />
            </div>
          )}
        </Field>
      </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-[#173563] w-full text-white px-3 font-semibold rounded-md py-2"
                        >
                          Scan
                        </button>
                      </Form>
                    )}
                  </Formik>
                </>
              )}
            </div>
            <div className="pb-5 mt-5 w-full lg:w-[35%] lg:mt-0">
              <div className="border shadow-md p-4 rounded-lg">
                <h1 className="text-lg font-semibold">
                  Document Forensics Analysis
                </h1>
                <p>
                  Evaluate documents to identify whether they have been
                  modified. This includes a complete image and PDF file
                  metadata analysis and verification of document authenticity.
                  Forensic document analysis can be performed on any document,
                  including utility bills, bank statements, passport pictures,
                  and any other picture documents
                </p>
              </div>
            </div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="w-[90%] lg:w-[600px]">
              {responseMessage ? (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {responseMessage.message ? <Alert severity="success">{responseMessage.message}<br/><Button style={{marginTop: '10px'}} variant="contained" color="success"><Link target='_blank' style={{color: 'white', textDecoration: 'none'}} href={documentReviewUrl}>Review Now</Link></Button></Alert> : <Alert severity="error">{responseMessage.errorMessage}</Alert>}
  </Stack>
              ) : null}
            </Box>
          </Modal>
        </div>
      </FadeIn>
    </>
  );
};

export default DocumentForensic;
