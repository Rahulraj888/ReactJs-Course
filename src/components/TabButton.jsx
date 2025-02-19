export default function TabButton({children, clickHandler, isSelected}) {

    // const clickHandler = () => {
    //     alert("button clicked")
    // }
    let class_name = isSelected ? "active" : "";
    return (
    <li>
        <button className={class_name} onClick={clickHandler}>{children}</button>
    </li>)
} 