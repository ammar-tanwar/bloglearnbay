---
title: Tuples - An Immutable Derived Datatype
stitle: "Tuples - An Immutable Derived Datatype | Learbay Blog"
publish: "Published on"
published_time: "2022-08-18T13:25:31+05:30"
modified_time:  "2022-08-18T13:25:31+05:30" 
desc: "In this blog you will learn about What is Tuples, Their Different Types, Sorting of Tuples and also, you will get to know about its basic operations."
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/tuples-1.jpg"
headerAlt: "A banner image titled, 'Tuples in python' on the right. The left side contains a logo of Python. "
date: "August 18, 2022" 
tag: [ what are mutable and immutable data types in python, are tuples mutable in python, tuples are mutable or immutable, what are mutable data types in python, what is immutable in python, tuple immutable meaning, tuple are immutable, tuple immutable example, tuple immutable in python, tuple is a mutable data type ]
category: "Python"

cattitle: "Upskill With All Python Upskilling Resources - Learnbay Blogs"
catdesc: "Python resources feature a wide range of Bogs, tutorials covering from basic syntax and programming concepts to advanced topics such as ML,  data science etc."
authortitle: "Vineeth Kumar - A Data Science Enthusiast and Blogger at Learbay"
adesc: "Vineeth Kumar, a blogger and experienced techie with in-depth knowledge of data science and python programming languages."

author: "Vineeth Kumar"
authorimg : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/vineeth-kumar.webp"
authordesc: "An experienced techie with in-depth knowledge of data science and Python programming languages. His intensive interest in data management and machine learning drew him toward a data science career transition from electrical engineering to advance artificial intelligence. His hobby includes writing programming-related articles. "
authorlinkedin: "https://www.linkedin.com/in/vineeth-kumar-104a6b98/"
position: "Editor"
readTime: "9-10 mins"
h1: "Tuples - An Immutable Derived Datatype"
id: "tuples-an-immutable-derived-datatype"
tableData:
  [
    What is a tuple in Python?, Then what is the difference between list and tuple?, non-empty tuple, Creating Immutable tuple, How to perform basic operations in a tuple?, Tuple Concatenation,  Repeating Tuple, Slicing Tuple, Finding the length of the Tuple ,Basic functions to use while executing a code in the tuple, Sorting of tuple, Nesting of tuples,Take away,
  ]
---

# Tuples - An Immutable Derived Datatype



Some documents that have unique numbers (passport, driving license, voter id, and the pixels of an image) that cannot/should not be changed. Such elements are stored in a set that satisfies all the requirements known as a tuple.

In this article, you will learn the different operations where we use a tuple.

## What is a tuple in Python?

So, it's basically a sequence of different elements that we access via unpacking or indexing.

More clearly, a collection of objects in a round bracket in python and separated by a comma is known as a tuple. Doesn't it seem like 'list?'

## Then what is the difference between list and tuple?   

A list and tuple are the same in some ways when it's related to indexing, nested objects, and repetition. Even if we don't use any brackets, it becomes a tuple. However, a tuple is immutable and lists are mutable.

Example:

 #Creating an empty tuple <br>
 empty_tuple = () <br>
 print(empty_tuple) <br>

 Output <br>
 ()

# non-empty tuple    

#one way of creating <br>
 tup = ('Data', 'Science') <br>
 print(tup) <br>

 Output <br>
 ('Data', 'Science') <br>

#another way of creating <br>
 tup = 'Data', 'Science' <br>
 print(tup) <br>

 Output <br>
 ('Data', 'Science')

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/tuples-2.jpg" style="width:100%" class="img" alt="An image titled 'Python tuples' with a Python logo."/>


### Creating Immutable tuple
 An example shown below is that the item assignment is not possible.

| #testing that tuples are immutable

 tuple_1 = (5, 6, 8, 12) <br>
 tuple_1[0] = 'Numbers' <br>
 print(tuple_1) <br>

 Output <br>
 TypeError Traceback(most recent call last) <br>
 Input In [10], in \<cell line: 4\>() <br>
      1# testing that tuples are immutable <br>
      3 tuple_1 = (5, 6, 8, 12) <br>
 ---\>4 tuple_1[0] = 'Numbers' <br>
      5 print(tuple_1) <br>

 TypeError: 'tuple' object does not support item assignment |

## How to perform basic operations in a tuple?    

In a tuple, there are several ways to do the basic operations. Let's take a look at each one individually with examples.

### Tuple Concatenation      

Since the tuple is immutable, you cannot change any value in the tuple element. But, you can combine two tuples as a single tuple which is called _ **tuple concatenation** _.

Example:

#creating two tuple <br>

  tuple1 = 5, 6, 7, 8 <br>
  tuple2 = ('data', 'science', 'python', 'class') <br>

#concatination of tuple <br>

 print(tuple1 + tuple2) <br>

 Output <br>
 (5, 6, 7, 8, 'data', 'science', 'python', 'class') | <br>

### Repeating Tuple   

If you need any value in a tuple to be repeated, you just need to multiply it by several times.

Example:

