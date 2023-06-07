---
title: Normal and Gaussian Distribution
stitle: "Normal and Gaussian Distribution - Learnbay Blog"
publish: "Published on"
published_time: "2022-03-29T13:25:31+05:30"
modified_time: "2022-03-29T13:25:31+05:30"
desc: "In this blog you will learn the basics of the normal distribution in statistics by estimating probability distribution and probability."
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/nagd-1.jpg"
headerAlt: "A graph represents the normal distribution curve."
date: "Mar 29, 2022"
tag: [ importance of normal distribution in statistics, application of normal distribution in finance ]
author: "Manas Kochar" 
authorimg : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/manas-kochar.webp"
authordesc: "An enthusiastic blogger with a strong background in content creation and a hard-core interest in emerging technologies, mainly hot topics and happenings in AI and machine learning."
authorlinkedin: "https://www.linkedin.com/in/manas-kochar-7451ba127/"
category: "Machine Learning"

cattitle: "Stay Updated with Machine Learning Resources - LearnBay Blogs"
catdesc: "Check out the Learnbay Machine Learning blog section, featuring a comprehensive collection of blogs on Deep Learning, Neural Networks, NLP, etc."
authortitle: "Manas Kochar - Artificial Intelligence Enthusiast & Blogger | Learnbay"
adesc: "Manas Kochar, A Passionate Blogger from Learnbay Content Team. Explore her Artificial Intelligence and Machine Learning Blogs."

position: "Editor"
readTime: "3-4 mins"
h1: "Normal and Gaussian Distribution"
id: "gaussian-and-normal-distribution"
tableData:
  [
   What is the normal distribution in statistics?, What are the main properties of normal distribution?, 1. Standard Deviation of Normal Distribution:-, Python code for plotting the normal distribution graph:-, 2. Skewness and Kurtosis:-, How is the normal distribution used in finance?, What are the limitations of normal distribution in finance?, Where to learn more?
  ]
---

<span style=" font-weight:bold; font-size:28px">Learn the Fundamental Concepts of Normal Distribution in Statistics</span>

Statistics, the foundation of data Science, has a fundamental element known as a normal distribution. Normal Distribution is also called Gaussian Distribution, which is considered the highest significant continuous probability distribution in statistics and probability theory. Gaussian Distribution is a bell-shaped curve. Throughout Physical science & Economics, the Normal Distribution usually nearly or perfectly represents various random variables.

- Estimating other probability distributions is one of the main functions of normal distributions. It is used for mean, median, and mode for continuous values.

- It follows the normal Distribution with an equal number of measurements on the right and left sides of the mean value.

- The mean is situated at the center of the curve, the right values from the mean are greater than the mean value, and the left values from the mean are smaller than the mean.

You all know the basic meaning of mean, median, and mode. The mean is an average of the values, the median is the center value of the distribution, and the mode is the value of the distribution, which frequently occurs.

In **normal distribution in statistics** , the mean, median, and mode values are all the same. If the values generate skewness, then they are not normally distributed. Normal distribution statistics are very important because they fit many occurrences, such as heights, blood pressure, measurement errors, and numerical values.

## What is the normal distribution in statistics?

The density function of probability for a constant random variable inside a system defines the **normal distribution in statistics**.

Assuming that f(x) is the probability density function and X is a random variable, it provides a function integrated across the domain or interval (x to x+dx). The frequency of random variable X is given by taking values within x and x+dx into account.

## What are the main properties of normal distribution?   

### 1. Standard Deviation of Normal Distribution:-   

The Gaussian and normal distribution are the same in statistics theory. The normal distribution curve is made with the help of the probability density function with the random values. F(x) is the PDF function, and x is the value of Gaussian which is used to represent the real values of random variables having unknown distribution.

There is a property of Gaussian distribution, known as **the Empirical formula**, which shows the confidence interval the value comes under.

For example, the **normal distribution in statistics** contains a mean value of 0 and a standard deviation of 1.

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/nagd-2.jpg" style="width:100%" class="img" alt="A graph represents the x-axis with an interval of 30 from (60 to 240) with a normal distribution parabolic curve."/>

