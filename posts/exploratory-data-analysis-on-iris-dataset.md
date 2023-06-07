---
title: Exploratory Data Analysis on Iris dataset
stitle: "Exploratory Data Analysis On Iris Dataset - Learnbay Blog"
publish: "Published on"
published_time: "2021-01-03T13:25:31+05:30"
modified_time: "2021-01-03T13:25:31+05:30"
desc: "Learn about the Iris dataset and how it measures the 150 dataframes of iris petal and sepal length for each species of setosa, versicolor, and virginica."
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-1.jpg"
headerAlt: "An illustration shows two female data analyst professionals busy in data analysis using a laptop and a tablet, respectively. They stand in front of the analytics screen. The text reads, 'Exploratory Data Analysis on Iris Dataset.'"
date: "Jan 3, 2021"
tag: [ descriptive analytics on the iris data set, iris dataset in python, iris data science ]
author: "Vineeth Kumar"
authorimg : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/vineeth-kumar.webp"
authordesc: "An experienced techie with in-depth knowledge of data science and Python programming languages. His intensive interest in data management and machine learning drew him toward a data science career transition from electrical engineering to advance artificial intelligence. His hobby includes writing programming-related articles. "
authorlinkedin: "https://www.linkedin.com/in/vineeth-kumar-104a6b98/"
category: "Data Science"

cattitle: "Latest Data Science Trends, Blogs, Career Resources - Learnbay Blogs"
catdesc: "Check out the latest updates and career related trends of data science and business analytics here inside the Learnbay's data science blogs."
authortitle: "Vineeth Kumar - A Data Science Enthusiast and Blogger at Learbay"
adesc: "Vineeth Kumar, a blogger and experienced techie with in-depth knowledge of data science and python programming languages."

position: "Editor"
readTime: "15-20 mins"
h1: "Exploratory Data Analysis on Iris dataset"
id: "exploratory-data-analysis-on-iris-dataset"
tableData:
  [
 
     What is EDA?, What is Iris Dataset?, EDA on Iris Dataset:-, Importing relevant libraries:-, Loading iris data:-, Output:-, Analyzing the data:-, Statistical analysis:-, Data insight:-, Dropping column:-, Detecting duplicate data:-, Output:-, Output:-, Data visualization:-, Species count:-, Data insight:-, Univariate analysis:-, Data insight:-, Data insight:-, Bi-variate analysis:-, Data insight:-, Examining the correlation:-, Data insight:-, Examining each species' mean and median values:-, Box plots to learn about distribution-, Data insight:-, Violin plot for distribution analysis-, Data insight:-, Plotting the histogram and probability density function (PDF), Data insight:-, Plotting different classes of the target variable, Data insight:-, Pair Plot:-, Cumulative distribution function:-, Conclusion:-
  ]
---



<span style=" font-weight:bold; font-size:28px"> What is Meant by Iris Dataset?</span>

Being able to implement a data science project is more rigorous than it seems. Data scientists examine every step carefully to ensure that there are no anomalies or errors present. This is why scientists use Exploratory Data Analysis (EDA), which improves the accuracy of results.

EDA helps data scientists find errors, and missing values, understand different variables, and identify key patterns in data. It is extremely important for organizations for gaining better insights and conclusions from a dataset.

The Iris dataset is a set of information that displays the characteristics of different statistical models. It contains data on the Iris species of flower. The Iris flower dataset is a well-known dataset with multiple variables. It is specifically designed for testing different <a href="https://blog.learnbay.co/10-must-know-machine-learning-algorithms-for-beginners-in-2023" target="_blank">machine learning algorithms</a>.

## What is EDA?

For a budding data scientist, EDA can help perform proper data analysis. EDA will help you extract and analyze information about the data before jumping to conclusions.

Exploratory data analysis aka EDA is a crucial process where we perform early data investigations. This process helps discover patterns, spot anomalies, test hypotheses and check assumptions with the help of summary statistics and graphical representations.

Exploring and comparing a data set with multiple exploratory techniques is a good practice. After the Iris dataset exploratory data analysis, you will get confidence in your data to the point where you're ready to implement a machine learning algorithm.

The Iris dataset EDA is helpful in selecting the feature variables that will be used later for machine learning.

## What is Iris Dataset?     

The **Iris dataset** contains three different flower species (classes) of the Iris family, which are

