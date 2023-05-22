---
title: Everything About Decision Tree From Scratch
stitle: "Everything About Decision Tree From Scratch - Learnbay Blog"
publish: "Published on"
published_time: "2021-11-01T13:25:31+05:30"
modified_time: "2021-11-01T13:25:31+05:30"
desc: "Decision tree is a decision support tool that uses a tree-like model of decisions and their possible consequences, including chance event outcomes, and utility."
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/tree.png"
headerAlt: ""
date: "1 Nov, 2021"
tag: [ Data Science , Machine Learning ]
author: "Learnbay"
authorimg : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/learnbay-admin.webp"
authordesc: ""
authorlinkedin: "https://www.linkedin.com/company/learnbay/mycompany/"
category: "Machine Learning"

cattitle: "Stay Updated with Machine Learning Resources - LearnBay Blogs"
catdesc: "Check out the Learnbay Machine Learning blog section, featuring a comprehensive collection of blogs on Deep Learning, Neural Networks, NLP, etc."
authortitle: ""
adesc: ""

position: "Editor"
readTime: "8-10 mins"
h1: "Everything About Decision Tree From Scratch"
id: "everything-about-decision-tree-from-scratch"
tableData:
  [
 Decision tree,
 What is Classification?,
 Types of classification,

 
  ]
---

## Decision tree

The decision tree is the classification algorithm in ML(Machine Learning). A decision tree is a decision support tool that uses a tree-like model of decisions and their possible consequences, including chance event outcomes, resource costs, and utility. It is one way to display an algorithm that only contains conditional control statements.

To understand the algorithm of the decision tree we need to know about the classification.


## What is Classification?

Classification is the process of dividing the datasets into different categories or groups by adding a label. It adds the data point to a particular labeled group on the basis of some condition.

As we see in daily life there are three categories in an email(Spam, Promotions, Personal) they are classified to get the proper information. Here decision tree is used to classify the mail type and fix it the proper one.


## Types of classification 



* DECISION TREE
* RANDOM FOREST
* NAIVE BAYES
* KNN

Decision tree:



1. Graphical representation of all the possible solutions to a decision.
2. A decision is based on some conditions.
3. The decision made can be easily explained.


<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/dt.png"   class="img" alt="A graphical representation of a decision tree for play tennis depending on possible solutions and weather conditions."/>


There are the following steps to get a decision with the decision tree

1. Entropy:

