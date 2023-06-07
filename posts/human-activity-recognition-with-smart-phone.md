---
title: Human Activity Recognition With Smartphone
stitle: "Human Activity Recognition Using Machine Learning"
publish: "Last Updated on"
published_time: "2023-03-28T13:25:31+05:30"
modified_time: "2023-03-28T13:25:31+05:30"
desc: "Human activity recognition (HAR) using machine learning holds a massive hype ad so the projects of human activity recognition using smartphones. Learn how to handle HAR dataset for a project of human activity recognition using smartphones."
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/har-1.jpg"
headerAlt: "A banner image is titled 'Human activity recognition with smart phone.' The background image shows a gathering of people using smartphone."
date: "Mar 28, 2023"
tag:
  [
    human activity recognition applications,
    activity recognition using smartphone sensors,
    human activity recognition with smartphone sensors using deep learning,
  ]
category: "Machine Learning"

cattitle: "Stay Updated with Machine Learning Resources - LearnBay Blogs"
catdesc: "Check out the Learnbay Machine Learning blog section, featuring a comprehensive collection of blogs on Deep Learning, Neural Networks, NLP, etc."
authortitle: "Manas Kochar - Artificial Intelligence Enthusiast & Blogger | Learnbay"
adesc: "Manas Kochar, A Passionate Blogger from Learnbay Content Team. Explore her Artificial Intelligence and Machine Learning Blogs."

author: "Manas Kochar"
authorimg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/manas-kochar.webp"
authordesc: "An enthusiastic blogger with a strong background in content creation and a hard-core interest in emerging technologies, mainly hot topics and happenings in AI and machine learning."
authorlinkedin: "https://www.linkedin.com/in/nivin-biswas-7b3197178/"
position: "Editor"
readTime: "7 mins"
h1: "Human Activity Recognition With Smartphone"
id: "human-activity-recognition-with-smart-phone"
tableData:
  [
    What is Human Activity Recognition (HAR)?,
    Advantages of (HAR) Human Activity Recognition with smartphone,
    Workings process of human activity recognition using machine learning,
    Explanation of Human Activity Recognition,
    Human Activity Recognition with Smartphones (Data Set),
    Downloading the Human Activity Recognition Dataset:-,
    train_data.describe(),
    Shuffling Data,
    Encoding labels,
    Encoding test labels,
    Encoding train labels,
    Applying supervised neural network using multi-layer perceptron,
    Final Remarks
  ]
---

<span style=" font-weight:bold; font-size:28px">How Do Smartphones Conduct Human Activity Recognition Using Machine Learning? </span>

Smartphones are becoming smarter every day. Starting from being a reliable navigator to a document scanner, and even your entertainment system, everything is now possible with a smartphone. In fact, you can do everything without touching your phone, just by giving commands. But all of these advancements have been left behind with the introduction of **human activity recognition using machine learning** in smartphones.

Although they can't provide you with accuracy like dedicated medical devices still for regular and precautionary health tracking, smartphones have become handy.

A model for **human activity recognition using machine learning** functions is an exciting development in the field. This model is useful in _health monitoring, biometrics, etc_. These <a href="https://blog.learnbay.co/10-must-know-machine-learning-algorithms-for-beginners-in-2023" target="_blank">machine learning algorithms</a> can be helpful in running health research on humans in their daily lives.

Built-in sensors in smart devices can help develop models that identify human activity. Inertial sensors like _accelerometers and gyroscopes_ enable regular reviews of our daily activities.

Since the model can calculate speed and angular velocity, these sensors have various purposes in the daily well-being of an individual.

## What is Human Activity Recognition (HAR)?

**Human Action Recognition or Activity Recognition** is an area of study where daily human tasks are detected using sensors. The sensors accurately record the activities it detects and try to figure out the body movements based on the recording.

Sensors like _IoT, edge computing, and cloud_ have been modified to a much-advanced level over the years. These sensors are utilized in smartphones and smartwatches to capture human movements.

Nowadays, HAR is not only being utilized in sports activity calculations but also in daily routine tasks. Activities like _sleeping, eating, drinking, brushing teeth_, etc., have been included to provide a precise health check for individuals.

## Advantages of (HAR) Human Activity Recognition with smartphone

- ### Continuous Health Monitoring:

Wearable with dedicated sensors can detect heart rate, BP, BMR, etc. Even ECG can also be monitored with top-end wearable devices, like Apple watches and Pixel watches.

