/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    INFURA_ID: process.env.INFURA_ID,
  },
};

export default nextConfig;
