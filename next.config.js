/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        typedRoutes:true,
    },
    reactStrictMode:true,
    swcMinify:true,
    images:{
        unoptimized:true
    },

};

module.exports= nextConfig;
