import Image from "next/image";
import Link from "next/link";
import { convertImage } from "../../utils/utils";
import { IProduct } from "../../utils/cart";


// Styles 
import styles from "./product.module.scss";

export default function Product(product: IProduct) {


    return (
        <Link href={`/shop/${product.id}`}>
            <a className={styles.product} data-category={product.category}>
                <div className={styles.image}>
                    <img src={convertImage(product.thumbnail, 300)} alt="" />
                </div>
                <h4>{product.name}</h4>
                <p>R {product.price}</p>
            </a>
        </Link>
    )
}
