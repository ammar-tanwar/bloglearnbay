---
title: Normal and Gaussian Distribution
desc: "This blog deals with the overall guide on Normal distribution in statistics. Here you will learn the basics of the normal distribution to its applications in statistical analysis by estimating probability distribution and probability."
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/gaussian.png"
date: "Mar 29, 2022"
tag: [ Data Science, Machine Learning ]
author: "Learnbay"
authorimg : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/learnbay-admin.webp"
authordesc: ""
authorlinkedin: "https://www.linkedin.com/company/learnbay/mycompany/"
category: "Machine Learning"
position: "Editor"
readTime: "3-4 mins"
h1: "Normal and Gaussian Distribution"
id: "gaussian-and-normal-distribution"
tableData:
  [
    Introduction, Definition, Normal distribution Properties, Standard Deviation in Normal Distribution, Skewness, Kurtosis, Normal Distribution Usage in Finance, Limitations of Normal Distribution in Finance,  Where to learn more 

  ]
---



<span style=" font-weight:bold; font-size:28px"> Learn the Fundamental Concept of Normal Distribution in Statistics</span>

## Introduction

Statistics, the foundation of Data Science, has a fundamental element known as Normal Distribution.

Normal Distribution, also called Gaussian Distribution, is considered the highest significant continuous probability distribution in statistics and probability theory. Gaussian Distribution is a bell-shaped curve. Throughout physical science & economics, the normal Distribution usually nearly or perfectly represents a huge variety of random variables.

Estimating other probability distributions is one of the main functions of normal distributions. It is used for mean, median, and mode for continuous values. It follows the normal Distribution with an equal number of measurements on the right side and left side of the mean value. The mean is situated in the center of the curve, the right values from the mean are greater than the mean value, and the left values from the mean are smaller than the mean.

You all know the basic meaning of mean, median, and mode. The mean is an average of the values, the median is the center value of the Distribution, and the mode is the value of the Distribution, which is frequently occurred.

In the Normal Distribution, mean, median, and mode values are all the same. If the values generate skewness, then it is not normally distributed. The normal Distribution is very important in statistics because it fits many occurrences, such as heights, blood pressure, measurement errors, and numerical values.

### Definition   

The density function of probability for a constant random variable inside a system defines the Normal Distribution. Assuming that f(x) is the probability density function and X is a random variable, it provides a function integrated across the domain or interval (x to x + dx). The frequency of random variable X is given by taking values within x and x+dx into account.

## Normal distribution Properties  

### Standard Deviation in Normal Distribution

A gaussian and normal distribution is the same in <a href="https://blog.learnbay.co/top-50-interview-question-on-statistics" target="_blank">statistics theory</a>. The curve is made with the help of the probability density function with the random values. F(x) is the PDF function, and x is the value of gaussian & used to represent the real values of random variables having unknown Distribution.

There is a property of Gaussian Distribution, known as **the Empirical formula** , which shows the confidence interval the value comes under. The normal distribution contains a mean value of 0 and a standard deviation of 1.

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/gaussian1.GiF" alt="A graph represents the normal distribution curve." class="img"/>

The empirical rule also referred to as the three-sigma rule or 68-95-99.7 rule, is a statistical rule which states that for a normal distribution, almost all data falls within three standard deviations (denoted by σ) of the mean (denoted by µ).

Broken down,

- The empirical rule shows that 68% falls within the first standard deviation (µ ± σ),
- 95% within the first two standard deviations (µ ± 2σ),
- And 99.7% within the first three standard deviations (µ ± 3σ).

Python code for plotting the gaussian graph:

import matplotlib.pyplot as plt

import NumPy as np

import Scipy.stats as stats

import math

mu = 0

variance = 1

sigma = math.sqrt(variance)

x = np.linspace(mu - 3sigma, mu + 3sigma, 100)

plt.plot(x, stats.norm.pdf(x, mu, sigma))

plt.show()

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/gaussian2.png" alt="A graph represents the Gaussian Distribution curve." class="img"/>

The above code shows the Gaussian Distribution with a 99% of confidence interval, a standard deviation of 3, and a mean of 0.

### Skewness   

Skewness means the degree upto which the symmetric Distribution is maintained. When the left side tail is longer than the right side tail, the data set's Distribution has a negative skewness(less than zero). And if the right side tail is longer, the skewness is positive.

As Normal Distribution is symmetric, it shows zero skewness.

### Kurtosis

Kurtosis measures the width of the Distribution's tail end concerning its tails. Distributions with kurtosis above 3.0 have tail data that exceeds normal distribution tails. This extra kurtosis is statistically characterized as leptokurtic, although it is more popularly called "fat tails." This presence of fat tails in a financial market scenario is called tail risk.

Normal Distribution shows a 3.0 kurtosis level.

## Normal Distribution Usage in Finance  

Traders can use standard deviations to suggest suitable trades. This trading is often done in extremely short periods because bigger periods make picking entry and exit spots considerably more difficult.

Asset pricing and price action both utilize the concept of a normal distribution. We may plot price points over time to match recent price behavior into a normal distribution. In this situation, the more a price movement deviates from the mean, the more likely a given asset is either under or overpriced.

In the same way, many statistical theories run under the premise of following a normal distribution and model their asset pricing after that. The price fluctuations usually have a bigger kurtosis (\>3), showing fat tails.

Price fluctuations of over three standard deviations outside the mean had already occurred more frequently than predicted under a normal distribution. Whether an asset has followed a normal distribution for long, there is no guarantee that previous performance informs future possibilities.

### Limitations of Normal Distribution in Finance  

Normal Distribution has some constraints when it comes to <a href="https://blog.learnbay.co/banking-finance-services-insurance-sector-know-how-to-achieve-the-most-lucrative-salary-package" target="_blank">financing</a>, as its implementations in finance are restricted, like the expected stock market returns, which are not supported by normal Distribution. Prices generally adhere to a more right-skewed log-normal distribution having wider tails. As a result, depending excessively on a bell curve for forecasting these occurrences might provide incorrect results.

It's hard for most analysts to solve this problem as the statistical distribution to be used is often unknown.

## Where to learn more   

That concludes the explanation of the Normal Distribution; perhaps, you felt that the Distribution was useful. You will learn much more about Normal Distribution in statistics from a revered curriculum. Read our <a href="https://blog.learnbay.co/" target="_blank">blogs</a> and visit <a href="https://www.learnbay.co/" target="_blank">Learnbay</a> to learn more about the topic.