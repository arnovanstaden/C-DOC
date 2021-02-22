import Image from "next/image";
import Link from "next/link";
import { convertImage } from "../../utils/utils";


// Styles 
import styles from "./product.module.scss";

interface IProduct {
    name: string;
    price: number;
    id: string;
    thumbnail: string;
}

export default function Product({ name, price, id, thumbnail }: IProduct) {
    return (
        <Link href={`/shop/${id}`}>
            <a className={styles.product}>
                <img src={convertImage(thumbnail, 300)} alt="" />
                <h4>{name}</h4>
                <p>R {price}</p>
            </a>
        </Link>
    )
}
