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

  const getAllNamesAndOrigin = () =>{
    let res = []
    fetch("https://rickandmortyapi.com/api/character").then(function(response) {
        return response.json();
    }).then(function(data){
        data.results.forEach(char => {
            res.push({name: char.name, origin: char.origin.name})
        });
    });
    return res;
  }

  function getAllNames(){
    let res = []
    fetch("https://rickandmortyapi.com/api/character").then(function(response) {
        return response.json();
    }).then(function(data){
        data.results.forEach(char => {
            res.push(char);
        });
    });
    return res;
};

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