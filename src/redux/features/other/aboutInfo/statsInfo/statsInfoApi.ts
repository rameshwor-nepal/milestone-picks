import { rootApi } from "@/redux/features/root.api";

export const StatsInfoApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchStatsInfo: builder.query<GetStatsResponseI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/aboutsection/statistics/?search=${search}&page=${page || 1}&page_size=${page_size || 10}/`,
                method: "GET",
            }),
            providesTags: ["StatisticsInfo"]
        }),
        fetchSingleStatsInfo: builder.query<StatI, string>({
            query: (id) => ({
                url: `/aboutsection/statistics/${id}/`,
                method: "GET",
            }),
            providesTags: ["StatisticsInfo"]
        }),
        createStatsInfo: builder.mutation<void, CreateStatI>({
            query: (body) => ({
                url: "/aboutsection/statistics/",
                method: "POST",
                body
            }),
            invalidatesTags: ["StatisticsInfo"]
        }),
        updateStatsInfo: builder.mutation<void, { body: CreateStatI, id: string }>({
            query: ({ body, id }) => ({
                url: `/aboutsection/statistics/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["StatisticsInfo"]
        }),
        deleteStatsInfo: builder.mutation<void, string>({
            query: (id) => ({
                url: `/aboutsection/statistics/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["StatisticsInfo"]
        }),

    }),
});

export const {
    useFetchStatsInfoQuery,
    useCreateStatsInfoMutation,
    useUpdateStatsInfoMutation,
    useDeleteStatsInfoMutation,
    useLazyFetchSingleStatsInfoQuery
} = StatsInfoApi
