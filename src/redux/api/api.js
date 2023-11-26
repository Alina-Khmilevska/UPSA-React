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
    getProjects: builder.query({
      query: (args) => {
        const { type } = args;
        return `${API_ENDPOINTS.PROJECTS}/${type}`;
      },
    }),
    getEvents: builder.query({
      query: () => API_ENDPOINTS.EVENTS,
    }),
    getNews: builder.query({
      query: () => API_ENDPOINTS.NEWS,
    }),
    getPartners: builder.query({
      query: () => API_ENDPOINTS.PARTNERS,
    }),
    getBlock: builder.query({
      query: (args) => {
        const { type, endpoint } = args;
        return `${API_ENDPOINTS.BLOCK}/${type}/${endpoint}`;
      },
    }),
    createMembership: builder.mutation({
      query: (membershipData) => ({
        url: API_ENDPOINTS.MEMBERSHIP_CREATE,
        method: 'POST',
        body: membershipData,
      }),
    }),

  }),
});

export const {
  useGetTeamQuery, //should be changed
  useGetTeamKyivQuery,
  useGetProjectsQuery,
  useGetEventsQuery,
  useGetNewsQuery,
  useGetPartnersQuery,
  useGetBlockQuery,
  useCreateMembershipMutation,
} = upsaApi;
