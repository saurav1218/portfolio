import './footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Gmail from '@iconscout/react-unicons/icons/uil-google'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Arrow from "../../img/arrow download.png"


const Footer = () => {
    return ( 
        <div className="footer">
          <img src={Wave} alt="" style={{width:'100%'}}/>
          <div className="f-content">
            <div className="lastPart">
        <img src={Arrow} alt="" id='arrow'/>    <span>Only One Mail Away</span> <img src={Arrow} alt="" id='arrow' />
        </div>  
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRHrHHPnrRskgdRSWHgXvGdDTLtrrXzsMsrcdhBMXZnWzMFntQgRplDCZrzjDvGFMCrFL"  target="_blank">   <span>sauravmishra1218@gmail.com</span> </a> 
               <div className="f-icons">
               <a href="https://www.instagram.com/saurav1218/" target="_blank">     <Insta color='white' size='3rem'/> </a>
               <a href="https://github.com/saurav1218?tab=repositories" target="_blank">   <Github color='white' size='3rem'/> </a>
                 <a href="https://www.linkedin.com/in/saurav1218/" target="_blank">   <LinkedIn color='white' size='3rem'/> </a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRHrHHPnrRskgdRSWHgXvGdDTLtrrXzsMsrcdhBMXZnWzMFntQgRplDCZrzjDvGFMCrFL"  target="_blank">  <Gmail color='white' size='3rem'/> </a> 


               </div>
          </div>
        </div>
     );
}
 
export default Footer;