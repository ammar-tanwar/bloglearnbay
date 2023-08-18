---
title: How to Use Python's Pywhatkit Module for Sending Message-Generating Codes?
stitle: "How to Use Python's Pywhatkit Module for Sending Message-Generating Codes?"
publish: "Published on"
published_time: "2023-02-10T13:25:31+05:30"
modified_time: "2023-02-10T13:25:31+05:30"
desc: "We have seen various implications of the python programming language. And Python's Pywhatkit module seems to prove a powerful tool for sending message-generating codes. In this blog, you will learn how to configure and run the Pywhatkit module for sending an auto-generated message."
slug: home
headerImg: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/htup-1.jpg"
headerAlt: "An image titled, 'How to Use Python's Pywhatkit Module for sending Messages-Generating codes?' shows a Python-based AI bot and a person looking at the WhatsApp logo."
date: "Feb 10, 2023"
tag: [ pywhatkit whatsapp, pywhatkit module in python, automate whatsapp messages python, send whatsapp message using python pywhatkit, how to install pywhatkit in python ]
category: "Python"

cattitle: "Upskill With All Python Upskilling Resources - Learnbay Blogs"
catdesc: "Python resources feature a wide range of Bogs, tutorials covering from basic syntax and programming concepts to advanced topics such as ML,  data science etc."
authortitle: "Nivin Biswas - AI and Machine Learning Enthusiast & Blogger | Learnbay"
adesc: "Nivin Biswas, A blogger and researcher in AI, Data Science, and Full-Stack. Also, he expertise in ML Models and Scripting Languages like Python & Java."

author: "Nivin Biswas"
authorimg : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/nivin.webp"
authordesc: "A tech blogger and researcher in artificial intelligence, data science, and full-stack development. He holds expertise in machine learning models, artificial intelligence, and scripting languages like Python and Java"
authorlinkedin: "https://www.linkedin.com/in/nivin-biswas-7b3197178/"
position: "Editor"
readTime: "9-10 mins"
h1: "How to Use Python's Pywhatkit Module for Sending Message-Generating Codes?"
id: "how-to-use-pythons-pywhatkit-module-for-sending-message-generating-codes"
tableData:
  [
      What is Python Pywhatkit Module?, The installation process of the Pywhatkit module:-, Implementing the Pywhatkit Module, How to send a WhatsApp message using the Pywhatkit module?, Code explanation:-, Features of Pywhatkit:-, Summing up:-
   ]

---

<span style=" font-weight:bold; font-size:28px">Understanding the Importance of the Python Pywhatkit Module for Sending Automatically Generated Messages</span>

## What is Python Pywhatkit Module?

Have you thought of automated WhatsApp messages? However, Python programming expertise will likely be able to assist you in doing so.

Pywhatkit is a package for Python that enables you to send individual or group conversations and messages. Even sending photos and videos is now possible because of advancements in the Pywhatkit module. Additionally, the <a href="https://blog.learnbay.co/basics-of-functions-in-python-a-glance" target="_blank">function in the Python</a> Pywhatkit module may be used to track web browsing and YouTube videos, but this article will mostly focus on the Pywhatkit module for WhatsApp.

### The installation process of the Pywhatkit module:- 

- The installation of Pywhatkit is pretty simple and straightforward; you may install it by installing the PyPI package, which means you can do it by using pip.

- Here, it would be best if you virtually established a Python 3.10 environment. Once this environment has been created, you may use the pip command to install Pywhatkit.

- You can use any text editor here to enter the programs, though Jupyter can be very helpful, and JupyterLab functions flawlessly in this scenario.

- This is all you need to do to install the Pywhatkit modules.

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/htup-2.jpg" style="width:100%" class="img" alt="An illustration shows a  tablet with a chat message surrounded by the logos of Python and WhatsApp."/>

### Implementing the Pywhatkit Module 

1. We need to automatically send messages on WhatsApp at predetermined intervals to use the <a href="https://blog.learnbay.co/introduction-to-python-programming" target="_blank">Python</a> library; to continue, we must use the Chrome browser and sign in to WhatsApp.
   
2. Additionally, you only need to follow a couple of the instructions if you don't have a Chrome browser.
   
