import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Transform Your Space with <span className="text-emerald-400">Dyna Grow</span> Design Solutions
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                        Creating beautiful, functional spaces that reflect your style and enhance your life.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 duration-300 text-center hover:text-gray-100"
                        >
                            View Our Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300 text-center"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 