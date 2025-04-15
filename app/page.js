"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [afficherSuite, setAfficherSuite] = useState(false);

  const handleClick = () => {
    setAfficherSuite(true);
  };

  const handleDownloadCV = () => {
    window.location.href = "/CV ALIYO MOUSSA.pdf";
  };

  return (
    <div id="divMere">
      <AnimatePresence mode="wait">
        {!afficherSuite ? (
          <motion.div
            key="intro"
            id="Masquer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center relative top-5 ml-5 font-weight">
              <Image className="h-16 w-16 animate-bounce" alt="ballon" src="/ballon.png" width={64} height={64} />
              <p className="m-[6px] font-codecpro text-xl">Portfolio</p>
            </div>

            <div className="flex justify-center items-center mt-40">
              <div>
                <h1 className="font-bold text-7xl animate-typewriter">BONJOUR, JE SUIS ALIYO MOUSSA</h1>
                <p className="text-gradient text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 mt-3 text-xl">
                  Je suis passionné par le développement, le sport, et j&apos;adore me lancer dans de nouveaux projets.
                </p>
              </div>

              <div className="ml-15 items-center">
                <div className="rounded-full h-80 w-80 custom-shadow overflow-hidden">
                  <Image className="object-cover w-full h-full" src="/photoToile.jpg" alt="Photo de profil" width={320} height={320} />
                </div>
                <p className="mt-3 text-center animate-typewriter">DEVELOPPEUR WEB - FULL STACK</p>
              </div>
            </div>

            <div className="flex mt-25 justify-center">
              <button
                onClick={handleClick}
                className="pt-6 pb-6 pl-9 pr-9 button rounded-[30px] border cursor-pointer bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 text-black font-codecpro transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-red-800"
              >
                EN SAVOIR PLUS
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="suite"
            id="Affichage"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* NAVBAR */}
            <div className="flex bg-black h-20">
              <div className="flex justify-center items-center">
                <Image className="h-16 w-16 animate-bounce" alt="ballon de basket-ball" src="/ballon.png" width={64} height={64} />
                <p className="m-[6px] font-codecpro text-xl">Portfolio</p>
              </div>
              <div className="ml-45 flex justify-center items-center" id="navFixed">
                <p className="font-codecpro"><a href="#propos">À MON PROPOS</a></p>
                <p className="font-codecpro"><a href="#competence">MES COMPÉTENCES</a></p>
                <p className="font-codecpro"><a href="#projet">PROJETS</a></p>
                <p className="font-codecpro"><a href="#parcours">PARCOURS</a></p>
                <p className="font-codecpro"><a href="#form">CONTACTER</a></p>
              </div>
            </div>

            {/* SECTION : Besoin d’un développeur web ? */}
            <div className="flex justify-center items-center mt-75">
              <div>
                <h1 className="font-bold text-7xl text-white">Besoin d’un développeur web ?</h1>
                <p className="text-center mt-2 text-xl w-270 text-gradient text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 ">
                  Ça tombe bien, je suis passionné par le développement ! Laissez-moi vous présenter les compétences que j&apos;ai acquises et mon parcours professionnel.
                </p>
              </div>
            </div>

            {/* IMPORT DE TOUTES LES SECTIONS */}
            <div id="restSections">
              {/* À MON PROPOS + COMPÉTENCES déjà présentes */}
              <div className="flex justify-center mt-115">
                <h1 id="projet" className="text-7xl font-codecpro">PROJETS</h1>
              </div>
              <div className="overflow-hidden mt-30">
                <section className="slider-wrapper">
                  <div className="slider overflow-x-auto scroll-smooth flex snap-x snap-mandatory">
                    <div className="h-96 w-full flex-shrink-0 snap-start flex items-center justify-center rounded-lg bg-blue-500 text-white text-2xl font-bold">Puissance 4</div>
                    <div className="h-96 w-full flex-shrink-0 snap-start flex items-center justify-center rounded-lg bg-red-500 text-white text-2xl font-bold">Nomad Connect</div>
                    <div className="h-96 w-full flex-shrink-0 snap-start flex items-center justify-center rounded-lg bg-green-500 text-white text-2xl font-bold">My-Spotify</div>
                    <div className="h-96 w-full flex-shrink-0 snap-start flex items-center justify-center rounded-lg bg-yellow-700 text-white text-2xl font-bold">My-Cinema</div>
                    <div className="h-96 w-full flex-shrink-0 snap-start flex items-center justify-center rounded-lg bg-gray-200 text-black text-2xl font-bold">Twitter</div>
                  </div>
                  <div className="flex justify-center gap-3 mt-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <a key={i} href={`#slider-${i}`} className="w-4 h-4 bg-gray-400 rounded-full hover:bg-opacity-70 transition"></a>
                    ))}
                  </div>
                </section>
              </div>

              <div className="flex justify-center mt-50">
                <h1 id="parcours" className="text-7xl font-codecpro">PARCOURS</h1>
              </div>
              <div className="relative mt-30 mb-40">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white z-0"></div>
                {/* Élément 1 */}
                <div className="flex justify-between items-center w-full mb-16 relative z-10">
                  <div className="w-1/2 flex justify-end pr-10">
                    <div className="bg-white rounded-xl p-5 w-[300px] shadow-md text-black font-codecpro">
                      <h2 className="font-bold">2021 - Bac STMG</h2>
                      <p>Lycée Martinière Duchère - Système d&apos;information & gestion</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full z-10 border-4 border-black"></div>
                  <div className="w-1/2"></div>
                </div>
                {/* Élément 2 */}
                <div className="flex justify-between items-center w-full mb-16 relative z-10">
                  <div className="w-1/2"></div>
                  <div className="w-8 h-8 bg-white rounded-full z-10 border-4 border-black"></div>
                  <div className="w-1/2 flex justify-start pl-10">
                    <div className="bg-white rounded-xl p-5 w-[300px] shadow-md text-black font-codecpro">
                      <h2 className="font-bold">2022 - 2023</h2>
                      <p>Certificat Développement Web (Emploi Du Temps)</p>
                    </div>
                  </div>
                </div>
                {/* Élément 3 */}
                <div className="flex justify-between items-center w-full mb-16 relative z-10">
                  <div className="w-1/2 flex justify-end pr-10">
                    <div className="bg-white rounded-xl p-5 w-[300px] shadow-md text-black font-codecpro">
                      <h2 className="font-bold">Depuis Nov. 2024</h2>
                      <p>Epitech - Développement Web</p>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        <li>Puissance 4</li>
                        <li>My-Spotify</li>
                        <li>My-Cinema</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full z-10 border-4 border-black"></div>
                  <div className="w-1/2"></div>
                </div>
                {/* Élément 4 */}
                <div className="flex justify-between items-center w-full mb-16 relative z-10">
                  <div className="w-1/2"></div>
                  <div className="w-8 h-8 bg-white rounded-full z-10 border-4 border-black"></div>
                  <div className="w-1/2 flex justify-start pl-10">
                    <div className="bg-white rounded-xl p-5 w-[300px] shadow-md text-black font-codecpro">
                      <h2 className="font-bold">Exp. pro</h2>
                      <p>GI EVENT (Manutentionnaire)</p>
                      <p className="text-sm mt-1">Installation & gestion des buvettes</p>
                    </div>
                  </div>
                </div>
                {/* Élément 5 */}
                <div className="flex justify-between items-center w-full relative z-10">
                  <div className="w-1/2 flex justify-end pr-10">
                    <div className="bg-white rounded-xl p-5 w-[300px] shadow-md text-black font-codecpro">
                      <h2 className="font-bold">Autres jobs</h2>
                      <p>Vendeur prêt-à-porter & serveur pizzéria</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full z-10 border-4 border-black"></div>
                  <div className="w-1/2"></div>
                </div>
              </div>

              {/* CONTACT */}
              <div className="flex justify-center mt-50">
                <h1 id="contacter" className="text-7xl font-codecpro">ME CONTACTER</h1>
              </div>
              <div className="flex justify-center items-center mt-20 mb-40">
                <form action="https://formspree.io/f/xjkyepna" id="form" method="POST" className="bg-white rounded-2xl shadow-lg p-10 w-[90%] max-w-[800px] font-codecpro">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-gray-700">Prénom / Nom</label>
                      <input type="text" name="name" required className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                      <input type="email" name="_replyto" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 text-black" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                    <textarea name="message" rows="5" required className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"></textarea>
                  </div>
                  <input type="hidden" name="_next" value="https://tonportfolio.com/merci" />
                  <input className="text-black" type="hidden" name="_subject" value="Nouveau message depuis ton portfolio !" />
                  <div className="mt-6 flex justify-center">
                    <button type="submit" className="py-4 px-10 rounded-[30px] border cursor-pointer bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 text-white font-bold transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
                      ENVOYER
                    </button>
                  </div>
                </form>
              </div>

              {/* FOOTER */}
              <footer className="bg-black text-white py-6 px-4 mt-20">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto">
                  <p className="text-center text-sm font-codecpro mb-3 md:mb-0">© 2025 Moussa Aliyo. Tous droits réservés.</p>
                  <div className="flex gap-6">
                    <a href="https://fr.linkedin.com/in/aliyo-moussa-18b3602a1" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-300">LinkedIn</a>
                    <a href="mailto:aliyomoussa@gmail.com" className="hover:text-orange-500 transition duration-300">Me contacter</a>
                  </div>
                </div>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-5 right-5">
        <button
          onClick={handleDownloadCV}
          className="bg-gray-500 cursor-pointer rounded-[30px] pt-3 pb-3 pl-6 pr-6 font-codecpro transform hover:scale-105 transition duration-300 ease-in-out text-white"
        >
          Télécharger CV
        </button>
      </div>
    </div>
  );
}
