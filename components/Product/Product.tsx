import Link from "next/link";
import { convertImage } from "../../utils/utils";
import { IProduct } from "../../utils/cart";


// Styles 
import styles from "./product.module.scss";

export default function Product(product: IProduct) {

  if (!product.visibility) {
    return null
  }

  return (
    <Link href={`/shop/${product.id}`}>
      <a className={styles.product} data-category={product.category}>
        <div className={styles.image}>
          <img src={convertImage(product.thumbnail, 300)} alt="" />
        </div>
        <h4>{product.name}</h4>
        <p>{product.price > 0 ? `R ${product.price}` : `Free`}</p>
      </a>
    </Link>
  )
}
