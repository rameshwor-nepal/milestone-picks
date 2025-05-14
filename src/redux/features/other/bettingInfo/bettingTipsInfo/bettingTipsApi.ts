import { rootApi } from "@/redux/features/root.api";

export const BettingTipsInfoApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchBettingTipsInfo: builder.query<GetBettingTipsResponseI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/bettinginfo/betting-tips/?search=${search}&page=${page || 1}&page_size=${page_size || 10}`,
                method: "GET",
            }),
            providesTags: ["BettingTipsInfo"]
        }),
        fetchSingleBettingTipsInfo: builder.query<BettingTipsI, string>({
            query: (id) => ({
                url: `/bettinginfo/betting-tips/${id}/`,
                method: "GET",
            }),
            providesTags: ["BettingTipsInfo"]
        }),
        createBettingTipsInfo: builder.mutation<void, FormData>({
            query: (body) => ({
                url: "/bettinginfo/betting-tips/",
                method: "POST",
                body
            }),
            invalidatesTags: ["BettingTipsInfo"]
        }),
        updateBettingTipsInfo: builder.mutation<void, { body: FormData, id: string }>({
            query: ({ body, id }) => ({
                url: `/bettinginfo/betting-tips/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["BettingTipsInfo"]
        }),
        deleteBettingTipsInfo: builder.mutation<void, string>({
            query: (id) => ({
                url: `/bettinginfo/betting-tips/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["BettingTipsInfo"]
        }),

    }),
});

export const {
    useFetchBettingTipsInfoQuery,
    useCreateBettingTipsInfoMutation,
    useUpdateBettingTipsInfoMutation,
    useDeleteBettingTipsInfoMutation,
    useLazyFetchSingleBettingTipsInfoQuery
} = BettingTipsInfoApi
