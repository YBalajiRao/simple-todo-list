// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const taskInput = document.getElementById('taskInput'); // Input field for new tasks
    const addTaskButton = document.getElementById('addTaskButton'); // Button to add new tasks
    const taskList = document.getElementById('taskList'); // Unordered list to display tasks

    // Function to add a new task to the list
    const addTask = () => {
        // Get the text from the input field and trim any extra spaces
        const taskText = taskInput.value.trim();

        // Check if the input field is not empty
        if (taskText !== "") {
            // Create a new list item (li) element for the task
            const listItem = document.createElement('li');
            listItem.textContent = taskText; // Set the text of the list item to the task text

            // Create a remove button for the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove'; // Set the button text to "Remove"
            removeButton.addEventListener('click', () => {
                // Remove the list item when the remove button is clicked
                taskList.removeChild(listItem);
            });

            // Append the remove button to the list item
            listItem.appendChild(removeButton);

            // Append the list item to the unordered list (ul)
            taskList.appendChild(listItem);

            // Clear the input field for new tasks
            taskInput.value = '';
        }
    };

    // Add a new task when the "Add Task" button is clicked
    addTaskButton.addEventListener('click', addTask);

    // Add a new task when the Enter key is pressed
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
