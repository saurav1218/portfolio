import './knowledge.css'
import css from '../../img/css.webp'
import html from '../../img/html.webp'
import js from '../../img/js.png'
import nodejs from '../../img/nodejs.png'
import reacticon1 from '../../img/reacticon1.gif'
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion, spring} from 'framer-motion' 



const Knowledge = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return ( 
         <div className="knowledge" id='Project'>
           {/* left side */}
       <div className="awesome">
       <span style={{color: darkMode? 'white': ''}}>I Have </span>
       <span>Good Knowledge In</span>
       <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        Reprehenderit quae enim commodi corrupti? Temporibus veritati
       </span>

       <button className='button s-button'>Hire Me </button>
       <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
       </div>

       { /* right side  */}
       <div className="k-right">
        <motion.div 
         initial={{ rotate: 45}}
         whileInView={{rotate: 0}}
         viewport={{margin: '-40px'}}
         transition={{duration:3.5, type:'spring'}}
        className="k-mainCircle">
            <div className="k-secCircle css">
             <img src={css} alt="" />
            </div>
            <div className="k-secCircle html">
             <img src={html} alt="" />
            </div>
            <div className="k-secCircle react">
             <img src={reacticon1} alt="" />
            </div>
            <div className="k-secCircle node">
             <img src={nodejs} alt="" />
            </div>
            <div className="k-secCircle js">
             <img src={js} alt="" />
            </div>
        </motion.div>

        {/* background circle */}
        <div className="k-backCircle blueCircle"></div>
        <div className="k-backCircle yellowCircle"></div>
       </div>
         </div>
     );
}
 
export default  Knowledge ;