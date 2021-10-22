// function solve() {
//     document.querySelector('#searchBtn').addEventListener('click', onClick);
//
//     function onClick() {
//         const searched = document.getElementById('searchField').value.toLowerCase();
//         const tableRows = document.querySelectorAll('tbody tr');
//
//         for (let row of tableRows) {
//             let rowTextLower = row.textContent.toLowerCase();
//             if (rowTextLower.includes(searched) && searched !== '') {
//                 row.classList.add('select');
//             } else {
//                 row.classList.remove('select');
//             }
//         }
//         document.getElementById('searchField').value = '';
//     }
// }

function solve() {
    const button = document.getElementById('searchBtn');
    button.addEventListener('click', search)

    function search() {
        const input = document.getElementById('searchField');
        let inputText = input.value.toLowerCase();
        let tableElements = Array.from(document.querySelectorAll('tbody tr'));

        tableElements.forEach((el) => {
            let text = el.textContent.toLowerCase();
            if (text.includes(inputText)) {
                el.classList.add('select');
            } else {
                el.classList.remove('select');
            }
        })
        input.value = '';
    }
}