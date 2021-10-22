function addItem() {
    // Select input field and read value
    const input = document.getElementById('newItemText');

    // Create new <li> element and set its content to input value
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    // Create Delete button
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement);

    liElement.appendChild(button);

    // Select <ul> and append new <li> element
    const list = document.getElementById('items');
    list.appendChild(liElement);


    // Nice to have: clear input field
    input.value = '';

    function removeElement(ev) {
        const parent = ev.target.parentNode;
        parent.remove();
    }
}