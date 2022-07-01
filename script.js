const api_url ="https://jsonplaceholder.typicode.com/posts";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}
// Calling that async function;
getapi(api_url);
  
// Function to hide the loader

// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>userID</th>
          <th>ID</th>
          <th>TITLE</th>
          <th>BODY</th>
         </tr>`;
    
    // Loop to access all rows 
    for (i=0;i<100;i++) {
        tab += `<tr> 
    <td>${i.userid} </td>
    <td>${i.id}</td>
    <td>${i.title}</td> 
    <td>${i.body}</td>          
</tr>`;
    // Setting innerHTML as tab variable
    document.getElementById("table").innerHTML = tab;
}
}

script.js
