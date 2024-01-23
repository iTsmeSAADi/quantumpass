import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./Pages/User/Login";
import Register from "./Pages/User/Register";
// import Screening from './Pages/QuantumPages/Screening';
import UserManagement from "./Pages/QuantumPages/UserManagement/UserManagement";
import ManageAccount from "./Pages/QuantumPages/ManageAccount";
import Identity from "./Pages/QuantumPages/Identity/Identity";
import IdentityVerification from "./Pages/QuantumPages/Identity/IdentityVerification";
import Forensics from "./Pages/QuantumPages/Forensic/Forensics";
import Dashbaord from "./Pages/QuantumPages/Dashbaord/Dashbaord";
import Kpi from "./Pages/QuantumPages/Dashbaord/Compunents/Kpi";
import Accounting from "./Pages/QuantumPages/Dashbaord/Compunents/Accounting";
import InitialCheck from "./Pages/QuantumPages/Dashbaord/Compunents/InitialCheck";
import EmailIdentity from "./Pages/QuantumPages/ManualScreen/EmailIdentity";
import QuickNameSearch from "./Pages/QuantumPages/ManualScreen/QuickNameSearch";
import QuickDocumentScan from "./Pages/QuantumPages/ManualScreen/QuickDocumentScan";
import DocumentForensic from "./Pages/QuantumPages/ManualScreen/DocumentForensic";
import CompanyDetail from "./Pages/QuantumPages/Company/CompanyDetail";
import Logout from "./Pages/User/Logout";
import Navbar from "./Components/Navbar/Navbar";
import Screening from "./Pages/QuantumPages/Screening/Screening";
import ScreeningReport from "./Pages/QuantumPages/Screening/ScreeningCompunents/ScreeningReport";
import ForensicAnalysis from "./Pages/QuantumPages/Forensic/ForensicAnalysis";
import ForensicAnalysisToken from "./Pages/QuantumPages/Forensic/ForensicAnalysisToken";
import ScreeningToken from "./Pages/QuantumPages/Screening/ScreeningCompunents/ScreeningToken";
import Company from "./Pages/QuantumPages/Company/Company";
import LoginProtectedRoute from "./Components/LoginProtectedRoute";
import ProtectedRoute from "./Components/ProtectedRoute";
import ErrorPage from "./Pages/ErrorPage";
import EmaildentityDetail from "./Pages/QuantumPages/ManualScreen/EmaildentityDetail";

const AppContent = () => {
  const location = useLocation();
  const shouldHideNavbar =
    location.pathname === "/" ||
    location.pathname === "/logout" ||
    location.pathname === "/register" ||
    location.pathname === "/identityverification" ||  location.pathname === "/*" 
    
  return (
    <div>
      {shouldHideNavbar ? null : <Navbar />}
      <Routes>
     
        <Route path="/" element={ <Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/register" element={<Register />} />
{/* </LoginProtectedRoute> */}
        <Route path="/screening" element={<ProtectedRoute><Screening /></ProtectedRoute>}></Route>
        <Route path="/usermanagement" element={<ProtectedRoute><UserManagement /></ProtectedRoute>}></Route>
        <Route path="/manageaccount" element={<ProtectedRoute><ManageAccount /></ProtectedRoute>}></Route>
        <Route path="/dashboard" element={<ProtectedRoute><Dashbaord /></ProtectedRoute>}></Route>
        <Route path="/identity" element={<Identity />}></Route>
        <Route
          path="/identityverification"
          element={<IdentityVerification />}
        ></Route>
        <Route path="/forensics" element={<ProtectedRoute><Forensics /></ProtectedRoute>}></Route>
        <Route path="/company" element={<ProtectedRoute><Company /></ProtectedRoute>}></Route>
        <Route path="/kpi" element={<ProtectedRoute><Kpi /></ProtectedRoute>}></Route>
        <Route path="/acounting" element={<ProtectedRoute><Accounting /></ProtectedRoute>}></Route>
        <Route path="/initialcheck" element={<ProtectedRoute><InitialCheck /></ProtectedRoute>}></Route>
        {/* Manual Screen Pages */}
        <Route path="/emailidentity" element={<ProtectedRoute><EmailIdentity /></ProtectedRoute>}></Route>
        <Route path="/quicknamesearch" element={<ProtectedRoute><QuickNameSearch /></ProtectedRoute>}></Route>
        <Route
          path="/quickdocumentscan"
          element={<ProtectedRoute><QuickDocumentScan /></ProtectedRoute>}
        ></Route>
        <Route path="/documentsforensic" element={<ProtectedRoute><DocumentForensic /></ProtectedRoute>}></Route>
        <Route path="/companydetail" element={<ProtectedRoute><CompanyDetail /></ProtectedRoute>}></Route>
        <Route path="/screeningreport/:_id" element={<ProtectedRoute><ScreeningReport /></ProtectedRoute>}></Route>
        <Route path="/forensicanalysis" element={<ProtectedRoute><ForensicAnalysis /></ProtectedRoute>}></Route>
        <Route
          path="/forensicanalysistoken"
          element={<ProtectedRoute><ForensicAnalysisToken /></ProtectedRoute>}
        ></Route>
          <Route
          path="/emailidentitydetail/:_id"
          element={<ProtectedRoute><EmaildentityDetail /></ProtectedRoute>}
        ></Route>
        <Route path="/screeningtoken/:_id" Component={ScreeningToken} element={<ProtectedRoute><ScreeningToken /></ProtectedRoute>}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AppContent;
