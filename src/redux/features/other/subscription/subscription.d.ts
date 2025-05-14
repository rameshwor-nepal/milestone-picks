interface CreateSubscriptionCheckoutI {
    plan_id: number;
    user_email: string;
}

interface CheckoutResponseI {
    payment_url: string;
}

interface SubscriptionPlanI {
    id: number;
    name: string;
    stripe_plan_id: string;
    price: string;
    duration: string;
}

interface UserSubscriptionI {
    id: number;
    user: number;
    plan: number;
    status: string;
    start_date: string;
    end_date: string;
    stripe_subscription_id: string;
}
