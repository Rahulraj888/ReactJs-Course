export default function TabButton({children, clickHandler, ...props}) {
    let class_name = isSelected ? "active" : undefined;
    return (
    <li>
        <button className={class_name} {...props}>{children}</button>
    </li>)
} 