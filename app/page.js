"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  function EnSavoirPlus() {
    const masquer = document.getElementById('Masquer');
    var button = document.getElementById('buttonHome');
    const affichage = document.getElementById('Affichage');
    button.addEventListener('click', () => {
      masquer.classList.add('hidden');
      affichage.classList.remove('hidden');
    });
    console.log(button);
  }

  useEffect(() => {
    EnSavoirPlus();
  }, []);

  function TéléchargerCV() {
    console.log('Télécharger CV');
    var TelechargerCV = document.getElementById('TelechargerCV');
    TelechargerCV.addEventListener('click', () => {
        window.location.href = '/CV ALIYO MOUSSA.pdf';
    });
  }

  useEffect(() => {
    TéléchargerCV();
  }, []);

  return (
    <div id="divMere">
      <div id="Masquer">
      <div className="flex items-center relative top-5 ml-5 font-weight">
      <img className="h-16 w-16 animate-bounce" src="/ballon.png"/>
      <p className="m-[6px] font-codecpro text-xl">Portfolio</p>
    </div>
    <div className="flex justify-center items-center mt-40">
    <div>
      <h1 className="font-bold text-7xl animate-typewriter">BONJOUR, JE SUIS ALIYO MOUSSA</h1>
      <p className="text-gradient text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 mt-3 text-xl">Je suis passionné par le développement, le sport, et j'adore me lancer dans de nouveaux projets.</p>
    </div>
    <div className=" ml-15 items-center">
    <div className="rounded-full h-80 w-80 custom-shadow overflow-hidden">
      <img className="object-cover w-full h-full" src="/photoToile.jpg" alt="Image"/>
    </div>
    <p className=" mt-3 text-center animate-typewriter">DEVELOPPEUR WEB - FULL STACK</p>
    </div>
    </div>
    <div className="flex mt-25 justify-center">
      <button id="buttonHome" className="pt-6 pb-6 pl-9 pr-9 button rounded-[30px] border cursor-pointer bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 text-black font-codecpro transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-red-800">EN SAVOIR PLUS</button>
    </div>
      </div>
      <div id="Affichage" className="hidden">
        <div className="flex bg-black h-20">
          <div className="flex justify-center items-center">
          <img className="h-16 w-16 animate-bounce" src="/ballon.png"/>
          <p className="m-[6px] font-codecpro text-xl">Portfolio</p>
          </div>
          <div className="ml-45 flex justify-center items-center" id="navFixed">
            <p className="font-codecpro">À MON PROPOS</p>
            <p className="font-codecpro">MES COMPÉTENCES</p>
            <p className="font-codecpro">PROJETS</p>
            <p className="font-codecpro">PARCOURS</p>
          </div>
        </div>
      <div className="flex justify-center items-center mt-75">
      <div>
        <h1 className="font-bold text-7xl">Besoin d’un développeur web ?</h1>
        <p className="text-center mt-2 text-xl w-270 text-gradient text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 ">
           Ça tombe bien, je suis passionné par le développement ! Laissez-moi vous présenter les compétences que j'ai acquises et mon parcours professionnel.</p>
           <div>
        <img/>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-115">
      <h1 className="text-7xl font-codecpro">À MON PROPOS</h1>
       </div>

       <div className="">
        <div className="mt-30 ml-20 bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 h-[330px] w-[900px] rounded-lg p-6 flex items-center">
          <p className="text-xl font-codecpro text-center font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="mt-15 mr-35 ml-225 bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 h-[330px] w-[900px] rounded-lg p-6 flex items-center">
          <p className="text-xl font-codecpro text-center font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
       </div>
       <div className="flex justify-center mt-50">
        <h1 className="text-7xl font-codecpro">MES COMPÉTENCES</h1>
       </div>
       <div className="flex justify-center">
        <div>
         <div className="bg-white h-15 w-130 border rounded-lg m-25"></div>
          <div className="bg-white h-15 w-130 border rounded-lg m-25"></div>
        </div>

        <div>
          <div className="bg-white h-15 w-130 border rounded-lg m-25"></div>
          <div className="bg-white h-15 w-130 border rounded-lg m-25"></div>
        </div>
       </div>
       <div className="flex justify-center">
          <div className="bg-white h-15 w-130 border rounded-lg"></div>
        </div>
        <div className="flex justify-center mt-30">
          <h1 className="text-7xl font-codecpro">PROJETS</h1>
        </div>

        <div className="overflow-hidden">
  <section className="slider-wrapper">
    <div className="slider overflow-x-auto scroll-smooth flex snap-x snap-mandatory">
      <div id="slider-1" className="h-96 w-full flex-shrink-0 snap-start flex items-center justify-center rounded-lg bg-blue-500 text-white text-2xl font-bold">
        Puissance 4
      </div>
      <div id="slider-2" className="h-96 w-full flex-shrink-0 snap-start flex items-center justify-center rounded-lg bg-red-500 text-white text-2xl font-bold">
        Nomad Connect
      </div>
      <div id="slider-3" className="h-96 w-full flex-shrink-0 snap-start flex items-center justify-center rounded-lg bg-green-500 text-white text-2xl font-bold">
        My-Spotify
      </div>
      <div id="slider-4" className="h-96 w-full flex-shrink-0 snap-start flex items-center justify-center rounded-lg bg-yellow-700 text-white text-2xl font-bold">
        My-Cinema
      </div>
      <div id="slider-5" className="h-96 w-full flex-shrink-0 snap-start flex items-center justify-center rounded-lg bg-gray-200 text-black text-2xl font-bold">
        Twitter
      </div>
    </div>
    <div className="flex justify-center gap-3 mt-4">
      <a href="#slider-1" className="w-4 h-4 bg-gray-400 rounded-full hover:bg-blue-500 transition"></a>
      <a href="#slider-2" className="w-4 h-4 bg-gray-400 rounded-full hover:bg-red-500 transition"></a>
      <a href="#slider-3" className="w-4 h-4 bg-gray-400 rounded-full hover:bg-green-500 transition"></a>
      <a href="#slider-4" className="w-4 h-4 bg-gray-400 rounded-full hover:bg-yellow-700 transition"></a>
      <a href="#slider-5" className="w-4 h-4 bg-gray-400 rounded-full hover:bg-gray-700 transition"></a>
    </div>
  </section>
</div>

      </div>
      <div className="fixed bottom-5 right-5">
      <button id="TelechargerCV" className="bg-gray-500 cursor-pointer rounded-[30px] pt-3 pb-3 pl-6 pr-6 font-codecpro transform hover:scale-105 transition duration-300 ease-in-out text-white">
        Télécharger CV
      </button>
    </div>
  </div>
  );
}

