type InternalState = {
    event: string;
}

abstract class Observer {
    abstract update(state: InternalState): void;
}


abstract class Observable {

    protected observers: Observer[] = []; //the list of observers
    protected state: InternalState = { event: "" }; //the internal state observers are watching

    public addObserver(obs: Observer): void {
        this.observers.push(obs);
    }

    protected notify() {
        this.observers.forEach(obItem => obItem.update(this.state));
    }
}

//Actual implementations
class ConsoleLogger extends Observer {

    public update(newState: InternalState) {
        console.log("New internal state update: ", newState);
    }
}

class InputElement extends Observable {

    public click(): void {
        this.state = { event: "click" };
        this.notify();
    }

}


export function testObserver() {
    const input = new InputElement();
    const consoleLogger = new ConsoleLogger();
    input.addObserver(consoleLogger);

    input.click();
}

