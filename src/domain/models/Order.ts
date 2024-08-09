// export interface OrderItem {
//     name: string;
//     quantity: number;
// }

// export interface Order {
//     created: string;
//     paid: boolean;
//     subtotal: number;
//     taxes: number;
//     discounts: number;
//     items: OrderItem[];
//     rounds: Array<{ created: string; items: OrderItem[] }>;
// }

export class Order {
    created: string;
    paid: boolean;
    subtotal: number;
    taxes: number;
    discounts: number;
    items: OrderItem[];
    rounds: OrderRound[];

    constructor(
        created: string,
        paid: boolean,
        subtotal: number,
        taxes: number,
        discounts: number,
        items: OrderItem[],
        rounds: OrderRound[]
    ) {
        this.created = created;
        this.paid = paid;
        this.subtotal = subtotal;
        this.taxes = taxes;
        this.discounts = discounts;
        this.items = items;
        this.rounds = rounds;
    }
}

export class OrderItem {
    name: string;
    quantity: number;
    price_per_unit: number;
    total: number;

    constructor(name: string, quantity: number, price_per_unit: number, total: number) {
        this.name = name;
        this.quantity = quantity;
        this.price_per_unit = price_per_unit;
        this.total = total;
    }
}

export class OrderRound {
    created: string;
    items: OrderItem[];

    constructor(created: string, items: OrderItem[]) {
        this.created = created;
        this.items = items;
    }
}
