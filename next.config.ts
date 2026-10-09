import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/carbon-reduction-plan",
        destination: "/social-value#environment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
