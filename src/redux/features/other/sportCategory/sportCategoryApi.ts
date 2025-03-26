import { rootApi } from "../../root.api";

export const sportCategoryApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchSportCategory: builder.query<SportCategoryResponseI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/core/sport-category/?search=${search}&page=${page || 1}&page_size=${page_size || 10}/`,
                method: "GET",
            }),
            providesTags: ['SportCategory']
        }),
        createSportCategory: builder.mutation<void, FormData>({
            query: (body) => ({
                url: "/core/sport-category/",
                method: "POST",
                body
            }),
            invalidatesTags: ["SportCategory"]
        }),
        updateSportCategory: builder.mutation<void, { body: FormData, id: string }>({
            query: ({ body, id }) => ({
                url: `/core/sport-category/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["SportCategory"]
        }),
        deleteSportCategory: builder.mutation<void, string>({
            query: (id) => ({
                url: `/core/sport-category/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["SportCategory"]
        }),

    }),
});

export const {
    useFetchSportCategoryQuery,
    useCreateSportCategoryMutation,
    useUpdateSportCategoryMutation,
    useDeleteSportCategoryMutation,
    useLazyFetchSportCategoryQuery,
} = sportCategoryApi
