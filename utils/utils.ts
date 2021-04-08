
import navStyles from "../components/Nav/nav.module.scss";

export const convertImage = (image: string, width: number): string => {
    const covertedImage = image.replace("upload/v", `upload/w_${width}/f_auto/v`);
    return covertedImage
}

export const handleNavToggle = () => {
    const nav = document.querySelector(`.${navStyles.nav}`);
    if (nav.classList.contains(navStyles.open)) {
        nav.classList.remove(navStyles.open);
        document.body.classList.remove("noscroll")
    } else {
        nav.classList.add(navStyles.open);
        document.body.classList.add("noscroll")
    }
}


// Sorting

export const sortProducts = (array: any[], key: string) => {
    let sortedProducts = array.sort(function (a, b) {
        if (a[key] < b[key]) { return -1; }
        if (a[key] > b[key]) { return 1; }
        return 0;
    })
    return sortedProducts
}