- Iris setosa
  
- Iris versicolor
  
- Iris virginica

In the Iris dataset, each class contains 5 distinct features, namely Petal Width, Petal Length, Sepal Width, Sepal Length, and Species Type.

The **Iris dataset** is a basic function in data science which is why it is often referred to as the 'Hello World' of data science.

The main objective of this dataset is to classify a new flower having 4 unique features belonging to one of the three classes.

We will perform Exploratory Data Analysis (EDA) on the Iris dataset to find out meaningful patterns.

You can download the **Iris dataset** from <a href="https://www.kaggle.com/datasets/notepub/iris-dataset" target="_blank" rel="nofollow">Kaggle</a> and start using it. The dataset contains 150 data points.

## EDA on Iris Dataset:- 

First, load the **Iris dataset** CSV file obtained above using the Pandas library. Then convert the dataset into a data frame. We will use the same data frame object (iris\_data) for the Iris dataset analysis.

### Importing relevant libraries:-      

- import pandas as pd
  
- import numpy as np
  
- import seaborn as sns
  
- import matplotlib.pyplot as plt
  
- %matplotlib inline

### Loading iris data:-       

- iris\_data = pd.read\_csv("/content/Iris.csv")
  
- iris\_data()

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-2.png" class="img" alt="A table shows the iris data set, which includes Id, SepalLengthCm, SepaWidthCm, PetalLengthCm, PetalWidthCm, and Species. The dataset has 150 different variables and inputs."/>

We will get the shape of the **Iris dataset** using the shape parameter.

- iris\_data.shape
  
  <p></p>
 
#### Output:-     

(150,5)

### Analyzing the data:-     

- iris\_data.info() #provides information about the content of the dataset

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-3.png"   class="img" alt="An image shows the code that delivers information about the dataset's content based on the data frame."/>

#### Data insights:

1. There are no Null Entries in any of the columns.
   
2. There are four numerical columns.
   
3. There is only a single column of category type.

### Statistical analysis:-    

- iris\_data.describe()
  
  <p></p>


<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-4.png"   class="img" alt="A table displays the statistical analysis of the iris data set. Rows in the table include Id, SepalLengthCm, SepaWidthCm, PetalLengthCm, PetalWidthCm, and columns include count, mean, std, min, 25%, 50%, 75%, and max."/>


#### Data insights:

We obtain the mean, minimum, and maximum values and the standard deviation for each feature.

### Dropping column:-    

Here we are removing and dropping the unwanted columns.

iris\_data = iris\_data.drop('Id',axis = 1)

### Detecting duplicate data:-   

- iris\_data[iris\_data.duplicated()]

  <p></p>

#### Output:-     

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-5.png"   class="img" alt="The table shows three duplicate values from the Iris dataset."/>

The output displays 3 duplicate values. Because of these duplicates, we will determine if the **Iris Dataset** for each species is balanced in no or no's.

- iris\_data['Species'].value\_counts() # to check the balance

  <p></p>

#### Output:-    

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-6.png"   class="img" alt="The output includes the values Iris-setosa 50, Iris-versicolor 50, Iris-Virginica 50, and Name: Species, dtype:int64."/>

As a result, we should not delete the data. Because doing so may cause an unbalance in the data sets, making them less helpful for meaningful insights.

### Data visualization:-     

### Species count:-    

- plt.title('Species Count')
  
- sns.countplot(iris\_data['Species'])

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-7.png"   class="img" alt="A species count graph shows an X-axis labeled species and Y-axis labeled count. The X-axis consists of setosa, veriscolor, and virginica in blue, orange, and green colors. And the Y axis ranges from 0 to 50 with an equidistant of 10."/>

#### Data insight:-   

1. This illustrates how well-balanced the species are.
   
2. Each species (Iris virginica, setosa, and versicolor) has a count of 50.

## Univariate analysis:-    

#### Comparison of different species depending on sepal width and length.**

- plt.figure(figsize=(8,6))
  
- plt.title('Comparing different species based on their sepal length and width')
  
