/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  env: {
    BACKEND_HOSTNAME: process.env.BACKEND_HOSTNAME,
    JWTSECRET: process.env.JWTSECRET,
  },
};

module.exports = nextConfig;
