import { Field } from 'formik';
import React from 'react'

const AppInput = (props) => {
    const { inputWidth,btnHeight,label, ...allProps } = props;
    const inputStyle={
      width: inputWidth ||'auto',
      height: btnHeight ||'auto',


    } 
  return (
    <div className='flex flex-col w-full  gap-y-1'>
<label className='text-sm font-semibold px-2'>{label}</label>
    <Field {...allProps} style={inputStyle} className='outline-none border-[1px] border-[#4e5765] rounded-md py-[6px] px-2'/>
    
    </div>
  )
}

export default AppInput