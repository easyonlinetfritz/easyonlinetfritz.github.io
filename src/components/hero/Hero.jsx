import './hero.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { motion } from 'framer-motion'

const Hero = () => {

  return (
    <div className='cine-club__header' id='home'>
      <motion.div className='cine-club__header-content'
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
      >

        <h1> Entreterimento para Toda a Família <br />  Assista na Smart TV, PC, TV Box e Celulares</h1>

        <p>A Solucao para assistir seu programa de TV em qualquer lugar, e em qualquer dispositivo com acesso a internet computadores, TV smart, TV BOX, ANDROID, IOS, PS4 não ficando preso a uma instalação de antena ou cabo. Com a qualidade ainda superior aos sistemas convencionais.</p>

        <a className='header_button' href="#Channels">Saber Mais</a>
      </motion.div>

      <div className='zap'>
        <a href='https://wa.me/5511969357275?text=Desejo+Atendimento' target='_blank' rel='noreferrer' className="float">
          <WhatsAppIcon style={{ fontSize: 35 }} className='my-float' />
        </a>
      </div>
    </div>
  )
}

export default Hero