import { rootApi } from "@/redux/features/root.api";

export const MissionInfoApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchMissionInfo: builder.query<GetMissionI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/aboutsection/mission-sections/?search=${search}&page=${page || 1}&page_size=${page_size || 10}/`,
                method: "GET",
            }),
            providesTags: ["MissionInfo"]
        }),
        createMissionInfo: builder.mutation<void, FormData>({
            query: (body) => ({
                url: "/aboutsection/mission-sections/",
                method: "POST",
                body
            }),
            invalidatesTags: ["MissionInfo"]
        }),
        updateMissionInfo: builder.mutation<void, { body: FormData, id: string }>({
            query: ({ body, id }) => ({
                url: `/aboutsection/mission-sections/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["MissionInfo"]
        }),
        deleteMissionInfo: builder.mutation<void, string>({
            query: (id) => ({
                url: `/aboutsection/mission-sections/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["MissionInfo"]
        }),

    }),
});

export const {
    useFetchMissionInfoQuery,
    useCreateMissionInfoMutation,
    useUpdateMissionInfoMutation,
    useDeleteMissionInfoMutation,
    useLazyFetchMissionInfoQuery
} = MissionInfoApi
