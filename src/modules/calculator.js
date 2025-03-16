class Calculator {
    memory = 0;
    operation = null;
    error = false;


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

    getErrorFlag(){
        return this.error;
    }

    setErrorFlag(flag) {
        this.error = Boolean(flag);
    }
}

export default new Calculator();
