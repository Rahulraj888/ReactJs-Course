export default function TabButton({children}) {

    const clickHandler = () => {
        alert("button clicked")
    }

    return (
    <li>
        <button onClick={clickHandler}>{children}</button>
    </li>)
} 