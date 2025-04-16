import { rootApi } from "../../root.api";

export const predictionApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchPredictions: builder.query<PredictionResponseI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/predictions/?search=${search}&page=${page || 1}&page_size=${page_size || 10}`,
                method: "GET",
            }),
            providesTags: ['Predictions']
        }),
        // createMatch: builder.mutation<void, Omit<MatchesI, "id">>({
        //     query: (body) => ({
        //         url: "/predictions/",
        //         method: "POST",
        //         body
        //     }),
        //     invalidatesTags: ["Matches"]
        // }),
        // updateMatch: builder.mutation<void, { body: Omit<MatchesI, "id">, id: string }>({
        //     query: ({ body, id }) => ({
        //         url: `/predictions/${id}/`,
        //         method: "PUT",
        //         body
        //     }),
        //     invalidatesTags: ["Matches"]
        // }),
        // deleteMatch: builder.mutation<void, string>({
        //     query: (id) => ({
        //         url: `/predictions/${id}/`,
        //         method: "DELETE",

        //     }),
        //     invalidatesTags: ["Matches"]
        // }),

    }),
});

export const {
    useFetchPredictionsQuery,
    // useLazyFetchMatchesQuery,
    // useCreateMatchMutation,
    // useUpdateMatchMutation,
    // useDeleteMatchMutation,
} = predictionApi
