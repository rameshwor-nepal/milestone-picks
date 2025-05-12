import { rootApi } from "../../root.api";

export const contactUsApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchContactus: builder.query<GetContactInfoI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/core/contact-us/?search=${search}&page=${page || 1}&page_size=${page_size || 10}/`,
                method: "GET",
            }),
            providesTags: ["Contactus"]
        }),
        createContactus: builder.mutation<void, CreateContactI>({
            query: (body) => ({
                url: "/core/contact-us/",
                method: "POST",
                body
            }),
            invalidatesTags: ["Contactus"]
        }),
        updateContactus: builder.mutation<void, { body: CreateContactI, id: string }>({
            query: ({ body, id }) => ({
                url: `/core/contact-us/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["Contactus"]
        }),
        deleteContactus: builder.mutation<void, string>({
            query: (id) => ({
                url: `/core/contact-us/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["Contactus"]
        }),
        fetchCountry: builder.query<GetCountryResponseI, void>({
            query: () => ({
                url: `/core/countries/`,
                method: "GET",
            }),
        }),

    }),
});

export const {
    useFetchContactusQuery,
    useCreateContactusMutation,
    useUpdateContactusMutation,
    useDeleteContactusMutation,
    useLazyFetchContactusQuery,
    useFetchCountryQuery,
} = contactUsApi
