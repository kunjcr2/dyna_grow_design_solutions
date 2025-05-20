import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center">
                    {/* Image */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Maitra Shah"
                                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500 rounded-full z-0 hidden md:block"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Maitra Shah</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            As the founder and principal designer at Dyna Grow Design Solutions, Maitra Shah brings over 15 years of experience in interior design and architecture. With a passion for creating spaces that are both beautiful and functional, Maitra has established a reputation for excellence in both residential and commercial design.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            After graduating with honors from the prestigious Design Institute, Maitra honed her skills working with some of the industry's leading design firms before founding Dyna Grow Design Solutions in 2010. Her unique approach combines timeless design principles with innovative solutions tailored to each client's specific needs and lifestyle.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Maitra's work has been featured in numerous design publications, and she has received multiple awards for her innovative approach to interior spaces. She believes that good design should not only be aesthetically pleasing but also enhance the quality of life for those who inhabit the space.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Certified Interior Designer</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">15+ Years Experience</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">200+ Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 