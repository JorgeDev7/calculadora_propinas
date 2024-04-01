type MenuItemProps = {
    item: MenuItem
}

export default function MenuItem({ item }: MenuItemProps) {

    const { name, price } = item;

    return (
        <button
            type="button"
            className="border-2 border-teal-400 hover:bg-teal-200 transition w-full p-3 flex justify-between items-center"
        >
            <p>{name}</p>
            <p className="font-black">${price}</p>
        </button>
    );
}
