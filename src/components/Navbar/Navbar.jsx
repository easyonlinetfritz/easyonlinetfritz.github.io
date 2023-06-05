import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {FiMenu, FiX} from 'react-icons/fi';
import './navbar.css';

const Menu = () => (
  <>
  <Link to="/"><p>Home</p></Link>
  <p><a href='/#Pricing'>Planos</a></p>
  <p><a href='/#Channels'>Vantagens</a></p>
  <Link to="/Docs"> <p>Ajuda</p></Link>
  </>
)

// const pathVariant = {
//     initial: {
//         opacity: 0,
//         pathLength: 0
//     },

//     visible: {
//         opacity: 1,
//         pathLength: 1,
//         transition: {
//             duration: 2,
//             ease: "easeInOut"
//         }
//     }
// }

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
      <motion.div className='cine-club__navbar gradient__bg'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
        >

          <div className='cine-club__navbar-links'>
              <Link to="/">
                <div className='cine-club__navbar-links_logo'>
                    <div className='logo'><LiveTvOutlinedIcon style={{ fontSize: '50' }} /></div>
                    <h1>EASY TV</h1>
                </div>
              </Link>

              

              <div className='cine-club__navbar-links_container'>
                 <Menu />
              </div>
              
          </div>
               
          <button type='button' className='cart_button testButton'>
          <a href="https://wa.me/5511969357275?text=Desejo+um+teste+gratis" target='_blank' rel="noreferrer">Teste Gratis</a>
             
          </button>
          

          <div className='cine-club__navbar-menu'>
              {toggleMenu
                  ?<FiX color="#FF4820" size="27" onClick={() => setToggleMenu(false)}/>
                  :<FiMenu color="#FF4820" size="27" onClick={() => setToggleMenu(true)}/>
              }
              {toggleMenu && (
                  <div className='cine-club__navbar-menu_container scale-up-center'>
                      <div className='cine-club__navbar-menu_container-links'>
                          <Menu />
                      </div>
                  </div>
              )

              }
          </div>      

      </motion.div>
  )
}

export default Navbar