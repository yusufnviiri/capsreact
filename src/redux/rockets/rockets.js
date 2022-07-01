const rocketUrl = "https://api.spacexdata.com/v3/rockets";

export const reserveRocket = (rocket) => {
  return {
    type: "RESERVE_ROCKET",
    payload: rocket,
  };
};

export const cancelReservation = (rocket) => {
    return {
        type: "CANCEL_RESERVATION",
        payload: rocket,
    };
}

export const fetchRockets = (rocketData) => {
  return {
    type: "FETCH_ROCKETS",
    payload: rocketData,
  };
};


export const fetchRocketsAsync = () => {
  return (dispatch) => {
    fetch(rocketUrl)
      .then((response) => response.json())
      .then((data) => dispatch(fetchRockets(data)))
      .catch((error) => console.log(error));
  };
};
export const fetchReservedAsync = (rocketData) => {
  return (dispatch) => {
    fetch(rocketUrl)
      .then((response) => response.json())
      .then(() => dispatch(reserveRocket(rocketData)))
      .catch((error) => console.log(error));
  };
};
export const cancelReservationAsync = (rocketData) => {
    return (dispatch) => {
        fetch(rocketUrl)

        .then((response) => response.json())
        .then(() => dispatch(cancelReservation(rocketData)))
        .catch((error) => console.log(error));
    };
}


export const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ROCKETS":
      return action.payload;
    case "RESERVE_ROCKET":
      return state.map((rocket) => {
        if (rocket.id !== action.payload.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case "CANCEL_RESERVATION":
        return state.map((rocket) => {
            if (rocket.id !== action.payload.id) {
                return rocket;
            }
            return { ...rocket, reserved: false };
        }
        );


    default:
      return state;
  }
};
export default rocketReducer;
