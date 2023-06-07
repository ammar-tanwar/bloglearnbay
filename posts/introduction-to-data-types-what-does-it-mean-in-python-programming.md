---
title: Introduction To Data Types - What Does It Mean In Python Programming?
stitle: "Introduction To Data Types In Python Programming"
publish: "Published on"
published_time: "2022-08-22T13:25:31+05:30"
modified_time: "2022-08-22T13:25:31+05:30"
desc: "In Python programming, Data types are classes, and variables are instances (objects) for these classes, as everything is an object in python programming."
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/data-type-1.jpg"
headerAlt: "A banner image titled, 'An introduction to Data types in statistics'."
date: "August 22, 2022" 
tag: [ Data types, Tuple in python, String datatype in python, datatypes in python, data types in python, data types in programming, what is a tuple in python, what is a tuple, tuple methods in python,  how to create a tuple in python, properties of tuple in python, tuple in python example, tuple in python operations, string in python, string data type in python, size of string data type in python, Numeric data type, List data Types, Set data types, Dictionary data type, how many data types in python, data types in python with examples ]
category: "Data Science"

cattitle: "Latest Data Science Trends, Blogs, Career Resources - Learnbay Blogs"
catdesc: "Check out the latest updates and career related trends of data science and business analytics here inside the Learnbay's data science blogs."
authortitle: "Vineeth Kumar - A Data Science Enthusiast and Blogger at Learbay"
adesc: "Vineeth Kumar, a blogger and experienced techie with in-depth knowledge of data science and python programming languages."

author: "Vineeth Kumar"
authorimg : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/vineeth-kumar.webp"
authordesc: "An experienced techie with in-depth knowledge of data science and Python programming languages. His intensive interest in data management and machine learning drew him toward a data science career transition from electrical engineering to advance artificial intelligence. His hobby includes writing programming-related articles. "
authorlinkedin: "https://www.linkedin.com/in/vineeth-kumar-104a6b98/"
position: "Editor"
readTime: "9-10 mins"
h1: "Introduction To Data Types - What Does It Mean In Python Programming?"
id: "introduction-to-data-types-what-does-it-mean-in-python-programming"
tableData:
  [
     Let us understand what a data type is in python?,
     1. Numeric data type, 
     2. String Data Type in Python, 
     3.List data Types,
     4.Tuple data types, 
     3. Set data types,
     4. Dictionary data type, 
     Take away 

  ]
---

# Introduction To Data Types - What Does It Mean In Python Programming?



When you are working on any programming language, the information has to be written in different forms. This is very important to run the program. Programming is a combination of different data elements, such as integers, values, and strings called  **data types** .

In this article, you will learn about different types of data. Alongside, you will know the process of dealing with various data types and their uses while you are writing a program in python. You will discover their syntax and observe some real-time situations.

## Let us understand what a data type is in python?

The categorization or classification of data elements is called data types.

In a simple definition, It is the value that specifies which operation to perform with the given set of data.

Data types are classes, and variables are instances(objects) for these classes, as everything is an object in python programming.

There are six data types in python

-Numeric

-String

-List

-Tuple

-Set

-Dictionary

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/data-type-2.jpg" style="width:100%" class="img" alt="An image suggests an example of numeric data types with the functions A and B."/>

Let's discuss each data type individually.

# 1. Numeric data type

Numerical data types are shown as numerical values used as integers, float, and complex numbers.

There are four sub-types of numerical data

-Integer

-Float

-Complex

**Integer** – In this, the value is represented as a whole number without any decimal, irrespective of its positive or negative. The length of the integer is not required to be defined. <br>

Example: <br>

x = 108 <br>
y = 142<br>
 #As long as the value remains a whole number, it will be the integer. <br>

**Float** - In this value is represented as a real number with a decimal point irrespective if it is positive or negative. While describing scientific notation, the character's 'e' or 'E' is inserted.

Example: <br>

 x = 10.25 <br>
 y = 12.30 


**Complex** - In this, the value is represented with a combination of a real part and an imaginary part. The imaginary part is denoted with 'j' at the end of the number. Mathematical operations can be expressed with minimal overhead using complex numbers.

