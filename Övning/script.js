

function init() {


first();
second();
third();
fourth();
fifth();

}
window.addEventListener('load', init);


function first() {

    var button = document.getElementById("firstBtn");

    button.onclick = function () {
        console.log("Äpple");
    }
    button.onclick = function () {
        console.log("Päron");
    }
    button.onclick = function () {
        console.log("Apelsin");
    }

}




function second() {

    var button = document.getElementById("secondBtn");
    
    button.addEventListener("click", function() {
    console.log("New");
    });

    button.addEventListener("click", function() {
    console.log("York");
    });

    button.addEventListener("click", function() {
    console.log("City");
    });

}




function third() {

    var button = document.getElementById("thirdBtn");

    button.addEventListener("click", function() {
        console.log("Ett");
    });
    
    button.addEventListener("click", function() {
        console.log("Två");
    }, true);

}




function fourth() {

    var button = document.getElementById("fourthBtn");

    button.addEventListener("click", function() {

    console.log("Italien");

    setTimeout(() => {
    console.log("Frankrike");
    }, 0);

    Promise.resolve().then(() => {
    console.log("Spanien"); 
    });

    console.log("Portugal");

    })

}




function fifth() {

    var button = document.getElementById("fifthBtn");

    button.addEventListener("click", function() {

        console.log("Ett");

        setTimeout(() => {
            console.log("Två");
        }, 0);
    
        Promise.resolve().then(() => {
            console.log("Tre");
        });
    
        async function myFunction() {
            console.log("Fyra");
            await Promise.resolve();
            console.log("Fem");
        }
    
        myFunction();
    
        console.log("Sex");
    
        setTimeout(() => {
            console.log("Sju");
        }, 0);   
    
    })

}