[Entropy](https://en.wikipedia.org/wiki/Entropy) is basically used to create a tree. We find our entropy from attribute or class. A decision tree is built top-down from a root node and involves partitioning the data into subsets that contain instances with similar values (homogeneous). ID3 algorithm uses entropy to calculate the homogeneity of a sample.



<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/dt1.png"   class="img" alt="An Energy versus lowercase P graph shows the parabolic curve of the entropy formula, that reads  Entropy equals negative lowercase p log lowercase p base 2  minus lowercase q log lowercase q base 2.  Each of the Energy and p axes ranges from 0 to 1 in the equal intervals of 0.1. 
The formua below the graph reads, Entropy equals negative 0.5 log 0.5 base 2 minus 0.5 log 0.5 base 2 equals 1. "/>


2.Information Gain:

The information gain is based on the decrease in entropy after a data-set is split on an attribute. Constructing a decision tree is all about finding an attribute that returns the highest information gain.



* The information gain is based on the decrease in entropy after a dataset is split on an attribute.
* Constructing a decision tree is all about finding an attribute that returns the highest information gain (i.e., the most homogeneous branches).
* Gain(S, A) = Entropy(S) – ∑ [ p(S|A) . Entropy(S|A) ]
* We intend to choose the attribute, splitting by which information gain will be the most
* Next step is calculating information gain for all attributes

Here the short example of a Decision tree:

import pandas as pd

import numpy as np

import matplotlib.pyplot as plt

%matplotlib inline

play_data=pd.read_csv('data/tennis.csv.txt')

print(play_data)

play_data=pd.read_csv('data/tennis.csv.txt')

play_data

Output:

outlook	temp	humidity	windy	play

0	sunny	hot	high	False	no

1	sunny	hot	high	True	no

2	overcast	hot	high	False	yes

3	rainy	mild	high	False	yes

4	rainy	cool	normal	False	yes

5	rainy	cool	normal	True	no

6	overcast	cool	normal	True	yes

7	sunny	mild	high	False	no

8	sunny	cool	normal	False	yes

9	rainy	mild	normal	False	yes

10	sunny	mild	normal	True	yes

11	overcast	mild	high	True	yes

12	overcast	hot	normal	False	yes

13	rainy	mild	high	True	no 

Entropy of play:



* Entropy(play) = – p(Yes) . log2p(Yes) – p(No) . log2p(No)

play_data.play.value_counts()

Entropy_play=-(9/14)*np.log2(9/14)-(5/14)*np.log2(5/14)

print(Entropy_play)

output:

0.94028595867063114

Information Gain on splitting by Outlook



* Gain(Play, Outlook) = Entropy(Play) – ∑ [ p(Play|Outlook) . Entropy(Play|Outlook) ]
* Gain(Play, Outlook) = Entropy(Play) – [ p(Play|Outlook=Sunny) . Entropy(Play|Outlook=Sunny) ] – [ p(Play|Outlook=Overcast) . Entropy(Play|Outlook=Overcast) ] – [ p(Play|Outlook=Rain) . Entropy(Play|Outlook=Rain) ]

play_data[play_data.outlook == 'sunny'] 

## Entropy(Play|Outlook=Sunny)

Entropy_Play_Outlook_Sunny =-(3/5)*np.log2(3/5) -(2/5)*np.log2(2/5)

Entropy_Play_Outlook_Sunny

play_data[play_data.outlook == 'overcast'] # Entropy(Play|Outlook=overcast)

## Since, it's a homogenous data entropy will be 0

play_data[play_data.outlook == 'rainy'] # Entropy(Play|Outlook=rainy)

Entropy_Play_Outlook_Rain = -(2/5)*np.log2(2/5) - (3/5)*np.log2(3/5)

print(Entropy_play_Outlook_Rain)

## Entropy(Play_Sunny|)

Entropy_Play_Outlook_Sunny =-(3/5)*np.log2(3/5) -(2/5)*np.log2(2/5)

#Gain(Play, Outlook) = Entropy(Play) – [ p(Play|Outlook=Sunny) . Entropy(Play|Outlook=Sunny) ] –

#[ p(Play|Outlook=Overcast) . Entropy(Play|Outlook=Overcast) ] – [ p(Play|Outlook=Rain) . Entropy(Play|Outlook=Rain) ]

Other gains



* Gain(Play, Temperature) – 0.029
* Gain(Play, Humidity) – 0.151
* Gain(Play, Wind) – 0.048

Conclusion – Outlook is winner & thus becomes root of the tree


<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/dt2.png"   class="img" alt="A tree diagram of outlook which overcast various weather conditions like Sunny, Overcast, and Rain."/>



Time to find the next splitting criteria¶

play_data[play_data.outlook == 'overcast'] play_data[play_data.outlook == 'sunny'] # Entropy(Play_Sunny|)

Entropy_Play_Outlook_Sunny =-(3/5)*np.log2(3/5) -(2/5)*np.log2(2/5)

print(Entropy_Play_Outlook_Sunny)

## Entropy(Play_Sunny|)

Entropy_Play_Outlook_Sunny =-(3/5)*np.log2(3/5) -(2/5)*np.log2(2/5)

print(Entropy_Play_Outlook_Sunny)

Information Gain for humidity

#Entropy for attribute high = 0, also entropy for attribute normal = 0

Entropy_Play_Outlook_Sunny - (3/5)*0 - (2/5)*0 

Information Gain for windy



* False -> 3 -> [1+ 2-]
* True -> 2 -> [1+ 1-]

Entropy_Wind_False = -(1/3)*np.log2(1/3) - (2/3)*np.log2(2/3)

print(Entropy_Wind_False)

Entropy_Play_Outlook_Sunny - (3/5)* Entropy_Wind_False - (2/5)*1  

Information Gain for temperature



* hot -> 2 -> [2- 0+]
* mild -> 2 -> [1+ 1-]
* cool -> 1 -> [1+ 0-]

Entropy_Play_Outlook_Sunny - (2/5)*0 - (1/5)*0 - (2/5)* 1]

