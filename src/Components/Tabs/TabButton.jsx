import './TabsContent.css'
export default function TabButton({children,onselect}){

    return(
        <>
        <div className="TabButton">
            <li><button onClick={onselect}>{children}</button></li>
        </div>
        </>
    )
}