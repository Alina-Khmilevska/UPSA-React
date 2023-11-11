import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_ENDPOINTS from "../endpoints/apiEndpoints";

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const upsaApi = createApi({
  reducerPath: "upsaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: () => API_ENDPOINTS.TEAM, // should be changed
    }),
    getTeamKyiv: builder.query({
      query: () => API_ENDPOINTS.TEAM_KYIV,
    }),
    getOurProjects: builder.query({
      query: () => API_ENDPOINTS.PROJECTS,
    }),
    getNews: builder.query({
      query: () => API_ENDPOINTS.NEWS,
    }),
    getPartners: builder.query({
      query: () => API_ENDPOINTS.PARTNERS,
    }),
  }),
});

export const {
  useGetTeamQuery, //should be changed
  useGetTeamKyivQuery,
  useGetOurProjectsQuery,
  useGetNewsQuery,
  useGetPartnersQuery,
} = upsaApi;