- sns.scatterplot(iris\_data['SepalLengthCm'],iris\_data['SepalWidthCm'],hue =iris\_data['Species'],s=50)

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-8.png"   class="img" alt="A scatter plot graph with the X-axis SepalWidthCm ranging from 2.0 to 4.5 in the equal interval of 0.5 and the Y-axis SepalLengthCm ranging from 4.5 to 8.0 in the equal interval of 0.5. It compares several species, such as Iris-setosa, Iris-versiclor, and Iris Virginica, in blue, orange, and green based on their sepal length and width."/>

#### Data insight:-  

1. Iris Setosa has shorter sepals but wider petals.
   
2. Versicolor is almost in the center in both length and breadth.
   
3. Virginica has longer sepals and narrower sepals.

**Comparison of different species depending on petal width and length.**

- plt.figure(figsize=(8,6))
  
- plt.title('Comparing different species based on their petal length and petal width')
  
- sns.scatterplot(iris\_data['PetalLengthCm'], iris\_data['PetalWidthCm'], hue = iris\_data['Species'], s= 50)

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-9.png"   class="img" alt="A scatter plot graph with the X-axis PetallWidthCm ranging from 0.0 to 2.5  in the equal interval of 0.5 and the Y-axis PetalLengthCm ranging from 1 to 7, in the equal interval of 1. It compares several species, such as Iris-setosa, Iris-versiclor, and Iris Virginica, in blue, orange, and green based on their petal length and width."/>

#### Data insight:-   

1. Setosa has the shortest petal length and breadth.
   
2. Petal length and breadth are normal for the Versicolor species.
   
3. Virginica species have the maximum petal length and breadth.

## Bi-variate analysis:-

- plt.figure(figsize=(10,9))
  
- sns.pairplot(iris\_data,hue="Species",height=4)

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-10.png"   class="img" alt="A group of plotted graph shows Bi-variate analysis for iris data set."/>

#### Data insight:-    

1. There is a strong correlation between columns for petal length and width.
   
2. Setosa has short petal width and length.
   
3. Setosa has a wide sepal and a short length.
   
4. Versicolor has standard petal width and length.
   
5. Virginica has long and wide petals.
   
6. Versicolor's sepal dimensions have average values.
   
7. Virginica has a narrow breadth but a long sepal length.

### Examining the correlation:-   

- plt.figure(figsize=(5,5))
  
- sns.heatmap(iris\_data.corr(),annot=True)
  
- plt.plot()

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-11.png"   class="img" alt="A heat map ranges from 0.4 to 1.0. suggest four rows and columns labelled SepalLengthCm, SepalWidthCm, PetalLengthCm, and PetalWidthCm."/>

#### Data insight:

1. Sepal Length and Width traits are marginally correlated with each other.
   
   <p></p>

### Examining each species' mean and median values:-   

- iris\_data.groupby('Species').agg(['mean', 'median'])

  <p></p>

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-12.png"   class="img" alt="A table with rows labeled SepalLengthC, SepalWidthCm, PetalLengthCm, PetalWidthCm, and columns labeled Iris setosa, Iris versicolor, and Iris virginica explain various mean and median values."/>

## Use of box plots and violin plots to depict the distribution, mean, and median:-    

### Box plots to learn about distribution-   

Use a boxplot to observe how the categorical feature "Species" is divided in relation to the remaining four input variables.

- fig, axes = plt.subplots(2, 2, figsize=(10,9))
- sns.boxplot( y="PetalWidthCm", x= "Species", data=iris\_data, orient='v' , ax=axes[0, 0])
  
- sns.boxplot( y="PetalLengthCm", x= "Species", data=iris\_data, orient='v' , ax=axes[0, 1])
  
- sns.boxplot( y="SepalLengthCm", x= "Species", data=iris\_data, orient='v' , ax=axes[1, 0])
  
- sns.boxplot( y="SepalWidthCm", x= "Species", data=iris\_data, orient='v' , ax=axes[1, 1])
  
- plt.show()

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-13.png"   class="img" alt="An image shows four different box plots based on the metrics PetalWidthCm, PetalLengthCm, SepalLengthCm, and SepalWidthCm.  The graph is plotted on the basis of species such as Iris-setosa, Iris-verisicor, and Iris-Virginica."/>

#### Data insight:- 

1. Setosa has fewer features and is less dispersed.
   
2. Versicolor is dispersed evenly and has average characteristics.
   
3. Virginica has a huge variety of qualities and characteristics and is widely dispersed.
   
