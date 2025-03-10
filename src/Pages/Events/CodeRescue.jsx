import './Events.css'
import Event1 from '../../assets/Technical1.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { BiRupee } from "react-icons/bi";
export default function CodeRescue(){
    return(
        <section className='Event-1'>
            <div className="Event-1-Container">
                <div className='Event-Title'>
                    <h1>EVENTS <span>ZEIGEN'25</span></h1>
                    <p>PRESENTATION BLITZ</p>
                </div>
                <div className='Event-Content'>
                   <div className='Event-Layout'>
                            <div className='Container-1'>
                                <img src={Event1} alt="PaperPresentation" />
                                <h2>PRESENTATION BLITZ</h2>
                                <div className='Registration-Box'>
                                    <h3>REGISTRATION</h3>
                                    <p>Registration Fee :<span><BiRupee/></span>250 Per Head</p>
                                    <div className='RegisterBtn'>
                                        <p><a href="">Register Now <FaArrowRightLong/></a></p>
                                    </div>
                                </div>
                            </div>
                            <div className='Container-2'>
                              <h2>EVENT OVERVIEW</h2>
                              <p>Step into the ultimate coding battleground, where logic <br />eets speed and precision. Sharpen your mind, tackle <br />hallenges, and prove your debugging mastery. </p> 
                                <div className='Logic-Code'> 
                                    <ul>
                                        <li> Think fast</li>
                                        <li>code smart</li>
                                        <li>Debug like a pro</li>
                                    </ul>
                               </div>
                               <div className='Rounds'>
                                  <h2>Round 1</h2>
                                  <p>Crack the MCQs and test your coding fundamentals.</p>
                                  <h2>Round 2</h2>
                                  <p>Write a flawless program based on given concepts.</p>
                                  <h2>Round 3:</h2>
                                  <p>Debug the broken code and save the day</p>
                               </div>
                                <div className='Team-size'>
                                    <h2>TEAM SIZE</h2>
                                    <p>2 Members per Team</p>
                               </div>
                                <div className='Quotes'>
                                 <p>Are you ready to rescue the code?</p>
                                 <p>Let the challenge begin!</p>
                               </div>
                               <div className='More-Details'>
                                    <h2>FOR MORE DETAILS</h2>
                                    <p>Naveen Raj-95855 63001</p>
                                    <p>Joel - 84894 22287</p>
                               </div>
                            </div>           
                    </div>
                </div>
            </div>
        </section>
    )
}