import Image from "next/image";
import Link from "next/link";

// Styles 
import styles from "./product.module.scss";

interface IProduct {
    name: string;
    price: number;
    id: string;
}

export default function Product({ name, price, id }: IProduct) {
    return (
        <Link href={`/shop/${id}`}>
            <a className={styles.product}>
                <img src="/images/stretcher.png" alt="" />
                <h4>{name}</h4>
                <p>R {price}</p>
            </a>
        </Link>
    )
}
