import React from "react";

const RidePopUp = ({setRidePopupPanel, setConfirmRidePopupPanel}) => {
  return (
    <div>
      <h5 
      onClick={()=>{
        setRidePopupPanel(false)

      }}
      className="p-1 text-center absolute w-[93%] top-0 ">
        {" "}
        <i className="  text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
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
        <div className=" flex justify-between gap-2 mt-5 w-full ">
          <button
          onClick={()=>{
            setConfirmRidePopupPanel(true)
          }}
          className=" bg-green-600 w-full text-white font-semibold p-3 px-10 rounded-lg">
            Accept
          </button>

          <button 
          onClick={()=>{
            setRidePopupPanel(false)
    
          }}
          className=" w-full bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg">
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
