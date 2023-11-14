const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };

const getDirectionKey = (ev, node) => {
    const { width, height, top, left } = node.getBoundingClientRect();
    const l = ev.clientX - (left + window.pageXOffset);
    const t = ev.clientY - (top + window.pageYOffset);
    const x = (l - (width / 2)) * (width > height ? (height / width) : 1);
    const y = (t - (height / 2)) * (height > width ? (width / height) : 1);
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};

class CellItem {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('mouseover', (ev) => this.update(ev, 'in'));
        this.element.addEventListener('mouseout', (ev) => this.update(ev, 'out'));
    }

    update(ev, prefix) {
        const direction = directions[getDirectionKey(ev, this.element)];
        this.element.className = `cell ${prefix}-${direction}`;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    // Table creation function
    function createTable(rows, cols) {
        let table = document.createElement('table');
        table.style.width = '100%';
        table.style.height = '100vh';
        table.style.borderCollapse = 'collapse';
        table.setAttribute('border', '1');
    
        // Define an array of weekdays
        let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    

        // Calculate the height for each cell based on the viewport height and number of rows
        let cellHeight = (window.innerHeight / rows) + 'px'; 

        for (let i = 0; i < rows; i++) {
            let tr = table.insertRow();
    
            for (let j = 0; j < cols; j++) {
                let td = tr.insertCell();
                td.classList.add('cell'); // Add class for styling
                
                // Create a div for the hover effect
                let infoDiv = document.createElement('div');
                infoDiv.classList.add('info');

                // Add content to the div (you can customize this)
                if (i === 0) {
                    infoDiv.innerHTML = weekdays[j % 7];
                } else {
                    infoDiv.innerHTML = `Row ${i}, Column ${j + 1}`;
                }

                // Append the div to the cell
                td.appendChild(infoDiv);
    
                td.style.textAlign = 'center';
                td.style.height = cellHeight;
                
                // Add the hover effect object to each cell
                new CellItem(td);
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
