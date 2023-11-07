import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import dataReducer from '../reducers/dataReducer';

// Combine all reducers into a single root reducer.
// You can add more reducers as needed by importing them and adding them to the object passed to combineReducers.
const rootReducer = combineReducers({
  data: dataReducer,
  // Add other reducers here as properties.
});

// Configure the Redux store.
// This store uses the rootReducer, applies middleware, and integrates with the Redux DevTools for a better development experience.
const store = createStore(
  rootReducer,
  // The composeWithDevTools function enables integration with the Redux DevTools browser extension.
  // applyMiddleware is used to add middleware to the store. Redux Thunk is used here to allow actions to be functions.
  composeWithDevTools(applyMiddleware(thunk))
);

// Export the configured store so that it can be provided to the React application.
export default store;
