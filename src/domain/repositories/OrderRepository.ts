import { Order } from '../models/Order';

export interface OrderRepository {
    getOrderStatus(): Promise<Order>;
}
