import './services.css'
import HeartEmoji from '../../img/heartemoji.png'
// import Glasses from '../../img/glasses.png'
// import Humble from '../../img/humble.png'
import Card from '../card/card'
import Resume from './resume.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion' 
// import { Link } from 'react-router-dom'


const Services = () => {

const transition = {duration : 1, type: 'spring'}

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
    return ( 
        <div className="services" id='Services'>

       {/* left side */}
       <div className="awesome">
       <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
       <span>Services</span>
       <span>
        
I provide services encompassing ReactJS, JavaScript, HTML, and CSS. <br />
Additionally, I possess foundational expertise in Node.js, Express.js, <br /> and MongoDB, enabling me
 to build comprehensive web applications <br /> that seamlessly integrate frontend and backend components 
       </span>
       <a href={Resume} download>
       <button className='button s-button'>Download CV</button>
     </a>
       <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
       </div>

       {/* right side */}
       <div className="cards">
        
        <motion.div 
        whileInView={{left: '14rem'}}
        initial={{left: '25rem'}}
        transition={transition}

        style={{left:'14rem'}}>
            <Card
           emoji = {HeartEmoji}
           heading = {'Developer'}
           detail = {'React Js, JavaScript, Html, Css, Node Js, Express Js, MongoDB'}
            />
        </motion.div>
       <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

       </div>
        </div>
     );
}
 
export default Services;