Example: <br>

x + yj <br>
where x is the real part and y along with j is the imaginary part 

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/data-type-3.jpg" style="width:100%" class="img" alt="An image demonstrates various codes and outputs related to Python's String Data Type."/>

# 2. String Data Type in Python        

A string is a sequence of Unicode characters. Characters are always enclosed in single, double, or triple quotations to access the values. We use square brackets and indexes to fetch the value from the string. It is represented as '_str'_ in python.

Example <br>

 a = 'Hello Python' <br>
  b = "hello python" <br>
  c = '''HELLO PYTHON'''  <br>


The tasks like slicing, concatenation, and repetition can be performed using string.

**Slicing** : It slices a particular part of a string.

Example: <br>

a = 'how are you' <br>
print (a[4:11]) <br> 

Output <br> are you 

**Concatenation** : It is joining two or more strings together.

Example:

 a = 'how ' <br>
 b = 'are ' <br>
 c = 'you' <br>
 print (a+b+c) <br>

 Output <br>
  how are you

**Repetition** : It repeats the same sequence of instructions several times.

Example: <br>

a = 'Hi Python ' <br>

print (a\*5) <br>

Output <br>

Hi Python Hi Python Hi Python Hi Python Hi Python

# 3.List data Types     

A list is represented by placing all the elements inside a square bracket [] and separated by a comma (,). The list can store any data type as items like (int, float, etc.......…). The list is mutable, where we can modify the elements.

Example: <br>

lst = [1, 5, 4.38, 'hello'] <br>
print(lst) <br>

Output  <br>
[1, 5, 4.38, 'hello'] 

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/data-type-4.jpg" style="width:100%" class="img" alt="An image displaying the example for tuples in Python. The example is made up of Tuple 1, Tuple 2,  Concatenate Tuples."/>

# 4.Tuple data types  

A tuple in python is represented by placing all the elements inside a round bracket () and separated by a comma (,). Tuple can store any data type as items like (int, float, etc. ).The only disadvantage of tuples is that it is immutable, where you cannot modify the elements. Since you will not be able to change the item once you have declared it, the operations that you perform on a tuple are less. There is also an advantage, and you can store any values which do not require any change while working on a project.

Example:

 tpl = (1, 5, 4.38, 'hello') <br>
 print (tpl) <br>

 Output <br>
 (1, 5, 4.38, 'hello')

# 5. Set data types      

A collection of unordered data types is iterable and changeable. It does not have any indexes. It is represented using curly brackets {} and separated by a comma. A set does not contain any duplicate values, so the output will have only distinct values.

Example:

set = {1, 5, 4.38, 'hello'} <br>
print(set)  <br>

Output <br>
{1, 'hello', 4.38, 5} 


# 6. Dictionary data type      

A collection of unordered data values is called a Dictionary. It holds a key-value pair instead of a single-value element. To access an item from a dictionary, refer to the key name by using a key in square brackets. If you want to deal with a high volume of data, a dictionary data type would be most useful. Its function is to revert to which it is optimized. We use curly brackets {} to define this data type.

Example:
 dictionary = {'Data Science' : 'Python', 'Hi' : 'Hello'} <br>
 dictionary['Hi'] <br>
 dictionary.get('Data Science') <br>

 Output   <br>
 'Hello'  <br>
 'Python'  <br>


# Take away     

Now, as you all are aware of different types of data types and we as a programmer feed this food called datatypes to python and execute a reliable output that helps a task to run smoother, faster, and more efficiently. If you are interested in knowing more about python efficiently, you can check out the <a href="https://www.learnbay.co/data-science-certification-courses/" target="_blank">data science course</a>
  with special python-support with top-class trainers with best-in-class resources. In case you are just exploring python as a beginner, follow us on <a href="https://www.facebook.com/learnbay/" target="_blank">Facebook</a>, <a href="https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA/featured" target="_blank">Youtube</a>, <a href="https://www.linkedin.com/company/learnbay/?original_referer=http%3A%2F%2Flocalhost%3A3001%2F" target="_blank">Linkedin</a>, <a href="https://twitter.com/Learnbay" target="_blank">Twitter</a>.