- ### Activity Pattern detection:

As continuous monitoring is now possible, so the dedicated apps for HAR collect and store data for time-bound analysis. For such analysis, both the regular and irregular patterns of health conditions get easily detected.

- ### Unusual Activity Detection:

Due to the live as well as historic pattern identification, any kind of unusual health condition or activity gets instantly detected. As a result, the concerned person can be taken care of with the required precautions with immediate effect.

## Workings process of human activity recognition using machine learning

In this case study, we design a model by which a smartphone can precisely detect its owner's activity.

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/har-2.jpg" style="width:100%" class="img" alt="A mobile screen displays a fingerprint scanner surrounded by the logos of messages, Wi-Fi, alerts, weather, browsers, etc."/>

Most smartphones have two sensors:

1. _An accelerometer_
2. _A gyroscope_

These are IoT sensors for collecting data and detecting changes in the environment.

An IoT sensor easily performs **human activity recognition using machine learning** algorithms. The accelerometer collects data on mobile movements.

For example, the moving landscapes and portraits when playing mobile games.

The gyroscope measures the rotational movement.

For example, whether a user walks normally, goes upstairs, downstairs, lies down or sits- these can be tracked with an accelerometer and gyroscope.

Some accelerometers and gyroscopes measure heart rate, calories burned, etc., by reading human activities. However, these are done on the basis of step walks and other measures. It displays how much work has been done in a day by humans. This is also the area of the Artificial Internet of Things (<a href="https://blog.learnbay.co/what-is-aiot-know-its-advantages-in-real-world-scenarios" target="_blank">AIoT</a>).

## Explanation of Human Activity Recognition

With the help of sensor data, we collect body movement data captured by the smartphone. Movements often include indoor activities such as walking upstairs, downstairs, lying down, sitting, and standing. The data is recorded for data prediction.

### Human Activity Recognition with Smartphones (Data Set)

- The experiments are carried out with 30 volunteers within an age bracket of 19-48 years. Each person performs six activities wearing a smartphone (e.g., Samsung Galaxy S II) on the waist. It records activities such as Walking, _WALKING_UPSTAIRS, WALKING_DOWNSTAIRS, SITTING, STANDING, and LYING_.

- We can capture 3-axial linear velocity and 3-axial angular velocity. We can calculate them at a constant rate of 50Hz using the embedded accelerometer and gyroscope.

- Human activity recognition experiments are video-recorded to label the data manually. The obtained dataset is randomly partitioned into two sets. We select 70% of the volunteers for generating the training data and 30% for the test data.

- <a href="https://blog.learnbay.co/everything-about-data-preprocessing" target="_blank">Data preprocessing</a> is done on the sensor signals (accelerometer and gyroscope) by applying noise filters. Signals are then sampled in fixed-width sliding windows of 2.56 sec and 50% overlap (128 readings/window).

- The sensor acceleration signal possesses gravitational and body motion components. Therefore, it is separated using a Butterworth low-pass filter into body motion and gravity.

- The gravitational force has low-frequency components. Therefore, we use a filter with a 0.3 Hz cutoff frequency. From each window, a vector of features is obtained by calculating variables from the time and frequency domain.

### Downloading the Human Activity Recognition Dataset:-

1. There are "\_train\_" and "\_test\_" folders containing the split portions of the data for modeling (e.g., 70%/30%).
2. There is a "\_txt\_" file containing a detailed technical description of the dataset and the contents of the unzipped files.
3. There is a "\_txt\_" file containing a technical description of the engineered features.

The contents of the "\_train\_" and "\_test\_" folders are similar (e.g., file names), although they have differences in the specific data.

<pre style="font-size:16px"> # Load set data and process it. </pre>

<pre style="font-size:16px"> # Important libraries to import for data processing. </pre>

**Start with some necessary imports.**

1. import NumPy as np
2. import pandas as pd
3. from google.colab import files
4. uploaded = files.upload()

(google.colab is used to fetch the data from the collaborator files.)

1. train_data = pd.read_csv("train.csv")
2. train_data.head()

We select the training data set for the modeling.

1. train_data.Activity.value_counts()
2. train_data.shape

The above function defines how many rows and columns the dataset has.

#### train_data.describe()

It describes that there are 8 rows and 563 columns with all the data features. For numeric data, the result's index will include count, mean, std, min, and max. As well as lower, '50', and upper percentiles.

