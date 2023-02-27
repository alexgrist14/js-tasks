function Accumulator(val) {
    this.value = val;

    this.read = function(num) {
        this.value += num;
    };

}

let accumulator = new Accumulator(1);
accumulator.read(5);
accumulator.read(2);
console.log(accumulator.value);