"use client";

export default function Home() {

  function change() {
    
  }

  return (
    <div className="h-screen w-screen bg-[#101728]">
      <div className="flex items-center relative top-5 ml-5 font-weight">
        <img className="h-16 w-16 animate-bounce" src="/ballon.png"/>
        <p className="m-[6px] Font-codecpro text-xl">PorteFolio</p>
      </div>
      <div className="flex justify-center items-center mt-40">
      <div>
        <h1 className="font-bold text-7xl">BONJOUR, JE SUIS ALIYO MOUSSA</h1>
      </div>
      <div className=" ml-15 items-center">
      <div className="border rounded-full h-80 w-80"></div>
      <p className=" mt-3 text-center">DEVELOPPEUR WEB - FULL STACK</p>
      </div>
      </div>
      <div className="flex mt-25 justify-center"> 
        <button className="pt-6 pb-6 pl-9 pr-9 button rounded-[30px] border cursor-pointer bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 text-black Font-codecpro">EN SAVOIR PLUS</button>
      </div>
    </div>
  );
}
