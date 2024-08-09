import { Order } from '../../domain/models/Order';

export class OrderApi {
    async fetchOrder(): Promise<Order> {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
            throw new Error('API URL is not defined');
        }

        const response = await fetch(`${apiUrl}/order-status/`);
        if (!response.ok) {
            throw new Error('Failed to fetch order');
        }
        const result = await response.json();
        const data = result.data;

        return new Order(
            data.created,
            data.paid,
            data.subtotal,
            data.taxes,
            data.discounts,
            data.items,
            data.rounds
        );
    }
}
