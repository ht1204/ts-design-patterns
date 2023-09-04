
interface IProduct {
    getName(): string;
    getPrice(): number;
}

//The "Component" entity
class Product implements IProduct {

    private price: number;
    private name: string;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getPrice(): number {
        return this.price;
    }

    public getName(): string {
        return this.name;
    }
}

/*
    The "Composite" entity which will group all other composites
    and components (hence the "IProduct" interface)
*/
class Box implements IProduct {

    private products: IProduct[] = [];

    contructor() {
        this.products = [];
    }

    public getName(): string {
        return  `A box with ${this.products.length} products`;
    }

    add(p: IProduct): void {
        console.log("Adding a ", p.getName(), "to the box");
        this.products.push(p);
    }

    getPrice(): number {
        return this.products
                .reduce((curr: number, b: IProduct) => (curr + b.getPrice()), 0);
    }
}


export function testComposite() {
    const box1 = new Box();
    box1.add(new Product("Bubble gum", 0.5));
    box1.add(new Product("Samsung Note 20", 1005));

    const box2 = new Box();
    box2.add(new Product("Samsung TV 20in", 300));
    box2.add(new Product("Samsung TV 50in", 800));

    box1.add(box2);
    console.log("Total price: ", box1.getPrice());
}

