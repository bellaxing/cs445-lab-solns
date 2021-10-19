window.onload = function() {
    fetchEmployees();
    document.getElementById('refresh').onclick = fetchEmployees;
}

async function fetchEmployees() {
    let result = await fetch('https://randomuser.me/api/?results=5');
    let emps = await result.json();
    renderEmployees(emps.results);
}

function renderEmployees(emps) {
    for (let i = 0; i < emps.length; i++) {
        let emp = emps[i];
        document.getElementById('img' + i).src = emp.picture.large;
        document.getElementById('person-name-' + i).textContent = emp.name.first + " " + emp.name.last;
        document.getElementById('gender' + i).textContent = 'Gender: ' + emp.gender;
        document.getElementById('email' + i).textContent = emp.email;
    }
}