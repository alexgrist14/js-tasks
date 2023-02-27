function min(a,b){
    if(a>b)
        return b;
    else if(a<b)
        return a;
    else return a || b;
}

console.log(min(-1, -1));