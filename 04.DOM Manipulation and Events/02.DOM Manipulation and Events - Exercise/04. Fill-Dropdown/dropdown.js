function addItem() {
    const inputTextField = document.getElementById('newItemText');
    const inputValueField = document.getElementById('newItemValue');
    const selectMenu = document.getElementById('menu');
    const newOption = document.createElement('option');

    newOption.textContent = inputTextField.value;
    newOption.value = inputValueField.value;
    selectMenu.appendChild(newOption);
    inputTextField.value = '';
    inputValueField.value = '';
}

//Не съм я прегледал!