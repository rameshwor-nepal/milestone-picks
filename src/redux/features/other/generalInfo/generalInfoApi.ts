import { rootApi } from "../../root.api";

export const generalInfoApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchHeroSection: builder.query<HeroSectionResponseI, SearchFieldI>({
            query: ({ search, page, page_size }) => ({
                url: `/core/hero-section/?search=${search}&page=${page || 1}&page_size=${page_size || 10}/`,
                method: "GET",
            }),
            providesTags: ["GeneralInfo"]
        }),
        createHeroSection: builder.mutation<void, FormData>({
            query: (body) => ({
                url: "/core/hero-section/",
                method: "POST",
                body
            }),
            invalidatesTags: ["GeneralInfo"]
        }),
        updateHeroSection: builder.mutation<void, { body: FormData, id: string }>({
            query: ({ body, id }) => ({
                url: `/core/hero-section/${id}/`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["GeneralInfo"]
        }),
        deleteHeroSection: builder.mutation<void, string>({
            query: (id) => ({
                url: `/core/hero-section/${id}/`,
                method: "DELETE",

            }),
            invalidatesTags: ["GeneralInfo"]
        }),

    }),
});

export const {
    useFetchHeroSectionQuery,
    useCreateHeroSectionMutation,
    useUpdateHeroSectionMutation,
    useDeleteHeroSectionMutation,
} = generalInfoApi

// uploadImage: builder.mutation<any, any>({
//     query: (imageFile) => {
//       var bodyFormData = new FormData();
//       bodyFormData.append('file', imageFile);
//       console.log({ bodyFormData, imageFile });
//       return {
//         url: '/uploader/image',
//         method: 'POST',
//         headers: {
//           'Content-Type': 'multipart/form-data;'
//         },
//         body: { bodyFormData },
//         formData:true           //add this line
//       };
//     }
//   })