By default, the lower percentile is 25, and the upper percentile is 75. The '50' percentile is the same as the median.

1. uploaded = files.upload()
2. test_data = pd.read_csv('test.csv')
3. test_data.head()

Here we read the CSV file to analyze the data set. The operation that is supposed to be programmed is also determined. test_data.head() shows the first 5 rows with their respective columns, so here we have 5 rows and 563 columns.

### Shuffling Data

1. from sklearn.utils import shuffle
2. test = shuffle(test)
3. train_data = shuffle(train_data)

Shuffling data serves the purpose of reducing variance and making sure that models remain general and overfit less.

When your data is sorted by class/target, it's evident that you'd shuffle it. Here, you will want to shuffle to ensure that your training/test/validation sets represent the data's overall distribution.

**Separating data inputs and output labels**

1. trainData = train_data.drop('Activity' , axis=1).values
2. trainLabel = train_data.Activity.values
3. testData = test_data.drop('Activity' , axis=1).values
4. testLabel = test_data.Activity.values
5. print(testLabel)

By using the above code, we separate the input and output. It performs **human activity recognition using machine learning** captured by the IoT device. The human activities of _walking, standing, walking upstairs, walking downstairs, sitting, and lying_ are separated to optimize the result.

#### Encoding labels

1. from sklearn import preprocessing
2. encoder = preprocessing.LabelEncoder()

#### Encoding test labels

1. encoder.fit(testLabel)
2. testLabelE = encoder.transform(testLabel)

#### Encoding train labels

1. encoder.fit(trainLabel)
2. trainLabelE = encoder.transform(trainLabel)

Hold the label for each class and encode explicit features using a one-hot or ordinal encoding scheme. We may use this to transform non-numerical labels (as long as they are hashable and comparable) to numerical labels.

### Applying supervised neural network using multi-layer perceptron

1. import sklearn.neural_network as nn
2. mlpSGD = nn.MLPClassifier(hidden_layer_sizes=(90,) \, max_iter=1000 , alpha=1e-4 \, solver='sgd' , verbose=10 \, tol=1e-19 , random_state=1 \, learning_rate_init=.001)
3. mlpADAM = nn.MLPClassifier(hidden_layer_sizes=(90,) \, max_iter=1000 , alpha=1e-4 \, solver='adam' , verbose=10 \, tol=1e-19 , random_state=1 \, learning_rate_init=.001)
4. nnModelSGD = mlpSGD.fit(trainData , trainLabelE)
5. y_pred = mlpSGD.predict(testData).reshape(-1,1)
6. #print(y_pred)
7. from sklearn.metrics import classification_report
8. print(classification_report(testLabelE, y_pred))
9. import matplotlib.pyplot as plt
10. import seaborn as sns
11. fig = plt.figure(figsize=(32,24))
12. ax1 = fig.add_subplot(221)
13. ax1 = sns.stripplot(x='Activity', y=sub_01.iloc[:,0], data=sub_01, jitter=True)
14. ax2 = fig.add_subplot(222)
15. ax2 = sns.stripplot(x='Activity', y=sub_01.iloc[:,1], data=sub_01, jitter=True)
16. plt.show()

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/har-3.png" style="width:100%" class="img" alt="Two scattered plots show the use multi-layer perceptron with supervised neural network."/>

## Final Remarks

This examination concludes that smartphones are suitable for **human activity recognition using machine learning** activities. In the future, collecting and processing the data should be improved, providing a viable method for analyzing a human being's health.

**Human activity recognition with smartphones** has become a great step towards the positive well-being of individuals. It's slowly blending itself into the healthcare systems for preventing obesity, providing elderly care, etc.

With the rise in new AI/ML technologies, we may be able to extend the advantages of HAR, Eg. **Human Activity Recognition using deep learning** is one major topic of interest among researchers.

If you want to study more projects like human activity recognition, you can join <a href="https://www.learnbay.co/artificial-intelligence-certification-course" target="_blank">Artificial Intelligence and Machine Learning Program</a>. Also, keep following us on <a href="https://twitter.com/Learnbay" target="_blank">Twitter</a>, <a href="https://www.facebook.com/learnbay/" target="_blank">Facebook</a>, <a href="https://in.linkedin.com/company/learnbay" target="_blank">LinkedIn</a>, and <a href="https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA" target="_blank">Youtube</a> for the latest updates on data science, AI, and full-stack development.
