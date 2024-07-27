const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here// Function to calculate total price and add it to the table
function calculateAndAddTotal() {
  // Get all price elements
  const priceElements = document.querySelectorAll('.prices');
  
  // Calculate total price
  let totalPrice = 0;
  priceElements.forEach(priceElement => {
    // Remove $ sign and convert to number
    const price = parseFloat(priceElement.textContent.replace('$', ''));
    totalPrice += price;
  });
  
  // Round total price to 2 decimal places
  totalPrice = totalPrice.toFixed(2);
  
  // Get the table element
  const table = document.querySelector('table');
  
  // Create a new row
  const newRow = document.createElement('tr');
  
  // Create a cell for the total price
  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', '2');
  totalCell.textContent = `Total: $${totalPrice}`;
  totalCell.style.fontWeight = 'bold';
  
  // Add the cell to the row
  newRow.appendChild(totalCell);
  
  // Add the row to the table
  table.appendChild(newRow);
}

// Call the function to calculate and add total
calculateAndAddTotal();
  
};

getSumBtn.addEventListener("click", getSum);

