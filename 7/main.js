function makeUserDataTable(person) {
    const table = document.querySelector("table");
    const rows = document.getElementsByTagName("tr");
    const len = rows.length;
    for(let i = 1; i < len ; i++) {
        tabelRow[1].remove();
    }
    person.forEach(function(person, index) {
        const row = document.createElement("tr");
        const tier = document.createElement("td");
        const tierNodeText = document.createTextNode(`${index + 1}`);
        tier.appendChild(tierNodeText);
        row.appendChild(tier);
        for (const value in person) {
            const newCell = document.createElement("td");
            const cellText = document.createTextNode(`${person[value]}`);
            newCell.appendChild(cellText);
            row.appendChild(newCell);
        }
        table.appendChild(row);
    })
}
makeUserDataTable(userData);

const addBtb = document.getElementsByClassName("btn2")
const changeBtn = document.getElementsByClassName("btn2")
const deleteBtn = document.getElementsByClassName("btn3")

const getCellValue = (tr, index) => tr.children[index].innerText || tr.children[index].textContent;
const comparer = (index, value) => (a, b) => ((value1, value2) => 
    value1 !== '' && value2 !== '' && !isNaN(value1) && !isNaN(value2) ? value1 - value2 : value1.toString().localeCompare(value2)
    )(getCellValue(value ? a : b, index), getCellValue(value ? b : a, index));
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), userData.value = !userData.value))
        .forEach(tr => table.appendChild(tr) );
})));