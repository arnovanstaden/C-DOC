// import Link from "next/link";
// import { GetStaticProps } from 'next';
// import { getCart } from "../../utils/cart";
// import React, { useState, useEffect } from "react";

// // Styles
// import styles from '../../styles/pages/shop/cart.module.scss';

// // Components
// import Layout from "../../components/Layout/Layout";
// import Section from "../../components/Section/Section";
// import CartItem from "../../components/CartItem/CartItem";
// // import Checkout from "../../components/Checkout/Checkout";



// const Cart = () => {
//     // State
//     const [isLoading, setLoading] = useState(true);
//     const [products, setProducts] = useState();
//     const [cart, setCart] = useState(getCart());
//     const [shopSettings, setShopSettings] = useState();
//     const [showCart, setShowCart] = useState(true);
//     const [showCheckout, setShowCheckout] = useState(false);

//     // Hooks
//     useEffect(() => {
//         fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
//             .then(response => response.json())
//             .then(result => {
//                 setProducts(result.data);
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }, []);

//     useEffect(() => {
//         setLoading(false);

//     }, [products]);

//     useEffect(() => {
//         fetch(`${process.env.NEXT_PUBLIC_API_URL}/shopSettings`)
//             .then(response => response.json())
//             .then(result => {
//                 setShopSettings(result.data);
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }, []);


//     // Helpers
//     const getProduct = (item) => {
//         let product = products.find(product => product.id === item.id);
//         return product
//     }

//     // Handlers
//     const handleCartChange = (() => {
//         setCart(getCart())
//     })

//     const handleCheckoutShow = () => {
//         // Check Quants
//         setShowCart(false)
//         setShowCheckout(true)
//         handleCartChange();
//     }

//     const handleCartShow = () => {
//         setShowCheckout(false)
//         setShowCart(true)
//     }

//     // Components
//     const CartGrid = () => {
//         if (cart === null) {
//             return (
//                 <div className={styles.emptyCart}>
//                     <h2>Your cart is empty </h2>
//                 </div>
//             )
//         } else if (cart.length < 1) {
//             return (
//                 <div className={styles.emptyCart}>
//                     <h2>Your cart is empty </h2>
//                 </div>
//             )
//         }
//         return (
//             <div>
//                 <div className={styles.headings}>
//                     <p>Name</p>
//                     <p>Quantity</p>
//                     <p>Price</p>
//                     <p>Total</p>
//                 </div>
//                 {
//                     cart.map((item, index) => (
//                         // Get Product
//                         item ? <CartItem product={getProduct(item)} quantity={item.quantity} key={index} handleCartChange={() => handleCartChange()} /> : null
//                     ))
//                 }
//             </div>
//         )
//     }

//     return (
//         <Layout
//             head={{
//                 title: "Cart | C-DOC",
//                 description: "",
//                 canonical: "/shop/cart",
//                 robots: false
//             }}
//             noLanding={true}
//             shop={true}
//         >
//             <Section
//                 heading="Your Cart"
//                 noCross={true}
//                 classNameProp={styles.cart}
//             >
//                 {isLoading ? null : <CartGrid />}
//             </Section>
//         </Layout>
//     )
// }

// export default Cart

export default function Cart() {
    return <div></div>
}

