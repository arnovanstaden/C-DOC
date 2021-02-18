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
                <div className="next-image next-image--fill">
                    <Image layout="fill" src={`/images/pages/about/team/${imageName}`} alt={`Team member Image - ${member.name}`} />
                </div>
            </div>
            <h4>{member.name}</h4>
            <p>
                <Cross />
                <span>{member.position}</span>
            </p>
        </article>
    )
}
