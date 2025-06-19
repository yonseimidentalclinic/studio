import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com', // Firebase Storage 호스트 추가
        port: '',
        pathname: '/**', // 프로젝트 ID 및 경로를 포함하도록 와일드카드 사용
      },
    ],
  },
};

export default nextConfig;
