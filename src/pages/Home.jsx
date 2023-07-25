import React from 'react';
import NavBar from "../components/NavBar";
import profilImage from "../assets/profilImage.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import SocialLinks from "../components/SocialLinks";
import About from "./About";
import Portfolio from "./Portfolio";
import Competence from "./Competence";
import Contact from "./Contact";
import {Link} from "react-scroll";

const Home = () => {
    return (
        <div >
            <NavBar/>
            <div name= "home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" >
             <div className="max-w-screen-lg mx-auto flex flex-col items-center
             justify-center h-full px-4 md:flex-row">
                 <div className="flex flex-col justify-center h-full">
                     <h2 className="text-4xl sm:text-7xl font-bold text-white"> Je suis d&eacute;veloppeur FullStack</h2>
                     <p className="text-gray-500 py-0 max-w-md ">
                         Développeur FullStack Java (Java, React, Express.JS) avec une passion pour les bonnes pratiques de développement. J'ai contribué à la réalisation de plusieurs projets innovants, apportant mon expertise technique et ma rigueur dans l'application des meilleures pratiques. Actuellement, je me forme activement sur Kubernetes pour renforcer mes compétences en infrastructure et déploiement.
                     </p>
                     <div>
                         <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex
                         items-center rounded-md bg-gradient-to-r from-cyan-500 cursor-pointer">
                             portfolio
                             <span className="group-hover:rotate-90 duration-300">
                                 <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                             </span>
                         </Link>
                     </div>
                 </div>
                 <div>
                     <img src={profilImage} alt="my profile" className="rounded-2xl w-2/3 md:w-full"/>
                 </div>
             </div>
            </div>
            <SocialLinks/>
            <About/>
            <Portfolio/>
            <Competence/>
            <Contact/>
        </div>
    );
};

export default Home;