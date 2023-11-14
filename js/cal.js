document.addEventListener('DOMContentLoaded', function () {
    // Table creation function
    function createTable(rows, cols) {
        let table = document.createElement('table');
        table.style.width = '100%';
        table.style.height = '100vh';
        table.setAttribute('border', '1');
    
        // Define an array of weekdays
        let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    

        // Calculate the height for each cell based on the viewport height and number of rows
        let cellHeight = (window.innerHeight / rows) + 'px'; 

        for (let i = 0; i < rows; i++) {
            let tr = table.insertRow();
    
            for (let j = 0; j < cols; j++) {
                let td = tr.insertCell();
    
                // Check if it's the first row
                if (i === 0) {
                    // Set the cell text to the weekday
                    td.appendChild(document.createTextNode(weekdays[j % 7]));
                } else {
                    // For other rows, display Row and Column number
                    td.appendChild(document.createTextNode(`Row ${i}, Column ${j + 1}`));
                }
    
                td.style.textAlign = 'center';
                td.style.height = cellHeight;
                
                // Add hover effect
                td.onmouseover = function() {
                    this.style.backgroundColor = 'gray'; // Change background color on hover
                };
                td.onmouseout = function() {
                    this.style.backgroundColor = ''; // Revert background color when not hovering
                };
            }
        }
    
            // Resize event listener to adjust cell heights dynamically
    window.addEventListener('resize', function() {
        let newCellHeight = (window.innerHeight / rows) + 'px';
        let allCells = table.getElementsByTagName('td');
        for (let cell of allCells) {
            cell.style.height = newCellHeight;
        }
    });
        return table;
    }
    

    // Append the table to the container
    let tableContainer = document.getElementById('table-container');
    tableContainer.appendChild(createTable(5, 7));
});
