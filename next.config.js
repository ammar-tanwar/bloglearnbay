/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["learnbay-wb.s3.ap-south-1.amazonaws.com"],
  },

  async redirects() {
    return [

      // this will match `/english(default)/something` being requested
      {
        source: '/top-5-Job-ready-data-science-course-for-managers-and-leaders-in-2022',
        destination: '/top-5-Job-ready-data-science-course-for-managers-and-leaders-in-2023',
        permanent: true,
      },

      {
        source: '/know-the-top-10-data-science-trends-2022',
        destination: '/know-the-top-10-data-science-trends-2023',
        permanent: true,
      },


      {
        source: '/top-data-science-certifications-in-2022-exclusive-to-banking-professionals',
        destination: '/top-data-science-certifications-in-2023-exclusive-to-banking-professionals',
        permanent: true,
      },

      {
        source: '/necessity-of-machine-learning-in-retail',
        destination: '/the-necessity-of-machine-learning-in-retail',
        permanent: true,
      },

      {
        source: '/oops-why-2022-is-too-late-for-video-Based-data-science-learning',
        destination: '/oops-why-2023-is-too-late-for-video-based-data-science-learning',
        permanent: true,
      },

      {
        source: '/a-few-fascinating-facts-of-artificial-intelligence-in-2022-and-beyond',
        destination: '/a-few-fascinating-facts-about-artificial-intelligence-in-2023-and-beyond',
        permanent: true,
      },

      {
        source: '/a-few-fascinating-facts-about-artificial-intelligence-in-2022-and-beyond',
        destination: '/a-few-fascinating-facts-about-artificial-intelligence-in-2023-and-beyond',
        permanent: true,
      },

      {
        source: '/why-has-generative-ai-for-deepfake-and-synthetic-data-been-so-popular-till-now',
        destination: '/what-is-generative-ai-all-you-need-to-know',
        permanent: true,
      },

      {
        source: '/category/uncategorized',
        destination: '/blogs',
        permanent: true,
      },

      {
        source: '/[id]',
        destination: '/category/hot-topic',
        permanent: true,
      },

      {
        source: '/category/ai',
        destination: '/category/artificial-intelligence',
        permanent: true,
      },

      {
        source: '/category/hot-topic',
        destination: '/category/hot-topics',
        permanent: true,
      },

      {
        source: '/xgboost-classifier',
        destination: '/everything-about-the-xgboost-classifier',
        permanent: true,
      },

      {
        source: '/types-of-machine-learning-odels-quickly-explained',
        destination: '/types-of-machine-learning-models-quickly-explained',
        permanent: true,
      },

      {
        source: '/you-could-be-a-pro-in-data-science-by-self-assisting-data-scientist',
        destination: '/you-could-be-a-pro-in-data-science-by-self-assisting',
        permanent: true,
      },

      {
        source: '/why-you-need-data-science',
        destination: '/data-science-is-important-why-we-need-it',
        permanent: true,
      },

    ]
  },
}