
console.log('Hello World!');
document.write('Hello World!');
let age = 25;

if (age > 18) {
    console.log('You are adult');
} else {
    console.log('You are not adult');
}   

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// ----------------------------------------------

let button = document.querySelector('#button');

button.addEventListener('click', function() {
    alert('Button clicked');
    let titre = document.querySelector('h1');
    titre.style.color = 'red';
    let secret = document.querySelector('#secret');
    secret.style.display = 'block';
}); 

