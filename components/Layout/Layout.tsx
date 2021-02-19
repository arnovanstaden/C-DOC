
// Components
import Header from "../Header/Header";
import Head from "../Head/Head";
import Nav from "../Nav/Nav";

export default function Layout({
    children,
    head,
    noLanding
}: {
    children: React.ReactNode
    head: {
        title: string,
        description: string,
        canonical: string,
        robots?: boolean
    }
    noLanding?: boolean
}) {

    return (
        <>
            <Head head={head} />
            <main>
                {noLanding ? <Header /> : null}
                <Nav />
                {children}
            </main>
        </>
    )
}


