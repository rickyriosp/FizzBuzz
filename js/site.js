// Get the Fizz and Buzz values
// controller function
function getValues() {
    document.getElementById("results").classList.add("invisible");

    // Get user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // Validate input
    fizzValue = Number.parseInt(fizzValue);
    buzzValue = Number.parseInt(buzzValue);

    // Check that the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // Generate Fizz Buzz values
        let fbData = fizzBuzzC(fizzValue, buzzValue);

        // Display data in the table
        displayData(fbData);
    } else {
        alert("You must enter integers");
    }

}

// Calculate results
// logic function
function fizzBuzz(fizzValue, buzzValue) {
    let results = [];

    for (let i = 1; i <= 100; i++) {
        if (i % fizzValue === 0 && i % buzzValue === 0) {
            results.push("FizzBuzz");
        }
        else if (i % buzzValue === 0) {
            results.push("Buzz");
        } else if (i % fizzValue === 0) {
            results.push("Fizz");
        } else {
            results.push(i);
        }
    }
    
    return results;
}

// Using switch statement
function fizzBuzzB(fizzValue, buzzValue) {
    let results = [];

    for (let i = 1; i <= 100; i++) {
        let Fizz = i % fizzValue === 0;
        let Buzz = i % buzzValue === 0;
        
        switch (true) 
        {
            case Fizz && Buzz:
                results.push("FizzBuzz");
                break;
            case Fizz:
                results.push("Fizz");
                break;
            case Buzz:
                results.push("Buzz");
                break;
            default:
                results.push(i);
        }
    }
    
    return results;
}

// Using ternary operator
function fizzBuzzC(fizzValue, buzzValue) {
    let results = [];

    for (let i = 1; i <= 100; i++) {
        let value = ((i % fizzValue === 0 ? 'Fizz' : '') + (i % buzzValue === 0 ? 'Buzz' : '') || i) ;
        results.push(value);
    }

    return results;
}

// Display calculated values to user
// view function
function displayData(fbData) {
    //get the table body element from the page
    let tableBody = document.getElementById("results");
    
    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");
    
    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbData.length; i += 5) {
        const tableRow = document.importNode(templateRow.content, true);

        //grab only the columns in the template
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];
       
        rowCols[1].classList.add(fbData[i + 1]);
        rowCols[1].textContent = fbData[i + 1];
       
        rowCols[2].classList.add(fbData[i + 2]);
        rowCols[2].textContent = fbData[i + 2];
       
        rowCols[3].classList.add(fbData[i + 3]);
        rowCols[3].textContent = fbData[i + 3];
       
        rowCols[4].classList.add(fbData[i + 4]);
        rowCols[4].textContent = fbData[i + 4];

        //add all rows to the table
        tableBody.appendChild(tableRow);
    }
    
    document.getElementById("results").classList.remove("invisible");
}