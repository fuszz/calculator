class History {
    element = document.getElementById("history");

    addOperation(text){
        if(this.element.innerText === 'Niczego jeszcze nie policzyłeś...'){
            this.element.innerText = '';
        }
        const newEvent = document.createElement("div");
        newEvent.className = "operationMessage";
        newEvent.innerText = text;
        this.element.appendChild(newEvent);
    }

    addError(text){
        if(this.element.innerText === 'Niczego jeszcze nie policzyłeś...'){
            this.element.innerText = '';
        }
        const newEvent = document.createElement("div");
        newEvent.className = "errorMessage";
        newEvent.innerText = text;
        this.element.appendChild(newEvent);
    }

}

export default new History();