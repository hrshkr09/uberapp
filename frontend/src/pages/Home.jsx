import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setpanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)
  const confirmedRidePanelRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen]= useState(false)
  const [confirmedRidePanel,setConfirmedRidePanel ]=useState(false)
  const vehiclePanelRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();

    setPickup("");
    setDestination("");
  };

  useGSAP(function () {
    if (panelOpen) {
        gsap.to(panelRef.current, {
            height: '70%',
            padding: 24
            // opacity:1
        })
        gsap.to(panelCloseRef.current, {
            opacity: 1
        })
    } else {
        gsap.to(panelRef.current, {
            height: '0%',
            padding: 0
            // opacity:0
        })
        gsap.to(panelCloseRef.current, {
            opacity: 0
        })
    }
}, [ panelOpen ])

  useGSAP(function(){
    
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanelOpen])

  useGSAP(function(){
    
    if(confirmedRidePanel){
      gsap.to(confirmedRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmedRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmedRidePanel])


  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber"
      />
      <div  className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png"
          alt=""
        />
        {/* <LiveTracking /> */}
      </div>
      <div className=" h-screen flex flex-col justify-end absolute top-0 w-full ">
        <div className="h-[30%] bg-white p-6 relative ">
          <h5 
          ref={panelCloseRef}
          onClick={()=>setpanelOpen(false)}
          className="absolute top-6 opacity-0 right-6 text-2xl ">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="tex-3xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16  w-1 top-[42%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => setpanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />

            <input
              onClick={() => setpanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white  h-0">
           <LocationSearchPanel  setpanelOpen={setpanelOpen}  setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14" >
       <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      <div ref={confirmedRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14" >
       <ConfirmedRide/>
      </div>
    </div>
  );
};

export default Home;
