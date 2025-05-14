import { rootApi } from "../../root.api";

export const subscriptionApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        createSubscriptionCheckout: builder.mutation<void, CreateSubscriptionCheckoutI>({
            query: (body) => ({
                url: "/subscriptions/create-checkout-session/",
                method: "POST",
                body
            }),
        }),
        fetchSubscriptionPlan: builder.query<SubscriptionPlanI, void>({
            query: () => ({
                url: `/subscriptions/plans/`,
                method: "GET",
            }),
        }),
        createSubscriptionPlan: builder.mutation<void, Omit<SubscriptionPlanI, 'id'>>({
            query: (body) => ({
                url: "/subscriptions/plans/",
                method: "POST",
                body
            }),
        }),
        updateSubscriptionPlan: builder.mutation<void, { body: Omit<SubscriptionPlanI, 'id'>, id: string }>({
            query: ({ body, id }) => ({
                url: `/subscriptions/plans/${id}/`,
                method: "PUT",
                body
            }),
        }),
        deleteSubscriptionPlan: builder.mutation<void, string>({
            query: (id) => ({
                url: `/subscriptions/plans/${id}/`,
                method: "DELETE"
            }),
        }),

        fetchUserSubscription: builder.query<UserSubscriptionI, void>({
            query: () => ({
                url: `/subscriptions/subscriptions/`,
                method: "GET",
            }),
        }),
        fetchSingleUserSubscription: builder.query<UserSubscriptionI, string>({
            query: (id) => ({
                url: `/subscriptions/subscriptions/${id}/`,
                method: "GET",
            }),
        }),

    }),
});

export const {
    useCreateSubscriptionCheckoutMutation,
    useFetchSubscriptionPlanQuery,
    useCreateSubscriptionPlanMutation,
    useUpdateSubscriptionPlanMutation,
    useDeleteSubscriptionPlanMutation,
    useFetchUserSubscriptionQuery,
    useLazyFetchSingleUserSubscriptionQuery
} = subscriptionApi
