import React, { useEffect, useState } from 'react'
import img from '../../../../Images/logo.jpg'
import { AiOutlineRightCircle } from 'react-icons/ai';
import AppButton from '../../../../Components/AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import PassportFront from './PassportFront';
import PersonalDetail from './PersonalDetail';

const IdentityCheckThird = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [personalDetail, setpersonalDetail] = useState(false);
  
    useEffect(() => {
      // Fetch the list of countries from the API
      fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
          // Extract country names from the API response
          const countryNames = data.map((country) => country.name.common);
          // Sort country names in ascending order
          const sortedCountries = countryNames.sort();
          setCountries(sortedCountries);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);
    const [passport,setPassort]=useState(false)
    const [hidePassport,sethidePassport]=useState(true)


  const recordPassport=()=>{

    setPassort(true)
    sethidePassport(false)
    

  }
  return (
   <>
   {
    hidePassport &&   <div className='w-[80%] m-auto'>
          <h1 className="text-2xl font-bold -mt-14 py-4">Identity Check </h1>
          <p>Please select Identity Document</p>
          <p className='text-sm mt-3'>Document country of issue</p>
          <form className=' py-1'>
        <select className='border py-3 w-1/2 outline-none'>
        <option>select countries</option>
          {/* { (
            countries.map((country, index) => (
              <option className='h-44' key={index} value={country}>
                {country}
              </option>
            ))
          )} */}
          <option>afghan</option>
          <option>afghan</option>
          <option>afghan</option>
          <option>afghan</option>
          <option>afghan</option>
          <option>afghan</option>
          <option>afghan</option>

        </select>
      </form>
    
      <p className='uppercase text-sm py-1'>Document Type</p>
      <div>
        <div className='border h-20 rounded-md flex'>
        <img src={img} className='h-full rounded-tl-md rounded-bl-md w-24 border-r-2'/>
        <div onClick={recordPassport} className='flex items-center hover:bg-gray-50 cursor-pointer justify-between px-4 w-full'>
        <p className='font-semibold'>Passport</p>
        <AiOutlineRightCircle size={24}/>
        </div>

        </div>
      </div>
      <div>
        <div className='border h-20 rounded-md flex mt-2'>
        <img src={img} className='h-full w-24 rounded-tl-md rounded-bl-md border-r-2'/>
        <div className='flex items-center hover:bg-gray-50 cursor-pointer justify-between px-4 w-full'>
        <p className='font-semibold'>Id Card</p>
        <AiOutlineRightCircle size={24}/>
        </div>

        </div>
      </div>
      <div>
        <div className='border h-20 rounded-md flex mt-2'>
        <img src={img} className='h-full rounded-tl-md rounded-bl-md w-24 border-r-2'/>
        <div className='flex items-center hover:bg-gray-50 cursor-pointer justify-between px-4 w-full'>
        <p className='font-semibold'>Driving licence</p>
        {/* <AiOutlineRightCircle size={24}/> */}
        </div>

        </div>
      </div>
     
    </div>
   }
    {
        passport && <>
            <PassportFront/>
        </>
    }
    {/* {
      personalDetail && <>
        <PersonalDetail/>
      </>
    } */}
   </>
  )
}

export default IdentityCheckThird




