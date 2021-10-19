window.onload = function() {
    fetchEmployees();
    document.getElementById('refresh').onclick = fetchEmployees;
}

async function fetchEmployees() {
    let result = await fetch('https://randomuser.me/api/?results=10');
    let emps = await result.json();
    renderEmployees(emps.results);
}

function renderEmployees(emps) {
    const empDiv = document.getElementById('employees');
    empDiv.innerHTML = '';
    for (let i = 0; i < emps.length; i++) {
        let emp = emps[i];
        let template = `
        <div class="col-4">
            <img src="${emp.picture.large}" />
        </div>
        <div class="col-8 text-end">
            <p class="fw-bold">${emp.name.first + " " + emp.name.last}</p>
            <p>Gender: ${emp.gender}</p>
            <p>${emp.email}</p>
        </div>
        <hr>
        `
        let div = document.createElement('div'); //<div></div>
        div.innerHTML = template; //<div>template</div>
        div.classList = 'row'; //<div class="row">template</div>
        empDiv.appendChild(div);
    }
}