/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.evbuc.com",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "scontent-lga3-2.xx.fbcdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        pathname: "/*",
      },
      // Add other remote patterns if needed
    ],
    // Other image configurations if needed
  },
};

// module.exports = {
//   images: {
//     domains: ['img.evbuc.com', 'scontent-lga3-2.xx.fbcdn.net'],
//     // Other image configurations if needed
//   },
// };

module.exports = nextConfig;
