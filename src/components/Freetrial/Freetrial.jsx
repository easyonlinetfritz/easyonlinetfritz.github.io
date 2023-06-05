// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import './freetrial.css';



const Freetrial = () => {

  const redirectToCheckout = () => {
    window.location.href = "https://wa.me/5511969357275?text=Quero+Realizar+um+teste"
  }

  return (
    <div className=" freetrial text-gray-400 body-font">
           <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                  <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                  <h1 class="title-font font-medium text-3xl text-white">Faça um teste rápido agora mesmo!
</h1>
                  <p class="leading-relaxed text-gray-200 mt-4">É simples e fácil! Basta entrar em contato pelo Whatsapp e digitar a palavra "teste".</p>
                  </div>
                  <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                  <h2 class="text-white text-lg font-medium title-font mb-5">Entre Em Contato</h2>
                  
                  <div>
                    <button onClick={redirectToCheckout} style={{color:"black",backgroundColor:"darkorange",padding:"10px", borderRadius:"10px",fontWeight:"bold"}}>Testar Agora</button>
                  </div>

                  </div>
            </div>   
      </div>
  );
};

export default Freetrial