The empirical rule also referred to as the three-sigma rule or 68-95-99.7 rule, is a statistical rule which states that for a normal distribution, almost all data falls within three standard deviations (denoted by σ) of the mean (denoted by µ).

Broken down,

- The empirical rule shows that 68% falls within the first standard deviation (µ ± σ),
  
- 95% within the first two standard deviations (µ ± 2σ),
  
- And 99.7% within the first three standard deviations (µ ± 3σ).

#### Python code for plotting the normal distribution graph:-  

- import matplotlib.pyplot as plt
  
- import NumPy as np
  
- import Scipy.stats as stats
  
- import math
  
- mu = 0
  
- variance = 1
  
- sigma = math.sqrt(variance)
  
- x = np.linspace(mu - 3sigma, mu + 3sigma, 100)
  
- plt.plot(x, stats.norm.pdf(x, mu, sigma))
  
- show()

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/nagd-3.jpg" style="width:100%" class="img" alt="A graph represents the Gaussian Distribution curve."/>

The above code shows the Gaussian Distribution with a 99% of confidence interval, a standard deviation of 3, and a mean of 0.


### 2. Skewness and Kurtosis:-   

Skewness means the degree up to which the symmetric distribution is maintained. When the left side tail is longer than the right side, the data set's distribution has a negative skewness (less than zero). And if the right side tail is longer, the skewness is positive.

As Normal Distribution is symmetric, it shows zero skewness.

Kurtosis measures the width of the distribution's tail end concerning its tails. Distributions with kurtosis above 3.0 have tail data that exceeds normal distribution tails. This extra kurtosis is statistically characterized as leptokurtic, although it is more popularly called "fat tails". This presence of fat tails in a financial market scenario is called tail risk.

The normal distribution shows a 3.0 kurtosis level.

#### **Note:**
_**Why Is the Normal Distribution Called "Normal"?**_

_When the statisticians started doing the equations, they noticed similar shapes regularly occurring for different equations. By seeing this, they thought it appropriate to coin the term "normal" for the distribution._

_In addition, since the distribution was seen over and over as common or typical, the name "normal" came to be attached to the distribution. At the beginning of the 20th century, the term became popular with this type of distribution._

## How is the normal distribution used in finance?   

- Traders can use standard deviations to suggest suitable trades. However, this trading is often done in extremely short periods because bigger periods make picking entry and exit spots considerably more difficult.

- Asset pricing and price action both utilize the concept of a **normal distribution in statistics**. We may plot price points over time to match recent price behavior into a normal distribution. In this situation, the more a price movement deviates from the mean, the more likely a given asset is either under or overpriced.

- In the same way, many statistical theories run under the premise of following a normal distribution and model their asset pricing after that. The price fluctuations usually have a bigger kurtosis (\>3), showing fat tails.

- Price fluctuations of over three standard deviations outside the mean had already occurred more frequently than predicted under a normal distribution. Whether an asset has followed a normal distribution for long, there is no guarantee that previous performance informs future possibilities.

## What are the limitations of normal distribution in finance?    

The normal distribution has some constraints when it comes to financing, as its implementations in <a href="https://blog.learnbay.co/banking-finance-services-insurance-sector-know-how-to-achieve-the-most-lucrative-salary-package" target="_blank">finance</a> are restricted, like the expected stock market returns, which are not supported by the **normal distribution in statistics**.

- Prices generally adhere to a more right-skewed log-normal distribution having wider tails. As a result, depending excessively on a bell curve for forecasting these occurrences might provide incorrect results.

- It's hard for most analysts to solve this problem as the statistical distribution to be used is often unknown.

## Where to learn more?   

So far, we've learned about the following:

- The **normal distribution in statistics** and the probability bell curve
 
- The mean and standard deviation in a normal distribution
  
- Skewness and Kurtosis
  
- Normal Distribution usage and limitations in Finance

That concludes the explanation of the normal distribution; perhaps, you felt the distribution was useful. You will learn much more about **normal distribution in statistics** from an <a href="https://www.learnbay.co/advance-data-science-certification-courses" target="_blank">advanced Data Science and AI</a> curriculum.