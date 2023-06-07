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
        source: '/oops-why-2022-is-too-late-for-video-based-data-science-learning',
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

      {
        source: '/data-preprocessing',
        destination: '/everything-about-data-preprocessing',
        permanent: true,
      },

      {
        source: '/decision-tree',
        destination: '/everything-about-decision-tree-from-scratch',
        permanent: true,
      },

      {
        source: '/top-50-interview-question-on-statistics',
        destination: '/top-25-interview-question-on-statistics',
        permanent: true,
      },
      {
        source: '/successful-data-scientist-without-a-tech-degree-yes-i-is-possible',
        destination: '/successful-data-scientist-without-a-tech-degree-yes-it-is-possible',
        permanent: true,
      },
      {
        source: '/media-hospitality-and-transportation-know-how-data-science-will-help-you-to-survive',
        destination: '/data-science-in-media-hospitality-and-transportation',
        permanent: true,
      },

      {
        source: '/reliable-resources-for-data-science',
        destination: '/reliable-sources-to-understand-about-data-science',
        permanent: true,
      },

      {
        source: '/how-to-get-the-best-data-science-internship-in-2023',
        destination: '/data-science-at-intern-level',
        permanent: true,
      },

      {
        source: '/why-data-science-actually-matters-in-2023',
        destination: '/data-science-is-important-why-we-need-it',
        permanent: true,
      },

      {
        source: '/fundamentals-of-bagging-and-boosting-in-machine-learning-ensemble-meth',
        destination: '/fundamentals-of-bagging-and-boosting-in-machine-learning-ensemble-method',
        permanent: true,
      },

    


      {
        source: '/data-scientist-vs-data-analyst-know-the-ultimate-career-difference',
        destination: '/data-analyst-vs-data-scientist ',
        permanent: true,
      },

      {
        source: '/blogs',
        destination: '/',
        permanent: true,
      },

      {
        source: '/category/artificial-intelligence-',
        destination: '/category/artificial-intelligence',
        permanent: true,
      },

      // {
      //   source: '/Search?q=',
      //   destination: '/',
      //   permanent: true,
      // },

      {
        source: '/author/learnbay',
        destination: '/',
        permanent: true,
      },

      {
        source: '/author',
        destination: '/',
        permanent: true,
      },

      {
        source: '/full-stack-development-for-techies',
        destination: '/full-stack-development-for-non-techies',
        permanent: true,
      },

    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}