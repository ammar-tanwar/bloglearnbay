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
        
        source: '/top-data-science-certifications-in-2022-exclusive-to-banking-professionals',
        destination: '/top-data-science-certifications-in-2023-exclusive-to-banking-professionals',
        permanent: true,

        source: '/know-the-top-10-data-science-trends-2022',
        destination: '/know-the-top-10-data-science-trends-2023',
        permanent: true,
      },
    ]
  },
}