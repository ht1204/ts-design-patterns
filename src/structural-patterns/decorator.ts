abstract class Animal {
    abstract move(): void;
}

abstract class SuperDecorator extends Animal {
    protected comp: Animal;

    constructor(decoratedAnimal: Animal) {
        super();
        this.comp = decoratedAnimal;
    }

    abstract move(): void;
}

class Dog extends Animal {

    public move(): void {
        console.log("Moving the dog...");
    }
}

class SuperAnimal extends SuperDecorator {

    public move(): void {
        console.log("Starts flying...");
        this.comp.move()
        console.log("Landing...");
    }
}

class SwimmingAnimal extends SuperDecorator {

    public move(): void {
        console.log("Jumps into the water...");
        this.comp.move();
    }
}


export function testDecorator() {
    const dog = new Dog();

    console.log("--- Non-decorated attempt: ");
    dog.move();

    console.log("--- Flying decorator --- ");
    const superDog = new SuperAnimal(dog);
    superDog.move();

    console.log("--- Now let's go swimming --- ");
    const swimmingDog = new SwimmingAnimal(dog);
    swimmingDog.move();

}

