class Calculator {
    constructor() {
        this.memory = 0;
        this.operation = null;
    }

    setMemory(value) {
        this.memory = value;
    }

    getMemory() {
        return this.memory;
    }

    setOperation(operation) {
        this.operation = operation;
    }

    getOperation() {
        return this.operation;
    }

    defaultState() {
        this.memory = 0;
        this.operation = null;
    }

}

export default new Calculator();
