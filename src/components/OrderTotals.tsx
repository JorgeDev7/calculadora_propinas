import { useMemo } from "react"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
}

export default function OrderTotals({ order, tip }: OrderTotalProps) {

    const subtotalAmount = useMemo(() => order.reduce((acc, item) =>
        acc + (item.quantity * item.price), 0),
        [order]);

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total a Pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                type="button"
            ></button>
        </>
    )
}
