const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

 async (req, res) => {
  // An array with your links
  const links = [
    { url: "https://blog.learnbay.co/", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/best-ai-ebooks-for-you-to-explore-and-refine-domain-knowledge", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/octoml-the-coolest-platform-for-faster-machine-learning-model-deployment", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/category/artificial-intelligence", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/artificial-intelligence-in-weather-forecasting-it-can-definitely-save-our-day", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/category/machine-learning", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/what-is-ml-fairness-indicator-all-you-need-to-Know", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/stock-prediction-gone-extraordinarily-precise-an-outstanding-application-of-ml", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/category/cloud-computing", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/cloud-computing-and-machine-learning-how-these-two-become-relevant", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/category/data-science", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/top-8-domains-for-data-science-those-offering-tempting-job-opportunities", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/know-the-10-most-used-programming-languages-for-data-science", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/category/full-stack", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/15-tools-every-full-stack-web-developer-should-master", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/top-7-women-full-stack-software-develope-the-inspiration-for-all-women-in-tech", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/category/hot-topics", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/a-career-in-data-science-the-key-to-lucrative-come-back-for-women-after-a-career-break", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/marketing-sales-and-hr-is-being-a-data-scientist-the-only-hope", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/category/python", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/operators-in-python-operation-using-symbol", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/method-overriding-in-python-of-data-science-everything-you-need-to-know", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/category/technology", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/how-data-analytics-can-fast-track-your-e-commerce-retail-and-supply-chain-career", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/investing-3-lakhs-on-data-science-certification-course-does-it-really-worth", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/artificial-intelligence-in-e-commerce", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/win-this-covid-19-with-data-science-course", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/introduction-to-python-programming", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/model-vs-algorithm-in-ml", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/data-science-jobs-the-busting-ways-to-secure-attractive-packages-in-health-care", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/different-job-roles-after-a-data-science-course", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/practice-of-intelligence-with-help-of-artificial-intelligence-in-academics", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/what-is-supervised-and-unsupervised-learning-in-machine-learning", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/oops-why-2022-is-too-late-for-video-Based-data-science-learning", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/is-ai-a-threat-to-humanity", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/tuples-an-immutable-derived-datatype", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/introduction-to-data-types-what-does-it-mean-in-python-programming", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/top-5-Job-ready-data-science-course-for-managers-and-leaders-in-2022", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/what-is-data-science-uncovering-the-explicit-truth", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/what-is-a-job-ready-capstone-project-and-why-is-it-important-in-ai-and-data-science-course", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/know-the-best-strategy-to-find-the-right-data-science-job-in-delhi", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/the-most-important-skills-of-data-science-to-master-in-2023", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/hybrid-learning-the-success-key-to-job-guaranteed-professional-training", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/nlp-and-deep-learning-for-data-scientists", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/young-data-scientists", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/human-activity-recognition-with-smart-phone", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/random-forest-model-rfm", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/linear-regression-in-machine-learning", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/why-you-need-data-science", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/evolution-of-data-science-in-india", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/xgboost-classifier", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/reliable-sources-to-understand-about-data-science", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/exploratory-data-analysis-on-iris-dataset", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/data-science-at-intern-level", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/data-science-for-working-professionals", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/customer-experience-enhancement-in-banks", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/text-stemming-in-nlp", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/future-of-education-in-hands-of-machine-learning", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/gaussian-and-normal-distribution", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/gradient-descent-for-machine-learning", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/media-hospitality-and-transportation-know-how-data-science-will-help-you-to-survive", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/know-the-top-10-data-science-trends-2022", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/top-50-interview-questions-of-machine-learning", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/regression-techniques-in-machine-learning", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/why-you-need-data-structures-and-algorithms-training", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/10-reasons-why-data-science-is-a-best-career-move", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/the-innovation-of-robot-chef-is-thrilling-the-world-the-power-of-ai", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/clustering-data-science-unsupervised-learning", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/support-vector-machines", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/data-preprocessing", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/different-jobs-opportunities-of-data-science", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/decision-tree", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/7-ways-artificial-intelligence-can-boost-delivery-management-worldwide", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/did-you-know-artificial-intelligence-can-manipulate-human-behavior", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/a-few-fascinating-facts-about-artificial-intelligence-in-2022-and-beyond", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/7-ways-artificial-intelligence-innovation-is-wiping-out-environmental-impurities", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/introduction-to-simple-linear-regression-in-machine-learning", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/you-could-be-a-pro-in-data-science-by-self-assisting-data-scientist", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/how-to-become-a-demanding-full-stack-developer-in-2023-all-confusion-sorted", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/what-is-generative-ai-all-you-need-to-know", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/successful-data-scientist-without-a-tech-degree-yes-it-is-possible", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/women-in-ai-top-10-indian-women-empowering-the-world-of-ai", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/ace-the-toughest-data-science-interview-with-these-stunning-tricks", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/7-best-machine-learning-companies-to-work-for-in-bangalore-2023", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/how-to-make-a-rewarding-career-in-the-energy-oil-and-gas-domain-as-a-data-scientist", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/top-data-science-certifications-in-2022-exclusive-to-banking-professionals", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/learnbay-data-science-training-in-bangalore", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/how-does-data-science-promote-project-managers-to-a-new-perspective-of-success", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/no-code-machine-learning-just-gone-viral-but-what's-that", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/time-series-forecasting-how-does-it-improve-business-decision-making", changefreq: "daily", priority: 0.3 },
    { url: "https://blog.learnbay.co/7-must-know-web-development-languages-of-2023", changefreq: "daily", priority: 0.3 },
  ];



  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());
  res.end(xmlString);
};

export default async;