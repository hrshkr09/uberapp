import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
const ConfirmRidePopUp = ({setConfirmRidePopupPanel,setRidePopupPanel}) => {

  const [otp, setOtp]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()

  }
  return (
    <div>
      <h5 
     
      className="p-1 text-center absolute w-[93%] top-0 ">
        {" "}
        <i className="  text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm this ride to start</h3>
      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-300 rounded-lg ">
        <div className="flex items-center gap-3 ">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
            alt=""
          />
          <h2 className="text-lg font-medium">Harsh Kuamr</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-fill"></i>
            <div className="flex flex-col">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kaikondrahilli, Bengalore , Karnataka
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Third Wave Coffee</h3>
              <p className="text-sm -mt-1 text-gray-600">
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengalore,
                Karnataka
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium"> ₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 w-full">
         <form onSubmit={(e)=>{
            e.preventDefault()
            submitHandler(e)
         }}>
          <input
          value={otp}
          onChange={(e)=>setOtp(e.target.value)}
          type="text" className='bg-[#eee] px-4 py-3 font-mono text-lg rounded-lg w-full mt-3' placeholder='Enter OTP' />
         <Link
            to={'/captain-riding'}
          className=" bg-green-600 mt-5 w-full flex justify-center text-white font-semibold py-3 px-10 rounded-lg">
            Confirm
          </Link>

          <button 
           onClick={()=>{
            setConfirmRidePopupPanel(false)
            setRidePopupPanel(false)
          }}
          className="mt-2 w-full bg-red-600 text-white font-semibold py-3 px-10 rounded-lg">
            Cancel
          </button>
         </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmRidePopUp;
