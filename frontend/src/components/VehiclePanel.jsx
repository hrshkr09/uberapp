import React from 'react';

const VehiclePanel = ({setVehiclePanelOpen,setConfirmedRidePanel}) => {
  return (
    <div>
       <h5 
        onClick={()=>setVehiclePanelOpen(false)}
        className="p-1 text-center absolute w-[93%] top-0 "> <i className="  text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div onClick={()=>setConfirmedRidePanel(true)} className="flex border-2 active:border-black  rounded-xl mb-2 w-full p-3 items-center justify-between">
          <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1596627972/assets/e7/e861a8-30ec-4d57-8045-7186f6c5ec35/original/comfort.png" alt="car" />
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className="font-normal text-xs">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable , compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>
        <div onClick={()=>setConfirmedRidePanel(true)} className="flex border-2 active:border-black  rounded-xl mb-2 w-full p-3 items-center justify-between">
          <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="car" />
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className="font-normal text-xs">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable motocycle rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹65</h2>
        </div>

        <div onClick={()=>setConfirmedRidePanel(true)} className="flex border-2 active:border-black  rounded-xl mb-2 w-full p-3 items-center justify-between">
          <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car" />
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className="font-normal text-xs">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable auto rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹118.21</h2>
        </div>
    </div>
  );
}

export default VehiclePanel;
