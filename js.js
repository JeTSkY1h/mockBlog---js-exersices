const add = (n1, n2) => {
    return n1 + n2;
}

const multiply = (n1, n2) => {
    return n1 * n2;
}

const factorial = (n) => {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res = res * i;  
    }
    return res;
}

async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }

async function getAllnames() {
    console.log()
}

function getAliveCharacters(){
    let res;
    fetch("https://rickandmortyapi.com/api/character/?status=alive").then(function(response) {
        return response.json();
    }).then(function(data){
        res = data;
        console.log(data.results);

    });
    return res;
};