import React from 'react';
import face from '../assets/images/face.png';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center">
                    {/* Image */}
                    <div className="lg:w-1/4 mb-10 lg:mb-0 lg:pr-10">
                        <div className="relative">
                            <img
                                src={face}
                                alt="Maitra Shah"
                                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                            />
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500 rounded-full z-0 hidden md:block"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Maitra Shah</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At Dyna Grow, I believe in transforming spaces into harmonious, functional masterpieces that reflect your unique style and needs. With a deep passion for aesthetics and precision, I specialize in bespoke designs that elevate both living and working environments.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            From initial concept to final execution, my work blends creativity, sustainability, and craftsmanship—tailored to exceed your expectations. Every project is a reflection of thoughtful design and attention to detail.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Explore my portfolio and let’s create a space that truly inspires you.                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">3+ Years Experience</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">10+ Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 