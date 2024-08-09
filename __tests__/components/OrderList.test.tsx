import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { OrderList } from '../../src/interfaces/components/OrderList';

const rounds = [
    {
        created: '2024-09-10 12:00:30',
        items: [
            { name: 'Corona', quantity: 2, price_per_unit: 115, total: 230 },
            { name: 'Club Colombia', quantity: 1, price_per_unit: 110, total: 110 },
        ],
    },
    {
        created: '2024-09-10 12:20:31',
        items: [
            { name: 'Club Colombia', quantity: 1, price_per_unit: 110, total: 110 },
            { name: 'Quilmes', quantity: 2, price_per_unit: 120, total: 240 },
        ],
    },
];

describe('OrderList Component', () => {
    test('renders the order rounds correctly', () => {
        render(<OrderList rounds={rounds} />);

        // Verifica que los encabezados de las rondas están presentes
        expect(screen.getByText('Ronda: 2024-09-10 12:00:30')).toBeInTheDocument();
        expect(screen.getByText('Ronda: 2024-09-10 12:20:31')).toBeInTheDocument();

        // Verifica que los productos dentro de las rondas están presentes
        expect(screen.getByText('2 x Corona - $230.00')).toBeInTheDocument();
        expect(screen.getByText('1 x Club Colombia - $110.00')).toBeInTheDocument();
        expect(screen.getByText('2 x Quilmes - $240.00')).toBeInTheDocument();
    });

    test('displays a message when there are no items in a round', () => {
        const emptyRounds = [
            {
                created: '2024-09-10 12:00:30',
                items: [],
            },
        ];

        render(<OrderList rounds={emptyRounds} />);

        expect(screen.getByText('No hay productos en esta ronda.')).toBeInTheDocument();
    });
});
