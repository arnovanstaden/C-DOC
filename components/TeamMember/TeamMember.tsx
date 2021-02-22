import Image from "next/image";

// Components
import Cross from "../Cross/Cross";

// Styles
import styles from "./team-member.module.scss";

interface TeamMember {
    member: {
        name: string,
        position: string
    }
}

export default function TeamMember({ member }: TeamMember) {
    const imageName = member.name.slice(0, member.name.indexOf(" ")).toLocaleLowerCase() + ".jpg";

    return (
        <article className={styles.member}>

            <div className={styles.image}>
                <div className="next-image next-image--intrinsic">
                    <Image width={200} height={200} src={`/images/pages/about/team/${imageName}`} alt={`C-DOC Team member Image - ${member.name}`} />
                </div>
            </div>
            <div className={styles.text}>
                <h4>{member.name}</h4>
                <p>
                    <Cross />
                    <span>{member.position}</span>
                </p>
            </div>
        </article>
    )
}
