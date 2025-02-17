//Fetching data from API

fetch("https://fakestoreapi.com/products/1")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("Error is: ",error))