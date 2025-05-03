import { rootApi } from "@/redux/features/root.api";

export const FeatureInfoApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchFeatureInfo: builder.query<GetFeatureResponseI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/aboutsection/features/?search=${search}&page=${page || 1}&page_size=${page_size || 10}/`,
                method: "GET",
            }),
            providesTags: ["FeatureInfo"]
        }),
        createFeatureInfo: builder.mutation<void, FormData>({
            query: (body) => ({
                url: "/aboutsection/features/",
                method: "POST",
                body
            }),
            invalidatesTags: ["FeatureInfo"]
        }),
        updateFeatureInfo: builder.mutation<void, { body: FormData, id: string }>({
            query: ({ body, id }) => ({
                url: `/aboutsection/features/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["FeatureInfo"]
        }),
        deleteFeatureInfo: builder.mutation<void, string>({
            query: (id) => ({
                url: `/aboutsection/features/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["FeatureInfo"]
        }),

    }),
});

export const {
    useFetchFeatureInfoQuery,
    useCreateFeatureInfoMutation,
    useUpdateFeatureInfoMutation,
    useDeleteFeatureInfoMutation,
    useLazyFetchFeatureInfoQuery
} = FeatureInfoApi
