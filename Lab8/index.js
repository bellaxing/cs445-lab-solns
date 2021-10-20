const { from } = rxjs;
const { map, filter } = rxjs.operators;

window.onload = function() {
    document.getElementById('emp-list-btn').onclick = function() {
        fetchEmployees(document.getElementById('nums-emps').value);
    }
}

async function fetchEmployees(numberOfEmps) {
    let result = await fetch('https://randomuser.me/api/?results=' + numberOfEmps);
    let emps = await result.json();
    renderEmployees(emps.results);
}

function renderEmployees(emps) {
    const empDiv = document.getElementById('employees');
    empDiv.innerHTML = '';

    from(emps)
        .pipe(
            filter(emp => emp.gender === 'female'),
            map(emp => {
                emp.myname = emp.name.first + " " + emp.name.last;
                emp.mylocation = {};
                emp.mylocation.firstline = emp.location.street.number + ' ' + emp.location.street.name;
                emp.mylocation.secondline = emp.location.city + ' ' + emp.location.state + ' ' + emp.location.country + ' ' + emp.location.postcode;
                return emp;
            })
        )
        .subscribe(emp => {
            let template = `
            <div class="col">
            ${emp.myname}
            </div>
            <div class="col">
                <p class="fw-bold">Location</p>
                <p>${emp.mylocation.firstline} </p>
                <p>${emp.mylocation.secondline}</p>
            </div>
            <hr>
            `
            let div = document.createElement('div'); //<div></div>
            div.innerHTML = template; //<div>template</div>
            div.classList = 'row'; //<div class="row">template</div>
            empDiv.appendChild(div);
        });
}