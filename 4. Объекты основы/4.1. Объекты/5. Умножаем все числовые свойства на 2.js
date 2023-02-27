function multiplyNumeric(obj){
    for (let key in obj){
        if(typeof obj[key] === typeof 1)
        obj[key] = obj[key] * 2;
    }
}

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
console.log(menu);