function generateReport() {
    let info = document.querySelectorAll('input');
    let table = document.querySelectorAll('tbody tr');

    let tableArray = new Array(table)[0];

    let output = [];
    for (let index = 0; index < table.length; index++) {
        let employeeInfo = {};
        for (let j = 0; j < info.length; j++) {
            if (info[j].checked === true) {
                let label = info[j].name;
                employeeInfo[label] = tableArray[index].textContent.split('\n')
                    .map(x => x.trim(' ')).filter(x => x !== '')[j];
            }
        }
        output.push(employeeInfo);
    }

    let outputResult = JSON.stringify(output);
    let divOutput = document.getElementById('output');

    divOutput.textContent = outputResult;
}