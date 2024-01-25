import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

 function Screen() {
  return (
  <div className=' '>
      <Box sx={{ width: 'full' }}>
    
    <div className='w-full flex'>
<div className='w-[12.5%]'>
<Skeleton className='w-full' animation="wave" />

</div>  
   <div className='w-[12.5%]'>
<Skeleton className='w-full' animation="wave" />

</div>
<div className='w-[12.5%]'>
<Skeleton className='w-full' animation="wave" />

</div>     <Skeleton className='w-24' animation="wave" />
<div className='w-[12.5%]'>
<Skeleton className='w-full' animation="wave" />

</div>     <Skeleton className='w-24' animation="wave" />
<div className='w-[12.5%]'>
<Skeleton className='w-full' animation="wave" />

</div>     
<div className='w-[12.5%]'>
<Skeleton className='w-full' animation="wave" />

</div>      </div>

  
   </Box>
  </div>
  );
}
export default Screen