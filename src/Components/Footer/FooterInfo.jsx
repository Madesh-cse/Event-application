import './FooterInfo.css'
import Logo from '../../assets/Logo.jpg'
export default function FooterInfo(){
    return (
        <section>
            <div className='Footer-info'>
                <div className='Footer-Grid'>
                    <div className='Event-Logo'>
                        <img src={Logo} alt="" />
                        <div className='Events-Title'>
                            <h1>KLNCE</h1>
                            <p>ZEIGEN <span>'25</span></p>
                        </div>
                    </div>
                    <div className='Events-Link'>
                        <div className='Events-grid'> 
                            <p>Quick Link</p>
                            <ul>
                                <li> <a href="#">Home</a></li>
                                <li> <a href="#">About</a></li>
                                <li> <a href="#">Events</a></li>
                                <li> <a href="#">Agenda</a></li>
                            </ul>
                        </div>
                        <div className='Events-grid'> 
                            <p>EXTERNAL LINK</p>
                            <ul>
                                <li> <a href="#">KLNCE</a></li>
                                <li> <a href="#">Email</a></li>
                                <li> <a href="#">Instagram</a></li>
                                <li> <a href="#">Whatsapp</a></li>
                            </ul>
                        </div>
                        <div className='Events-CO-ORDINATORS'> 
                            <p className='name' >CO-ORDINATORS</p>
                            <ul>
                                <li> 
                                    <p className='Co-ordinators-Name' >Mr.Thiravidan PM</p>
                                    <p className='Co-ordinators-Number'>9123563645</p>
                                </li>
                                <li> 
                                    <p className='Co-ordinators-Name'>Mr.Murugesh S</p>
                                    <p className='Co-ordinators-Number'>9345634014</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='DevelpedBy'>
                <p>Developed By</p>
            </div>
        </section>
    )
}