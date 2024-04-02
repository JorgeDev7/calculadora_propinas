type MenuItem = {
    id: number
    name: string
    price: number
}

type OrderItem = MenuItem & {
    quantity: number
}
type Tip = {
    id: string
    value: number
    label: string
}