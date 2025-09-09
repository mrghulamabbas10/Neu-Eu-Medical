/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "Referrer-Policy",
    value: "no-referrer", // PHI pages pe lagana zaroori
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; img-src *; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // sab routes
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
