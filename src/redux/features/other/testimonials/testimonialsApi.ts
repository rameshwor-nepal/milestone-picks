import { rootApi } from "../../root.api";

export const testimonialsApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchTestimonialsContent: builder.query<TestimonialResponseI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/core/testimonials/?search=${search}&page=${page || 1}&page_size=${page_size || 10}`,
                method: "GET",
            }),
            providesTags: ["Testimonials"]
        }),
        fetchSingleTestimonialsContent: builder.query<TestimonialI, string>({
            query: (id) => ({
                url: `/core/testimonials/${id}`,
                method: "GET",
            }),
            providesTags: ["Testimonials"]
        }),
        createTestimonialsContent: builder.mutation<void, FormData>({
            query: (body) => ({
                url: "/core/testimonials/",
                method: "POST",
                body
            }),
            invalidatesTags: ["Testimonials"]
        }),
        updateTestimonialsContent: builder.mutation<void, { body: FormData, id: string }>({
            query: ({ body, id }) => ({
                url: `/core/testimonials/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["Testimonials"]
        }),
        deleteTestimonialsContent: builder.mutation<void, string>({
            query: (id) => ({
                url: `/core/testimonials/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["Testimonials"]
        }),

    }),
});

export const {
    useFetchTestimonialsContentQuery,
    useCreateTestimonialsContentMutation,
    useUpdateTestimonialsContentMutation,
    useDeleteTestimonialsContentMutation,
    useLazyFetchSingleTestimonialsContentQuery
} = testimonialsApi
