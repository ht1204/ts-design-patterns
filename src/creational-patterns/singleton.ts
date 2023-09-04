class MockDBConnection {

    protected static instance: MockDBConnection | null = null;
    private id: number = 0;

    constructor() {
        //... db connection logic
        this.id = Math.random(); //the ID could represent the actual connection to the db
    }

    public getID(): number {
        return this.id;
    }

    public static getInstance(): MockDBConnection {
        if (!MockDBConnection.instance) {
            MockDBConnection.instance = new MockDBConnection();
        }
        return MockDBConnection.instance;
    }
}


export function testSingleton() {
    const connections = [
        MockDBConnection.getInstance(),
        MockDBConnection.getInstance(),
        MockDBConnection.getInstance(),
        MockDBConnection.getInstance(),
        MockDBConnection.getInstance()
    ];

    connections.forEach(connItem => {
        console.log(connItem.getID());
    });
}


