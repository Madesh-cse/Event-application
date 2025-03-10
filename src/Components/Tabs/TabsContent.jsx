import './TabsContent.css'
import TabButton from './TabButton'
import { useState } from 'react'
import event1 from '../../assets/Teachnical2.jpg'
import event2 from '../../assets/Technical1.jpg'
import event3 from '../../assets/Technical3.jpg'
import NonTech1 from '../../assets/NonTeh2.jpg'
import NonTech2 from '../../assets/NonTeh1.jpg'
import NonTech3 from '../../assets/NonTeh3.jpg'
import { Link } from 'react-router-dom'
export default function TabContent(){

    const[selectedTopic,setSelectedTopic] = useState(1)

    function clickhandle(SelectButton){

        setSelectedTopic(SelectButton); // initially = "click the button"
    }

    return(
        <section>
            <div className='Content-bg'>
                <div className='Content'>
                    <div className='tabcontent-title'>
                        <h1>Zeigen'25</h1>
                        <p>EVENTS</p>
                    </div>
                    <menu className='Tabs'>
                        <TabButton onselect={()=>clickhandle(1)}>Technical</TabButton>
                        <TabButton onselect={()=>clickhandle(2)}>Non-Technical</TabButton>
                    </menu>
                    <div id='tab-content'>
                        <div className='TabFlex'>
                            <div className={selectedTopic === 1 ? 'Show-Content1':'hide'}>
                                <div className='Event'>
                                   <Link to='/events/Presentation-BlitZ'> <img src={event1} alt="" /></Link>
                                    <h3>Presentation BlitZ</h3>
                                </div>
                                <div className='Event'>
                                  <Link to='/events/CodeRescue'><img src={event2} alt="" /></Link>  
                                    <h3>Code Rescue</h3>
                                </div>
                                <div className='Event'>
                                  <Link to='/events/WebWhiz'><img src={event3} alt="" /></Link>  
                                    <h3>WebWhiz</h3>
                                </div>
                            </div>
                            <div className={selectedTopic === 2 ? 'Show-Content1':'hide'}>
                               <div className='Event'>
                                   <Link to='/events/Cinematica'> <img src={NonTech1} alt="" /></Link>
                                    <h3>Cinimatica</h3>
                                </div>
                                <div className='Event'>
                                    <Link to='/events/FunFinity-Wars'><img src={NonTech2} alt="" /></Link>
                                    <h3>FunFinity Wars</h3>
                                </div>
                                <div className='Event'>
                                   <Link to='/events/SharK-Tank'><img src={NonTech3} alt="" /></Link> 
                                    <h3>Shark Tank</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}