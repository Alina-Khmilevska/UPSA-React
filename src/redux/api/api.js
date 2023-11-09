import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_ENDPOINTS from '../endpoints/apiEndpoints';


const apiUrl = process.env.REACT_APP_BACKEND_URL;


export const upsaApi = createApi({
  reducerPath: "upsaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  endpoints: (builder) => ({
    getTeamKyiv: builder.query({
      query: () => API_ENDPOINTS.TEAM_KYIV,
    }),
    getOurProjects: builder.query({
      query: () => API_ENDPOINTS.PROJECTS,
    }),
    getNews: builder.query({
      query: () => API_ENDPOINTS.NEWS,
    }),
  })
});

export const {
  useGetTeamKyivQuery,
  useGetOurProjectsQuery,
  useGetNewsQuery,
} = upsaApi;
