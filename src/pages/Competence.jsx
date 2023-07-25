import React from 'react';
import jenkins from "../assets/1200px-Jenkins_logo.svg.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import  java from "../assets/Java-Logo.png";
import cucumber from "../assets/cucumber-logo-svg-vector.svg";
import docker from "../assets/homepage-docker-logo.png";
import oracle from "../assets/Oracle_Corporation_logo.png";
import springboot from "../assets/springboot.png";
import tailwind from "../assets/tailwindcss.png";
import github from "../assets/github-icon-2048x1988-jzvzcf2t.png";
import js from "../assets/28753ddf79d70042ba86564947e13bf5.png"
import postgres from "../assets/Postgresql_elephant.png";
import reactimage from "../assets/React-icon.png";
import activeMQ from "../assets/activemq_logo_icon.png";

const Competence = () => {

    const techs = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:java,
            title:'JAVA',
            style:'shadow-red-500'
        },
        {
            id:4,
            src:oracle,
            title:'ORACLE',
            style:'shadow-red-500'
        },
        {
            id:5,
            src:docker,
            title:'DOCKER',
            style:'shadow-blue-500'
        },
        {
            id:6,
            src:jenkins,
            title:'JENKINS',
            style:'shadow-gray-700'
        },
        {
            id:7,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:8,
            src:postgres,
            title:'POSTGRESQL',
            style:'shadow-blue-500'
        },
        {
            id:9,
            src:springboot,
            title:'SPRINGBOOT',
            style:'shadow-green-500'
        },
        {
            id:10,
            src:github,
            title:'GITHUB',
            style:'shadow-white'
        },

        {
            id:11,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-blue-500'
        },
        {
            id:12,
            src:js,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id:13,
            src:cucumber,
            title:'CUCUMBER',
            style:'shadow-green-500'
        },
        {
            id:14,
            src:reactimage,
            title:'REACT',
            style:'shadow-blue-500'
        },
        {
            id:15,
            src:activeMQ,
            title:'ACTIVEMQ',
            style:'shadow-purple-500'
        },
    ];

    return (
        <div name="competence" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Competence</p>
                    <p className="py-6">Ce sont les technologies avec lesquelles j'ai travaillé</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-4 md:px-12">
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>    );
};

export default Competence;