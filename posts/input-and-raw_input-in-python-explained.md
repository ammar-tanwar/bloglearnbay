---
title: input and raw_input in Python explained.
desc: "Learnbay one of the best instutute to learn data science course in India, so Enroll Now And Get Your Dream Job!"
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog1.webp"
date: "June 2, 2017"
tag: [ Data Science ]
category: "Data Science"
author: "Rohit" 
position: "Editor"
readTime: "9-10 mins"
h1: "input and raw_input in Python explained."
id: "input-and-raw_input-in-python-explained"
tableData:
  [
    Input in Python,
  ]
---
## **Input in Python**

Every programs needs input in some form .Input can be provided from database,some other programs,mouse clicks,sensors etc, but most used method is input from keyboard.

Python provides two ways to handle the user input from keyboard:

##### _**input()**_ **and** _**raw\_input().**_

**Input with input():**

When an input() function is encountered,program execution will be stopped until input with a return key is not passed from the keyboard.input() interprets and evaluates the input which means that if user enters integer,an integer will be returned ,if user enters string,string is returned.

Syntax:

##### **var = input("Enter the Value")**

Code Example:

name = input("What is your name? ")

print "How are you ",name

age = input("what is your age ")

print "your age is " + str(age)

In above Program,if value 10 is entered from keyboard ,type of var will be \<int\>,if a list is entered,its type will \<list\>.While entering the string input in above program ,We need to enclose string in quotes to typecast it to string else we may encounter the following errors.

Traceback (most recent call last):

File "input.py", line 1, in \<module\>

name = input("Enter the value? ")

File "\<string\>", line 1, in \<module\>

NameError: name 'abcd' is not defined.

**Input with raw\_input():**

raw\_input() takes exactly what user typed and passes it back as string .It doesn't interprets the user input.Even an integer value of 10 is entered or a list is entered its type will be of string only.We need to change the data type before using it in the program by casting it or performing eval on it.

Below program is to add two numbers by taking input from raw\_input():

**Raw\_input() and input() in Python 3**:

In python 3,raw\_input() is renamed to input() so input() returns exact string.

So If you want to evaluate or interpret the user input ( input() in Python 2.x),can be manually done like:

eval(input("enter the value"))

#####

##### **Python language is very simple to learn and It is one of the easiest language which was created with a beginners point of view.If you need any further help ,you can attend our python training online and**

##### **classroom** [**python training in bangalore.**](http://www.learnbay.in/shop/courses/python-training-bangalore/) **For Free Python interactive videos,Please visit** [**Learnbay-Youtube-Channel**](https://www.youtube.com/playlist?list=PLreKEUq80ZVCEinHv50VxutDvP_ZEDkRu)