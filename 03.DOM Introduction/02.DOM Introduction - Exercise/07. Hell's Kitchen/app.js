function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    const bestRest = {
        'name': '',
        'workers': [],
        'avgSalary': 0,
        'bestSalary': 0
    };

    function onClick() {
        const input = document.querySelectorAll('#inputs textarea')[0];
        const outputRest = document.querySelectorAll('#bestRestaurant p')[0];
        const outputWork = document.querySelectorAll('#workers p')[0];
        let inputArr = JSON.parse(input.value);

        for (let restInfo of inputArr) {
            const employees = [];
            let avgSal = 0;
            let bestSal = 0;
            let [restName, workers] = restInfo.split(' - ');
            workers = workers.split(', ');

            for (let worker of workers) {
                let [name, salary] = worker.split(' ');
                salary = Number(salary);
                if (salary > bestSal) {
                    bestSal = salary;
                }
                avgSal += salary;
                employees.push([name, salary]);
            }
            avgSal = Number((avgSal / workers.length).toFixed(2));
            if (avgSal > Number(bestRest['avgSalary']) && restName !== bestRest['name']) {
                bestRest['name'] = restName;
                bestRest['workers'] = employees;
                bestRest['avgSalary'] = avgSal.toFixed(2);
                bestRest['bestSalary'] = bestSal.toFixed(2);
            } else if (restName === bestRest['name']) {
                bestRest['workers'] = bestRest['workers'].concat(employees);
            }
        }
        bestRest['workers'].sort((a, b) => b[1] - a[1]);
        let outputWorkText = '';
        for (let [name, salary] of bestRest['workers']) {
            outputWorkText += `Name: ${name} With Salary: ${salary} `;
        }
        let salariesArr = bestRest['workers'].map((el) => el[1]);
        bestRest['avgSalary'] = (salariesArr.reduce((acc, salary) => acc + salary) / salariesArr.length).toFixed(2);
        bestRest['bestSalary'] = (salariesArr.sort((a, b) => b - a)[0]).toFixed(2);

        outputRest.textContent = `Name: ${bestRest['name']} Average Salary: ${bestRest['avgSalary']} Best Salary: ${bestRest['bestSalary']}`;
        outputWork.textContent = outputWorkText.trim();
        input.value = '';
    }
}