4. Each plot clearly shows the mean/median values for several characteristics (sepal length & width, petal length & width)

### Violin plot for distribution analysis-    

The violin plot depicts the species' density of width and length. The narrower portion indicates lower density, and the bigger portion indicates more density.

- fig, axes = plt.subplots(2, 2, figsize=(10,9))
  
- sns.violinplot( y="PetalWidthCm", x= "Species", data=iris\_data, orient='v' , ax=axes[0, 0],inner='quartile')
  
- sns.violinplot( y="PetalLengthCm", x= "Species", data=iris\_data, orient='v' , ax=axes[0, 1],inner='quartile')
  
- sns.violinplot( y="SepalLengthCm", x= "Species", data=iris\_data, orient='v' , ax=axes[1, 0],inner='quartile')
  
- sns.violinplot( y="SepalWidthCm", x= "Species", data=iris\_data, orient='v' , ax=axes[1, 1],inner='quartile')
  
- plt.show()

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-14.png"   class="img" alt="An image shows four different violin plots graphs based on the metrics PetalWidthCm, PetalLengthCm, SepalLengthCm, and SepalWidthCm.  The graph is plotted on the basis of species such as Iris-setosa, Iris-verisicor, and Iris-Virginica."/>

#### Data insight:

1. Setosa has a lower dispersion density of petal width and length.
   
2. Versicolor is dispersed evenly and has average traits of petal length and breadth.
   
3. Virginica is widely dispersed, with sepal width and length showing a vast number of values and characteristics.
   
4. High-density values represent mean/median values. According to the table, Iris Setosa has the maximum density at 5.0 cm (sepal length characteristic), which is also the average value (5.0).

## Plotting the histogram and probability density function (PDF)    

Plot the probability density function (PDF) using the variable as an individual feature on the X-axis. On the Y-axis, we plot its histogram and the associated kernel density.

 plt.figure(figsize=(5,5))<br>
 sns.FacetGrid(data=iris\_data, hue="Species", height=5).map(sns.distplot, "SepalLengthCm").add\_legend() <br>
 sns.FacetGrid(data=iris\_data, hue="Species", height=5).map(sns.distplot, "SepalWidthCm").add\_legend()<br>
 sns.FacetGrid(data=iris\_data, hue="Species", height=5).map(sns.distplot, "PetalLengthCm").add\_legend()<br>
 sns.FacetGrid(data=iris\_data, hue="Species", height=5).map(sns.distplot, "PetalWidthCm").add\_legend()<br>
 plt.show()

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-15.png"   class="img" alt="A graph with X-axis labeled Density ranges from 0.0 to 1.4, and Y axis labeled SepalLengthCm ranging from 4 to 9  shows a graphical histogram representation of Iris-setosa, Iris verisocolor, and Iris-virginica. In this graph, the blue color represents Iris-setosa, the orange color represents Iris-Veriscolor, and the Green color represents Iris-Virginica."/>

**Figure-1**

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-16.png"   class="img" alt="A graph with X-axis labeled Density ranges from 0.0 to 1.6, and Y axis labeled SepalwidthCm ranging from 1.5 to 5.0 shows a graphical histogram representation of Iris-setosa, Iris verisocolor, and Iris-virginica. In this graph, the blue color represents Iris-setosa, the orange color represents Iris-Veriscolor, and the Green color represents Iris-Virginica."/>

**Figure-2**

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-17.png"   class="img" alt="A graph with X-axis labeled Density ranges from 0.0 to 3.0, and Y axis labeled PetalLengthCm ranging from 1 to 8 shows a graphical histogram representation of Iris-setosa, Iris verisocolor, and Iris-virginica. In this graph, the blue color represents Iris-setosa, the orange color represents Iris-Veriscolor, and the Green color represents Iris-Virginica."/>

**Figure-3**

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-18.png"   class="img" alt="A graph with X-axis labeled Density ranges from 0.0 to 3.0 in the equal interval of 0.5, and Y axis labeled PetalWidthCm ranging from 0 to 10 in the equal interval of 2 shows a graphical histogram representation of Iris-setosa, Iris verisocolor, and Iris-virginica. In this graph, the blue color represents Iris-setosa, the orange color represents Iris-Veriscolor, and the Green color represents Iris-Virginica."/>

**Figure-4**

#### Data insight:

