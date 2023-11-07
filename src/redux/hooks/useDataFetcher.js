// useDataFetcher.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions/dataActions';

/**
 * Custom hook to automatically fetch data from a given endpoint.
 * It uses the Redux dispatch and selector to manage state and side effects.
 *
 * @param {string} endpoint - The API endpoint from which to fetch data.
 * @returns {object} An object containing the 'data', 'loading', and 'error' state.
 */
export function useDataFetcher(endpoint) {
  // Hook into the Redux store dispatch function.
  const dispatch = useDispatch();

  // Retrieve the data, loading, and error state from the Redux store.
  const { data, loading, error } = useSelector(state => state.data);

  // Effect hook to trigger the data fetch action when the endpoint changes.
  useEffect(() => {
    // Only dispatch the action if the endpoint is defined.
    if (endpoint) {
      dispatch(fetchData(endpoint));
    }
    // Dependency array includes dispatch and endpoint to avoid unnecessary fetches.
    // Dispatch should be stable, and will not change on re-renders,
    // hence it will not cause the effect to run again.
  }, [dispatch, endpoint]);

  // Return the data, loading, and error state to the component using this hook.
  return { data, loading, error };
}
