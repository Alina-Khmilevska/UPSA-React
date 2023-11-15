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
    getTeamKyiv: builder.query({
      query: () => API_ENDPOINTS.TEAM_KYIV,
    }),
    getTeamLviv: builder.query({
      query: () => API_ENDPOINTS.TEAM_LVIV,
    }),
    getTeamIf: builder.query({
      query: () => API_ENDPOINTS.TEAM_IF,
    }),
    getTeamKharkiv: builder.query({
      query: () => API_ENDPOINTS.TEAM_KHARKIV,
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
  useGetTeamKyivQuery,
  useGetTeamLvivQuery,
  useGetTeamIfQuery,
  useGetTeamKharkivQuery,
  useGetOurProjectsQuery,
  useGetNewsQuery,
  useGetPartnersQuery,
} = upsaApi;
