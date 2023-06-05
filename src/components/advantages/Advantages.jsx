import { PaidOutlined, QueryBuilderOutlined } from '@mui/icons-material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { motion } from 'framer-motion';

const Advantages = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden" id='Advantages'>
        <div class="container px-4 pb-10 pt-5 mx-auto overflow-hidden">
          <div class="text-center mb-5">
            <h1 className='sm:text-3xl text-5xl font-medium text-white title-font mb-4'>Vantagens</h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">Nós oferecemos uma grade de canais ampla, de muita qualidade e muito diversa! Temos diversão e entretenimento para toda família!</p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <motion.div class="p-4 md:w-1/3 flex flex-col text-center items-center"
              initial={{y: 200, opacity: 0}}
              whileInView={{y:0, opacity: 1}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-500 mb-5 flex-shrink-0">
                <ContactMailIcon style={{ fontSize: 53 }}/>
              </div>
              <div class="flex-grow">
                <h2 style={{color: "white"}} class=" text-lg title-font font-medium mb-3">Sem Fidelidade</h2>
                <p class="leading-relaxed text-base">Você poderá cancelar a qualquer momento, sem qualquer tipo de taxa por isso!</p>
              </div>
            </motion.div>
            <motion.div class="p-4 md:w-1/3 flex flex-col text-center items-center"
              initial={{y: 200, opacity: 0}}
              whileInView={{y:0, opacity: 1}}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-500 mb-5 flex-shrink-0">
                <QueryBuilderOutlined style={{ fontSize: 53 }}/>
              </div>
              <div class="flex-grow">
                <h2 style={{color: "white"}}  class=" text-lg title-font font-medium mb-3">Acesso imediato</h2>
                <p class="leading-relaxed text-base">Suporte de qualidade, pronto para lhe atender de forma imediata para tirar qualquer dúvida sobre o serviço!</p>
              </div>
            </motion.div>
            <motion.div class="p-4 md:w-1/3 flex flex-col text-center items-center"
              initial={{y: 200, opacity: 0}}
              whileInView={{y:0, opacity: 1}}
              transition={{ delay: 1, duration: 0.2 }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-500 mb-5 flex-shrink-0">
                <PaidOutlined style={{ fontSize: 53 }} />
              </div>
              <div class="flex-grow">
                <h2 style={{color: "white"}} class=" text-lg title-font font-medium mb-3">Reembolso</h2>
                <p class="leading-relaxed text-base">Em casos de insatisfações com o nosso serviço, realizaremos a devolução do seu dinheiro!</p>
              </div>
            </motion.div>
          </div>
        </div>
     </section>
    </div>
  )
}

export default Advantages