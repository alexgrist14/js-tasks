let calculator = {
    read: function (a,b){
        this.a = a;
        this.b = b;
    },
    sum: function (){
        return this.a + this.b;
    },
    mul: function (){
        return this.a * this.b;
    }
};

calculator.read(5,5);
console.log( calculator.sum() );
console.log( calculator.mul() );