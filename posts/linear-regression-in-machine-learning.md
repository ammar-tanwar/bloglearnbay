---
title: Linear Regression in Machine Learning
stitle: "Linear Regression in Machine Learning | Learnbay"
publish: "Published on"
published_time: "2020-12-30T13:25:31+05:30"
modified_time: "2020-12-30T13:25:31+05:30"
desc: "Linear regression is one of the simplest and most popular machine learning algorithms. It is a statistical method used for predictive analysis."
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/reg.jpg"
headerAlt: ""
date: "Dec 30, 2020"
tag: [ Machine Learning ]
category: "Machine Learning"

cattitle: "Stay Updated with Machine Learning Resources - LearnBay Blogs"
catdesc: "Check out the Learnbay Machine Learning blog section, featuring a comprehensive collection of blogs on Deep Learning, Neural Networks, NLP, etc."
authortitle: ""
adesc: ""

author: "Learnbay"
authorimg : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/learnbay-admin.webp"
authordesc: ""
authorlinkedin: "https://www.linkedin.com/company/learnbay/mycompany/"
position: "Editor"
readTime: "6-8 mins"
h1: "Linear Regression in Machine Learning"
id: "linear-regression-in-machine-learning"
tableData:
  [
   What is Regression?,
   What are overfitting and underfitting?,

  ]
---

### What is Regression?

In statistical modeling, regression analysis is a statistical process for estimating the relationships among variables. It includes many techniques for modeling and analyzing several variables when the focus is on the relationship between a dependent variable and one or more independent variables (or ‘predictors’). Regression is a predictive modeling analysis technique. It estimates a relationship between the dependent and an independent variable.

Use of Regression:



* Determine the strength of predictors.
* Forecasting an effect.
* Trend forecasting.

Linear Regression:

Linear regression is a basic and commonly used type of predictive analysis.  The overall idea of regression is to examine two things, it does a set of predictor variables do a good job in predicting an outcome (dependent) variable?  in Which variables, in particular, are significant predictors of the outcome variable, and in what way do they–indicated by the magnitude and sign of the beta estimates–impact the outcome variable?  These regression estimates are used to explain the relationship between one dependent variable and one or more independent variables.  The simplest form of the regression equation with one dependent and one independent variable is defined by the formula y = c + b*x, where y = estimated dependent variable score, c = constant, b = regression coefficient, and x = score on the independent variable.

Linear Regression Selection Criteria:



1. Classifiaction & Regression capabalities.
2. Data quality.
3. Computational complexity.
4. Comprehensive & transport.

When will we use Linear Regression?


* Evaluating trends & sales estimates.
* Analyzing the impact of price changes.
* Assessment of risk in financial services and insurance domain.


<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/reg1.png"   class="img" alt="A scattered plot with an x-axis ranging from 2016, 2017, 2018, and 2019 and a y-axis ranging from $100, $200, $300, $400, and $500, with some. The data points  suggests the growth of stock prices."/>


for example, a group of creative Tech enthusiasts started a company in <a href="https://en.wikipedia.org/wiki/Silicon_Valley" target="_blank" rel="nofollow">Silicon Valley</a>. This start-up — called Banana — is so innovative that it has been growing constantly since 2016. You, the wealthy investor, would like to know whether to put your money on Banana’s success in the next year or not. Let’s assume that you don’t want to risk a lot of money, especially since the stakes are high in Silicon Valley. So you decide to buy a few shares, instead of investing in a big portion of the company.

Well, you can definitely see the trend. Banana is growing like crazy, kicking up their stock price from 100 dollars to 500 in just three years. You only care about how the price is going to be like in the year 2021 because you want to give your investment some time to blossom along with the company. Optimistically speaking, it looks like you will be growing your money in the upcoming years. The trend is likely not to go through a sudden, drastic change. This leads to you hypothesizing that the stock price will fall somewhere above the $500 indicator.

