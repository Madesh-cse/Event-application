import './TabsContent.css'
export default function TabButton({children,onselect,isSelected}){

    return(
        <>
        <div className="TabButton">
            <li className={isSelected ? 'active':undefined}><button onClick={onselect}>{children}</button></li>
        </div>
        </>
    )
}