3. A stable Chrome driver from (<a href="https://chromedriver.chromium.org/" target="_blank" rel="nofollow">https://chromedriver.chromium.org/</a>) must be installed.
   
4. After extracting and installing, just search for the file application called Chrome Drive in Windows. It ought to appear as **C:/Users/.../chromedriver.exe.**
   
5. If we have accurately surpassed the path, we must execute pywhatkit.ad driver path (path) and supply the code path as an input, and a pop-up window with a black screen along the chrome will open and close.
   
6. If everything goes as intended, we'll run the function pywhatkit.load QR codes (), and then we'll be able to log in to WhatsApp Web.


## How to send a WhatsApp message using the Pywhatkit module?    

Here, in this example, we'll discover one of the simplest way to use the Python Pywhatkit modules, one that makes use of the WhatsApp website to send messages to any WhatsApp user automatically. The most important thing here is to log in through the Chrome browser, which is emphasized in every scenario.
<pre style="font-size:18px">
    # importing the module 
    import pywhatkit
    # using Exception Handling to avoid
    # unprecedented errors
    try:
        # sending message to receiver
        # using pywhatkit
        pywhatkit.sendwhatmsg("+91#########",
                            "hey how are you",
                                13, 18)
        print("Successfully Sent!")
    except:
        # handling exception
        # and printing error message
        print("Error!")

</pre>

### Code explanation:-  

- A Python pywhatkit module is imported at the beginning of the code.
  
- In the second step, we are going to need a try block to send a message to the receiver using pywhatkit.
- The message is then sent as "hey how are you" by the code.
  
- The print routines are then used to appropriately display the message's success or failure.
  
- If an unexpected error does occur, it will be handled with an exception handler who will print out all of the relevant messages and, if that succeeds, declare that the messages were successfully sent.
  
- Then the code is sent to the recipient a text message with the words "hello how are you?" and the value 13 in it.
  
- Eventually, when it is successful, the code publishes "successful send!"
  
- So, this is the basic way in which we can send a message using the Python Pywhatkit modules.

<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/htup-3.jpg" style="width:100%" class="img" alt="A Python professional sitting in front of a laptop, implementing the various features of the Pywhatkit module."/>

## Features of Pywhatkit:-    

1. We can use many of the Pywhatkit module's sorting features in a single program. One of the key benefits of this Pywhatkit module is that it can be installed and used with it without any significant configuration.

2. With this, you may add images to send to a contact or a group of contacts. You can also send messages to groups.

3. You can convert images into ASCII art with the Pywhatkit module; you only need to utilize the model and codes.


    <pre style="font-size:18px">
    # Convert any image to ASCII art in Python  
    import pywhatkit as kit
    kit.image_to_ascii_art("Smile.png")
    #END
    <pre>

4. With this, sending emails using HTML codes is really simple and quick.
   
5. Through a simple piece of code, we can easily use a string to write a conversion here in the Pywhatkit module.
   
    <pre style="font-size:18px">
    import pywhatkit as kit
    import cv2
    kit.text_to_handwriting ("Life Goes On", save_to="handwriting.png")
    img = cv2.imread("handwriting .png")
    cv2.imshow("Text to handwriting ", img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    </pre>

_Explanation:-_

- Programs have first integrated the Pywhatkit library.
  
- The code creates a new instance with the name "Kit".
  
- The words "Life Goes On" are then translated into an image by using handwriting, which can then be saved in the directory as handwirting.png.
  
- The cv2's imread function allows us to read these images, and the imshow function displays its user on the screen.
  
- The operation will then be stopped until the waitkey, which must be zero in this scenario, is pressed.
  
- If memory leaks are prevented, after waiting 0 seconds, all windows would be destroyed.
  
- The text images will then be displayed on the screen and saved to a file at the end handwriting.png.

## Summing up:-    

We have seen how the python pywhatkit module appears to be an extremely useful tool for sending WhatsApp messages. Apart from that, there are numerous other uses of pywhatkit, such as video sorting, web searches, and so on. With the future trends, python libraries will undoubtedly make tremendous achievements. Check out our <a href="https://www.learnbay.co/job-guarantee-or-money-back-data-science-ai-certification-course" target="_blank">Data Science and AI Master Program</a> if you want to learn more about Python and other programming languages, please follow us on <a href="https://www.facebook.com/learnbay/" target="_blank">Facebook</a>, <a href="https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA" target="_blank">YouTube</a>, and <a href="https://www.linkedin.com/company/learnbay/" target="_blank">LinkedIn</a>.