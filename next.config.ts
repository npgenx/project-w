const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
        loader: 'akamai',
        path: '/project-w/',
    },
    // assetPrefix: isProd ? '/project-w/' : '',
    basePath: isProd ? '/project-w' : '',
    output: 'export',
};

export default nextConfig;
