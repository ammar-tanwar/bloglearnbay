/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["learnbay-wb.s3.ap-south-1.amazonaws.com"],
  },

  async redirects() {
    return [
      {
        // this will match `/english(default)/something` being requested
        source: '/top-5-Job-ready-data-science-course-for-managers-and-leaders-in-2022',
        destination: '/top-5-Job-ready-data-science-course-for-managers-and-leaders-in-2023',
        permanent: true,
      },
    ]
  },
}