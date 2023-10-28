// Questions

// 1. How many child nodes does the body element have in this document?

//23

// 2. What is the relationship between the div with the class of todo-section and the list element with the text of "Reading"?

//grand child
// 3. What is the relationship between the div with the class of image-gallery and the html element?

//parent
// 4. Uncomment the following code:

 document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('addButton');
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function () {        const taskText = newTaskInput.value;

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            taskItem.addEventListener('click', function () {
                taskItem.classList.toggle('completed');
            });

            taskList.appendChild(taskItem);
            newTaskInput.value = '';
        }
     });
 });

 //Connect this file to the HTML file and open the HTML file in the browser? We will learn much more about event listeners soon!

// 5. How many variables are declared?

// Four variables are declared: addButton, newTaskInput, taskList, and taskText.

// 6. How many function calls do you see?

// There are several function calls, including document.getElementById, addEventListener, createElement, classList.toggle, and appendChild.

// 7. List the parameters that you see.

// DOMContentLoaded and a function for document.addEventListener
// click and a function for addButton.addEventListener
// click and a function for taskItem.addEventListener
// What do you see? What can you learn from the above code?
// The code snippet is a simple JavaScript task list application. It waits for the DOM to load, grabs DOM elements, and attaches event listeners to them. The application allows the user to add new tasks and toggle their completion status. This code is a good example of DOM manipulation and event handling in JavaScript, and it's a straightforward example of how to make a small, interactive web application.


// What do you see? What can you learn from the above code?
