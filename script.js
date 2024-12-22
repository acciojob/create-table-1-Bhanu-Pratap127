function insert_Row() {
    //Write your code here
  const table=document.getElementById("sampleTable");
	const newRow=table.insertRow(0);
	const rowCount = table.rows.length;
	const cell1=newRow.insertCell();
	const cell2=newRow.insertCell();
    // cell1.textContent = rowCount;
	cell1.textContent="New Cell1";
	cell2.textContent="New Cell2"
	
	
  
}
// insert_Row();