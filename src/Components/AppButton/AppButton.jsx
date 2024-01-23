import React from 'react'

const AppButton = (props) => {
    const { btnText,bgColor,btnWidth,textColor, ...allProps } = props; 
    const buttonStyle = {
      backgroundColor: bgColor || '#173563', // Default background color if not provided
      color: textColor || 'white',
      width: btnWidth ||'auto',
    };
  return (
    <div>
        <button type='submit'  style={buttonStyle}   {...allProps} className='bg-[#173563] text-white w-fit px-3 font-semibold rounded-md py-2 '>{btnText}</button>
    </div>
  )
}

export default AppButton