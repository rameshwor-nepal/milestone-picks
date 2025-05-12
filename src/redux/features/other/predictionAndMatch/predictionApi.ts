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
        fetchSinglePredictions: builder.query<PredictionI, string>({
            query: (id) => ({
                url: `/predictions/${id}`,
                method: "GET",
            }),
            providesTags: ['Predictions']
        }),
        createPrediction: builder.mutation<void, CreatePredictionI>({
            query: (body) => ({
                url: "/predictions/",
                method: "POST",
                body
            }),
            invalidatesTags: ["Predictions"]
        }),
        updatePrediction: builder.mutation<void, { body: CreatePredictionI, id: string }>({
            query: ({ body, id }) => ({
                url: `/predictions/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["Predictions"]
        }),
        deletePrediction: builder.mutation<void, string>({
            query: (id) => ({
                url: `/predictions/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["Predictions"]
        }),

    }),
});

export const {
    useFetchPredictionsQuery,
    useLazyFetchSinglePredictionsQuery,
    useCreatePredictionMutation,
    useUpdatePredictionMutation,
    useDeletePredictionMutation
} = predictionApi
