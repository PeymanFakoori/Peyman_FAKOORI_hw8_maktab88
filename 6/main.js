function makeUserDataTable(personData) {
    const table = document.querySelector("table");
    const tabelRow = document.getElementsByTagName("tr");
    const len = tabelRow.length;
    for(let i = 1; i < len ; i++) {
        tabelRow[1].remove();
    }
    personData.forEach(function(person, index) {
        const row = document.createElement("tr");
        const tier = document.createElement("td");
        const tierText = document.createTextNode(`${index + 1}`);
        tier.appendChild(tierText);
        row.appendChild(tier);
        for (const prop in person) {
            const newCell = document.createElement("td");
            const cellText = document.createTextNode(`${person[prop]}`);
            newCell.appendChild(cellText);
            row.appendChild(newCell);
        }
        table.appendChild(row);
    })
}
makeUserDataTable(userData);