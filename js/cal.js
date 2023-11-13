document.addEventListener('DOMContentLoaded', function () {
    // Table creation function
    function createTable(rows, cols) {
        let table = document.createElement('table');
        table.style.width = '100%';
        table.setAttribute('border', '1');

        for (let i = 0; i < rows; i++) {
            let tr = table.insertRow();

            for (let j = 0; j < cols; j++) {
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(`Row ${i + 1}, Column ${j + 1}`));
                td.style.textAlign = 'center';
            }
        }

        return table;
    }

    // Append the table to the container
    let tableContainer = document.getElementById('table-container');
    tableContainer.appendChild(createTable(4, 7));
});
