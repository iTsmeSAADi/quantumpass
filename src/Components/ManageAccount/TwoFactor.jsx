import React from 'react'
import AppButton from '../AppButton/AppButton'

const TwoFactor = () => {
  return (
    <div>
        <div>
            <h1 className='text-xl font-semibold'>{`Tow-factor authentication (2fa)`}<br/> authenticator app</h1>
           <div className='flex gap-x-2 mt-4'>
           <AppButton btnText={'set up authenticator app'}/>
            <AppButton btnText={'reset authenticator app'}/>

           </div>
        </div>
    </div>
  )
}

export default TwoFactor