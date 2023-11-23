

// On réccupère l'élément HTML qui a pour ID "run"
const validation = document.getElementById('run');

// On ajoute un écouteur d'évènement sur l'élément HTML qui a pour ID "run"
validation.addEventListener('click', () => {
    let affichage = document.getElementById('affichages');
    affichage.style.display = "block";
    let selectElmt = document.getElementById('nombre-select');
    console.log(selectElmt.value);
    let k = selectElmt.value;
    for (let i = 0; i < k; i++) {
        affichage.innerHTML += `<img class="img" src="images/${i}.jpg" alt="image1">`;
    }
   
});




let age = 25;

if (age > 18) {
    console.log('You are adult!');
} else {  
    console.log('You are not adult!');
}

for (let i = 0; i < 10; i++) {
    console.log("coucou", i);
}


