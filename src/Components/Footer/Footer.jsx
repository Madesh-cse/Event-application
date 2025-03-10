import './Footer.css';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import FooterInfo from './FooterInfo';
export default function Footer(){

    return(
       <section>
        <div className='Contact'>
            <div className='Contact-info'>
                <div className='Contact-Title'>
                  <h2>Having Questions</h2>
                  <h1>CONTACT US</h1>
                </div>
                <div className='Contact-ways'>
                    <div className='Contact-Email'>
                        <p className='Contact-icon'><MdOutlineMarkEmailRead/></p>
                        <h4 className='Contact-Name'>Email</h4>
                        <div className='Contact-Description'>
                            <p>our friendly team is here to help you</p>
                            <p className='Gmail-Info'>zeigen2k25@gmail.com</p>
                        </div>
                    </div>
                    <div className='Contact-Address'>
                        <p className='Contact-icon'><FaLocationDot/></p>
                            <h4 className='Contact-Name'>Address</h4>
                            <div className='Contact-Description'>
                                <p>Reach out our college</p>
                                <p className='Gmail-Info'>K.L.N.College of Engineering Pottapalyam,Sivaganga-630612</p>
                            </div>
                    </div>
                    <div className='Contact-Helpline'>
                        <p className='Contact-icon'><IoCallSharp/></p>
                            <h4 className='Contact-Name'>HelpLine</h4>
                            <div className='Contact-Description'>
                                <p>Any Doubts?</p>
                                <p>our friendly team is here to help you</p>
                                <p className='Gmail-Info'>8015440059,6381659898</p>
                            </div>
                    </div>
                </div>
            </div>
            <FooterInfo/>
        </div>
       </section>
    )
}