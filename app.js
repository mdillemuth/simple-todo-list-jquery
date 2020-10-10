function todoList() {
  // Create new element for todo list
  let newTodo = $(`<li></li>`);

  // #1. Create new todo to add from input value
  (function addTodo() {
    let input = $("#input");
    let inputVal = $("#input").val();
    newTodo.append(inputVal);

    let todoList = $("#list");
    newTodo.addClass("todo__list--item");

    // Create and append error message & style
    function addError() {
      $(".error").addClass("error--active");
      input.addClass("error__input");
    }

    // Remove error message & styling
    function removeError() {
      $(".error").removeClass("error--active");
      input.removeClass("error__input");
    }

    // Validate input and add new todo to todo list
    if (!inputVal) {
      addError();
    } else {
      removeError();
      todoList.append(newTodo);
    }
  })();

  // #2. Mark off a finished todo with double-click
  newTodo.dblclick(() => newTodo.toggleClass("finished"));

  // #3. Deleting a todo from the list with close button
  (function removeTodo() {
    // Creating and adding the remove button
    let removeBtn = $("<button></button>").addClass("todo__btn--remove");
    let removeBtnIcon = $("<i></i>").addClass("fas fa-times");
    removeBtn.append(removeBtnIcon);
    newTodo.append(removeBtn);

    // Hides the todo item when 'x' button is clicked
    removeBtn.click(() => newTodo.hide());
  })();

  // #4. Reordering the items:
  $("#list").sortable();
}

// Adds todo when user clicks 'Add' button
$("#btn").click(todoList);

// Adds todo when hitting 'Enter' from input
$(":input").keyup((e) => {
  if (e.key === "Enter") {
    todoList();
  }
});
