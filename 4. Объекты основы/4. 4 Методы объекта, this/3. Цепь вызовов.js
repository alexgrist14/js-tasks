let ladder = {
    step: 0,
    up() {
        console.log(this.step++);
        return this;
    },
    down() {
        console.log(this.step--);
        return this;
    },
    showStep() {
        console.log( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();