Conclusion : Humidity is the best choice on sunny branch:



<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/dt3.png"   class="img" alt="A tree diagram of outlook which overcast various weather conditions like Sunny, Overcast, and Rain. Here the left part outlook tree shows the sunny weather with humidity that is further divided into high/normal and yes/ No."/>



play_data[(play_data.outlook == 'sunny') & (play_data.humidity == 'high')] 

Output:

outlook	temp	humidity	windy	play

0	sunny	hot	high	False	no

1	sunny	hot	high	True	no

7	sunny	mild	high	False	no 

play_data[(play_data.outlook == 'sunny') & (play_data.humidity == 'normal']

Output:

outlook	temp	humidity	windy	play

8	sunny	cool	normal	False	yes

10	sunny	mild	normal	True	yes

Splitting the rainy branch:

play_data[play_data.outlook == 'rainy'] # Entropy(Play_Rainy|)

Entropy_Play_Outlook_Rainy =-(3/5)*np.log2(3/5) -(2/5)*np.log2(2/5)outlook	temp	humidity	windy	play

3	rainy	mild	high	False	yes

4	rainy	cool	normal	False	yes

5	rainy	cool	normal	True	no

9	rainy	mild	normal	False	yes

13	rainy	mild	high	True	no 

Information Gain for temp



* mild -> 3 [2+ 1-]
* cool -> 2 [1+ 1-]

Entropy_Play_Outlook_Rainy - (3/5)*0.918 - (2/5)*1

Output:

0.020150594454668602

Information Gain for Windy:

Entropy_Play_Outlook_Rainy - (2/5)*0 - (3/5)*0

Output:

0.97095059445466858 

Information Gain for Humidity



* High -> 2 -> [1+ 1-]
* Normal -> 3 -> [2+ 1-]

Entropy_Play_Outlook_Rainy_Normal = -(1/3)*np.log2(1/3) - (2/3)*np.log2(2/3)

Entropy_Play_Outlook_Rainy_Normal

Entropy_Play_Outlook_Rainy - (2/5)*1 - (3/5)*Entropy_Play_Outlook_Rainy_Normal

Entropy_Play_Outlook_Rainy_Normal

Entropy_Play_Outlook_Rainy_Normal

Output:

0.91829583405448956

0.019973094021974891 

Final tree:



<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/dt4.png"   class="img" alt="A tree diagram of outlook which overcast various weather conditions like Sunny, Overcast, and Rain. Here the left part outlook tree shows the sunny weather with humidity further divided into high/normal and yes/ No. And the right part of the outlook tree shows rainy weather with the wind, further divided into strong/ weak and yes/No."/>



Decision trees are popular among non-statisticians as they produce a model that is very easy to interpret. Each leaf node is presented as an if/then rule. Cases that satisfy the if/then the statement is placed in the node. Are non-parametric and therefore do not require normality assumptions of the data. Parametric models specify the form of the relationship between predictors and response. An example is a linear relationship for regression. In many cases, however, the nature of the relationship is unknown. This is a case in which non-parametric models are useful. Can handle data of different types, including continuous, categorical, ordinal, and binary. Transformations of the data are not required. It can be useful for detecting important variables, interactions, and identifying outliers. It handles missing data by identifying surrogate splits in the modeling process. Surrogate splits are splitting highly associated with the primary split. In other models, records with missing values are omitted by default.

<a href="https://www.learnbay.co/data-science-course-training-in-bangalore" target="_blank">Learnbay</a> provides industry accredited data science courses in Bangalore. We understand the conjugation of technology in the field of Data science hence we offer significant courses like Machine Learning, Tensor Flow, IBM Watson, Google Cloud platform, Tableau, Hadoop, time series, R and Python. With authentic real-time industry projects. Students will be efficient by being certified by IBM. Around hundreds of students are placed in promising companies for data science roles. By choosing Learnbay you will reach the most aspiring job of present and future.

Learnbay data science course covers Data Science with Python, Artificial Intelligence with Python, Deep Learning using Tensor-Flow. These topics are covered and co-developed with IBM.
