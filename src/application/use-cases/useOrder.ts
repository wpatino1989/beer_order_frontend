
import React, { useState, useEffect } from 'react';
import { OrderService } from '../services/OrderService';
import { OrderApi } from '../../infrastructure/api/OrderApi';
import { Order } from '../../domain/models/Order';

// Inicializa el servicio con la implementación de la API
const orderService = new OrderService(new OrderApi());

export function useOrder() {
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const fetchedOrder = await orderService.getOrder();
                setOrder(fetchedOrder);
            } catch (error) {
                console.error('Error fetching order:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, []);

    return { order, loading };
}


