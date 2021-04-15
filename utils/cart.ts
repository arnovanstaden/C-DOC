import { sendNotification } from "../components/Notification/Notification";

// Interfaces

export interface ICartItem {
    id: string;
    quantity: number;
    price: number;
}

export interface IProduct {
    id: string;
    name: string;
    description: string;
    details: string;
    visibility: boolean;
    price: number;
    category: string
    thumbnail: string;
    digital?: boolean;
    document?: string
}


// INTERNAL HELPER FUNCTIONS

export const getCartLength = (): number => {
    if (getCart() === undefined || getCart().length === 0) {
        return 0
    } else {
        return getCart().length;
    }
}

export const searchCart = (productID: string): number => {
    let currentCart = getCart();
    let searchResults = 0;
    if (currentCart !== null) {
        currentCart.forEach(item => {
            if (item.id === productID) {
                searchResults++
            }
        })
    }
    return searchResults
}

export const showCart = () => {
    let currentCart = getCart();
    console.log(`Current Cart:`);
    console.log(currentCart)
}

// CART FUNCTIONS

export const updateCart = (product: IProduct, quantity: number) => {
    // Get Current Cart
    let currentCart = getCart();

    // If already in cart
    if (searchCart(product.id) > 0) {
        //Find index
        let index = currentCart.findIndex((item => item.id === product.id));

        // Update Item
        currentCart[index].quantity = quantity;
    }
    // If not in cart
    else {
        // Add new Item
        let newItem = {
            id: product.id,
            quantity: quantity,
            price: product.price
        }

        // Create New Cart
        if (currentCart === null) {
            currentCart = [newItem];
        }

        // Just add to cart
        else {
            currentCart.push(newItem);
        }
    }

    // Save
    if (typeof window !== 'undefined') {
        localStorage.setItem("cart", JSON.stringify(currentCart));
    }
    showCart()
    sendNotification("Cart Updated")
}

export const removeFromCart = (productID: string, notify?: string) => {
    // Get Current Cart & Index of Item
    let currentCart = getCart();
    let index = currentCart.findIndex((item => item.id === productID));

    // Update Cart
    currentCart.splice(index, 1);
    if (typeof window !== 'undefined') {
        localStorage.setItem("cart", JSON.stringify(currentCart));
    }
    // updateCartCounter();
    if (notify) {
        sendNotification("Item removed from cart")
    }

}

export const getCart = (): ICartItem[] => {
    let currentCart
    if (typeof window !== 'undefined') {
        currentCart = JSON.parse(localStorage.getItem("cart"));
    }
    return currentCart
}

export const checkCartValidity = (products) => {
    let currentCart = getCart();

    if (currentCart) {
        currentCart.forEach(item => {

            // product exists
            const itemExists = products.find(product => product.id === item.id)
            if (!itemExists) {
                removeFromCart(item.id)
            }
            console.log(itemExists)

            //  product is visible
            if (itemExists && !itemExists.visibility) {
                removeFromCart(item.id)
            }
        })
    }
}

export const getCartTotal = (): number => {
    let currentCart = getCart();
    let total = 0;
    if (currentCart) {
        currentCart.forEach(item => {
            total += (item.price * item.quantity)
        })
    }
    return total
}


export const clearCart = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem("cart");
    }
}
