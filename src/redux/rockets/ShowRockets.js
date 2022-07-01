import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  fetchRocketsAsync,
  fetchReservedAsync,
  cancelReservationAsync,
} from "./rockets";

function RocketsShow() {
    const [reserved,setReserved]=useState([]);

  let rockets = useSelector((state) => state.rockets);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsAsync());


  }, []); 
 
  useEffect(() => {
    localStorage.setItem("reserved", JSON.stringify(reserved));
    // let arr=localStorage.getItem("rockets");
    // console.log(arr);
    }
    , [rockets]);


  const resRocket = (rocket) => {
    dispatch(fetchReservedAsync(rocket));
    setReserved([...reserved,rocket]);
 

  };

  let arr=localStorage.getItem("rockets");
  let arr1=JSON.parse(arr);
    const cancelReservation = (rocket) => {
        dispatch(cancelReservationAsync(rocket));
        setReserved(reserved.filter((res) => res.id !== rocket.id));
       
// console.log(rocket.rocket_name);
        
    }

  return (
    <div className="allRockets">
  
      
      {rockets.map((rocket) => {
        return (
          <div key={rocket.id} className="rocketData">
            <div className="rocketImg">

              {" "}
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  margin: "auto",
                  display: "block",
                }}
                src={rocket.flickr_images[0]}
                alt=""
              />
            </div>
            <div className="rocketOtherDetails">
              <h2>{rocket.rocket_name}</h2>
              <p>
                {" "}
                <span
                  className="reserve"
                  style={{ display: rocket.reserved ? "inline-block" : "none" }}
                >
                  Reserved
                </span>{" "}
                {rocket.description}
              </p>

              <button
                type="button"
                onClick={() => resRocket(rocket)}
                className="rockBtn"
                style={{ display: rocket.reserved ? "none" : "inline-block" }}
              >
                Reserve Rocket
              </button>
              <button
                type="button"
                className="cancelBtn"
                onClick={() => cancelReservation(rocket)}
                style={{ display: rocket.reserved ? "inline-block" : "none" }}
              >
                Cancel Reservation
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RocketsShow;
