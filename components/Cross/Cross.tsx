interface ICross {
    size?: string;
    classNameProp?: string
}

export default function Cross({ size = "1rem", classNameProp }: ICross) {
    return (
        <img className={classNameProp} style={{ width: size }} src="/images/other/red-cross.svg" alt="Red Cross" />
    )
}
