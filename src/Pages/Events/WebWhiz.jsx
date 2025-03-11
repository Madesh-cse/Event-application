import './Events.css'
import Events3 from '../../assets/Technical3.jpg'
import { BiRupee } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
export default function WebWhiz(){

    return(
         <section className='Event-1'>
                    <div className="Event-1-Container">
                        <div className='Event-Title'>
                            <h1>EVENTS <span>ZEIGEN'25</span></h1>
                            <p>WEB WHIZ</p>
                        </div>
                        <div className='Event-Content'>
                           <div className='Event-Layout'>
                                    <div className='Container-1'>
                                        <img src={Events3} alt="PaperPresentation" />
                                        <h2>WEB WHIZ</h2>
                                        <div className='Registration-Box'>
                                            <h3>REGISTRATION</h3>
                                            <p>Registration Fee :<span><BiRupee/></span>250 Per Head</p>
                                         <div className='RegisterBtn'>
                                            <p><a href="https://forms.gle/mrUbzaNAQDudphBy5">Register Now <FaArrowRightLong/></a></p>
                                          </div>    
                                        </div>
                                    </div>
                                    <div className='Container-2'>
                                      <h2>EVENT OVERVIEW</h2>
                                      <p> Web site designing-Students can design a website <br /> consisting of web pages.by using Anykind of internet <br /> resources</p> 
                                        <div className='Notices'>
                                            <h2>IMPORTANT NOTICE</h2>
                                          <p>Website topic for a team will be given onspot.</p>
                                       </div>
                                       <div className='Tools'>
                                            <h2>TOOLS</h2>
                                            <p>Web page can be created in HTML,VS code or <br /> any kinds of other web applications.
                                            </p>
                                       </div>
                                        <div className='Team-size'>
                                            <h2>TEAM SIZE</h2>
                                            <p>2 Members per Team</p>
                                       </div>
                                        <div className='Duration'>
                                         <p>45 Minutes</p>
                                       </div>
                                       <div className='More-Details'>
                                            <h2>FOR MORE DETAILS</h2>
                                            <p>Mathupriya S-99946 97700</p>
                                            <p>Nivetha RS - 95972 35924</p>
                                       </div>
                                    </div>           
                            </div>
                        </div>
                    </div>
                </section>
    )
}