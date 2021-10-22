function deleteByEmail() {
    const input = document.querySelector('input[name = "email"]');
    const rows = Array.from(document.querySelector('tbody').children);
    let removed = false;
    const result = document.getElementById('result');

    for (let row of rows) {
        if (row.children[1].textContent === input.value) {
            row.remove();
            removed = true;
        }
    }

    if (removed) {
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}