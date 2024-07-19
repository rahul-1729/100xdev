import { useState } from 'react'
 
function App() {
 

  return (
    // flexbox
    // <div className='flex justify-center'>
    //     <div className='bg-red-500'>Hi Chad</div>
    //     <div className='bg-yellow-500'>Hi Sigma</div>
    // </div>

    // grids

    // <div className='grid grid-cols-3'>
    //      <div className='bg-red-500'>Hi Boys</div>
    //      <div className='bg-yellow-500'>How is everything going on</div>
    //      <div className='bg-green-500'>Keep doing one thing everyday</div>
    //      <div className='bg-blue-500'>Time to do it again</div>
    // </div>
    
    // unequal length grid
    // <div className='grid grid-cols-10'>
    // <div className='bg-red-500 col-span-4'>Hi Boys</div>
    // <div className='bg-yellow-500 col-span-3'>How is everything going on</div>
    // <div className='bg-green-500  col-span-3'>Keep doing one thing everyday</div>
    // <div className='bg-blue-500 col-span-10'>Time to do it again</div>
    // </div>
    
    // reponsiveness
    <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='bg-red-500'>Hi Boys</div>
          <div className='bg-yellow-500'>How is everything going on</div>
          <div className='bg-green-500 '>Keep doing one thing everyday</div>
    </div>

  )
}

export default App
