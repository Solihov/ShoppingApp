import './style.scss'
export const Button = (props) => {
    const {
        children,
        custom,
        ...others
    } = props
    switch (custom) {
        case 'yellow':
            return (
                <button className='btn yellow' {...others}>{children}</button>
            )
        case 'styled':
            return (
                <button className='btn styled' {...others}>{children}</button>
            )
        default:
            return (
                <button className='btn'>{children}</button>
            )
    }
}
