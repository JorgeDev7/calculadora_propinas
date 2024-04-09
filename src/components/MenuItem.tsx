import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {

    const { name, price } = item;

    return (
        <button
            type="button"
            className="border-2 border-teal-400 hover:bg-teal-200 transition w-full p-3 flex justify-between items-center"
            onClick={() => dispatch({
                type: 'add-item',
                payload: { item }
            })}
        >
            <p>{name}</p>
            <p className="font-black">${price}</p>
        </button>
    );
}
