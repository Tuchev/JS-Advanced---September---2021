function extractText() {
    const items = document.getElementById('items').children;
    const result = [];
    for (const item of Array.from(items)) {
        result.push(item.textContent);
    }
    document.getElementById('result').textContent = result.join('\n');
}

// function extractText() {
//     const elements = document.querySelectorAll('ul li');
//     const area = document.querySelector('textarea');
//     const result = [];
//     for (let i = 0; i < elements.length; i++) {
//         result.push(elements[i].textContent);
//     }
//     area.textContent = result.join('\n');
// }