interface NewClientBtn {
    myColor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function NewClientBtn(props: NewClientBtn) {
    const myColor = props.myColor ?? 'gray'
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${myColor}-400 to-${myColor}-700 text-white px-4 py-2 rounded-md
            ${props.className}    
        `}>
            {props.children}
        </button>
    )
}