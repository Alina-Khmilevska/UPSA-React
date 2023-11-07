import axios from 'axios';

// Retrieve the API base URL from the environment variables
const apiUrl = process.env.REACT_APP_BACKEND_URL;

// Action creator for the initial state of data fetching
const fetchDataRequest = () => {
  return { type: 'FETCH_DATA_REQUEST' };
};

// Action creator for the success state of data fetching
const fetchDataSuccess = data => {
  return { type: 'FETCH_DATA_SUCCESS', payload: data };
};

// Action creator for the failure state of data fetching
const fetchDataFailure = error => {
  return { type: 'FETCH_DATA_FAILURE', payload: error };
};

// Thunk action creator that performs the actual data fetching
export const fetchData = (url) => {
  return async dispatch => {
    // First dispatch an action to signify the start of data fetching
    dispatch(fetchDataRequest());

    try {
      // Perform the GET request to the given URL using axios
      const response = await axios.get(apiUrl + url);

      // If the request is successful, dispatch the success action with the data received
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      // If the request fails, dispatch the failure action with the error message
      dispatch(fetchDataFailure(error.message));
    }
  };
};
