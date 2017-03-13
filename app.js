const button = document.querySelector("#btn"),
      input = document.querySelector('#item'),
      list = document.querySelector('#list'),
      elements = document.getElementsByTagName('li'),
      empty = document.querySelector('#empty');

//Click Event Handler
button.addEventListener('click', function () {
  let inputValue = input.value;
  if (inputValue != "") {
    element = document.createElement('li'); //Create li tag
    element.textContent = inputValue; //Create the text li node
    list.appendChild(element); //Append to ul list
    input.value = null; //Clean the input
    setRemove(); //Add the event for each li tag when the element is create
    counter(); //Control de li length
  }
});

function counter () {
  if (elements.length < 1) {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
  }
}

function remove () {
  list.removeChild(this);
  counter();
}

function setRemove() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', remove); //Add the event for each li
  }
}