- Figure 1 demonstrates that there is a substantial degree of overlap between the species in terms of sepal length, indicating that it is ineffective as a classification characteristic.
  
- Figure 2 reveals that there is significantly more overlap between the species on sepal width, indicating that it is ineffective as a classification characteristic.
  
- Figure 3 demonstrates that petal length is a useful classification characteristic since it clearly distinguishes across species. The overlap is little (between Versicolor and Virginica), while Setosa is well separated from the other two.
  
- Figure 4 demonstrates that petal width is a useful classification characteristic. The overlap is much smaller (between Versicolor and Virginica), while Setosa is well separated from the other two.

We will use the petal length as a classification characteristic from figure 3 to differentiate among the species.

## Plotting different classes of the target variable        

iris\_setosa = iris\_data.loc[iris\_data["Species"] == "Iris-setosa"]; <br>

iris\_virginica = iris\_data.loc[iris\_data["Species"] == "Iris-virginica"]; <br>

iris\_versicolor = iris\_data.loc[iris\_data["Species"] == "Iris-versicolor"]; <br>

plt.plot(iris\_setosa["PetalLengthCm"], <br>

np.zeros\_like(iris\_virginica["PetalLengthCm"]), 'o') <br>
 
plt.plot(iris\_versicolor["PetalLengthCm"], np.zeros\_like(iris\_virginica["PetalLengthCm"]), 'o') <br>

plt.plot(iris\_virginica["PetalLengthCm"], np.zeros\_like(iris\_virginica["PetalLengthCm"]), 'o') <br>

plt.grid() <br>

plt.show()

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-19.png"   class="img" alt="A grid graph shows the charting of various classes of the target variable."/>

#### Data insight:

1. Iris Setosa's pdf curve ends around 2.1.
   
2. If the petal length is greater than 2.1, the species is Iris Setosa.
   
3. The intersection point of the pdf curves of Versicolor and Virginica is approximately 4.8.
   
4. If the petal length is greater than 2.1 and less than 4.8, the species is Iris Versicolor.
   
5. If the petal length exceeds 4.8, the species is Iris Virginica.

## Pair Plot:-   

A pair plot allows us to see both the distribution of single variables and the relationships between two variables. For example, let's say we have four features 'sepal length', 'sepal width', 'petal length', and 'petal width' in our Iris dataset. In that case, we will have 4C2 plots i.e. 6 unique plots. The pairs, in this case, will be :

- Sepal length, sepal width
  
- petal length, petal width
  
- sepal length, petal Width
  
- Petal length, sepal width
  
- Petal length, sepal length
  
- Petal width, sepal width

So, here instead of trying to visualize four dimensions which is not possible. We will look into 6 2D plots and try to understand the 4-dimensional data in the form of a matrix.

### 1st plot   

sns.set\_style("whitegrid");

sns.FacetGrid(iris\_data, hue="Species", size=4).map(plt.scatter, "SepalLengthCm", "SepalWidthCm").add\_legend();

plt.show()

### 2nd plot   

sns.set\_style("whitegrid");

sns.FacetGrid(iris\_data, hue="Species", size=4).map(plt.scatter, "PetalLengthCm", "PetalWidthCm").add\_legend();

plt.show()

### 3rd plot

sns.set\_style("whitegrid");

sns.FacetGrid(iris\_data, hue="Species", size=4).map(plt.scatter, "SepalLengthCm", "PetalWidthCm").add\_legend();

plt.show()

### 4th plot

sns.set\_style("whitegrid");

sns.FacetGrid(iris\_data, hue="Species", size=4).map(plt.scatter, "PetalLengthCm", "SepalWidthCm").add\_legend();

plt.show()

### 5th plot

sns.set\_style("whitegrid");

sns.FacetGrid(iris\_data, hue="Species", size=4).map(plt.scatter, "PetalLengthCm", "SepalLengthCm").add\_legend();

plt.show()

### 6th plot

sns.set\_style("whitegrid"); <br>

sns.FacetGrid(iris\_data, hue="Species", size=4).map(plt.scatter, "PetalWidthCm", "SepalWidthCm").add\_legend(); <br>

