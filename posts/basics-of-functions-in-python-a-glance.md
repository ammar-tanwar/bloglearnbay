---
title: Basics of Functions In Python - A Glance
stitle: "Basics of Functions In Python - A Glance"
publish: "Published on"
published_time: "2022-09-09T13:25:31+05:30"
modified_time: "2022-09-09T13:25:31+05:30"
desc: "In this blog you will learn about Python functions, including how to call and write a function. To understand more about Python functions, click here."
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/basic-python-1.jpeg"
headerAlt: "An illustration shows a girl seated in a chair in front of a desktop screen effectively transforming data using Python functions."
date: "Sep 9, 2022"
tag: [ Functions in python, types of function, lambda functions, functions in python example, types of functions in python, user defined functions in python, python functions list, main function in python, built in functions in python, define function in python, calling a function in python, user-defined functions in python, lambda functions python, python list of lambda functions, what is lambda function in python with example ]
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
h1: "Basics of Functions In Python - A Glance"
id: "basics-of-functions-in-python-a-glance"
tableData:
  [

      Defining a function,Driver code to call a function, What are the various types of functions in python?,Built-in functions, User-defined function, program for user-defined functions, Recursive Functions in Python, What do you mean by recursion in python?, Lamda Function, What are Lambda Functions in python?, Take away
        
  ]
---



Transforming the data in an effective way and then utilizing them in an optimized manner while programming is known as Functions in python. Also, executing the block only when it is called is known as a function.

With the help of 'functions' programs, you can break into smaller chunks of code. When you need to write the same code several times you can use that code in a function and call that function whenever you want to execute that code. In this article let me take you through different functions used in python along with some of the examples.

## Defining a function    

A group of reusable code that is called anywhere in a program eliminates the need for writing the same code repeatedly. A function helps programmers for writing modular codes. When you write a function inside a class, it becomes a method. After the function is defined we can use it by calling the function '**fun()**'.

A function is used to provide the necessary functionality. Simple rules for defining a function are as follows:

- The 'def' keyword is used to begin a function, which is then followed by the name and parentheses'()'.
- You can input any parameters or arguments within the parentheses.
- For documentation, the first function statement can be made optional or docstring.
- Every function having a code block starts with a colon (:) which is indented.
- The return(expression) statement retains a function by providing the caller with a returned expression.

**Example:**  **Defining a function:** 

| # A simple python function <br>

def fun(): <br>

 print("Hello Data Science")  <br>

**Example:** **Calling a function:** 

Once functions are created you can call them by using the name of that function which is followed by a parenthesis that contains parameters for that particular function.

| # A simple python function <br>

def fun(): <br>

 print("Hello Data Science") <br>

# Driver code to call a function  
 fun() 

Example:

Depicting the first call to the function and second call to the same function. <br>

 def my_function(Fun): <br>
    print(Fun + "Classes") <br>

 my_function("Hello") <br>
 my_function("Data") <br>
 my_function("Science") <br>

 Output <br>
 Hello Classes <br>
 Data Classes <br>
 Science Classes <br>

## What are the various types of functions in python?    
In python, you have two important types of functions

- Built-in functions
- User-defined functions

### Built-in functions    

Default functions which are already programmed in python software called 'Built -in function'. You have a wide range of built-in functions available in python. Some of the built-in functions are

- int
- list
- tuple
- float
- string
- set
- bin
- oct
- hex
- dictionary

### User-defined function      
The functions specifically you write to define certain tasks fall under user-defined functions. It can also be a library for someone else. If you are working on a larger project you can break the workload by maintaining different functions.

Example:

# program for user-defined functions   


def multiply_num(x,y): <br>
	mul = x*y 
<br>
	return mul
 <br>   
num1 = 5 <br>
num2 = 6 <br>
print("The Product of: ", multiply_num(num1,num2) <br>

The Product of: 30 <br>


<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/basic-python-2.jpeg" style="width:100%" class="img" alt="An example of a Python recursion with several recursion cases."/></img>

###  Recursive Functions in Python

#### What do you mean by recursion in python?   
The process of defining anything by itself is known as recursion. A function has the ability to call other functions. Retrieving the own function is possible by using a function.

Example: <br>

| # To find the factorial number <br> 
def calc_fact(x): <br>
if x == 1: <br>
return 1 <br>
else: <br>
return(x * calc_fact(x-1)) <br>
num = 4 <br>
print ("Factorial of", num, "is", calc_fact(num)) <br>

In the above example, calc\_fact() is a recursive function in python as it calls the function by itself. The function call multiples with the factorial number 1 until it is equal to 1.

**Note** : If a recursive function does not provide a base condition that ends the recursion, the function will call itself, indefinitely.

### Lamda Function

#### What are Lambda Functions in python?     


Lambda Functions in python are also known as anonymous functions which means the function is without a name. As you use the 'def' keyword for normal function in python similarly, the Anonymous function uses the lambda keyword to define the function in python.

The syntax for lambda = lambda arguments: expression

- Any number of arguments can be there in this function however only one expression gets evaluated and returned.
- If the function objects are required you can use Lambda functions.
- Grammatical arrangements are minimized to a single expression in lambda functions.
- lambda has many uses apart from other types of expressions in a particular area of programming.

Example: <br>

string = 'HellodataScience' <br>
#Lambda returns a function object <br>
print(lambda string : string) <br>

Output <br>
<function<lambda> at 0x0000016282865820 >

## Take away      

As a programmer a precise and optimal way of writing code would help better rather than having complications. Functions would be a better option as you can break the program into smaller programs.

If you're interested in learning how to use python effectively, check out the <a href="https://www.learnbay.co/data-science-certification-courses" target="_blank">data science course</a> with special python help from an industrial specialist and best-in-class resources. If you're just getting started with Python follow us on <a href="https://www.facebook.com/learnbay/" target="_blank">Facebook</a>, <a href="https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA/featured" target="_blank">Youtube</a>, <a href="https://www.linkedin.com/company/learnbay/?original_referer=http%3A%2F%2Flocalhost%3A3001%2F" target="_blank">Linkedin</a>, <a href="https://twitter.com/Learnbay" target="_blank">Twitter</a>.