---
title: Tuples - An Immutable Derived Datatype
desc: "Learnbay one of the best instutute to learn data science course in India, so Enroll Now And Get Your Dream Job!"
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/tuples-1.jpg"
date: "August 18, 2022" 
tag: [ Data Science ]
category: "Data Science"
author: "Vineeth Kumar"
position: "Editor"
readTime: "9-10 mins"
h1: "Tuples - An Immutable Derived Datatype"
id: "tuples-an-immutable-derived-datatype"
tableData:
  [
    Tuples - An Immutable Derived Datatype,
    non-empty tuple,
    DriverCode
  ]
---

# Tuples - An Immutable Derived Datatype

<img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/tuples-1.jpg" style="width:100%" class="img"/></img>

Some documents that have unique numbers (passport, driving license, voter id, and the pixels of an image) that cannot/should not be changed. Such elements are stored in a set that satisfies all the requirements known as a tuple.

In this article, you will learn the different operations where we use a tuple.

## What is a tuple in Python?

So, it's basically a sequence of different elements that we access via unpacking or indexing.

More clearly, a collection of objects in a round bracket in python and separated by a comma is known as a tuple. Doesn't it seem like 'list?'

## Then what is the difference between list and tuple?

A list and tuple are the same in some ways when it's related to indexing, nested objects, and repetition. Even if we don't use any brackets, it becomes a tuple. However, a tuple is immutable and lists are mutable.

Example:

| #Creating an empty tuple
 empty\_tuple = ()
 print(empty\_tuple)

 Output
 ()

# non-empty tuple

#one way of creating
 tup = ('Data', 'Science')
 print(tup)

 Output
 ('Data', 'Science')

#another way of creating
 tup = 'Data', 'Science')
 print(tup)

 Output
 ('Data', 'Science') |
| --- |

<img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/tuples-2.jpg" style="width:100%" class="img"/></img>


**Creating Immutable tuple:** An example shown below is that the item assignment is not possible.

| #testing that tuples are immutable

 tuple\_1 = (5, 6, 8, 12)
 tuple\_1[0] = 'Numbers'
 print(tuple\_1)

 Output
 TypeError Traceback(most recent call last)
 Input In [10], in \<cell line: 4\>()
1# testing that tuples are immutable
3 tuple\_1 = (5, 6, 8, 12)
 ---\>4 tuple\_1[0] = 'Numbers'
5 print(tuple\_1)

 TypeError: 'tuple' object does not support item assignment |
| --- |

## How to perform basic operations in a tuple?

In a tuple, there are several ways to do the basic operations. Let's take a look at each one individually with examples.

1.
### **Tuple Concatenation**

Since the tuple is immutable, you cannot change any value in the tuple element. But, you can combine two tuples as a single tuple which is called _ **tuple concatenation** _.

Example:

| #creating two tuple

 tuple1 = 5, 6, 7, 8
 tuple2 = ('data', 'science', 'python', 'class')

#concatination of tuple

 print(tuple1 + tuple2)
 Output
 (5, 6, 7, 8, 'data', 'science', 'python', 'class') |
| --- |

1.
### **Repeating Tuple**

If you need any value in a tuple to be repeated, you just need to multiply it by several times.

Example:

| # Creating tuple with repetition

 tuple\_repeat = ('How are you? ')\*5
 print(tuple\_repeat)

 Output
 How are you? How are you? How are you? How are you? How are you? |
| --- |

1.
### **Slicing Tuple**

A slicing is retrieving a particular portion for some operation while the initial data remains unaffected. The operation of slicing in python considers three parameters of which two are depending on the operational requirement.

Example:

| # Slicing of tuple

 tuple = (10, 30, 50, 87, 63)
 print(tuple[1 :])
 print(tuple[: : -1])
 print(tuple[2:5]

 Output
 (30, 50, 87, 63)
 (63, 87, 50, 30, 10)
 (50, 87, 63) |
| --- |

1.
### **Finding the length of the Tuple**

You can find out the length of values inside a tuple by using the 'len' option.

Example:

| # Finding the length of tuple

 tuple\_length = (5, 6, 7, 8, 'data', 'science', 'python', 'class')
 print(len(tuple\_length))
Output8 |
| --- |

**Basic functions to use while executing a code in the tuple**

- len() – you can find the length in a tuple
- min() – you can find the min value in a tuple
- max()– you can find the max value in a tuple
- count() – you can find the number of occurrences in a tuple
- index() – you can find the index value of a tuple

**Note** : Count and index are not functions, they are the methods

Example:

| #length, minimum, maximum, count and index of tuple
 tuple = (10, 30, 50, 87, 63, 10, 87)
 print('Length of the tuple: ', len(tuple))
 print('Minimum of the tuple: ', min(tuple))
 print('Maximum of the tuple: ', max(tuple))
 print('Count of 87: ', tuple.count(87))
 index = tuple.index(63)
 print('Index of 63: ', index)

 Output
 Length of the tuple: 7
 Minimum of the tuple: 10
 Maximum of the tuple: 87
 Count of 87: 2
 Index of 63: 4 |
| --- |

<img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/tuples-3.jpg" style="width:100%" class="img"/></img>

1.
### **Sorting of tuple**

By using the sort() method you can sort a tuple. When sorting by this method the real content of the tuple is changed and the in-place method of the sort is performed.

Example:

| #Sorting a list of tuples by the second item using sort()

#Function for sorting the list by the second item of tuple |
| --- |

| defSort\_Tuple(tup\_1)

 #reverse = None(Sorting in ascending order)
 #keyissetforsortingusingthesecondelementof
 #sublistlambdaisused
tup\_1.sort(key = lambda a: a[1])
returntup\_1

 # DriverCode
tup\_1 = [('Avni', 10), ('Akash', 5), ('Avinash', 20), ('Arvind', 15)]

 #printthesortedlistoftuples
print(Sort\_Tuple(tup\_1))

Output
 [('Akash', 5), ('Avni', 10), ('Arvind', 15), ('Avinash', 20)] |
| --- |

1. **Nesting of tuples**

We use the '+' operator when we need to concatenate tuples to nested tuples. Accessing the index elements and trying to make any changes will give an error. We use ''+' for both nesting and concatenating operations.

Example:

| first\_tuple\_1 = (5, 8, 4, 4, 7, 1),
 second\_tuple\_2 = (9, 5, 3, 2, 1, 8),

 print("The first tuple consists: ")
 print(first\_tuple\_1)
 print("The second tuple consists: ")
 print(second\_tuple\_2)

 joint\_result = first\_tuple\_1 + second\_tuple\_2

 print("The tuple after concatenating: ")
 print(joint\_result)

 Output
 The first tuple consists:
 ((5, 8, 4, 4, 7, 1),)
 The Second tuple consists:
 ((9, 5, 3, 2, 1, 8),)
 The tuple after concatenating:
 ((5, 8, 4, 4, 7, 1), (9, 5, 3, 2, 1, 8)) |
| --- |

**Take away**

Let us summarize in simple words, a tuple is a set where you cannot make any changes. In other words, it is immutable. With the above explanations and examples, you would have got a better understanding and ease to work on tuples. _If you are looking for a best-in-class resource to learn python or understand each concept in detail for data science applications, you can check out the_ [_data science course_](https://www.learnbay.co/) _with special python-support with top-class trainers. In case you are just exploring python as a beginner, follow us on_  [_Facebook_](https://www.facebook.com/learnbay/)_, _[_Youtube_](https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA/featured)_, _[_Linkedin_](https://www.linkedin.com/company/learnbay/)_, and_ [_Twitter_](https://twitter.com/Learnbay).