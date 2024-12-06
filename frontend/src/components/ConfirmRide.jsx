import React from "react";

const ConfirmRide = () => {
  return (
    <div>
      <h5
        onClick={() => setVehiclePanelOpen(false)}
        className="p-1 text-center absolute w-[93%] top-0 "
      >
        {" "}
        <i className="  text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>
      <div className='flex gap-2 justify-between flex-col items-center'>
        <img
          className="h-20 "
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="w-full mt-5">
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-fill"></i>
            <div className="flex flex-col">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kaikondrahilli, Bengalore , Karnataka
              </p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Third Wave Coffee</h3>
              <p className="text-sm -mt-1 text-gray-600">
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengalore,
                Karnataka
              </p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium"> ₹193.20</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
        <button className="w-full bg-green-600 text-white font-semibold rounded-lg p-2 mt-5">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
