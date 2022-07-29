/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    loader: "custom"
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  }
};
