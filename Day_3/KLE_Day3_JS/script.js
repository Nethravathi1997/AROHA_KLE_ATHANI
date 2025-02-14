/* script.js */
function showAlert() {
    alert('Hello! This is a JavaScript alert.');
}

function changeText() {
    document.getElementById('text').innerHTML = 'Text changed!';
}

function handleClick() {
    document.getElementById('clickMessage').innerHTML = 'Button Clicked!';
}

function validateForm() { //event listener
    let name = document.getElementById('name').value;
    if(name == '') {
        alert('Please enter your name.');
        return false;
    }
    return true;
}

function checkAge() {
    let age = parseInt(document.getElementById('ageInput').value);
    if(age >= 18) {
        document.getElementById('ageResult').innerHTML = 'You are a Major';
    } else {
        document.getElementById('ageResult').innerHTML = 'You are a Minor';
    }
}

function displayArrayItem() {
    let items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    let index = parseInt(document.getElementById('arrayIndex').value);
    let result = items[index] || 'Invalid index';
    document.getElementById('arrayResult').innerHTML = result;
}


