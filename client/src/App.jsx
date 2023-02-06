import { useState } from 'react'
import { Header, Body, Inputs } from './components'

function App() {

  return (
    <div className='overflow-hidden bg-gradient-to-r  bg-[#1A232E] h-screen  py-1 relative sm:px-28 text-white flex flex-col justify-between
     align-middles  ' >
      {/* gradient backgrond */}
      <div className='gradient-01  z-0 absolute ' ></div>
      <div className='gradient-02 z-0 absolute ' ></div>

      <div>
        <Header />
      </div>

      <div>
        <Body />
      </div>
      <div>
        <Inputs />
      </div>
    </div>
  )
}

export default App
