function renderTable(){
    const thead = document.querySelector("thead");
    const tbody = document.querySelector("tbody");
    const tableColumn =["row",...Object.keys(userData[0])].map(culomn => `<th>${culomn}</th>`).join("");
    thead.innerHTML = `<tr> ${tableColumn} </tr>`; 

    for(let [index,user] of userData.entries()){
         tbody.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td>${user.uid}</td>
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.city}</td>
            <td>${user.postalCode}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.position}</td>
         </tr>`; 
    }


}
renderTable()