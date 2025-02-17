//Simulating a promise
function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data Fetched Successfully");
        },5000);
    });
}
fetchData().then(data => console.log(data)).catch(error => console.log(error));
