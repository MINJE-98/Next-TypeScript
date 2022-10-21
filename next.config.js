/** @type {import('next').NextConfig} */
/**
 * NOTICE
 * 현재 emotion은 SWC를 사용하여 빌드할 수 있습니다.
 * 참고: https://github.com/vercel/next.js/issues/30804
 *
 * 하지만 twin-marco(babel-macro)가 아직 완벽하게 SWC를 지원하지 않습니다.
 * 때문에 babel을 사용하여 빌드합니다.
 * 참고: https://github.com/arlyon/stailwc/discussions/2
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
