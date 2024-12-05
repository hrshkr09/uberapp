import React from "react";
const locations = [
  "Mumbai, Maharashtra",
  "Delhi, Delhi",
  "Bengaluru, Karnataka",
  "Hyderabad, Telangana",
  "Chennai, Tamil Nadu",
  "Kolkata, West Bengal",
  "Pune, Maharashtra",
  "Jaipur, Rajasthan",
  "Ahmedabad, Gujarat",
  "Lucknow, Uttar Pradesh",
  "Chandigarh, Punjab",
  "Indore, Madhya Pradesh",
  "Kochi, Kerala",
  "Varanasi, Uttar Pradesh",
  "Guwahati, Assam",
  "Surat, Gujarat",
  "Ranchi, Jharkhand",
  "Amritsar, Punjab",
  "Bhubaneswar, Odisha",
  "Dehradun, Uttarakhand",
  "Agra, Uttar Pradesh",
  "Mysuru, Karnataka",
  "Shillong, Meghalaya",
  "Thiruvananthapuram, Kerala",
  "Nagpur, Maharashtra",
  "Udaipur, Rajasthan",
  "Jodhpur, Rajasthan",
  "Patna, Bihar",
  "Noida, Uttar Pradesh",
];
const LocationSearchPanel = ({ setVehiclePanelOpen,setpanelOpen}) => {
  return (
    <div>
      {locations.map((location, idx) => {
        return (
          <div
            key={idx}
            onClick={()=>{
              setVehiclePanelOpen(true)
              setpanelOpen(false)
            }}
            
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
