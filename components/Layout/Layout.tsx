
// Components
import Header from "../Header/Header";
import Head from "../Head/Head";
import Nav from "../Nav/Nav";
import Notification from "../Notification/Notification";

interface ILayout {
    children: React.ReactNode;
    head: {
        title: string;
        description: string;
        canonical: string;
        robots?: boolean;
    }
    noLanding?: boolean;
    shop?: boolean;
}

export default function Layout(props: ILayout) {

    return (
        <>
            <Head {...props.head} />
            <main>
                {props.noLanding ? <Header shop={props.shop} /> : null}
                <Nav />
                {props.children}
                <Notification />
            </main>
        </>
    )
}


