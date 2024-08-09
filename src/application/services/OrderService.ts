
import { Order } from '../../domain/models/Order';
import { OrderApi } from '../../infrastructure/api/OrderApi';

export class OrderService {
    private orderApi: OrderApi;

    constructor(orderApi: OrderApi) {
        this.orderApi = orderApi;
    }

    async getOrder(): Promise<Order> {
        return this.orderApi.fetchOrder();
    }
}
