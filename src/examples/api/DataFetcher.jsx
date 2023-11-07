// DataFetcher.js
import React from 'react';
// Custom hook for fetching data
import { useDataFetcher } from '../../redux/hooks/useDataFetcher';
// API endpoints configuration
import API_ENDPOINTS from '../../redux/endpoints/apiEndpoints';
// Reusable component for handling loading and error states
import LoadingAndErrorComponent from '../../utils/ui/LoadingAndErrorComponent';

function DataFetcher() {
  // Invoke the custom hook to fetch data from the EVENTS endpoint.
  // The hook returns the current state of the request (data, loading, error).
  const { data, loading, error } = useDataFetcher(API_ENDPOINTS.EVENTS);

  // The LoadingAndErrorComponent is used to display loading indicators
  // and error messages, which keeps the code DRY by not having to repeat
  // these checks and render logic in every component that fetches data.
  return (
    <div>
      <LoadingAndErrorComponent loading={loading} error={error} />
      {/* Conditionally render the data section only if data is available */}
      {data && (
        <div>
          <h1>Data Fetched</h1> {/* Title for the fetched data */}
          <ul>
            {/* Map through the data array and render items as a list */}
            {data.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DataFetcher;
