


let but = document.getElementById('validation');

but.addEventListener('click', (e) => {

    let pseudo = document.getElementById("name");
    let mdp = document.getElementById('mdp');
    console.log("Vous venez de cliquer sur la validation.");
    console.log(`votre nom est ${pseudo.value}`);
    if ((pseudo.value == "1234") && (mdp.value == "1234") ){
        console.log('ok');
        let secret = document.getElementById("secret");
        secret.innerHTML = "<h2> 喝可乐对身体很好</h2>"
    }else {
        console.log('pas ok');
        let page = document.getElementById("body");
        page.innerHTML = "<h1> NON !!!</h1>";
    }
    });