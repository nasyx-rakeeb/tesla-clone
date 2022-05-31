import './Button.css'
const Button = (props) => {
    return (
        <button className={`${props.className} button`}>{props.children}</button>
    )
}
export default Button;