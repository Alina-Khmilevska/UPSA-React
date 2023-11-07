// apiEndpoints.js

// Object containing the relative paths for all the API endpoints used in the application.
// This centralizes the endpoints, making it easier to manage and update them throughout the app.

const API_ENDPOINTS = {
    // Endpoint for retrieving event data.
    // It can be used wherever event data is required by calling API_ENDPOINTS.EVENTS.
    EVENTS: '/upsa-api/events',
};

// Export the API_ENDPOINTS object so it can be imported and used in other parts of the application.
export default API_ENDPOINTS;