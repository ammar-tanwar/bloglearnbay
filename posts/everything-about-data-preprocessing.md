---
title: Everything About Data Preprocessing
stitle: "Everything About Data Preprocessing - Learnbay"
publish: "Published on"
published_time: "2021-11-25T13:25:31+05:30"
modified_time: "2021-11-25T13:25:31+05:30"
desc: "Data preprocessing, an important step in the data mining process refers to the cleaning, transforming, and integrating of data in order to make it ready for analysis."
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/databack.jpg"
headerAlt: ""
date: "Nov 25, 2021"
tag: [ Data Science]
author: "Learnbay"
authorimg : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/learnbay-admin.webp"
authordesc: ""
authorlinkedin: "https://www.linkedin.com/company/learnbay/mycompany/"
category: "Data Science"

cattitle: "Latest Data Science Trends, Blogs, Career Resources - Learnbay Blogs"
catdesc: "Check out the latest updates and career related trends of data science and business analytics here inside the Learnbay's data science blogs."
authortitle: ""
adesc: ""

position: "Editor"
readTime: "4-5 mins"
h1: "Everything About Data Preprocessing"
id: "everything-about-data-preprocessing"
tableData:
  [
  Data Preprocessing,
  Preprocessing of data in a stepwise fashion in scikit learn,
    
  ]
---


## Data Preprocessing

Introduction to Data Preprocessing:- Before modeling the data we need to clean the information to get a training sample for the modeling. Data preprocessing is a <a href="https://www.ibm.com/cloud/learn/data-mining" target="_blank" rel="nofollow">data mining</a>
 technique that involves transforming the raw data into an understandable format. It provides the technique for cleaning the data from the real world which is often incomplete, inconsistent, lacking accuracy and more likely to contain many errors. Preprocessing provides clean information before it gets to the modeling phase.


## Preprocessing of data in a stepwise fashion in scikit learn.

1. Introduction to Preprocessing:



* Learning algorithms have an affinity towards a certain pattern of data.
* Unscaled or unstandardized data have might have an unacceptable prediction.
* Learning algorithms understand the only number, converting text image to number is required.
* Preprocessing refers to transformation before feeding to Machine Learning.

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/data.png" width="400px" class="img" alt="An image of a preprocessing procedure that includes the sequental steps as follows: -
Data collection & Assembly
Data processing 
Data Exploration & Visualization
Model Building
Model Evaluation
"/>

1. StandardScaler

* The StandardScaler assumes your data is normally distributed within each feature and will scale them such that the distribution is now centered around 0, with a standard deviation of 1.
* Calculate – Subtract mean of column & div by the standard deviation
* If data is not normally distributed, this is not the best scaler to use.



<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/data1.png"   class="img" alt="A standard scaler formula reads lowercase x subscript lowercase i end subscript minus mean of lowercase x divided by standard deviation of lowercase x."/>

1. MinMaxScaler

* Calculate – Subtract min of column & div by the difference between max & min
* Data shifts between 0 & 1
* If distribution not suitable for StandardScaler, this scaler works out.
* Sensitive to outliers.



<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/data2.png"   class="img" alt="A MinMaxScaler formula  lowercase x subscript lowercase i  that  Subtract min of column with lower case (x) & divides by the difference between max lowercase(x) & min lowercase(X)."/>


1. Robust Scaler



* Suited for data with outliers
* Calculate by subtracting 1st-quartile & div by difference between 3rd-quartile & 1st-quartile.



<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/data3.png"   class="img" alt="A formula for Robust Scaler where  lowercase x subscript lowercase i subtract the 1st-quartile & divide them by the difference between Q3rd-quartile lowercase(x) & 1st-quartile lowercase (X)."/>



1. Normalizer



* Each parameter value is obtained by dividing by magnitude.
* Enabling you to more easily compare data from different places.



<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/data4.png"   class="img" alt="A normalizer formula that divides each parameter value by magnitude where lowercase x subscript lowercase i divides with the squre root of lowercase x subscript lowercase i with exponential 2 + lowercase y subscript lowercase i with exponential 2 + lowercase z subscript lowercase i with exponential 2."/>


1. Binarization



* Thresholding numerical values to binary values ( 0 or 1 )
* A few learning algorithms assume data to be in Bernoulli distribution – Bernoulli’s Naive Bayes

7. Encoding Categorical Value



* Ordinal Values – Low, Medium & High. Relationship between values
* LabelEncoding with the right mapping

8. Imputation



* Missing values cannot be processed by learning algorithms
* Imputers can be used to infer the value of missing details from existing data

9. Polynomial Features



* Deriving non-linear feature by converting information into a higher degree
* Used with linear regression to learn a model of higher degree

10. Custom Transformer



* Often, you will want to convert an existing Python function into a transformer to assist in data cleaning or processing.
* FunctionTransformer is used to create one Transformer
* validate = False, is required for the string column.

11. Text Processing



* Perhaps one of the most common information
* Learning algorithms don’t understand the text but only numbers
* Below methods convert text to numbers

12. CountVectorizer



* Each column represents one word, count refers to the frequency of the word
* A sequence of words is not maintained

13.Hyperparameters



* n_grams – Number of words considered for each column
* stop_words – words not considered
* vocabulary – only words considered

13. TfIdfVectorizer



* Words occurring more frequently in a doc versus entire corpus is considered more important
* The importance is on the scale of 0 & 1

14. HashingVectorizer



* All the above techniques convert information into a table where each word is converted to column
* Learning on data with lakhs of columns is difficult to process
* HashingVectorizer is a useful technique for out-of-core learning
* Multiple words are hashed to limited column
* Limitation – Hashed value to word mapping is not possible

15. Image Processing using skimage

* skimage doesn’t come with anaconda. install with ‘pip install skimage’
* Images should be converted from 0-255 scale to 0-1 scale.
* skimage takes image path & returns numpy array
* images consist of 3 dimensions.