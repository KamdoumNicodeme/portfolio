import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className="min-h-screen w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6">Soumettez le formulaire ci-dessous pour entrer en contact avec moi</p>
                </div>
                <div>
                    <form action="https://getform.io/f/f32eaa45-6395-4139-88f0-27a706cf7d1f" method="POST" className="w-full max-w-md mx-auto">
                        <input type="text" name="name" placeholder="Entrer votre nom "
                               className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4" required/>
                        <input type="email" name="email" placeholder="Entrer votre email"
                               className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4" required/>
                        <textarea name="message" cols="30" rows="6"
                                  className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4" placeholder="Entrer votre message" required></textarea>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>    );
};

export default Contact;