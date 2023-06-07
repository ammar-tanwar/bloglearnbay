---
title: Support Vector Machine
stitle: "Introduction of Support Vector Machine - LearnBay Blog"
publish: "Published on"
published_time: "2020-11-25T13:25:31+05:30"
modified_time:  "2020-11-25T13:25:31+05:30"
desc: "Support vector machines are a particularly powerful and flexible class of supervised algorithms. In this blog, we will explore the support vendor machines."
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/vector.png"
headerAlt: ""
date: "Nov 25, 2020"
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
position: "editor"
readTime: "9-12 mins"
h1: "Support Vector Machine"
id: "support-vector-machines"
tableData:
  [
   Introduction of  Support Vector Machine,
   Feature of Support Vector Machine SVM-,

  ]
---


## Introduction of  Support Vector Machine

Support vector machines (SVMs) are a particularly powerful and flexible class of supervised algorithms for both classification and regression.

SVMs were introduced initially in the 1960s and were later refined in 1990s. However, it is only now that they are becoming extremely popular, owing to their ability to achieve brilliant results. SVMs are implemented uniquely when compared to other Machine Learning algorithms.

Support vector machine(SVM) is a supervised learning algorithm that is used to classify the data into different classes, now unlike most algorithms SVM makes use of hyperplane which acts as a decision boundary between the various classes. In general, SVM can be used to generate multiple separating the hyperplane so that the data is divided into segments. These segments contain some kind of data. SVM used to classify the data into two different segments depending on the feature of data.


### Feature of Support Vector Machine SVM-

SVM studies the labeled data & then classify any new input data depending on what it learned into the training phase.

It can be used for both classification and regression problems. As SVC supports vector classification SVR stands for support vector regression. One of the main features of SVM is  <a href="https://www.geeksforgeeks.org/major-kernel-functions-in-support-vector-machine-svm/#:~:text=Kernel%20Function%20is%20a%20method,window%20to%20manipulate%20the%20data." target="_blank" rel="nofollow">kernel function</a>, it can be used for nonlinear data by using the kernel trick.  The working of the kernel trick is to transform the data into another dimension so that we can draw a hyperplane that classifies the data.

How SVM work??

SVM works by mapping data to a high-dimensional feature space so that data points can be classified, even when the data are not linearly separable. A separator between the classifies is found, then the data are transformed in such a way that the separator could be drawn as a hyperplane. Following this, characteristics of new data can be used to predict the group to which a new record should belong.

Importing Libraries:

import pandas as pd

import numpy as np

import matplotlib.pyplot as plt

%matplotlib inline

bankdata = pd.read_csv("D:/Datasets/bill_authentication.csv")

Exploratory Data Analysis:

bankdata.shape

bankdata.head()


<table>
  <tr>
   <td><strong>Variance</strong>
   </td>
   <td><strong>Skewness</strong>
   </td>
   <td><strong>Curtosis</strong>
   </td>
   <td><strong>Entropy</strong>
   </td>
   <td><strong>Class</strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>0
   </td>
   <td>3.62160
   </td>
   <td>8.6661
   </td>
   <td>-2.8073
   </td>
   <td>-0.44699
   </td>
   <td>0
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>4.54590
   </td>
   <td>8.1674
   </td>
   <td>-2.4586
   </td>
   <td>-1.46210
   </td>
   <td>0
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>3.86600
   </td>
   <td>-2.6383
   </td>
   <td>1.9242
   </td>
   <td>0.10645
   </td>
   <td>0
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>3.45660
   </td>
   <td>9.5228
   </td>
   <td>-4.0112
   </td>
   <td>-3.59440
   </td>
   <td>0
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>0.32924
   </td>
   <td>-4.4552
   </td>
   <td>4.5718
   </td>
   <td>-0.98880
   </td>
   <td>0
   </td>
  </tr>
</table>


Data preprocessing:

X = bankdata.drop('Class', axis=1)

y = bankdata['Class'] from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.20) 

Training the Algorithm:

from sklearn.svm import SVC

svclassifier = SVC(kernel='linear')

svclassifier.fit(X_train, y_train)

Making prediction

y_pred = svclassifier.predict(X_test)

Evaluating the Algorithm:

from sklearn.metrics import classification_report, confusion_matrix

print(confusion_matrix(y_test,y_pred))

print(classification_report(y_test,y_pred))

Output:

[[152 0] [ 1 122]] precision recall f1-score support

0 0.99 1.00 1.00 152

1 1.00 0.99 1.00 123

avg / total 1.00 1.00 1.00 275


### SVM Linear Classifier:

In the linear classifier model, we assumed that training examples plotted in space. These data points are expected to be separated by an apparent gap. It predicts a straight hyperplane dividing 2 classes. The primary focus while drawing the hyperplane is on maximizing the distance from hyperplane to the nearest data point of either class. The drawn hyperplane called a maximum-margin hyperplane.


### SVM Non-Linear Classifier:

In the real world, our dataset is generally dispersed up to some extent. To solve this problem separation of data into different classes based on a straight linear hyperplane can’t be considered a good choice. For this Vapnik suggested creating Non-Linear Classifiers by applying the kernel trick to maximum-margin hyperplanes. In Non-Linear SVM Classification, data points plotted in a higher-dimensional space.


<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/vector1.png"   class="img" alt="An image shows two scattered plots; the first one shows a linear separable, and the second graph shows a non-linear separable. In the first graph, the blue and green dots are separated by a straight line with positive slop, and in the second graph, the blue and green dots are separated by a circle."/>


<a href="https://www.learnbay.co/data-science-course/" target="_blank">Learnbay</a> provides industry accredited data science courses in Bangalore. We understand the conjugation of technology in the field of Data science hence we offer significant courses like Machine Learning, Tensor Flow, IBM Watson, Google Cloud platform, Tableau, Hadoop, time series, R and Python. With authentic real-time industry projects. Students will be efficient by being certified by IBM.
