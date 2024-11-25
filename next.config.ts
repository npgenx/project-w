import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        unoptimized: true, // Disable default image optimization
    },
    output: 'export', // <=== enables static exports
    reactStrictMode: true,
    basePath: '',
    assetPrefix: '',
};

export default nextConfig;
