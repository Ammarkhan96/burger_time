export interface IProduct {
    id: number
    name: string
    image: string
    price: number
    information: string
}

export interface IProductCart extends IProduct{
    id: number
    name: string
    image: string
    price: number
    information: string
    quantity: number
}

export interface IUserContext {
    cart: IProductCart[]
    addCart: (product: IProductCart) => void
    deleteProduct: (id: number) => void
    removeQuantity: (id: number) => void
    addQuantity: (id: number) => void
    cleanCart: () => void
}

export type ProductType = 'Burger' | 'Salad' | 'Soda' | 'Dessert' | 'Breakfast'