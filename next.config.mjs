/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mdbcdn.b-cdn.net",
        // port: "",
        // pathname: "/my-bucket/**",
      },
    ],
  },
};

export default nextConfig;
