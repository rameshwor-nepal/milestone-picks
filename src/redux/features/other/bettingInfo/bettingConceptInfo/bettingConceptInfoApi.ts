import { rootApi } from "@/redux/features/root.api";

export const BettingConceptInfoApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchBettingConceptInfo: builder.query<BettingConceptResponseI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/bettinginfo/betting-basic-concepts/?search=${search}&page=${page || 1}&page_size=${page_size || 10}/`,
                method: "GET",
            }),
            providesTags: ["BettingConceptInfo"]
        }),
        createBettingConceptInfo: builder.mutation<void, FormData>({
            query: (body) => ({
                url: "/bettinginfo/betting-basic-concepts/",
                method: "POST",
                body
            }),
            invalidatesTags: ["BettingConceptInfo"]
        }),
        updateBettingConceptInfo: builder.mutation<void, { body: FormData, id: string }>({
            query: ({ body, id }) => ({
                url: `/bettinginfo/betting-basic-concepts/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["BettingConceptInfo"]
        }),
        deleteBettingConceptInfo: builder.mutation<void, string>({
            query: (id) => ({
                url: `/bettinginfo/betting-basic-concepts/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["BettingConceptInfo"]
        }),

    }),
});

export const {
    useFetchBettingConceptInfoQuery,
    useCreateBettingConceptInfoMutation,
    useUpdateBettingConceptInfoMutation,
    useDeleteBettingConceptInfoMutation,
    useLazyFetchBettingConceptInfoQuery
} = BettingConceptInfoApi
