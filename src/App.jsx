
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import AppContent from './AppContent';
import { useDispatch } from 'react-redux';
import { SetAuth } from './Store/Slice/AuthSlice';
import Loader from './Components/Loader/Loading';

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');
console.log("token nameeee",token);

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);


  const CheckLocalStorage = () => {
    if (user) {
      dispatch(SetAuth(JSON.parse(user)));
      // navigate("/dashboard");
    } else {
      navigate("/");
    }
    setInterval(() => {
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    CheckLocalStorage();
  }, []);
  
  


  return Loading ? <div className='flex h-screen w-full justify-center items-center'><Loader/></div> : <AppContent />;
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

