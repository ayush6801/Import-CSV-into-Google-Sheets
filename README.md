
# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**


We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:
- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it *Jugaad* 
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

You get brownie points 🍪 if you can make it even easier by allowing them to filter the data as well before importing it into Google Sheets 🔍.

**Other pointers**:
- Import to Sheet – After validation and mapping, devise a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimize for Large Files – Large datasets are common in analytics. Your solution should effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

## Submission ⏰
The timeline for this submission is: **9AM, 30th Sept, 2023 - 12PM, 2nd Oct, 2023**

Some things you might want to take care of:
- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- [ ] My code's working just fine! 🥳
- [ ] I have recorded a video showing it working and embedded it in the README ▶️
- [ ] I have tested all the normal working cases 😎
- [ ] I have even solved some edge cases (brownie points) 💪
- [ ] I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓
Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore 😛

## Developer's Section
Video Demonstration link: https://drive.google.com/file/d/1XypJcPVCFifMACVWxsWK-6UP8L5zzV1m/view?usp=sharing 
# Approach for this question 
There are 2 files for this git repository one is .gs file while other is html file let's discuss each file one by one.
 1. Code.gs (Google Apps Script)

 
    This file contains the backend of my import CSV or we can say it helped set of functions written in JavaScript that run on Google's servers and can be used to automate tasks in Google Workspace applications in our case Google Sheets.




      a. onOpen() Function:
    
    This function is an Apps Script trigger that runs automatically when the Google Sheets document is opened.
    The SpreadsheetApp.getUi() method is used to get access to the user interface of the active spreadsheet.
    createMenu is used to create a custom menu named "Import CSV." addItem adds a menu item to the custom menu. In our case, it's "Open File Upload Form," and it's associated with the showFileUploadForm function.
    addToUi adds the custom menu to the Google Sheets UI.

      b. showFileUploadForm() Function:

    This function creates an HTML modal dialog using HtmlService.createHtmlOutputFromFile('Index').
           The HTML file named 'Index' is used as the content of the modal dialog.
           setTitle sets the title of the modal dialog, and setWidth sets its width.
           SpreadsheetApp.getUi().showModalDialog(html, 'File Upload Form'); displays the modal dialog to the user.


      c. importCSV(data, selectedColumns) Function:


    This is the function where magic happens which import CSV file to our Google sheet.
    This function takes two parameters: data (CSV file data) and selectedColumns (an array of indices of selected columns) and these parameters are passed from our HTML which we will see shortly.
    It uses Utilities.parseCsv(data) to parse the CSV data into a 2D array.
    If no columns are selected (selectedColumns is empty), it imports all columns to the Google Sheet starting from the last row.
    If specific columns are selected, it filters the data to include only those columns and imports them into the Google Sheet.

    
  3. HTML Code (Index.html):


     This file contains our front end. It is responsible for creating the user interface that allows users to drag-and-drop file and select the column that they want to import.

     
     This code manly consists of HTML and CSS but let me talk about a few functions which are important in this file.

     
     a. handleFile(file):

     
     This function is called when a file is selected or dropped.
     It uses FileReader to read the contents of the file as text and then calls populateColumnSelect to populate the column selection dropdown.

     
     b. populateColumnSelect(data):

     
     This function takes the CSV data and populates the dropdown with column names based on the first row of the CSV.

     
     c. importCSV():

     
     This function is called when the "Import" button is clicked.
     It reads the selected file, gets the selected columns, and uses google.script.run to invoke the importCSV function in the Google Apps Script with the data and selected columns.
  

  
  *Thank you this was a fun project and I learned so many things I appreciate this new hiring approach.*
