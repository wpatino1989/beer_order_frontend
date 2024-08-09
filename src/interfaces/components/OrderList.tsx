import { OrderRound } from '../../domain/models/Order';

interface Item {
    name: string;
    quantity: number;
    price_per_unit: number;
    total: number;
}

interface Round {
    created: string;
    items: Item[];
}

interface OrderListProps {
    rounds: Round[];
}

export function OrderList({ rounds }: OrderListProps) {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Estado de la Orden</h1>
            <div className="overflow-x-auto">
                {rounds.map((round, index) => (
                    <div key={index} className="mb-8 p-4 border rounded-lg bg-white shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Ronda: {round.created}</h2>
                        <table className="w-full border-collapse border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="border-b px-6 py-4 text-left">Producto</th>
                                    <th className="border-b px-6 py-4 text-right">Cantidad</th>
                                    <th className="border-b px-6 py-4 text-right">Precio por Unidad</th>
                                    <th className="border-b px-6 py-4 text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {round.items.length > 0 ? (
                                    round.items.map((item, itemIndex) => (
                                        <tr key={itemIndex} className={itemIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                            <td className="border-b px-6 py-4">{item.name}</td>
                                            <td className="border-b px-6 py-4 text-right">{item.quantity}</td>
                                            <td className="border-b px-6 py-4 text-right">${item.price_per_unit.toFixed(2)}</td>
                                            <td className="border-b px-6 py-4 text-right">${item.total.toFixed(2)}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="border-b px-6 py-4 text-center">No hay productos en esta ronda.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}
