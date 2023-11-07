// Initial state for the data slice of the store.
const initialState = {
  data: [],      // The array to store fetched data
  loading: false, // Flag to indicate loading state
  error: null,    // To store error information, if any
};

/**
 * Reducer function for data-related actions.
 * It updates the state based on the action type and payload received.
 *
 * @param {object} state - The current state of the data slice.
 * @param {object} action - The action dispatched.
 * @returns {object} - The new state after applying the action.
 */
function dataReducer(state = initialState, action) {
  // Handle actions using a switch statement.
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      // When a data fetch is initiated, set loading to true and error to null.
      return { ...state, loading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      // On successful data fetch, set loading to false and store the data.
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      // If the fetch fails, set loading to false and store the error message.
      return { ...state, loading: false, error: action.payload };
    default:
      // Return the current state if the action type is not matched.
      return state;
  }
}

// Export the reducer to be combined with other reducers in the store.
export default dataReducer;
