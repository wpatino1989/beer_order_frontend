'use client';

import React from 'react';

import { useOrder } from '../../application/use-cases/useOrder';
import { OrderList } from '../components/OrderList';

export default function OrderPage() {
    const { order, loading } = useOrder();

    return (
        <div className="container ">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <OrderList rounds={order?.rounds || []} />
            )}
        </div>
    );
}

