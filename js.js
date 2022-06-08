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

const Student = { 
    id: Date.now() + "Student";
    

}