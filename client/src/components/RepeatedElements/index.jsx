export const RepeatedElements = (props) => {
    const {
        children,
        tag,
        ...others
    } = props
    switch (tag) {
        case 'span':
            return (
                <span {...others}>{children}</span>
            )
        case 'p':
            return (
                <p {...others}>{children}</p>
            )
        case 'h1':
            return (
                <h1 {...others}>{children}</h1>
            )
        case 'h2':
            return (
                <h2 {...others}>{children}</h2>
            )
        case 'h3':
            return (
                <h3 {...others}>{children}</h3>
            )
        case 'h4':
            return (
                <h4 {...others}>{children}</h4>
            )
        case 'h5':
            return (
                <h5 {...others}>{children}</h5>
            )
        case 'h6':
            return (
                <h6 {...others}>{children}</h6>
            )
        default:
            return (
                <div {...others}>
                    {children}
                </div>
            )
    }
}