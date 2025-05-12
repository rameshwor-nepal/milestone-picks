import { rootApi } from "../../root.api";

export const faqContentApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchFaqContent: builder.query<FaqResponseI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/core/faqs/?search=${search}&page=${page || 1}&page_size=${page_size || 10}`,
                method: "GET",
            }),
            providesTags: ["FaqContent"]
        }),
        fetchSingleFaqContent: builder.query<GetFaqI, string>({
            query: (id) => ({
                url: `/core/faqs/${id}/`,
                method: "GET",
            }),
            providesTags: ["FaqContent"]
        }),
        createFaqContent: builder.mutation<void, CreateFaqI>({
            query: (body) => ({
                url: "/core/faqs/",
                method: "POST",
                body
            }),
            invalidatesTags: ["FaqContent"]
        }),
        updateFaqContent: builder.mutation<void, { body: CreateFaqI, id: string }>({
            query: ({ body, id }) => ({
                url: `/core/faqs/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["FaqContent"]
        }),
        deleteFaqContent: builder.mutation<void, string>({
            query: (id) => ({
                url: `/core/faqs/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["FaqContent"]
        }),

    }),
});

export const {
    useFetchFaqContentQuery,
    useCreateFaqContentMutation,
    useUpdateFaqContentMutation,
    useDeleteFaqContentMutation,
    useLazyFetchSingleFaqContentQuery
} = faqContentApi
