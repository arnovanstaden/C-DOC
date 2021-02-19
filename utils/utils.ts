
import navStyles from "../components/Nav/nav.module.scss";

export const handleNavToggle = () => {
    const nav = document.querySelector(`#nav`);
    if (nav.classList.contains(navStyles.open)) {
        nav.classList.remove(navStyles.open);
        document.body.classList.remove("noscroll")
    } else {
        nav.classList.add(navStyles.open);
        document.body.classList.add("noscroll")
    }
}