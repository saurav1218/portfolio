import './portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
// import Sidebar from '../../img/sidebar.png'
// import Ecommerce from '../../img/ecommerce.png'

// import HOC from '../../img/hoc.png'
// import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from "../../Context";
import { useContext } from "react";
// import { Link } from 'react-router-dom'
import Foodapp from '../../img/food-app-startup-idea.jpg'
import Hotstar from '../../img/disney-hotstar.jpg'
import bookmyshow from '../../img/bookmyshow1.jpg'
import bookstore from '../../img/bookstore.jpg'

const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return ( 
        <div className="portfolio" id='Portfolio'>
            
            {/* heading */}
            <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper 
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
               
               <SwiperSlide>
  <a href="https://hotstar-clone-frontend.onrender.com" target='_blank'><img src={Hotstar} alt="" /></a> 
               </SwiperSlide>

              <SwiperSlide>
           <a href="https://mern-food-app-frontend.onrender.com/" target='_blank'> <img src={Foodapp} alt="" /> </a> 
              </SwiperSlide>
               

              <SwiperSlide>
              <a href="https://bookstore-frontend-cjej.onrender.com" target='_blank'>       <img src={bookstore} alt="" /> </a>
               </SwiperSlide>

               <SwiperSlide>
               <a href="https://bookmyshow-frontend-dude.onrender.com" target='_blank'>    <img src={bookmyshow} alt="" /> </a>
               </SwiperSlide>

              

            </Swiper>
        </div>
     );
}
 
export default Portfolio;