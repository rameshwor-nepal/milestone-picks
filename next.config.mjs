/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "milestonepicks-s3.s3.us-east-1.amazonaws.com"
            },
            {
                protocol: 'https',
                hostname: "milestone-picks.vercel.app"
            }

        ]
    }
};

export default nextConfig;