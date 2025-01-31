// /**
//  * @type {import('next').NextConfig}
//  */

// const isStaticExport = 'false';

// const nextConfig = {
//   trailingSlash: true,
//   env: {
//     BUILD_STATIC_EXPORT: isStaticExport,
//   },
//   modularizeImports: {
//     '@mui/icons-material': {
//       transform: '@mui/icons-material/{{member}}',
//     },
//     '@mui/material': {
//       transform: '@mui/material/{{member}}',
//     },
//     '@mui/lab': {
//       transform: '@mui/lab/{{member}}',
//     },
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   },
//   ...(isStaticExport === 'true' && {
//     output: 'export',
//   }),
// };

// export default nextConfig;


/**
 * @type {import('next').NextConfig}
 */

// Use an environment variable to determine if static export is enabled
const isStaticExport = process.env.BUILD_STATIC_EXPORT === 'true';

const nextConfig = {
  trailingSlash: true,
  env: {
    BUILD_STATIC_EXPORT: isStaticExport ? 'true' : 'false',
  },
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // Enable static export if BUILD_STATIC_EXPORT is true
  ...(isStaticExport && {
    output: 'export',
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
  }),
};

export default nextConfig;