Here’s an interesting thought. Based on the stock price records of the last couple of years you were able to _predict_ what the stock price is going to be like. You were able to infer the range of the new stock price (that doesn’t exist on the plot) for a year that we don’t have data for (the year 2021). Well — kinda.

What you just did is infer your model (that head of yours) to generalize — predict the y-value for an x-value that is not even in your knowledge. However, this is not accurate in any way. You couldn’t specify what exactly is the stock price most likely going to be. For all you know, it is probably going to be above 500 dollars.

Here is where Linear Regression (LR) comes into play. The essence of LR is to find the line that best fits the data points on the plot so that we can, more or less, know exactly where the stock price is likely to fall in the year 2021.

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/reg2.png"   class="img" alt="A scattered plot with an x-axis ranging from 2016 to 2021 in the equal interval of 1 and a y-axis ranging from $100 to $500, in equal interval of 1 shows data points suggesting the growth of stocks with an LR generated line in red color."/>


Let’s examine the LR-generated line (in red) above, by looking at the importance of it. It looks like, with just a little modification, we were able to realize that Banana’s stock price is likely to be worth a little bit higher than $600 by the year 2021. Obviously, this is an oversimplified example. However, the process stays the same. Linear Regression as an algorithm relies on the concept of lowering the cost to maximize the performance. We will examine this concept, and how we got the red line on the plot next.

Finding the best fit line:

To check the goodness of fit we use the R-squared method.

What is the R-squared method?

R-squared value is a statistical measure of how close the data to the fitted linear regression line. It is also known as COD(coefficient of determination), or the coefficient of multiple determination.


<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/reg3.png"   class="img" alt="A formula for COD(coefficient of determination) to determine the statistical measure for R squared values. The forula reads R square equals 1 minus SSsubscript Res end subscript deviced by SSsubscript ror end subscript equal 1 minus summation subscript i of open parenthesis y subscript i end subscript minus y caps subscript i end subscript close parenthesis square deviced by summation subscript i of open parenthesis y subscript i end subscript minus y bar close parenthesis square."/>



## What are overfitting and underfitting?

Overfitting: Good performance on the training data, poor generalization to other data.

Underfitting: Poor performance on the training data & poor generalization to other data.

Linear Regression with python:

1.Importing required libraries:

import numpy as np

from sklearn.linear_model import LinearRegression

2. Provide data:

x = np.array([5, 15, 25, 35, 45, 55]).reshape((-1, 1))

y = np.array([5, 20, 14, 32, 22, 38])

print(x)

print(y) 

Output:

>>> print(x)

[[5]

 [15]

 [25]

 [35]

 [45]

 [55]]

>>> print(y)

[ 5 20 14 32 22 38]

3. Create a model and fit it:

model = LinearRegression().fit(x, y) 

4. Get Result:

>> r_sq = model.score(x, y)

>>> print('coefficient of determination:', r_sq)

coefficient of determination: 0.715875613747954 

5. Predict response:

>>> y_pred = model.predict(x)

>>> print('predicted response:', y_pred, sep='\n')

predicted response:

[ 8.33333333 13.73333333 19.13333333 24.53333333 29.93333333 35.33333333]

<a href="https://www.learnbay.co/data-science-course/" target="_blank">Learnbay</a> provides industry accredited data science courses in Bangalore. We understand the conjugation of technology in the field of Data science hence we offer significant courses like Machine Learning, Tensor Flow, IBM Watson, Google Cloud platform, Tableau, Hadoop, time series, R and Python. With authentic real-time industry projects. Students will be efficient by being certified by IBM. Around hundreds of students are placed in promising companies for data science roles. Choosing Learnbay you will reach the most aspiring job of present and future.

Learnbay data science course covers Data Science with Python, Artificial Intelligence with Python, Deep Learning using Tensor-Flow. These topics are covered and co-developed with IBM.

 

 

 

 
