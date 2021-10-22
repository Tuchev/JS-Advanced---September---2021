function addItem() {
    const list = document.getElementById('items');
    const input = document.getElementById('newItemText');
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    list.appendChild(liElement);
    input.value = '';
}