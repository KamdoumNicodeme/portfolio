import React from 'react';
import es6 from "../assets/ES6.jpg";
import jenkins from "../assets/jenkins.png";
import nodejs from "../assets/nodeJs.jpeg";
import spring from "../assets/springboot.png";
import java from "../assets/logo_java.jpg";
import oracle from "../assets/Oracle_Corporation_logo.png";

const Portfolio = () => {

    const portfolio = [

        {
            id: 1,
            src: es6
        },
        {
            id: 2,
            src: jenkins
        },
        {
            id: 3,
            src: nodejs
        },
        {
            id: 4,
            src: spring
        },
        {
            id: 5,
            src: java
        },
        {
            id: 6,
            src: oracle
        },
    ]


    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4">Portfolio</p>
                    <p className="py-6">Découvrez une partie de mon travail ici même</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-12">
                        {portfolio.map(({id, src}) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt=""
                                     className="w-full h-64 object-cover rounded-md duration-200 hover:scale-105"/>
                                <div className="flex items-center justify-center">
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>);
};

export default Portfolio;