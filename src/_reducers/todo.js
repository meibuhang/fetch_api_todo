import { GET_TODO } from "../config/constants.js";

//allrooms
const initialState = {
  data:[],
  isLoading: false,
  isPosts: false,
  error: false
};


export const todo = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_TODO}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_TODO}_FULFILLED`:
      return {
        ...state,
       data: action.payload.data,
        isLoading: false
      };
    case `${GET_TODO}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };

    default:
      return state;
  }
};

