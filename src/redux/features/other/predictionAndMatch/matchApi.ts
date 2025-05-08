import { rootApi } from "../../root.api";

export const matchApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchMatches: builder.query<MatchesResponseI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/predictions/matches/?search=${search}&page=${page || 1}&page_size=${page_size || 10}`,
                method: "GET",
            }),
            providesTags: ['Matches']
        }),
        createMatch: builder.mutation<void, CreateMatchI>({
            query: (body) => ({
                url: "/predictions/matches/",
                method: "POST",
                body
            }),
            invalidatesTags: ["Matches"]
        }),
        updateMatch: builder.mutation<void, { body: CreateMatchI, id: string }>({
            query: ({ body, id }) => ({
                url: `/predictions/matches/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["Matches"]
        }),
        deleteMatch: builder.mutation<void, string>({
            query: (id) => ({
                url: `/predictions/matches/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["Matches"]
        }),

    }),
});

export const {
    useFetchMatchesQuery,
    useLazyFetchMatchesQuery,
    useCreateMatchMutation,
    useUpdateMatchMutation,
    useDeleteMatchMutation,
} = matchApi
