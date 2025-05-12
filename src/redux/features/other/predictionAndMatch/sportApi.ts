import { rootApi } from "../../root.api";

export const sportApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchSports: builder.query<SportsResponseI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/predictions/sports/?search=${search}&page=${page || 1}&page_size=${page_size || 10}`,
                method: "GET",
            }),
            providesTags: ['Sports']
        }),
        fetchSingleSports: builder.query<SportI, string>({
            query: (id) => ({
                url: `/predictions/sports/${id}`,
                method: "GET",
            }),
            providesTags: ['Sports']
        }),
        createSport: builder.mutation<void, FormData>({
            query: (body) => ({
                url: "/predictions/sports/",
                method: "POST",
                body
            }),
            invalidatesTags: ["Sports"]
        }),
        updateSport: builder.mutation<void, { body: FormData, id: string }>({
            query: ({ body, id }) => ({
                url: `/predictions/sports/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["Sports"]
        }),
        deleteSport: builder.mutation<void, string>({
            query: (id) => ({
                url: `/predictions/sports/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["Sports"]
        }),

    }),
});

export const {
    useFetchSportsQuery,
    useLazyFetchSingleSportsQuery,
    useCreateSportMutation,
    useUpdateSportMutation,
    useDeleteSportMutation,
} = sportApi