| # Creating tuple with repetition <br>

 tuple_repeat = ('How are you? ')\*5 <br>
 print(tuple_repeat) <br>

 Output <br>
 How are you? How are you? How are you? How are you? How are you? | <br>

### Slicing Tuple        

A slicing is retrieving a particular portion for some operation while the initial data remains unaffected. The operation of slicing in python considers three parameters of which two are depending on the operational requirement. <br>
 
Example: <br>

| # Slicing of tuple <br>

 tuple = (10, 30, 50, 87, 63) <br>
 print(tuple[1 :]) <br>
 print(tuple[: : -1]) <br>
 print(tuple[2:5]) <br>

 Output <br>
 (30, 50, 87, 63) <br>
 (63, 87, 50, 30, 10) <br>
 (50, 87, 63)<br>

### Finding the length of the Tuple  

You can find out the length of values inside a tuple by using the 'len' option. <br>

Example: <br>

| # Finding the length of tuple <br>

 tuple_length = (5, 6, 7, 8, 'data', 'science', 'python', 'class') <br>
 print(len(tuple_length)) <br>

 Output <br> 
 8 

### Basic functions to use while executing a code in the tuple   

- len() – you can find the length in a tuple <br>
- min() – you can find the min value in a tuple <br>
- max()– you can find the max value in a tuple <br>
- count() – you can find the number of occurrences in a tuple <br>
- index() – you can find the index value of a tuple <br>

**Note** : Count and index are not functions, they are the methods

Example:

#length, minimum, maximum, count and index of tuple <br>
 tuple = (10, 30, 50, 87, 63, 10, 87) <br>
 print('Length of the tuple: ', len(tuple)) <br>
 print('Minimum of the tuple: ', min(tuple)) <br>
 print('Maximum of the tuple: ', max(tuple)) <br>
 print('Count of 87: ', tuple.count(87)) <br>
 index = tuple.index(63) <br>
 print('Index of 63: ', index) <br>

 Output <br>
 Length of the tuple: 7 <br>
 Minimum of the tuple: 10 <br>
 Maximum of the tuple: 87 <br>
 Count of 87: 2 <br> 
 Index of 63: 4 | <br>

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/tuples-3.jpg" style="width:100%" class="img" alt="A python expert using a laptop and running codes for the sorting of tuple."/>


### Sorting of tuple       

By using the sort() method you can sort a tuple. When sorting by this method the real content of the tuple is changed and the in-place method of the sort is performed. <br>

Example: <br>

#Sorting a list of tuples by the second item using sort() <br>

#Function for sorting the list by the second item of tuple | <br>

 def Sort_Tuple(tup_1) <br>

 #reverse = None(Sorting in ascending order) <br>
 #keyissetforsortingusingthesecondelementof <br>
 #sublistlambdaisused <br>
 tup_1.sort(key = lambda a: a[1]) <br>
 returntup_1 <br>

 #Driver Code <br>
tup_1 = [('Avni', 10), ('Akash', 5), ('Avinash', 20), ('Arvind', 15)] <br>

 #printthesortedlistoftuples <br>
print(Sort_Tuple(tup_1)) <br>

Output <br>
 [('Akash', 5), ('Avni', 10), ('Arvind', 15), ('Avinash', 20)] | <br> <br>

### Nesting of tuples      
We use the '+' operator when we need to concatenate tuples to nested tuples. Accessing the index elements and trying to make any changes will give an error. We use ''+' for both nesting and concatenating operations. <br>

Example: <br>

| first_tuple_1 = (5, 8, 4, 4, 7, 1), <br>
 second_tuple_2 = (9, 5, 3, 2, 1, 8), <br>

 print("The first tuple consists: ") <br>
 print(first_tuple_1) <br>
 print("The second tuple consists: ") <br>
 print(second_tuple_2) <br>

 joint_result = first_tuple_1 + second_tuple_2 <br>

 print("The tuple after concatenating: ") <br>
 print(joint_result) <br>

 Output <br>
 The first tuple consists: <br>
 ((5, 8, 4, 4, 7, 1),) <br>
 The Second tuple consists:<br>
 ((9, 5, 3, 2, 1, 8),) <br>
 The tuple after concatenating: <br>
 ((5, 8, 4, 4, 7, 1), (9, 5, 3, 2, 1, 8)) | <br>


### Take away  

Let us summarize in simple words, a tuple is a set where you cannot make any changes. In other words, it is immutable. With the above explanations and examples, you would have got a better understanding and ease to work on tuples. If you are looking for a best-in-class resource to learn python or understand each concept in detail for data science applications, you can check out the <a href="https://www.learnbay.co/data-science-certification-courses" target="_blank">data science course</a> with special python-support with top-class trainers. In case you are just exploring python as a beginner, follow us on <a href="https://www.facebook.com/learnbay/" target="_blank">Facebook</a>, <a href="https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA/featured" target="_blank">Youtube</a>, <a href="https://www.linkedin.com/company/learnbay/?original_referer=http%3A%2F%2Flocalhost%3A3001%2F" target="_blank">Linkedin</a>, <a href="https://twitter.com/Learnbay" target="_blank">Twitter</a>.