plt.show();

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-20.png"   class="img" alt="A Scatter plot graph with X-axis labeled as SepalWidthCm ranges from 2.0 to 4.5 in the equal interval of 0.5, and Y-axis labeled as SepalLengthCm ranges from 5 to 8, starting from 5. It shows the relationship between several species, such as Iris-setosa, Iris-versiclor, and Iris Virginica, in blue, orange, and green color based on their Sepal length and width."/> <br>

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-21.png"   class="img" alt="A Scatter plot graph with X-axis labeled as PetalWidthCm ranges from 0.0 to 2.5 in the equal interval of 0.5, and Y-axis labeled as PetalLengthCm ranges from 1 to 7 in the equal interval of 1. It shows the relationship between several species, such as Iris-setosa, Iris-versiclor, and Iris Virginica, in blue, orange, and green color based on their Petal length and width."/> <br>

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-22.png"   class="img" alt="A Scatter plot graph with X-axis labeled as SepalLengthCm ranges from 5 to 8 in the equal interval of 1, and Y-axis labeled as PetalWidthCm ranges from 0.0 to 2.5 in the equal interval of 0.5. It shows the relationship between several species, such as Iris-setosa, Iris-versiclor, and Iris Virginica, in blue, orange, and green color based on their Petal width and sepal length."/> <br>

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-23.png"   class="img" alt="A Scatter plot graph with X-axis labeled as PetalLengthCm ranges from 1 to 7 in the equal interval of 1, and Y-axis labeled as SepalWidthCm ranges from 2.0 to 4.5 in the equal interval of 0.5. It shows the relationship between several species, such as Iris-setosa, Iris-versiclor, and Iris Virginica, in blue, orange, and green color based on their Petal length and sepal width."/> <br>

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-24.png"   class="img" alt="A Scatter plot graph with X-axis labeled as PetalLengthCm ranges from 1 to 7 in the equal interval of 1, and Y-axis labeled as SepalLenghtCm ranges from 4.5 to 8.0 in the equal interval of 0.5. It shows the relationship between several species, such as Iris-setosa, Iris-versiclor, and Iris Virginica, in blue, orange, and green color based on their Petal length and sepal length."/> <br>

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-25.png"   class="img" alt="A Scatter plot graph with X-axis labeled as PetalWidthCm ranges from 0.0 to 2.5 in the equal interval of 0.5, and Y-axis labeled as SepalWidthCm ranges from 2.0 to 4.5 in the equal interval of 0.5. It shows the relationship between several species, such as Iris-setosa, Iris-versiclor, and Iris Virginica, in blue, orange, and green color based on their Petal width and sepal width."/> <br>

## Cumulative distribution function:-    

iris\_setosa = iris\_data.loc[iris\_data["Species"] == "Iris-setosa"]; <br>

iris\_virginica = iris\_data.loc[iris\_data["Species"] == "Iris-virginica"]; <br>

iris\_versicolor = iris\_data.loc[iris\_data["Species"] == "Iris-versicolor"]; <br>

counts, bin\_edges = np.histogram(iris\_setosa['PetalLengthCm'], bins=10, density = True) <br>

pdf = counts/(sum(counts)) <br>
 
print(pdf); <br>

print(bin\_edges); <br>

cdf = np.cumsum(pdf) <br>

plt.grid()  <br>

plt.plot(bin\_edges[1:], pdf); <br>

plt.plot(bin\_edges[1:], cdf) <br>

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/eda-26.png"   class="img" alt="A graph with an X-axis range from 1.1 to 1.9 in the equal interval of 1.1 and a Y-axis range from 0.0 to 1.0 in the equal interval of 0.2 shows two curved lines.  Here, the blue color line is for PDF, and the orange color line is for CDF."/>

## Conclusion:-  

- There is a substantial correlation between petal length and width.
  
- Given its tiny features, we can distinguish the setosa species effortlessly.
  
- The Versicolor and Virginica species are frequently combined and can be difficult to distinguish. Versicolor has average characteristics while Virginica has greater.

**The Iris dataset** is a great application showing EDA's potential. There are more exciting applications like this one that help you understand data science in a better way. The more you practice these by yourself, the stronger your fundamentals will get.

If you have an interest in data science then enrolling in a course is the way to go. The <a href="https://www.learnbay.co/advance-data-science-certification-courses" target="_blank">Advanced Data Science and AI program</a> is an amazing course for an in-depth study of data science. You will be at an advantage studying data science through experienced mentors in this program.