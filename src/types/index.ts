type MenuItem = {
    id: number,
    name: string,
    price: number
}

type OrderItem = MenuItem & {
    quantity: number
}