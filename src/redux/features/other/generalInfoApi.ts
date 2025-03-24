import { rootApi } from "../root.api";

export const generalInfoApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchHeroSection: builder.mutation<void, SignUpI>({
            query: () => ({
                url: "/core/hero-section/",
                method: "GET",
            })
        }),
        createHeroSection: builder.mutation<void, FormData>({
            query: (body) => ({
                url: "/core/hero-section/",
                method: "POST",
                body
            })
        }),
        updateHeroSection: builder.mutation<void, Omit<LoginI, 'password'>>({
            query: (body) => ({
                url: "/core/hero-section/",
                method: "PUT",
                body
            })
        }),
        deleteHeroSection: builder.mutation<void, Omit<LoginI, 'password'>>({
            query: () => ({
                url: "/core/hero-section/",
                method: "DELETE",

            })
        }),

    }),
});

export const {
    useCreateHeroSectionMutation
} = generalInfoApi