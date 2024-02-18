interface ICross {
    size?: string;
    classNameProp?: string;
}

export default function Cross({ size, classNameProp }: ICross) {
    return (
        <img className={classNameProp} style={{ width: size || '1rem', height: size }} src="/images/other/red-cross.svg" alt="Red Cross" />
    )
}
