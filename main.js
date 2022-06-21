// What day is it section:

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("intro").innerHTML = "Today is " + day + " !";

// AddEventListener
window.addEventListener('load', () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit" , (e) => {
    e.preventDefault();

    const task = input.value;

// Task Div

    const task_el = document.createElement('div');
    task_el.classList.add('task');

// Content Div

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);

// Input

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    
    task_content_el.appendChild(task_input_el);

// Actions Div

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

// Button: Edit

    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerHTML = 'Edit'

// Button: Delete

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerHTML = 'Delete'

// Appending Actions

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

// List 

    list_el.appendChild(task_el)
 })
})