/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'img.evbuc.com',
//             port: '',
//             pathname: '/*',
//           },
//           {
//             protocol: 'https',
//             hostname: 'scontent-lga3-2.xx.fbcdn.net',
//             port: '',
//             pathname: '/*',
//           }
//         ],
//       },
// };

// module.exports = nextConfig;

module.exports = {
  images: {
    domains: ['img.evbuc.com', 'scontent-lga3-2.xx.fbcdn.net'],
    // Other image configurations if needed
  },
};
